btn_export.addEventListener("click", function() {
	download_data_json();
});
btn_start.addEventListener("click", function() {
	update_data_start();
});
btn_hint.addEventListener("click", function() {
	get_data_hint();
});
btn_submit.addEventListener("click", function() {
	set_data_answer();
});
btn_attempt.addEventListener("click", function() {
	get_data_attempt();
});
btn_next.addEventListener("click", function() {
	get_data_next();
});
document.addEventListener("DOMContentLoaded", event => {
	get_data_initialize();
});
btn_question.addEventListener("click", function() {
	get_data_selfreport();
});
btn_hint_positive.addEventListener("click", function() {
	set_hint_rating("positive");
});
btn_hint_negative.addEventListener("click", function() {
	set_hint_rating("negative");
});
