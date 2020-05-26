var model_parameters = {
	practice: {
		correct_mean: 17.58555133,
		correct_std: 9.841181713,
		incorrect_mean: 15.66666667,
		incorrect_std: 9.59822985,
	},
	skill: {
		correct_categorization: 0.3479076678,
		incorrect_categorization: 0.4969610328,
		correct_elaboration: 0.2224337634,
		incorrect_elaboration: 0.321209623,
		correct_identification: 0.4296558175,
		incorrect_identification: 0.1818205738,
	},
	problem: [
		{ skill: "categorization", id: 0, correct: 0.03802169446, incorrect: 0.006067407849 },
		{ skill: "categorization", id: 1, correct: 0.02281411708, incorrect: 0.06665380704 },
		{ skill: "categorization", id: 2, correct: 0.02471506425, incorrect: 0.06665380704 },
		{ skill: "categorization", id: 3, correct: 0.006067407849, incorrect: 0.03992264163 },
		{ skill: "categorization", id: 4, correct: 0.02471506425, incorrect: 0.06059516712 },
		{ skill: "categorization", id: 5, correct: 0.02281411708, incorrect: 0.06059516712 },
		{ skill: "categorization", id: 6, correct: 0.02851695859, incorrect: 0.04241924736 },
		{ skill: "categorization", id: 7, correct: 0.01330938122, incorrect: 0.09694700663 },
		{ skill: "categorization", id: 8, correct: 0.02091316991, incorrect: 0.06665380704 },
		{ skill: "categorization", id: 9, correct: 0.03421980011, incorrect: 0.01818468769 },
		{ skill: "categorization", id: 10, correct: 0.03992264163, incorrect: 0.00000877 },
		{ skill: "categorization", id: 11, correct: 0.03802169446, incorrect: 0.006067407849 },
		{ skill: "elaboration", id: 12, correct: 0.00000275, incorrect: 0.08482972679 },
		{ skill: "elaboration", id: 13, correct: 0.01330938122, incorrect: 0.01212604777 },
		{ skill: "elaboration", id: 14, correct: 0.02281411708, incorrect: 0.03636060744 },
		{ skill: "elaboration", id: 15, correct: 0.01901222273, incorrect: 0.01818468769 },
		{ skill: "elaboration", id: 16, correct: 0.02661601142, incorrect: 0.03030196752 },
		{ skill: "elaboration", id: 17, correct: 0.01521032839, incorrect: 0.0242433276 },
		{ skill: "elaboration", id: 18, correct: 0.02471506425, incorrect: 0.006067407849 },
		{ skill: "elaboration", id: 19, correct: 0.01901222273, incorrect: 0.0242433276 },
		{ skill: "elaboration", id: 20, correct: 0.01901222273, incorrect: 0.04241924736 },
		{ skill: "elaboration", id: 21, correct: 0.02091316991, incorrect: 0.01818468769 },
		{ skill: "elaboration", id: 22, correct: 0.02471506425, incorrect: 0.01818468769 },
		{ skill: "elaboration", id: 23, correct: 0.01711127556, incorrect: 0.006067407849 },
		{ skill: "identification", id: 24, correct: 0.01711127556, incorrect: 0.09088836671 },
		{ skill: "identification", id: 25, correct: 0.03802169446, incorrect: 0.006067407849 },
		{ skill: "identification", id: 26, correct: 0.03802169446, incorrect: 0.006067407849 },
		{ skill: "identification", id: 27, correct: 0.03802169446, incorrect: 0.006067407849 },
		{ skill: "identification", id: 28, correct: 0.03421980011, incorrect: 0.01818468769 },
		{ skill: "identification", id: 29, correct: 0.03802169446, incorrect: 0.01212604777 },
		{ skill: "identification", id: 30, correct: 0.03992264163, incorrect: 0.00000877 },
		{ skill: "identification", id: 31, correct: 0.03612074728, incorrect: 0.01212604777 },
		{ skill: "identification", id: 32, correct: 0.03802169446, incorrect: 0.006067407849 },
		{ skill: "identification", id: 33, correct: 0.0399226416288173, incorrect: 0.00000877 },
		{ skill: "identification", id: 34, correct: 0.03612074728, incorrect: 0.01212604777 },
		{ skill: "identification", id: 35, correct: 0.03612074728, incorrect: 0.01212604777 },
	],
	knowledge: {
		correct_mean: 0.7281767377,
		correct_std: 0.1762247804,
		incorrect_mean: 0.6947200228,
		incorrect_std: 0.2024212301,
	},
	feedback: {
		correct_explanatory: 0.7585516234,
		incorrect_explanatory: 0.7696854883,
	},
	prior_probability: {
		correct: 0.7612156295,
		incorrect: 0.2387843705,
	},
};

