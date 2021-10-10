function download_data_json() {
	var JSONdata = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(data));
	btn_export.setAttribute("href", "data:" + JSONdata);
	btn_export.setAttribute("download", "MITutorLog" + Date.now() + ".json");
}

function set_data_time() {
	var dateobj = new Date();
	data.date = dateobj.toISOString();
	data.timestamp = Date.now();
}

function update_data_start() {
	data.username = input_username.value;
	set_data_time();
	if (input_gender1.checked == true) {
		data.gender = input_gender1.value;
	} else if (input_gender2.checked == true) {
		data.gender = input_gender2.value;
	} else if (input_gender3.checked == true) {
		data.gender = input_gender3.value;
	} else {
		data.gender = input_gender4.value;
	}
	data.age = input_age.value;
	data.degree = input_degree.value;
	data.university = input_university.value;
	data.gpa = input_gpa.value;
	show_therapy();
}

function get_data_hint() {
	text_alert_warning.classList.remove("d-none");
	cont_hint_rating.classList.remove("d-none");
	data.hint_state = "true";
}

function score_answer() {
	var myObj = {
		problem: sorted_array[data.problem_id].id,
		attempt: data.attempt_id,
		hint_request: data.hint_state,
		hint_rating: data.hint_rating,
		answer: answer,
		evaluation: evaluation,
		latency: elapsed_time,
		skill_component: data.problem[sorted_array[data.problem_id].id].type,
		bkt_model: data.bkt_model,
	};
	data.response.push(myObj);

	log_data();

	if (evaluation == "correct") {
		if (data.problem_id == 11 || data.problem_id == 23 || data.problem_id == 35) {
			show_selfreport();
		} else {
			text_alert_success.classList.remove("d-none");
			btn_next.disabled = false;
			btn_attempt.disabled = true;
		}
	} else if (evaluation == "incorrect") {
		text_alert_danger.classList.remove("d-none");
		btn_next.disabled = true;
		btn_attempt.disabled = false;
	} else if (evaluation == "skip") {
		text_alert_success.textContent = "Let's move on to the next problem, you're doing great so far, so keep at it.";
		text_alert_success.classList.remove("d-none");
		btn_next.disabled = false;
		btn_attempt.disabled = true;
	} else {
		console.log(evaluation);
		text_alert_success.textContent =
			"Oops our server seems to be down, so you can go right on ahead. No feedback is available for now, but you're doing great so far, so keep at it.";
		text_alert_success.classList.remove("d-none");
		btn_next.disabled = false;
		btn_attempt.disabled = true;
	}
}

function set_data_answer() {
	end();

	btn_submit.disabled = true;

	if (data.problem[sorted_array[data.problem_id].id].type == "categorization") {
		// Set Answer
		if (input_radio1.checked == true) {
			answer = text_input_radio1.textContent;
		} else if (input_radio2.checked == true) {
			answer = text_input_radio2.textContent;
		} else {
			answer = "N/A";
		}
		// Score Answer
		if (answer == data.problem[sorted_array[data.problem_id].id].solution) {
			evaluation = "correct";
		} else {
			evaluation = "incorrect";
		}
		// Skip if Multiple Attempts - Override the score
		if (data.attempt_id >= 3) {
			evaluation = "skip";
		}
		score_answer();
	} else if (data.problem[sorted_array[data.problem_id].id].type == "identification") {
		// Set Answer
		if (input_radio1.checked == true) {
			answer = text_input_radio1.textContent;
		} else if (input_radio2.checked == true) {
			answer = text_input_radio2.textContent;
		} else if (input_radio3.checked == true) {
			answer = text_input_radio3.textContent;
		} else {
			answer = "N/A";
		}
		text_turn_right.textContent = answer;
		// Score Answer
		if (answer == data.problem[sorted_array[data.problem_id].id].solution) {
			evaluation = "correct";
		} else {
			evaluation = "incorrect";
		}
		// Skip if Multiple Attempts - Override the score
		if (data.attempt_id >= 3) {
			evaluation = "skip";
		}
		score_answer();
	} else {
		// Set Answer
		var attempt_Count = data.attempt_id;
		// Show spinner while waiting for API response
		cont_api_spinner.classList.remove("d-none");

		// Show response in the avatar speech bubble
		text_turn_right.textContent = input_response.value;
		answer = input_response.value;

		var obj_response = { text: answer, speaker: "therapist" };

		// TO DO: For answers to elaboration, call on API for correction and compare to reflection_simple and reflection_complex
		const fetchPromise = fetch("https://cors-anywhere.herokuapp.com/http://airation.trivergia.com:8080/psychtest/modeltestdepth.jsp", {
			method: "POST",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
			},
			body: "jsonobj=" + JSON.stringify(obj_response) + "&function=7101&json=true&nocache=1586001402856",
		})
			.then(function (response) {
				if (response.status >= 200 && response.status <= 299) {
					return response.json();
				} else {
					throw Error(response.statusText);
				}
			})
			.then(function (data) {
				console.log(data.utterancedsf.bestguess);
				cont_api_spinner.classList.add("d-none");
				if (data.utterancedsf.bestguess == "reflection_complex" || data.utterancedsf.bestguess == "reflection_simple") {
					// Skip if Multiple Attempts - Override the score
					if (attempt_Count >= 3) {
						evaluation = "skip";
					} else {
						evaluation = "correct";
					}
					console.log(evaluation);
					score_answer();
				} else {
					if (attempt_Count >= 3) {
						evaluation = "skip";
					} else {
						evaluation = "incorrect";
					}
					console.log(evaluation);
					score_answer();
				}
			})
			.catch((error) => {
				// Network error
				console.log(error);
				cont_api_spinner.classList.add("d-none");
				// Skip if Multiple Attempts - Override the score
				if (attempt_Count >= 3) {
					evaluation = "skip";
				} else {
					evaluation = "API server error";
				}
				score_answer();
			});
	}
}

