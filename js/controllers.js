function download_data_json() {
	//console.log("download_data_json");
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
	//console.log("update_data_start");
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
	//console.log(data);
	show_therapy();
}

function get_data_hint() {
	//console.log("get_data_hint");
	text_alert_warning.classList.remove("d-none");
	data.hint_state = "true";
	//console.log(data);
}

function set_data_answer() {
	// Calculate elapsed time
	end();

	//console.log("set_data_answer");
	var answer = "";
	var evaluation = "";

	btn_submit.disabled = true;

	if (data.problem[data.problem_id].type == "categorization") {
		if (input_radio1.checked == true) {
			answer = text_input_radio1.textContent;
		} else if (input_radio2.checked == true) {
			answer = text_input_radio2.textContent;
		} else {
			answer = "N/A";
		}
	} else if (data.problem[data.problem_id].type == "identification") {
		if (input_radio1.checked == true) {
			answer = text_input_radio1.textContent;
		} else if (input_radio2.checked == true) {
			answer = text_input_radio2.textContent;
		} else if (input_radio3.checked == true) {
			answer = text_input_radio3.textContent;
		} else {
			answer = "N/A";
		}
	} else {
		text_turn_right.textContent = input_response.value;
		answer = input_response.value;
	}
	// TO DO: For answers to elaboration, call on API for correction and compare to reflection_simple and reflection_complex

	if (answer == data.problem[data.problem_id].solution) {
		evaluation = "correct";
	} else {
		evaluation = "incorrect";
	}

	var myObj = {
		problem: data.problem_id,
		attempt: data.attempt_id,
		hint_request: data.hint_state,
		answer: answer,
		evaluation: evaluation,
		latency: elapsed_time,
		skill_component: data.problem[data.problem_id].type
	};
	data.response.push(myObj);
	//console.log(data);

	log_data();

	if (evaluation == "correct") {
		text_alert_success.classList.remove("d-none");
		btn_next.disabled = false;
		btn_attempt.disabled = true;
	} else {
		text_alert_danger.classList.remove("d-none");
		btn_next.disabled = true;
		btn_attempt.disabled = false;
	}
}

function get_data_attempt() {
	//console.log("get_data_attempt");
	data.attempt_id = data.attempt_id + 1;
	get_data_current(data.problem_id);
}

function get_data_next() {
	//console.log("get_data_next");

	// TO DO Add sequencing algorithm or randomize order of modules and sequence within module

	// Call the bayesian_model(practice, knowledge, skill, problem) function to return the likelihood of skill mastery

	data.problem_id = data.problem_id + 1;
	if (data.problem_id < data.problem.length) {
		// TO DO Determine whether to assign self-report prior to moving to next problem
		get_data_current(data.problem_id);
		set_progressbar();
	} else {
		show_milestone();
	}
}

function show_problem_default(problem_type) {
	btn_submit.disabled = false;
	btn_attempt.disabled = true;
	btn_next.disabled = true;
	text_alert_success.classList.add("d-none");
	text_alert_danger.classList.add("d-none");
	text_alert_warning.classList.add("d-none");
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

	// Calculate elapsed time
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

	get_data_current(data.problem_id);
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
	bar_progress.setAttribute("aria-valuenow", Math.round((data.problem_id + 1) / data.problem.length) * 100);
	bar_progress.style.width = Math.round(((data.problem_id + 1) / data.problem.length) * 100) + "%";
}

function get_data_initialize() {
	//console.log("get_data_initialize");
	show_landing();
	set_progressbar();
}

function show_selfreport() {
	btn_question.classList.remove("d-none");
	cont_selfreport.classList.remove("d-none");
	text_questions.classList.remove("d-none");
	btn_next.disabled = true;
}

function hide_selfreport() {
	btn_question.classList.add("d-none");
	cont_selfreport.classList.add("d-none");
	text_questions.classList.add("d-none");
	btn_next.disabled = false;
}

function get_data_selfreport() {
	// Get data for self-efficacy scale
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
	// Get data for cognitive load scale
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
	// Hide the self report and enable next button
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
		"&submit=Submit";
	console.log(urladress);
	fetch(urladress, {
		method: "post",
		mode: "no-cors",
		headers: {
			"Content-Type": "application/json"
		}
	})
		.then(response => response.json())
		.then(data => console.log("data is", data))
		.catch(error => console.log("error is", error));
}

// Calculate elapsed time for each activity - start and end time
function start() {
	startTime = new Date();
}

function end() {
	endTime = new Date();
	var timeDiff = endTime - startTime; //in ms
	// strip the ms
	timeDiff /= 1000;

	// get seconds
	var seconds = Math.round(timeDiff);
	elapsed_time = seconds;
}