function bayesian_model(practice, knowledge, skill, problem) {
	var pred_correct, pred_incorrect, likelihood_mastery;

	// Calculate for prior probability
	pred_correct = model_parameters.prior_probability.correct;
	pred_incorrect = model_parameters.prior_probability.incorrect;

	// Calculate for feedback
	pred_correct = model_parameters.feedback.correct_explanatory * pred_correct;
	pred_incorrect = model_parameters.feedback.incorrect_explanatory * pred_incorrect;

	// Calculate for practice
	pred_correct =
		(1 / (Math.sqrt(2 * Math.PI) * model_parameters.practice.correct_std)) *
		Math.pow(Math.E, -Math.pow(practice - model_parameters.practice.correct_mean, 2) / (2 * Math.pow(model_parameters.practice.correct_std, 2))) *
		pred_correct;
	pred_incorrect =
		(1 / (Math.sqrt(2 * Math.PI) * model_parameters.practice.incorrect_std)) *
		Math.pow(Math.E, -Math.pow(practice - model_parameters.practice.incorrect_mean, 2) / (2 * Math.pow(model_parameters.practice.incorrect_std, 2))) *
		pred_incorrect;
	console.log("Practice is set to:" + practice);
	console.log("Prediction correct equal to:" + pred_correct);

	// Calculate for knowledge
	pred_correct =
		(1 / (Math.sqrt(2 * Math.PI) * model_parameters.knowledge.correct_std)) *
		Math.pow(Math.E, -Math.pow(knowledge - model_parameters.knowledge.correct_mean, 2) / (2 * Math.pow(model_parameters.knowledge.correct_std, 2))) *
		pred_correct;
	pred_incorrect =
		(1 / (Math.sqrt(2 * Math.PI) * model_parameters.knowledge.incorrect_std)) *
		Math.pow(Math.E, -Math.pow(knowledge - model_parameters.knowledge.incorrect_mean, 2) / (2 * Math.pow(model_parameters.knowledge.incorrect_std, 2))) *
		pred_incorrect;

	// Calculate for skill
	if (skill == "identification") {
		pred_correct = model_parameters.skill.correct_identification * pred_correct;
		pred_incorrect = model_parameters.skill.incorrect_identification * pred_incorrect;
	} else if (skill == "categorization") {
		pred_correct = model_parameters.skill.correct_categorization * pred_correct;
		pred_incorrect = model_parameters.skill.incorrect_categorization * pred_incorrect;
	} else {
		pred_correct = model_parameters.skill.correct_elaboration * pred_correct;
		pred_incorrect = model_parameters.skill.incorrect_elaboration * pred_incorrect;
	}

	// Calculate for problem difficulty
	for (var i = 0; i < model_parameters.problem.length; i++) {
		if (skill == model_parameters.problem[i].skill && problem == model_parameters.problem[i].id) {
			pred_correct = model_parameters.problem[i].correct * pred_correct;
			pred_incorrect = model_parameters.problem[i].incorrect * pred_incorrect;
		}
	}

	// Calculate likelihood of skill mastery in treatment condition
	likelihood_mastery = Math.round((pred_correct / (pred_correct + pred_incorrect)) * 100);

	// TO DO: Create a control condition where the likelihood is always 0, and treatment where the actual results are returned from the function
	//likelihood_mastery = 0;
	return likelihood_mastery;
}