function get_data_attempt() {
	data.attempt_id = data.attempt_id + 1;
	get_data_current(sorted_array[data.problem_id].id);
}

function get_data_next() {
	var input_parameter_problem = sorted_array[data.problem_id].id;
	var input_parameter_skill = sorted_array[data.problem_id].skill;
	/*if (data.problem_id == 2) {
		input_parameter_skill = "categorization";
	} else if (data.problem_id == 14) {
		input_parameter_skill = "elaboration";
	} else {
		input_parameter_skill = "identification";
	}*/
	var input_parameter_knowledge,
		count_correct = 0,
		count_incorrect = 0,
		count_first_attempt = 0,
		input_parameter_practice;
	for (var i = 0; i < data.response.length; i++) {
		if (data.response[i].evaluation == "correct") {
			count_correct = count_correct + 1;
		} else {
			count_incorrect = count_incorrect + 1;
		}

		if (data.response[i].attempt == 0) {
			count_first_attempt = count_first_attempt + 1;
		}
	}
	input_parameter_knowledge = count_correct / (count_correct + count_incorrect);
	input_parameter_practice = count_first_attempt;
	var likelihood_skill_mastery = bayesian_model(input_parameter_practice, input_parameter_knowledge, input_parameter_skill, input_parameter_problem);
	data.bkt_model = likelihood_skill_mastery;

	if (data.problem_id == 2 || data.problem_id == 14 || data.problem_id == 26) {
		if (likelihood_skill_mastery <= 33) {
			data.problem_id = data.problem_id + 1;
		} else if (likelihood_skill_mastery > 33 && likelihood_skill_mastery <= 66) {
			data.problem_id = data.problem_id + 4;
		} else if (likelihood_skill_mastery > 66) {
			data.problem_id = data.problem_id + 7;
		}
		data.attempt_id = 0;
		data.hint_rating = "n/a";
		get_data_current(sorted_array[data.problem_id].id);
		set_progressbar();
	} else if (data.problem_id == 11 || data.problem_id == 23 || data.problem_id == 35) {
		module_completion = module_completion + 1;
		if (module_completion == 1) {
			data.problem_id = module_sequence[1];
		} else if (module_completion == 2) {
			data.problem_id = module_sequence[2];
		} else if (module_completion == 3) {
			show_milestone();
		}
		data.attempt_id = 0;
		data.hint_rating = "n/a";
		get_data_current(sorted_array[data.problem_id].id);
		set_progressbar();
	} else {
		data.problem_id = data.problem_id + 1;
		data.attempt_id = 0;
		data.hint_rating = "n/a";
		get_data_current(sorted_array[data.problem_id].id);
		set_progressbar();
	}
}

