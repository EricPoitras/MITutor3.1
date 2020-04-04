// Row Containers and sections
var cont_navbar = document.getElementById("cont_navbar");
var cont_login = document.getElementById("cont_login");
var cont_milestone = document.getElementById("cont_milestone");
var sec_landing = document.getElementById("sec_landing");
var sec_therapy = document.getElementById("sec_therapy");
var cont_selfreport = document.getElementById("cont_selfreport");
var cont_hint_rating = document.getElementById("cont_hint_rating");
var cont_api_spinner = document.getElementById("cont_api_spinner");

// Buttons
var btn_export = document.getElementById("btn_export");
var btn_start = document.getElementById("btn_start");
var btn_hint = document.getElementById("btn_hint");
var btn_submit = document.getElementById("btn_submit");
var btn_attempt = document.getElementById("btn_attempt");
var btn_next = document.getElementById("btn_next");
var btn_question = document.getElementById("btn_question");
var btn_hint_positive = document.getElementById("btn_hint_positive");
var btn_hint_negative = document.getElementById("btn_hint_negative");

// Inputs
var input_username = document.getElementById("input_username");
var input_gender1 = document.getElementById("input_gender1");
var input_gender2 = document.getElementById("input_gender2");
var input_gender3 = document.getElementById("input_gender3");
var input_gender4 = document.getElementById("input_gender4");
var input_age = document.getElementById("input_age");
var input_degree = document.getElementById("input_degree");
var input_university = document.getElementById("input_university");
var input_gpa = document.getElementById("input_gpa");
var input_radio1 = document.getElementById("input_radio1");
var input_radio2 = document.getElementById("input_radio2");
var input_radio3 = document.getElementById("input_radio3");
var input_response = document.getElementById("input_response");
var input_radio_load1 = document.getElementById("input_radio_load1");
var input_radio_load2 = document.getElementById("input_radio_load2");
var input_radio_load3 = document.getElementById("input_radio_load3");
var input_radio_load4 = document.getElementById("input_radio_load4");
var input_radio_load5 = document.getElementById("input_radio_load5");
var input_radio_load6 = document.getElementById("input_radio_load6");
var input_radio_load7 = document.getElementById("input_radio_load7");
var input_radio_efficacy1 = document.getElementById("input_radio_efficacy1");
var input_radio_efficacy2 = document.getElementById("input_radio_efficacy2");
var input_radio_efficacy3 = document.getElementById("input_radio_efficacy3");
var input_radio_efficacy4 = document.getElementById("input_radio_efficacy4");
var input_radio_efficacy5 = document.getElementById("input_radio_efficacy5");
var input_radio_efficacy6 = document.getElementById("input_radio_efficacy6");
var input_radio_efficacy7 = document.getElementById("input_radio_efficacy7");

// Dynamic content display container
var text_turn_left = document.getElementById("text_turn_left");
var text_turn_right = document.getElementById("text_turn_right");
var text_alert_success = document.getElementById("text_alert_success");
var text_alert_danger = document.getElementById("text_alert_danger");
var text_alert_warning = document.getElementById("text_alert_warning");
var text_instruction = document.getElementById("text_instruction");
var text_input_radio1 = document.getElementById("text_input_radio1");
var text_input_radio2 = document.getElementById("text_input_radio2");
var text_input_radio3 = document.getElementById("text_input_radio3");
var bar_progress = document.getElementById("bar_progress");
var text_questions = document.getElementById("text_questions");

// Global variables to store calculation results
var startTime, endTime, elapsed_time;

// Global variable to store sequence of modules
var module_sequence = [];
var module_completion = 0;

// Algorithm to sort problems in ascending order of difficulty
var array_sort = [];
var array_sort_identification = [];
var array_sort_categorization = [];
var array_sort_elaboration = [];
var sorted_array = [];

// Evaluation of answer
var answer = "";
var evaluation = "";
