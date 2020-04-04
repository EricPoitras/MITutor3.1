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
		score_answer();
	} else {
		// Set Answer

		// Show spinner while waiting for API response
		cont_api_spinner.classList.remove("d-none");

		// Show response in the avatar speech bubble
		text_turn_right.textContent = input_response.value;
		answer = input_response.value;

		var obj_response = { text: answer, speaker: "therapist" };

		// TO DO: For answers to elaboration, call on API for correction and compare to reflection_simple and reflection_complex
		const fetchPromise = fetch("https://cors-anywhere.herokuapp.com/https://sri.utah.edu/psychtest/modeltestdepth.jsp", {
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
					evaluation = "correct";
					console.log(evaluation);
					score_answer();
				} else {
					evaluation = "incorrect";
					console.log(evaluation);
					score_answer();
				}
			})
			.catch((error) => {
				// Network error
				console.log(error);
				evaluation = "API server error";
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
	var input_parameter_knowledge, count_correct, count_incorrect, count_first_attempt, input_parameter_practice;
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
		if (likelihood_skill_mastery <= 0.33) {
			data.problem_id = data.problem_id + 1;
		} else if (likelihood_skill_mastery > 0.33 && likelihood_skill_mastery <= 0.66) {
			data.problem_id = data.problem_id + 4;
		} else if (likelihood_skill_mastery > 0.66) {
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