function show_problem_default(problem_type) {
	btn_submit.disabled = false;
	btn_attempt.disabled = true;
	btn_next.disabled = true;
	btn_hint_positive.disabled = false;
	btn_hint_negative.disabled = false;
	btn_hint_positive.classList.add("d-inline");
	btn_hint_negative.classList.add("d-inline");
	btn_hint_positive.classList.remove("d-none");
	btn_hint_negative.classList.remove("d-none");
	text_alert_success.classList.add("d-none");
	text_alert_danger.classList.add("d-none");
	text_alert_warning.classList.add("d-none");
	cont_hint_rating.classList.add("d-none");
	if (problem_type == "identification") {
		text_input_radio1.parentElement.classList.remove("d-none");
		text_input_radio2.parentElement.classList.remove("d-none");
		text_input_radio3.parentElement.classList.remove("d-none");
		input_response.classList.add("d-none");
	} else if (problem_type == "categorization") {
		text_input_radio1.parentElement.classList.remove("d-none");
		text_input_radio2.parentElement.classList.remove("d-none");
		text_input_radio3.parentElement.classList.add("d-none");
		input_response.classList.add("d-none");
	} else if (problem_type == "elaboration") {
		text_input_radio1.parentElement.classList.add("d-none");
		text_input_radio2.parentElement.classList.add("d-none");
		text_input_radio3.parentElement.classList.add("d-none");
		input_response.classList.remove("d-none");
	}

	start();
}

function get_data_current(problem_id) {
	text_turn_left.textContent = data.problem[problem_id].left_turn;
	text_turn_right.textContent = data.problem[problem_id].right_turn;
	text_alert_success.textContent = data.problem[problem_id].alert_success;
	text_alert_danger.textContent = data.problem[problem_id].alert_danger;
	text_alert_warning.textContent = data.problem[problem_id].alert_info;
	text_instruction.textContent = data.problem[problem_id].instruction;
	text_input_radio1.textContent = data.problem[problem_id].input_radio1;
	text_input_radio2.textContent = data.problem[problem_id].input_radio2;
	text_input_radio3.textContent = data.problem[problem_id].input_radio3;

	show_problem_default(data.problem[problem_id].type);
}

function show_therapy() {
	sec_landing.classList.add("d-none");
	sec_therapy.classList.remove("d-none");

	var random = Math.floor(Math.random() * 6);
	console.log(random);
	switch (random) {
		case 0:
			module_sequence.push(0, 12, 24);
			break;
		case 1:
			module_sequence.push(12, 0, 24);
			break;
		case 2:
			module_sequence.push(12, 24, 0);
			break;
		case 3:
			module_sequence.push(24, 0, 12);
			break;
		case 4:
			module_sequence.push(24, 12, 0);
			break;
		case 5:
			module_sequence.push(0, 24, 12);
			break;
		default:
			console.log("error module_sequence definition");
			break;
	}

	console.table(model_parameters.problem);
	array_sort = model_parameters.problem.sort(function (x, y) {
		return x.incorrect - y.incorrect;
	});
	console.table(array_sort);
	array_sort.forEach(function (item) {
		if (item.skill == "categorization") {
			array_sort_categorization.push(item);
		} else if (item.skill == "elaboration") {
			array_sort_elaboration.push(item);
		} else {
			array_sort_identification.push(item);
		}
	});
	sorted_array = array_sort_categorization.concat(array_sort_elaboration, array_sort_identification);
	console.table(sorted_array);

	data.problem_id = module_sequence[0];
	console.log(module_sequence[0]);
	console.log(sorted_array[data.problem_id].id);
	get_data_current(sorted_array[data.problem_id].id);
}

function show_landing() {
	sec_landing.classList.remove("d-none");
	sec_therapy.classList.add("d-none");
	cont_milestone.classList.add("d-none");
}

function show_milestone() {
	sec_landing.classList.remove("d-none");
	sec_therapy.classList.add("d-none");
	cont_milestone.classList.remove("d-none");
	cont_login.classList.add("d-none");
}

function set_progressbar() {
	bar_progress.setAttribute("aria-valuenow", Math.round(((data.problem_id % 12) + module_completion * 12) / data.problem.length) * 100);
	bar_progress.style.width = Math.round((((data.problem_id % 12) + module_completion * 12) / data.problem.length) * 100) + "%";
}

function get_data_initialize() {
	show_landing();
	set_progressbar();
	hide_selfreport();
}

