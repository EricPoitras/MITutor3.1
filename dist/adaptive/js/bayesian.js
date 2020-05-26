// Most up to date model - AERA 2021 Probabilistic Model

var model_parameters = {
	practice: {
		correct_mean: 16.06528980679547,
		correct_std: 8.985900125527548,
		incorrect_mean: 14.384782608695652,
		incorrect_std: 9.318954081944831,
	},
	skill: {
		correct_categorization: 0.36775467009120205,
		incorrect_categorization: 0.5217379254687029,
		correct_elaboration: 0.167221964589353,
		incorrect_elaboration: 0.27391293744124584,
		correct_identification: 0.4650230255837932,
		incorrect_identification: 0.20434802852125789,
	},
	problem: [
		{ skill: "categorization", id: 0, correct: 0.03930697421910938, incorrect: 0.015217875682991962 },
		{ skill: "categorization", id: 1, correct: 0.021985406478958035, incorrect: 0.0717372965434981 },
		{ skill: "categorization", id: 2, correct: 0.01732190747199421, incorrect: 0.08695406369824973 },
		{ skill: "categorization", id: 3, correct: 0.03997318836296135, incorrect: 0.013044051803741727 },
		{ skill: "categorization", id: 4, correct: 0.029313762061329757, incorrect: 0.04782523387174549 },
		{ skill: "categorization", id: 5, correct: 0.027981333773625806, incorrect: 0.05217288163024597 },
		{ skill: "categorization", id: 6, correct: 0.03331104692444161, incorrect: 0.034782290596244075 },
		{ skill: "categorization", id: 7, correct: 0.014657050896586313, incorrect: 0.09564935921525068 },
		{ skill: "categorization", id: 8, correct: 0.021985406478958035, incorrect: 0.0717372965434981 },
		{ skill: "categorization", id: 9, correct: 0.03730833178755346, incorrect: 0.02173934732074267 },
		{ skill: "categorization", id: 10, correct: 0.04263804493836926, incorrect: 0.004348756286740782 },
		{ skill: "categorization", id: 11, correct: 0.04197183079451728, incorrect: 0.0065225801659910205 },
		{ skill: "elaboration", id: 12, correct: 0.013324622608882352, incorrect: 0.026086995079243138 },
		{ skill: "elaboration", id: 13, correct: 0.009327337745770513, incorrect: 0.017391699562242194 },
		{ skill: "elaboration", id: 14, correct: 0.01865433575969816, incorrect: 0.032608466716993856 },
		{ skill: "elaboration", id: 15, correct: 0.01199219432117841, incorrect: 0.017391699562242194 },
		{ skill: "elaboration", id: 16, correct: 0.01798812161584618, incorrect: 0.026086995079243138 },
		{ skill: "elaboration", id: 17, correct: 0.013990836752734326, incorrect: 0.019565523441492438 },
		{ skill: "elaboration", id: 18, correct: 0.013990836752734326, incorrect: 0.0239131711999929 },
		{ skill: "elaboration", id: 19, correct: 0.009993551889622483, incorrect: 0.032608466716993856 },
		{ skill: "elaboration", id: 20, correct: 0.016655693328142235, incorrect: 0.0239131711999929 },
		{ skill: "elaboration", id: 21, correct: 0.015989479184290254, incorrect: 0.015217875682991962 },
		{ skill: "elaboration", id: 22, correct: 0.012658408465030383, incorrect: 0.02173934732074267 },
		{ skill: "elaboration", id: 23, correct: 0.012658408465030383, incorrect: 0.017391699562242194 },
		{ skill: "identification", id: 24, correct: 0.01865433575969816, incorrect: 0.0826064159397493 },
		{ skill: "identification", id: 25, correct: 0.041305616650665296, incorrect: 0.008696404045241258 },
		{ skill: "identification", id: 26, correct: 0.04063940250681333, incorrect: 0.010870227924491493 },
		{ skill: "identification", id: 27, correct: 0.041305616650665296, incorrect: 0.008696404045241258 },
		{ skill: "identification", id: 28, correct: 0.03997318836296135, incorrect: 0.013044051803741727 },
		{ skill: "identification", id: 29, correct: 0.03864076007525741, incorrect: 0.017391699562242194 },
		{ skill: "identification", id: 30, correct: 0.03997318836296135, incorrect: 0.013044051803741727 },
		{ skill: "identification", id: 31, correct: 0.041305616650665296, incorrect: 0.008696404045241258 },
		{ skill: "identification", id: 32, correct: 0.041305616650665296, incorrect: 0.008696404045241258 },
		{ skill: "identification", id: 33, correct: 0.04263804493836926, incorrect: 0.004348756286740782 },
		{ skill: "identification", id: 34, correct: 0.03930697421910938, incorrect: 0.015217875682991962 },
		{ skill: "identification", id: 35, correct: 0.03997318836296135, incorrect: 0.013044051803741727 },
	],
	knowledge: {
		correct_mean: 0.7844422174990743,
		correct_std: 0.26282205539566866,
		incorrect_mean: 0.5986010556423065,
		incorrect_std: 0.31284639812489773,
	},
	feedback: {
		correct_explanatory: 0.5383075858919967,
		incorrect_explanatory: 0.5760861491935708,
	},
	prior_probability: {
		correct: 0.76542580316,
		incorrect: 0.23457419683,
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