function show_selfreport() {
	btn_question.classList.remove("d-none");
	cont_selfreport.classList.remove("d-none");
	//cont_hint_rating.classList.remove("d-none");
	text_questions.classList.remove("d-none");
	btn_next.disabled = true;
}

function hide_selfreport() {
	btn_question.classList.add("d-none");
	cont_selfreport.classList.add("d-none");
	//cont_hint_rating.classList.add("d-none");
	text_questions.classList.add("d-none");
	btn_next.disabled = false;
}

function get_data_selfreport() {
	if (input_radio_efficacy1.checked == true) {
		data.efficacy = 1;
	} else if (input_radio_efficacy2.checked == true) {
		data.efficacy = 2;
	} else if (input_radio_efficacy3.checked == true) {
		data.efficacy = 3;
	} else if (input_radio_efficacy4.checked == true) {
		data.efficacy = 4;
	} else if (input_radio_efficacy5.checked == true) {
		data.efficacy = 5;
	} else if (input_radio_efficacy6.checked == true) {
		data.efficacy = 6;
	} else if (input_radio_efficacy7.checked == true) {
		data.efficacy = 7;
	} else {
		data.efficacy = "N/A";
	}

	if(input_eff1_1.checked == true){
		data.efficacy1 = 1;
	}else if(input_eff2_1.checked == true){
		data.efficacy1 = 2;
	}else if(input_eff3_1.checked == true){
		data.efficacy1 = 3;
	}else if(input_eff4_1.checked == true){
		data.efficacy1 = 4;
	}else if(input_eff5_1.checked == true){
		data.efficacy1 = 5;
	}else{
		data.efficacy1 = "N/A";
	}

	if(input_eff1_2.checked == true){
		data.efficacy2 = 1;
	}else if(input_eff2_2.checked == true){
		data.efficacy2 = 2;
	}else if(input_eff3_2.checked == true){
		data.efficacy2 = 3;
	}else if(input_eff4_2.checked == true){
		data.efficacy2 = 4;
	}else if(input_eff5_2.checked == true){
		data.efficacy2 = 5;
	}else{
		data.efficacy2 = "N/A";
	}

	if(input_eff1_3.checked == true){
		data.efficacy3 = 1;
	}else if(input_eff2_3.checked == true){
		data.efficacy3 = 2;
	}else if(input_eff3_3.checked == true){
		data.efficacy3 = 3;
	}else if(input_eff4_3.checked == true){
		data.efficacy3 = 4;
	}else if(input_eff5_3.checked == true){
		data.efficacy3 = 5;
	}else{
		data.efficacy3 = "N/A";
	}

	if(input_eff1_4.checked == true){
		data.efficacy4 = 1;
	}else if(input_eff2_4.checked == true){
		data.efficacy4 = 2;
	}else if(input_eff3_4.checked == true){
		data.efficacy4 = 3;
	}else if(input_eff4_4.checked == true){
		data.efficacy4 = 4;
	}else if(input_eff5_4.checked == true){
		data.efficacy4 = 5;
	}else{
		data.efficacy4 = "N/A";
	}

	if(input_eff1_5.checked == true){
		data.efficacy5 = 1;
	}else if(input_eff2_5.checked == true){
		data.efficacy5 = 2;
	}else if(input_eff3_5.checked == true){
		data.efficacy5 = 3;
	}else if(input_eff4_5.checked == true){
		data.efficacy5 = 4;
	}else if(input_eff5_5.checked == true){
		data.efficacy5 = 5;
	}else{
		data.efficacy5 = "N/A";
	}

	if(input_eff1_6.checked == true){
		data.efficacy6 = 1;
	}else if(input_eff2_6.checked == true){
		data.efficacy6 = 2;
	}else if(input_eff3_6.checked == true){
		data.efficacy6 = 3;
	}else if(input_eff4_6.checked == true){
		data.efficacy6 = 4;
	}else if(input_eff5_6.checked == true){
		data.efficacy6 = 5;
	}else{
		data.efficacy6 = "N/A";
	}

	if(input_eff1_7.checked == true){
		data.efficacy7 = 1;
	}else if(input_eff2_7.checked == true){
		data.efficacy7 = 2;
	}else if(input_eff3_7.checked == true){
		data.efficacy7 = 3;
	}else if(input_eff4_7.checked == true){
		data.efficacy7 = 4;
	}else if(input_eff5_7.checked == true){
		data.efficacy7 = 5;
	}else{
		data.efficacy7 = "N/A";
	}

	if (input_radio_load1.checked == true) {
		data.load = 1;
	} else if (input_radio_load2.checked == true) {
		data.load = 2;
	} else if (input_radio_load3.checked == true) {
		data.load = 3;
	} else if (input_radio_load4.checked == true) {
		data.load = 4;
	} else if (input_radio_load5.checked == true) {
		data.load = 5;
	} else if (input_radio_load6.checked == true) {
		data.load = 6;
	} else if (input_radio_load7.checked == true) {
		data.load = 7;
	} else {
		data.load = "N/A";
	}

	if(input_l1_1.checked == true){
		data.load1 = 0;
	}else if(input_l1_2.checked == true){
		data.load1 = 1;
	}else if(input_l1_3.checked == true){
		data.load1 = 2;
	}else if(input_l1_4.checked == true){
		data.load1 = 3;
	}else if(input_l1_5.checked == true){
		data.load1 = 4;
	}else if(input_l1_6.checked == true){
		data.load1 = 5;
	}else if(input_l1_7.checked == true){
		data.load1 = 6;
	}else if(input_l1_8.checked == true){
		data.load1 = 7;
	}else if(input_l1_9.checked == true){
		data.load1 = 8;
	}else if(input_l1_10.checked == true){
		data.load1 = 9;
	}else if(input_l1_11.checked == true){
		data.load1 = 10;
	}else{
		data.load1 = "N/A";
	}

	if(input_l2_1.checked == true){
		data.load2 = 0;
	}else if(input_l2_2.checked == true){
		data.load2 = 1;
	}else if(input_l2_3.checked == true){
		data.load2 = 2;
	}else if(input_l2_4.checked == true){
		data.load2 = 3;
	}else if(input_l2_5.checked == true){
		data.load2 = 4;
	}else if(input_l2_6.checked == true){
		data.load2 = 5;
	}else if(input_l2_7.checked == true){
		data.load2 = 6;
	}else if(input_l2_8.checked == true){
		data.load2 = 7;
	}else if(input_l2_9.checked == true){
		data.load2 = 8;
	}else if(input_l2_10.checked == true){
		data.load2 = 9;
	}else if(input_l2_11.checked == true){
		data.load2 = 10;
	}else{
		data.load2 = "N/A";
	}

	if(input_l3_1.checked == true){
		data.load3 = 0;
	}else if(input_l3_2.checked == true){
		data.load3 = 1;
	}else if(input_l3_3.checked == true){
		data.load3 = 2;
	}else if(input_l3_4.checked == true){
		data.load3 = 3;
	}else if(input_l3_5.checked == true){
		data.load3 = 4;
	}else if(input_l3_6.checked == true){
		data.load3 = 5;
	}else if(input_l3_7.checked == true){
		data.load3 = 6;
	}else if(input_l3_8.checked == true){
		data.load3 = 7;
	}else if(input_l3_9.checked == true){
		data.load3 = 8;
	}else if(input_l3_10.checked == true){
		data.load3 = 9;
	}else if(input_l3_11.checked == true){
		data.load3 = 10;
	}else{
		data.load3 = "N/A";
	}
	
	if(input_l4_1.checked == true){
		data.load4 = 0;
	}else if(input_l4_2.checked == true){
		data.load4 = 1;
	}else if(input_l4_3.checked == true){
		data.load4 = 2;
	}else if(input_l4_4.checked == true){
		data.load4 = 3;
	}else if(input_l4_5.checked == true){
		data.load4 = 4;
	}else if(input_l4_6.checked == true){
		data.load4 = 5;
	}else if(input_l4_7.checked == true){
		data.load4 = 6;
	}else if(input_l4_8.checked == true){
		data.load4 = 7;
	}else if(input_l4_9.checked == true){
		data.load4 = 8;
	}else if(input_l4_10.checked == true){
		data.load4 = 9;
	}else if(input_l4_11.checked == true){
		data.load4 = 10;
	}else{
		data.load4 = "N/A";
	}

	if(input_l5_1.checked == true){
		data.load5 = 0;
	}else if(input_l5_2.checked == true){
		data.load5 = 1;
	}else if(input_l5_3.checked == true){
		data.load5 = 2;
	}else if(input_l5_4.checked == true){
		data.load5 = 3;
	}else if(input_l5_5.checked == true){
		data.load5 = 4;
	}else if(input_l5_6.checked == true){
		data.load5 = 5;
	}else if(input_l5_7.checked == true){
		data.load5 = 6;
	}else if(input_l5_8.checked == true){
		data.load5 = 7;
	}else if(input_l5_9.checked == true){
		data.load5 = 8;
	}else if(input_l5_10.checked == true){
		data.load5 = 9;
	}else if(input_l5_11.checked == true){
		data.load5 = 10;
	}else{
		data.load5 = "N/A";
	}

	if(input_l6_1.checked == true){
		data.load6 = 0;
	}else if(input_l6_2.checked == true){
		data.load6 = 1;
	}else if(input_l6_3.checked == true){
		data.load6 = 2;
	}else if(input_l6_4.checked == true){
		data.load6 = 3;
	}else if(input_l6_5.checked == true){
		data.load6 = 4;
	}else if(input_l6_6.checked == true){
		data.load6 = 5;
	}else if(input_l6_7.checked == true){
		data.load6 = 6;
	}else if(input_l6_8.checked == true){
		data.load6 = 7;
	}else if(input_l6_9.checked == true){
		data.load6 = 8;
	}else if(input_l6_10.checked == true){
		data.load6 = 9;
	}else if(input_l6_11.checked == true){
		data.load6 = 10;
	}else{
		data.load6 = "N/A";
	}

	if(input_l7_1.checked == true){
		data.load7 = 0;
	}else if(input_l7_2.checked == true){
		data.load7 = 1;
	}else if(input_l7_3.checked == true){
		data.load7 = 2;
	}else if(input_l7_4.checked == true){
		data.load7 = 3;
	}else if(input_l7_5.checked == true){
		data.load7 = 4;
	}else if(input_l7_6.checked == true){
		data.load7 = 5;
	}else if(input_l7_7.checked == true){
		data.load7 = 6;
	}else if(input_l7_8.checked == true){
		data.load7 = 7;
	}else if(input_l7_9.checked == true){
		data.load7 = 8;
	}else if(input_l7_10.checked == true){
		data.load7 = 9;
	}else if(input_l7_11.checked == true){
		data.load7 = 10;
	}else{
		data.load7 = "N/A";
	}

	if(input_l8_1.checked == true){
		data.load8 = 0;
	}else if(input_l8_2.checked == true){
		data.load8 = 1;
	}else if(input_l8_3.checked == true){
		data.load8 = 2;
	}else if(input_l8_4.checked == true){
		data.load8 = 3;
	}else if(input_l8_5.checked == true){
		data.load8 = 4;
	}else if(input_l8_6.checked == true){
		data.load8 = 5;
	}else if(input_l8_7.checked == true){
		data.load8 = 6;
	}else if(input_l8_8.checked == true){
		data.load8 = 7;
	}else if(input_l8_9.checked == true){
		data.load8 = 8;
	}else if(input_l8_10.checked == true){
		data.load8 = 9;
	}else if(input_l8_11.checked == true){
		data.load8 = 10;
	}else{
		data.load8 = "N/A";
	}

	if(input_l9_1.checked == true){
		data.load9 = 0;
	}else if(input_l9_2.checked == true){
		data.load9 = 1;
	}else if(input_l9_3.checked == true){
		data.load9 = 2;
	}else if(input_l9_4.checked == true){
		data.load9 = 3;
	}else if(input_l9_5.checked == true){
		data.load9 = 4;
	}else if(input_l9_6.checked == true){
		data.load9 = 5;
	}else if(input_l9_7.checked == true){
		data.load9 = 6;
	}else if(input_l9_8.checked == true){
		data.load9 = 7;
	}else if(input_l9_9.checked == true){
		data.load9 = 8;
	}else if(input_l9_10.checked == true){
		data.load9 = 9;
	}else if(input_l9_11.checked == true){
		data.load9 = 10;
	}else{
		data.load9 = "N/A";
	}

	if(input_l10_1.checked == true){
		data.load10 = 0;
	}else if(input_l10_2.checked == true){
		data.load10 = 1;
	}else if(input_l10_3.checked == true){
		data.load10 = 2;
	}else if(input_l10_4.checked == true){
		data.load10 = 3;
	}else if(input_l10_5.checked == true){
		data.load10 = 4;
	}else if(input_l10_6.checked == true){
		data.load10 = 5;
	}else if(input_l10_7.checked == true){
		data.load10 = 6;
	}else if(input_l10_8.checked == true){
		data.load10 = 7;
	}else if(input_l10_9.checked == true){
		data.load10 = 8;
	}else if(input_l10_10.checked == true){
		data.load10 = 9;
	}else if(input_l10_11.checked == true){
		data.load10 = 10;
	}else{
		data.load10 = "N/A";
	}

	hide_selfreport();
}

function log_data() {
	var urladress =
		"https://docs.google.com/forms/d/e/1FAIpQLScKcwBEmMWTg2WyFddAPcukf68s7zn2YpcdRed6iwalYdvLZg/formResponse?" +
		"entry.751043466=" +
		String(data.version) +
		"&entry.1660002356=" +
		String(data.date) +
		"&entry.1982419381=" +
		String(data.timestamp) +
		"&entry.302730106=" +
		String(data.username) +
		"&entry.726087195=" +
		String(data.gender) +
		"&entry.460607681=" +
		String(data.age) +
		"&entry.2049471901=" +
		String(data.degree) +
		"&entry.407565219=" +
		String(data.university) +
		"&entry.2109953008=" +
		String(data.gpa) +
		"&entry.2019207758=" +
		String(data.efficacy) +
		"&entry.1011397270=" +
		String(data.load) +
		"&entry.2004072373=" +
		String(data.response[data.response.length - 1].problem) +
		"&entry.1012411949=" +
		String(data.response[data.response.length - 1].attempt) +
		"&entry.707422152=" +
		String(data.response[data.response.length - 1].hint_request) +
		"&entry.1074255750=" +
		String(data.response[data.response.length - 1].answer) +
		"&entry.161458003=" +
		String(data.response[data.response.length - 1].evaluation) +
		"&entry.1788520980=" +
		String(data.response[data.response.length - 1].latency) +
		"&entry.656563908=" +
		String(data.response[data.response.length - 1].skill_component) +
		"&entry.126922597=" +
		String(data.response[data.response.length - 1].hint_rating) +
		"&entry.1766958237=" +
		String(data.response[data.response.length - 1].bkt_model) +
		"&entry.1693845462=" +
		String(data.load1) +
		"&entry.989687477=" +
		String(data.load2) +
		"&entry.222572180=" +
		String(data.load3) +
		"&entry.523826681=" +
		String(data.load4) +
		"&entry.409556227=" +
		String(data.load5) +
		"&entry.1588663364=" +
		String(data.load6) +
		"&entry.217834266=" +
		String(data.load7) +
		"&entry.745096518=" +
		String(data.load8) +
		"&entry.1425795589=" +
		String(data.load9) +
		"&entry.304286743=" +
		String(data.load10) +
		"&entry.1206752179=" +
		String(data.efficacy1) +
		"&entry.1054427308=" +
		String(data.efficacy2) +
		"&entry.1141504292=" +
		String(data.efficacy3) +
		"&entry.1088756604=" +
		String(data.efficacy4) +
		"&entry.1506855647=" +
		String(data.efficacy5) +
		"&entry.1523475187=" +
		String(data.efficacy6) +
		"&entry.2080936167=" +
		String(data.efficacy7) +
		"&submit=Submit";
	console.log(urladress);
	fetch(urladress, {
		method: "post",
		mode: "no-cors",
		headers: {
			"Content-Type": "application/json",
		},
	})
		.then((response) => response.json())
		.then((data) => console.log("data is", data))
		.catch((error) => console.log("error is", error));
}

function start() {
	startTime = new Date();
}

function end() {
	endTime = new Date();
	var timeDiff = endTime - startTime;
	timeDiff /= 1000;

	var seconds = Math.round(timeDiff);
	elapsed_time = seconds;
}

function set_hint_rating(rating) {
	data.hint_rating = rating;
	if (rating == "positive") {
		btn_hint_positive.disabled = true;
		btn_hint_negative.classList.remove("d-inline");
		btn_hint_negative.classList.add("d-none");
	} else {
		btn_hint_negative.disabled = true;
		btn_hint_positive.classList.remove("d-inline");
		btn_hint_positive.classList.add("d-none");
	}
}
