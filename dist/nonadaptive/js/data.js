var data = {
	version: "MITutor_v3_1_nonadaptive",
	date: "",
	timestamp: "",
	username: "",
	gender: "",
	age: "",
	degree: "",
	university: "",
	gpa: "",
	problem_id: 0,
	attempt_id: 0,
	hint_state: "false",
	hint_rating: "n/a",
	progress: 0,
	efficacy: 0,
	efficacy1: 0,
	efficacy2: 0,
	efficacy3: 0, 
	efficacy4: 0,
	efficacy5: 0,
	efficacy6: 0,
	efficacy7: 0,
	load: 0,
	load1: 0, 
	load2: 0,
	load3: 0,
	load4: 0,
	load5: 0,
	load6: 0,
	load7: 0,
	load8: 0,
	load9: 0,
	load10: 0,
	bkt_model: 0,
	problem: [
		{
			left_turn: "Client: I was taking medication for a few days and then I saw you",
			right_turn: "Therapist: You’ve started treatment",
			alert_success:
				"You correctly identified this statement as a simple reflection. “You’ve started treatment” is a straightforward restatement of the first part of what the client said. Little to no meaning has been added. The therapist could have said “You’ve come to see me” and it would be a simple reflection of a different part of the statement.",
			alert_danger:
				"This statement is not a complex reflection. “You’ve started treatment” is a straightforward restatement of the first part of what the client said. Little to no meaning has been added. The therapist could have said “You’ve come to see me” and it would be a simple reflection of a different part of the statement.",
			alert_info:
				"Simple reflections add little or no meaning to what the client said. The therapist simply alters what a client says. Complex reflections provides understanding for the client's situation. The therapist reflects the client's feelings, autonomy, control and ability to make their own decisions. ",
			instruction:
				"Below you will be provided with a series of client statements and therapist reflections. Please categorize whether these reflections are simple or complex.",
			type: "categorization",
			difficulty: "",
			solution: "Simple",
			input_radio1: "Simple",
			input_radio2: "Complex",
			input_radio3: "",
		},
		{
			left_turn: "Client: Yeah, and I guess that makes me feel like a failure",
			right_turn: "Therapist: It’s almost like nothing ever works out for you",
			alert_success:
				"You correctly identified this statement as a complex reflection. “It’s almost like nothing ever works out for you” unpacks the pattern implied in the word ‘failure’ into its own statement. This adds emphasis to a particular part of the client’s statement and directs conversation to further discuss the feeling and/or experience of failure. Alternatively, a simple reflection may have restated the operative word: “Failure.”.",
			alert_danger:
				"This statement is not a simple reflection. “It’s almost like nothing ever works out for you” unpacks the pattern implied in the word ‘failure’ into its own statement. This adds emphasis to a particular part of the client’s statement and directs conversation to further discuss the feeling and/or experience of failure. Alternatively, a simple reflection may have restated the operative word: “Failure.”.",
			alert_info:
				"Simple reflections add little or no meaning to what the client said. The therapist simply alters what a client says. Complex reflections provides understanding for the client's situation. The therapist reflects the client's feelings, autonomy, control and ability to make their own decisions. ",
			instruction:
				"Below you will be provided with a series of client statements and therapist reflections. Please categorize whether these reflections are simple or complex.",
			type: "categorization",
			difficulty: "",
			solution: "Complex",
			input_radio1: "Simple",
			input_radio2: "Complex",
			input_radio3: "",
		},
		{
			left_turn: "Client: Well, I don't think i'm going to be able to get up to work and not have a good feeling or not want to be in the hospital",
			right_turn: "Therapist: You’re just not sure that you can make it through the day",
			alert_success:
				"You correctly identified this statement as a complex reflection. “You’re just not sure that you can make it through the day” synthesizes the theme present in the client’s statement. A simple reflection may have only restated all or part of the client’s statement without adding additional meaning.",
			alert_danger:
				"This statement is not a simple reflection. “You’re just not sure that you can make it through the day” synthesizes the theme present in the client’s statement. A simple reflection may have only restated all or part of the client’s statement without adding additional meaning.",
			alert_info:
				"Simple reflections add little or no meaning to what the client said. The therapist simply alters what a client says. Complex reflections provides understanding for the client's situation. The therapist reflects the client's feelings, autonomy, control and ability to make their own decisions. ",
			instruction:
				"Below you will be provided with a series of client statements and therapist reflections. Please categorize whether these reflections are simple or complex.",
			type: "categorization",
			difficulty: "",
			solution: "Complex",
			input_radio1: "Simple",
			input_radio2: "Complex",
			input_radio3: "",
		},
		{
			left_turn: "Client: I just don't want to be lazy like that way anymore",
			right_turn: "Therapist: You’re tired of feeling lazy",
			alert_success:
				"You correctly identified this statement as a simple reflection. “Your tired of feeling lazy” is a simple reflection because it does not add meaningful content to the client’s statement. A complex reflection may have connected the statement to identity (“That’s not who you are”) or inserted emotion (“Being lazy makes you feel bad”), among other possibilities.",
			alert_danger:
				"This statement is not a complex reflection. “Your tired of feeling lazy” is a simple reflection because it does not add meaningful content to the client’s statement. A complex reflection may have connected the statement to identity (“That’s not who you are”) or inserted emotion (“Being lazy makes you feel bad”), among other possibilities.",
			alert_info:
				"Simple reflections add little or no meaning to what the client said. The therapist simply alters what a client says. Complex reflections provides understanding for the client's situation. The therapist reflects the client's feelings, autonomy, control and ability to make their own decisions. ",
			instruction:
				"Below you will be provided with a series of client statements and therapist reflections. Please categorize whether these reflections are simple or complex.",
			type: "categorization",
			difficulty: "",
			solution: "Simple",
			input_radio1: "Simple",
			input_radio2: "Complex",
			input_radio3: "",
		},
		{
			left_turn: "Client: I don't want to be a good teacher",
			right_turn: "Therapist: Being a good teacher is exhausting",
			alert_success:
				"You correctly identified this statement as a complex reflection. “Being a good teacher is exhausting” is a complex reflection because it adds a possible underlying emotion to the client’s statement. A simple reflection may have been “The desire isn’t there.”.",
			alert_danger:
				"This statement is not a simple reflection. “Being a good teacher is exhausting” is a complex reflection because it adds a possible underlying emotion to the client’s statement. A simple reflection may have been “The desire isn’t there.”.",
			alert_info:
				"Simple reflections add little or no meaning to what the client said. The therapist simply alters what a client says. Complex reflections provides understanding for the client's situation. The therapist reflects the client's feelings, autonomy, control and ability to make their own decisions. ",
			instruction:
				"Below you will be provided with a series of client statements and therapist reflections. Please categorize whether these reflections are simple or complex.",
			type: "categorization",
			difficulty: "",
			solution: "Complex",
			input_radio1: "Simple",
			input_radio2: "Complex",
			input_radio3: "",
		},
		{
			left_turn: "Client: I just need to do something new",
			right_turn: "Therapist: You’re really bored right now",
			alert_success:
				"You correctly identified this statement as a complex reflection. “You’re really bored right now” reflects a possible underlying feeling that may explain the client’s imperative statement. A simple reflection may have been “You need a fresh start” because it does not contribute additional meaning to the client’s statement.",
			alert_danger:
				"This statement is not a simple reflection. “You’re really bored right now” reflects a possible underlying feeling that may explain the client’s imperative statement. A simple reflection may have been “You need a fresh start” because it does not contribute additional meaning to the client’s statement.",
			alert_info:
				"Simple reflections add little or no meaning to what the client said. The therapist simply alters what a client says. Complex reflections provides understanding for the client's situation. The therapist reflects the client's feelings, autonomy, control and ability to make their own decisions. ",
			instruction:
				"Below you will be provided with a series of client statements and therapist reflections. Please categorize whether these reflections are simple or complex.",
			type: "categorization",
			difficulty: "",
			solution: "Complex",
			input_radio1: "Simple",
			input_radio2: "Complex",
			input_radio3: "",
		},
		{
			left_turn: "Client: I don't feel like i should be doing this kind of thing",
			right_turn: "Therapist: It feels like this isn’t something you should do",
			alert_success:
				"You correctly identified this statement as a simple reflection. “It feels like this isn’t something you should do” adds no new meaning to the client’s statement. It recycles the client’s own language, like with the words ‘feels’ and ‘should.’ A complex reflection may have deepened the emotional context (“It makes you uncomfortable when you do that”), or carried on the client’s thought (“Because it doesn’t fit with who you are”).",
			alert_danger:
				"This statement is not a complex reflection. “It feels like this isn’t something you should do” adds no new meaning to the client’s statement. It recycles the client’s own language, like with the words ‘feels’ and ‘should.’ A complex reflection may have deepened the emotional context (“It makes you uncomfortable when you do that”), or carried on the client’s thought (“Because it doesn’t fit with who you are”).",
			alert_info:
				"Simple reflections add little or no meaning to what the client said. The therapist simply alters what a client says. Complex reflections provides understanding for the client's situation. The therapist reflects the client's feelings, autonomy, control and ability to make their own decisions. ",
			instruction:
				"Below you will be provided with a series of client statements and therapist reflections. Please categorize whether these reflections are simple or complex.",
			type: "categorization",
			difficulty: "",
			solution: "Simple",
			input_radio1: "Simple",
			input_radio2: "Complex",
			input_radio3: "",
		},
		{
			left_turn: "Client: I want to just go and do it, I’m tired of waiting",
			right_turn: "Therapist: It seems like you feel ready to get started",
			alert_success:
				"You correctly identified this statement as a simple reflection. “It seems you feel ready to get started” restructures the client’s statement without adding new meaning. Both statements relate that the client desires to begin something. A complex reflection may have been “You’re ready to take responsibility for this” because it adds additional context to what it means to ‘go and do it.’.",
			alert_danger:
				"This statement is not a complex reflection. “It seems you feel ready to get started” restructures the client’s statement without adding new meaning. Both statements relate that the client desires to begin something. A complex reflection may have been “You’re ready to take responsibility for this” because it adds additional context to what it means to ‘go and do it.’.",
			alert_info:
				"Simple reflections add little or no meaning to what the client said. The therapist simply alters what a client says. Complex reflections provides understanding for the client's situation. The therapist reflects the client's feelings, autonomy, control and ability to make their own decisions. ",
			instruction:
				"Below you will be provided with a series of client statements and therapist reflections. Please categorize whether these reflections are simple or complex.",
			type: "categorization",
			difficulty: "",
			solution: "Simple",
			input_radio1: "Simple",
			input_radio2: "Complex",
			input_radio3: "",
		},
		{
			left_turn: "Client: It's kind of like I feel that I have a lot of good memories of it and I guess I have to do it",
			right_turn: "Therapist: It sounds like your memories make you happy",
			alert_success:
				"You correctly identified this statement as a complex reflection. “It sounds like your memories make you happy” adds emotional meaning to the client’s statement. A simple reflection may have been “Your memories make you want to do it,” as a more concise rephrasing of the client statement without additional meaning.",
			alert_danger:
				"This statement is not a simple reflection. “It sounds like your memories make you happy” adds emotional meaning to the client’s statement. A simple reflection may have been “Your memories make you want to do it,” as a more concise rephrasing of the client statement without additional meaning.",
			alert_info:
				"Simple reflections add little or no meaning to what the client said. The therapist simply alters what a client says. Complex reflections provides understanding for the client's situation. The therapist reflects the client's feelings, autonomy, control and ability to make their own decisions. ",
			instruction:
				"Below you will be provided with a series of client statements and therapist reflections. Please categorize whether these reflections are simple or complex.",
			type: "categorization",
			difficulty: "",
			solution: "Complex",
			input_radio1: "Simple",
			input_radio2: "Complex",
			input_radio3: "",
		},
		{
			left_turn: "Client: I think my parents are alone and they have fights with them and he can't keep living like this",
			right_turn: "Therapist: Your parent’s are fighting with them",
			alert_success:
				"You correctly identified this statement as a simple reflection. “Your parents are fighting with them” restates part of the client’s statement without adding new meaning or context. A complex reflection may have been “You worry about your parents” because it reflects a likely emotion the client is experiencing but left unstated.",
			alert_danger:
				"This statement is not a complex reflection. “Your parents are fighting with them” restates part of the client’s statement without adding new meaning or context. A complex reflection may have been “You worry about your parents” because it reflects a likely emotion the client is experiencing but left unstated.",
			alert_info:
				"Simple reflections add little or no meaning to what the client said. The therapist simply alters what a client says. Complex reflections provides understanding for the client's situation. The therapist reflects the client's feelings, autonomy, control and ability to make their own decisions. ",
			instruction:
				"Below you will be provided with a series of client statements and therapist reflections. Please categorize whether these reflections are simple or complex.",
			type: "categorization",
			difficulty: "",
			solution: "Simple",
			input_radio1: "Simple",
			input_radio2: "Complex",
			input_radio3: "",
		},
		{
			left_turn: "Client: I'm really, really scared about that",
			right_turn: "Therapist: It sounds like you're scared",
			alert_success:
				"You correctly identified this statement as a simple reflection. “It sounds like you’re scared” regurgitates the client’s expression of emotion. For a complex reflection, the therapist may have given the client new language for ‘really, really scared’ (“There’s something unbearable about that”) or used a metaphor (“It’s like there’s a boogeyman in the closet”).",
			alert_danger:
				"This statement is not a complex reflection. “It sounds like you’re scared” regurgitates the client’s expression of emotion. For a complex reflection, the therapist may have given the client new language for ‘really, really scared’ (“There’s something unbearable about that”) or used a metaphor (“It’s like there’s a boogeyman in the closet”).",
			alert_info:
				"Simple reflections add little or no meaning to what the client said. The therapist simply alters what a client says. Complex reflections provides understanding for the client's situation. The therapist reflects the client's feelings, autonomy, control and ability to make their own decisions. ",
			instruction:
				"Below you will be provided with a series of client statements and therapist reflections. Please categorize whether these reflections are simple or complex.",
			type: "categorization",
			difficulty: "",
			solution: "Simple",
			input_radio1: "Simple",
			input_radio2: "Complex",
			input_radio3: "",
		},
		{
			left_turn: "Client: I am going to tell other people i'm going to get a job",
			right_turn: "Therapist: You’re feeling pretty proud of yourself and want to let other people know",
			alert_success:
				"You correctly identified this statement as a complex reflection. “You’re feeling pretty proud of yourself and want to let other people know” adds meaning to the client’s statement by inferring and stating the underlying emotion: pride. A simple reflection would not have added meaning (“You’re going to spread the word”).",
			alert_danger:
				"This statement is not a simple reflection. “You’re feeling pretty proud of yourself and want to let other people know” adds meaning to the client’s statement by inferring and stating the underlying emotion: pride. A simple reflection would not have added meaning (“You’re going to spread the word”).",
			alert_info:
				"Simple reflections add little or no meaning to what the client said. The therapist simply alters what a client says. Complex reflections provides understanding for the client's situation. The therapist reflects the client's feelings, autonomy, control and ability to make their own decisions. ",
			instruction:
				"Below you will be provided with a series of client statements and therapist reflections. Please categorize whether these reflections are simple or complex.",
			type: "categorization",
			difficulty: "",
			solution: "Complex",
			input_radio1: "Simple",
			input_radio2: "Complex",
			input_radio3: "",
		},
		{
			left_turn: "Client: It just seems like I don't have a lot of time to do it",
			right_turn: "Question: What is the thing that’s stopping you?",
			alert_success:
				"Our computer model thinks this was a reflection! Good work. In case it's helpful, here are a few examples of other ways you could have responded with reflections: A Reflection might be ''You don’t have a lot of time'', or...''You’re worried about doing a good job''.",
			alert_danger:
				"Our computer does not think this statement was a reflection. In case it's helpful, here are a few examples of other ways you could have responded with reflections: A Reflection might be ''You don’t have a lot of time'', or...''You’re worried about doing a good job''.",
			alert_info:
				"Simple reflections add little or no meaning to what the client said. The therapist simply alters what a client says. Complex reflections provides understanding for the client's situation. The therapist reflects the client's feelings, autonomy, control and ability to make their own decisions. ",
			instruction:
				"The following are a series of client statements followed by a question from the therapist. For each statement, rewrite the question the therapist asks as a reflection.",
			type: "elaboration",
			difficulty: "",
			solution: "",
			input_radio1: "",
			input_radio2: "",
			input_radio3: "",
		},
		{
			left_turn: "Client: I can't just go home",
			right_turn: "Question: Why can’t you go home?",
			alert_success:
				"Our computer model thinks this was a reflection! Good work. In case it's helpful, here are a few examples of other ways you could have responded with reflections: A Reflection might be ''You can’t go home'', or... ''Something at home is upsetting you''.",
			alert_danger:
				"Our computer does not think this statement was a reflection. In case it's helpful, here are a few examples of other ways you could have responded with reflections: A Reflection might be ''You can’t go home'', or... ''Something at home is upsetting you''",
			alert_info:
				"Simple reflections add little or no meaning to what the client said. The therapist simply alters what a client says. Complex reflections provides understanding for the client's situation. The therapist reflects the client's feelings, autonomy, control and ability to make their own decisions. ",
			instruction:
				"The following are a series of client statements followed by a question from the therapist. For each statement, rewrite the question the therapist asks as a reflection.",
			type: "elaboration",
			difficulty: "",
			solution: "",
			input_radio1: "",
			input_radio2: "",
			input_radio3: "",
		},
		{
			left_turn: "Client: I felt like I was like a little kid because I was like, I am a little bit scared like I was so scared with it",
			right_turn: "Question: What feelings do you get when you think about your childhood?",
			alert_success:
				"Our computer model thinks this was a reflection! Good work. In case it's helpful, here are a few examples of other ways you could have responded with reflections: A Reflection might be ''It made you feel powerless'', or... ''That fear sounds overwhelming''.",
			alert_danger:
				"Our computer does not think this statement was a reflection. In case it's helpful, here are a few examples of other ways you could have responded with reflections: A Reflection might be ''It made you feel powerless'', or... ''That fear sounds overwhelming''",
			alert_info:
				"Simple reflections add little or no meaning to what the client said. The therapist simply alters what a client says. Complex reflections provides understanding for the client's situation. The therapist reflects the client's feelings, autonomy, control and ability to make their own decisions. ",
			instruction:
				"The following are a series of client statements followed by a question from the therapist. For each statement, rewrite the question the therapist asks as a reflection.",
			type: "elaboration",
			difficulty: "",
			solution: "",
			input_radio1: "",
			input_radio2: "",
			input_radio3: "",
		},
		{
			left_turn: "Client: I don't feel like I want to eat or I want to be with people",
			right_turn: "Question: What makes you say that?",
			alert_success:
				"Our computer model thinks this was a reflection! Good work. In case it's helpful, here are a few examples of other ways you could have responded with reflections: A Reflection might be ''You lose your appetite for anything'', or... ''And that’s not like you''.",
			alert_danger:
				"Our computer does not think this statement was a reflection. In case it's helpful, here are a few examples of other ways you could have responded with reflections: A Reflection might be ''You lose your appetite for anything'', or... ''And that’s not like you''",
			alert_info:
				"Simple reflections add little or no meaning to what the client said. The therapist simply alters what a client says. Complex reflections provides understanding for the client's situation. The therapist reflects the client's feelings, autonomy, control and ability to make their own decisions. ",
			instruction:
				"The following are a series of client statements followed by a question from the therapist. For each statement, rewrite the question the therapist asks as a reflection.",
			type: "elaboration",
			difficulty: "",
			solution: "",
			input_radio1: "",
			input_radio2: "",
			input_radio3: "",
		},
		{
			left_turn: "Client: I had a lot of things in my head",
			right_turn: "Question: What sort of things?",
			alert_success:
				"Our computer model thinks this was a reflection! Good work. In case it's helpful, here are a few examples of other ways you could have responded with reflections: A Reflection might be ''That sounds uncomfortable'', or... ''Thoughts were running wild''.",
			alert_danger:
				"Our computer does not think this statement was a reflection. In case it's helpful, here are a few examples of other ways you could have responded with reflections: A Reflection might be ''That sounds uncomfortable'', or... ''Thoughts were running wild''",
			alert_info:
				"Simple reflections add little or no meaning to what the client said. The therapist simply alters what a client says. Complex reflections provides understanding for the client's situation. The therapist reflects the client's feelings, autonomy, control and ability to make their own decisions. ",
			instruction:
				"The following are a series of client statements followed by a question from the therapist. For each statement, rewrite the question the therapist asks as a reflection.",
			type: "elaboration",
			difficulty: "",
			solution: "",
			input_radio1: "",
			input_radio2: "",
			input_radio3: "",
		},
		{
			left_turn: "Client: Well, I don't think I want to be with her. I mean, I mean, I don't know. It's like, well I just hate feeling like that",
			right_turn: "Question: How do you feel?",
			alert_success:
				"Our computer model thinks this was a reflection! Good work. In case it's helpful, here are a few examples of other ways you could have responded with reflections: A Reflection might be ''You feel many ways about her'', or... ''That sounds confusing''.",
			alert_danger:
				"Our computer does not think this statement was a reflection. In case it's helpful, here are a few examples of other ways you could have responded with reflections: A Reflection might be ''You feel many ways about her'', or... ''That sounds confusing''",
			alert_info:
				"Simple reflections add little or no meaning to what the client said. The therapist simply alters what a client says. Complex reflections provides understanding for the client's situation. The therapist reflects the client's feelings, autonomy, control and ability to make their own decisions. ",
			instruction:
				"The following are a series of client statements followed by a question from the therapist. For each statement, rewrite the question the therapist asks as a reflection.",
			type: "elaboration",
			difficulty: "",
			solution: "",
			input_radio1: "",
			input_radio2: "",
			input_radio3: "",
		},
		{
			left_turn: "Client: I feel like I'm not going to be able to help myself",
			right_turn: "Question: What’s stopping you from helping yourself?",
			alert_success:
				"Our computer model thinks this was a reflection! Good work. In case it's helpful, here are a few examples of other ways you could have responded with reflections: A Reflection might be ''Like you’re stuck in a hole that you dug'', or... ''You don’t have confidence in your ability''.",
			alert_danger:
				"Our computer does not think this statement was a reflection. In case it's helpful, here are a few examples of other ways you could have responded with reflections: A Reflection might be ''Like you’re stuck in a hole that you dug'', or... ''You don’t have confidence in your ability''",
			alert_info:
				"Simple reflections add little or no meaning to what the client said. The therapist simply alters what a client says. Complex reflections provides understanding for the client's situation. The therapist reflects the client's feelings, autonomy, control and ability to make their own decisions. ",
			instruction:
				"The following are a series of client statements followed by a question from the therapist. For each statement, rewrite the question the therapist asks as a reflection.",
			type: "elaboration",
			difficulty: "",
			solution: "",
			input_radio1: "",
			input_radio2: "",
			input_radio3: "",
		},
		{
			left_turn: "Client: I really have a lot of trouble falling asleep",
			right_turn: "Question: How long have you had sleep problems?",
			alert_success:
				"Our computer model thinks this was a reflection! Good work. In case it's helpful, here are a few examples of other ways you could have responded with reflections: A Reflection might be ''You just lie awake'', or... ''So you wake up groggy in the morning''.",
			alert_danger:
				"Our computer does not think this statement was a reflection. In case it's helpful, here are a few examples of other ways you could have responded with reflections: A Reflection might be ''You just lie awake'', or... ''So you wake up groggy in the morning''",
			alert_info:
				"Simple reflections add little or no meaning to what the client said. The therapist simply alters what a client says. Complex reflections provides understanding for the client's situation. The therapist reflects the client's feelings, autonomy, control and ability to make their own decisions. ",
			instruction:
				"The following are a series of client statements followed by a question from the therapist. For each statement, rewrite the question the therapist asks as a reflection.",
			type: "elaboration",
			difficulty: "",
			solution: "",
			input_radio1: "",
			input_radio2: "",
			input_radio3: "",
		},
		{
			left_turn: "Client: I got a lot of stuff done, but I know there's something else I want to do",
			right_turn: "Question: What else is there?",
			alert_success:
				"Our computer model thinks this was a reflection! Good work. In case it's helpful, here are a few examples of other ways you could have responded with reflections: A Reflection might be ''It’s like you’re never satisfied'', or... ''You get tense if you take a break''.",
			alert_danger:
				"Our computer does not think this statement was a reflection. In case it's helpful, here are a few examples of other ways you could have responded with reflections: A Reflection might be ''It’s like you’re never satisfied'', or... ''You get tense if you take a break''",
			alert_info:
				"Simple reflections add little or no meaning to what the client said. The therapist simply alters what a client says. Complex reflections provides understanding for the client's situation. The therapist reflects the client's feelings, autonomy, control and ability to make their own decisions. ",
			instruction:
				"The following are a series of client statements followed by a question from the therapist. For each statement, rewrite the question the therapist asks as a reflection.",
			type: "elaboration",
			difficulty: "",
			solution: "",
			input_radio1: "",
			input_radio2: "",
			input_radio3: "",
		},
		{
			left_turn:
				"Client: I have this feeling that like I can't handle my own life. I really don't feel like i can do anything about it. I would like to have a better relationship with myself.",
			right_turn: "Question: What sorts of things have been going on?",
			alert_success:
				"Our computer model thinks this was a reflection! Good work. In case it's helpful, here are a few examples of other ways you could have responded with reflections: A Reflection might be ''You feel a little lost at sea'', or... ''You want to appreciate yourself as a step toward figuring out your life''.",
			alert_danger:
				"Our computer does not think this statement was a reflection. In case it's helpful, here are a few examples of other ways you could have responded with reflections: A Reflection might be ''You feel a little lost at sea'', or... ''You want to appreciate yourself as a step toward figuring out your life''",
			alert_info:
				"Simple reflections add little or no meaning to what the client said. The therapist simply alters what a client says. Complex reflections provides understanding for the client's situation. The therapist reflects the client's feelings, autonomy, control and ability to make their own decisions. ",
			instruction:
				"The following are a series of client statements followed by a question from the therapist. For each statement, rewrite the question the therapist asks as a reflection.",
			type: "elaboration",
			difficulty: "",
			solution: "",
			input_radio1: "",
			input_radio2: "",
			input_radio3: "",
		},
		{
			left_turn: "Client: I'm not that good at what I am doing. I hate that. I feel like it's my own fault.",
			right_turn: "Question: What do you hate about it?",
			alert_success:
				"Our computer model thinks this was a reflection! Good work. In case it's helpful, here are a few examples of other ways you could have responded with reflections: A Reflection might be ''You take the blame'', or... ''That sounds frustrating''.",
			alert_danger:
				"Our computer does not think this statement was a reflection. In case it's helpful, here are a few examples of other ways you could have responded with reflections: A Reflection might be ''You take the blame'', or... ''That sounds frustrating''",
			alert_info:
				"Simple reflections add little or no meaning to what the client said. The therapist simply alters what a client says. Complex reflections provides understanding for the client's situation. The therapist reflects the client's feelings, autonomy, control and ability to make their own decisions. ",
			instruction:
				"The following are a series of client statements followed by a question from the therapist. For each statement, rewrite the question the therapist asks as a reflection.",
			type: "elaboration",
			difficulty: "",
			solution: "",
			input_radio1: "",
			input_radio2: "",
			input_radio3: "",
		},
		{
			left_turn: "Client: But I think it's because I feel like it isn't really the pressure thing",
			right_turn: "Question: Why do you think that you feel pressure?",
			alert_success:
				"Our computer model thinks this was a reflection! Good work. In case it's helpful, here are a few examples of other ways you could have responded with reflections: A Reflection might be ''The pressure doesn’t get to you'', or... ''You still feel in control''.",
			alert_danger:
				"Our computer does not think this statement was a reflection. In case it's helpful, here are a few examples of other ways you could have responded with reflections: A Reflection might be ''The pressure doesn’t get to you'', or... ''You still feel in control''",
			alert_info:
				"Simple reflections add little or no meaning to what the client said. The therapist simply alters what a client says. Complex reflections provides understanding for the client's situation. The therapist reflects the client's feelings, autonomy, control and ability to make their own decisions. ",
			instruction:
				"The following are a series of client statements followed by a question from the therapist. For each statement, rewrite the question the therapist asks as a reflection.",
			type: "elaboration",
			difficulty: "",
			solution: "",
			input_radio1: "",
			input_radio2: "",
			input_radio3: "",
		},
		{
			left_turn: "Client: I’m feeling tired",
			right_turn: "...",
			alert_success:
				"You correctly identified the reflection. “You’re just worn out” is a reflective statement.  The therapist is communicating back to the client that they heard what they said, and amplifying it slightly. The other two statements are questions asking about other symptoms or details. There are many other potential reflections, “You’re just worn out”, “You didn’t sleep much”, etc. They reflections may very in the extent to which the therapist stays close to exactly what the client sad or makes guesses about what might be going on.",
			alert_danger:
				"This therapist response is not a reflection. “You’re just worn out” is a reflective statement.  The therapist is communicating back to the client that they heard what they said, and amplifying it slightly. The other two statements are questions asking about other symptoms or details. There are many other potential reflections, “You’re just worn out”, “You didn’t sleep much”, etc. They reflections may very in the extent to which the therapist stays close to exactly what the client sad or makes guesses about what might be going on.",
			alert_info:
				"Simple reflections add little or no meaning to what the client said. The therapist simply alters what a client says. Complex reflections provides understanding for the client's situation. The therapist reflects the client's feelings, autonomy, control and ability to make their own decisions. ",
			instruction:
				"The following are potential responses to client statements. After reading each client statement pick the therapist statement that is a reflection.",
			type: "identification",
			difficulty: "",
			solution: "You’re just worn out",
			input_radio1: "You’re just worn out",
			input_radio2: "How did you sleep last night",
			input_radio3: "Are you taking your medication",
		},
		{
			left_turn: "Client: I’m feeling sad",
			right_turn: "...",
			alert_success:
				"You correctly identified the reflection. “It seems like you’re feeling pretty down” is a reflective statement. The therapist is noting how the client is feeling in slightly different words. The other two responses are questions. There are many potential alternatives. “You seem really upset”, “You’d feeling awful”.",
			alert_danger:
				"This therapist response is not a reflection. “It seems like you’re feeling pretty down” is a reflective statement. The therapist is noting how the client is feeling in slightly different words. The other two responses are questions. There are many potential alternatives. “You seem really upset”, “You’d feeling awful”.",
			alert_info:
				"Simple reflections add little or no meaning to what the client said. The therapist simply alters what a client says. Complex reflections provides understanding for the client's situation. The therapist reflects the client's feelings, autonomy, control and ability to make their own decisions. ",
			instruction:
				"The following are potential responses to client statements. After reading each client statement pick the therapist statement that is a reflection.",
			type: "identification",
			difficulty: "",
			solution: "It seems like you’re feeling pretty down",
			input_radio1: "What is sad like for you",
			input_radio2: "It seems like you’re feeling pretty down",
			input_radio3: "How long have you been feeling this way",
		},
		{
			left_turn: "Client: I’m uhh, feeling, I don’t know, lost",
			right_turn: "...",
			alert_success:
				"You correctly identified the reflection. “I wonder if you’re feeling a little stuck, not sure what to do next” is a reflection response from the therapist. The therapist is making a guess about how the client might be feeling. One alternative response is a question, and the other is an evaluative statement about whether ‘lost’ is a feeling. Alternative reflections include: “You lost”, “It seems like you’re confused and not sure what to do next”.",
			alert_danger:
				"This therapist response is not a reflection. “I wonder if you’re feeling a little stuck, not sure what to do next” is a reflection response from the therapist. The therapist is making a guess about how the client might be feeling. One alternative response is a question, and the other is an evaluative statement about whether ‘lost’ is a feeling. Alternative reflections include: “You lost”, “It seems like you’re confused and not sure what to do next”.",
			alert_info:
				"Simple reflections add little or no meaning to what the client said. The therapist simply alters what a client says. Complex reflections provides understanding for the client's situation. The therapist reflects the client's feelings, autonomy, control and ability to make their own decisions. ",
			instruction:
				"The following are potential responses to client statements. After reading each client statement pick the therapist statement that is a reflection.",
			type: "identification",
			difficulty: "",
			solution: "I wonder if you’re feeling a little stuck, not sure what to do next",
			input_radio1: "Is this a common feeling",
			input_radio2: "Lost isn’t a feeling",
			input_radio3: "I wonder if you’re feeling a little stuck, not sure what to do next",
		},
		{
			left_turn: "Client: I don’t know what is happening anymore with my drinking",
			right_turn: "...",
			alert_success:
				"You correctly identified the reflection. “I’m hearing that you are worried about how much you drink” is a reflective statement where the therapist is noting that they hear the client expressing concern about their drinking. The other responses are questions about drinking related details. Other potential reflections include “Your drinking is concerning to you”, “Something happened recently with your drinking” - with the later response making a guess (that could be wrong) about what might have happened. Sometimes being wrong about a reflection can be as useful as being right.",
			alert_danger:
				"This therapist response is not a reflection. “I’m hearing that you are worried about how much you drink” is a reflective statement where the therapist is noting that they hear the client expressing concern about their drinking. The other responses are questions about drinking related details. Other potential reflections include “Your drinking is concerning to you”, “Something happened recently with your drinking” - with the later response making a guess (that could be wrong) about what might have happened. Sometimes being wrong about a reflection can be as useful as being right.",
			alert_info:
				"Simple reflections add little or no meaning to what the client said. The therapist simply alters what a client says. Complex reflections provides understanding for the client's situation. The therapist reflects the client's feelings, autonomy, control and ability to make their own decisions. ",
			instruction:
				"The following are potential responses to client statements. After reading each client statement pick the therapist statement that is a reflection.",
			type: "identification",
			difficulty: "",
			solution: "I’m hearing that you are worried about how much you drink",
			input_radio1: "I’m hearing that you are worried about how much you drink",
			input_radio2: "How much do you drink now",
			input_radio3: "Did you pass out",
		},
		{
			left_turn: "Client: I’m, like, I don’t know what I want to do",
			right_turn: "...",
			alert_success:
				"You correctly identified the reflection. “You’re confused” is a reflection that rephrases the experience the client is relating. Answer B is a question with the intent of redirecting the session. Answer C confronts the client’s experience before emphasizing the control the client and therapist have over the situation.",
			alert_danger:
				"This therapist response is not a reflection. “You’re confused” is a reflection that rephrases the experience the client is relating. Answer B is a question with the intent of redirecting the session. Answer C confronts the client’s experience before emphasizing the control the client and therapist have over the situation.",
			alert_info:
				"Simple reflections add little or no meaning to what the client said. The therapist simply alters what a client says. Complex reflections provides understanding for the client's situation. The therapist reflects the client's feelings, autonomy, control and ability to make their own decisions. ",
			instruction:
				"The following are potential responses to client statements. After reading each client statement pick the therapist statement that is a reflection.",
			type: "identification",
			difficulty: "",
			solution: "You’re confused",
			input_radio1: "You’re confused",
			input_radio2: "Why don’t we do a pro-con list",
			input_radio3: "Don’t be silly, we can figure this out",
		},
		{
			left_turn: "Client: I’m feeling really down, depressed",
			right_turn: "...",
			alert_success:
				"You correctly identified the reflection. “It’s like you’re in a pit and can’t seem to get out” uses a simile to reflect the experience of feeling depressed. Answer A is a closed question and Answer B is the therapist giving the client contextual information on the client’s state. Other possible reflections may have focused on behavioral correlates of depression (“You have a hard time getting moving”) or re-articulated the emotional experience of depression (“You’re feeling really sad.”).",
			alert_danger:
				"This therapist response is not a reflection. “It’s like you’re in a pit and can’t seem to get out” uses a simile to reflect the experience of feeling depressed. Answer A is a closed question and Answer B is the therapist giving the client contextual information on the client’s state. Other possible reflections may have focused on behavioral correlates of depression (“You have a hard time getting moving”) or re-articulated the emotional experience of depression (“You’re feeling really sad.”).",
			alert_info:
				"Simple reflections add little or no meaning to what the client said. The therapist simply alters what a client says. Complex reflections provides understanding for the client's situation. The therapist reflects the client's feelings, autonomy, control and ability to make their own decisions. ",
			instruction:
				"The following are potential responses to client statements. After reading each client statement pick the therapist statement that is a reflection.",
			type: "identification",
			difficulty: "",
			solution: "It's like your in a pit and can’t seem to get out",
			input_radio1: "Are you taking your meds",
			input_radio2: "Everyone feels sad sometimes",
			input_radio3: "It's like your in a pit and can’t seem to get out",
		},
		{
			left_turn: "Client: I don’t know what I want to do with my life",
			right_turn: "...",
			alert_success:
				"You correctly identified the reflection. “Sometimes it feels like you have to make this decision once and for all right now” is a reflection that guesses at a possible tandem experience of the client not knowing what to do with their lives. Answer A asks a closed question; Answer C is a directive followed by a prediction.",
			alert_danger:
				"This therapist response is not a reflection. “Sometimes it feels like you have to make this decision once and for all right now” is a reflection that guesses at a possible tandem experience of the client not knowing what to do with their lives. Answer A asks a closed question; Answer C is a directive followed by a prediction.",
			alert_info:
				"Simple reflections add little or no meaning to what the client said. The therapist simply alters what a client says. Complex reflections provides understanding for the client's situation. The therapist reflects the client's feelings, autonomy, control and ability to make their own decisions. ",
			instruction:
				"The following are potential responses to client statements. After reading each client statement pick the therapist statement that is a reflection.",
			type: "identification",
			difficulty: "",
			solution: "Sometimes its feels like you have to make this decision once and for all right now",
			input_radio1: "Have you looked at the career information we have in the career center",
			input_radio2: "Sometimes its feels like you have to make this decision once and for all right now",
			input_radio3: "Don’t worry, things will work out",
		},
		{
			left_turn: "Client: I can’t stop thinking about work",
			right_turn: "...",
			alert_success:
				"You correctly identified the reflection. “You’re under a lot of pressure right now” reflects both the client’s feeling and a cause for it (‘pressure’ is felt and may lead to rumination). Answer B is a closed question and Answer C gives the client the therapist’s opinion (confrontationally). Other reflection responses may have been “You can’t unwind how you’d like” or “You’re having a hard time separating from your work.”.",
			alert_danger:
				"This therapist response is not a reflection. “You’re under a lot of pressure right now” reflects both the client’s feeling and a cause for it (‘pressure’ is felt and may lead to rumination). Answer B is a closed question and Answer C gives the client the therapist’s opinion (confrontationally). Other reflection responses may have been “You can’t unwind how you’d like” or “You’re having a hard time separating from your work.”.",
			alert_info:
				"Simple reflections add little or no meaning to what the client said. The therapist simply alters what a client says. Complex reflections provides understanding for the client's situation. The therapist reflects the client's feelings, autonomy, control and ability to make their own decisions. ",
			instruction:
				"The following are potential responses to client statements. After reading each client statement pick the therapist statement that is a reflection.",
			type: "identification",
			difficulty: "",
			solution: "You’re under a lot of pressure right now",
			input_radio1: "You’re under a lot of pressure right now",
			input_radio2: "What do you do for work",
			input_radio3: "Work isn’t everything you know",
		},
		{
			left_turn: "Client: I just, umm, I’m so scared of moving",
			right_turn: "...",
			alert_success:
				"You correctly identified the reflection. “You’re comfortable here, it is hard to imagine being happy somewhere else” is a reflection because it makes the logical connection, intrinsic to the client’s statement, that if the client doesn’t want to move, they must be comfortable with their current living situation. Answer B is an open question and Answer C is a reframe or giving of the therapist’s opinion. Other reflections may have re-articulated the negative feelings surrounding moving or reflected the general distaste people have for change.",
			alert_danger:
				"This therapist response is not a reflection. “You’re comfortable here, it is hard to imagine being happy somewhere else” is a reflection because it makes the logical connection, intrinsic to the client’s statement, that if the client doesn’t want to move, they must be comfortable with their current living situation. Answer B is an open question and Answer C is a reframe or giving of the therapist’s opinion. Other reflections may have re-articulated the negative feelings surrounding moving or reflected the general distaste people have for change.",
			alert_info:
				"Simple reflections add little or no meaning to what the client said. The therapist simply alters what a client says. Complex reflections provides understanding for the client's situation. The therapist reflects the client's feelings, autonomy, control and ability to make their own decisions. ",
			instruction:
				"The following are potential responses to client statements. After reading each client statement pick the therapist statement that is a reflection.",
			type: "identification",
			difficulty: "",
			solution: "You’re comfortable here, it is hard to imagine being happy somewhere else",
			input_radio1: "You’re comfortable here, it is hard to imagine being happy somewhere else",
			input_radio2: "Why are you moving",
			input_radio3: "Moving can be fun, its like a whole new adventure",
		},
		{
			left_turn: "Client: I can’t keep drinking this much",
			right_turn: "...",
			alert_success:
				"You correctly identified the reflection. “You’re worried about your drinking, something needs to change” clarifies the underlying emotion of the client’s statement and restates the imperative that the client cannot continue their drinking. Answer B is a closed question because the client can respond with a number, and Answer C is an open question because, although likely brief, the client’s response is open-ended. Other reflections may be “You’re over it” or “Drinking is not worth the cost anymore.”.",
			alert_danger:
				"This therapist response is not a reflection. “You’re worried about your drinking, something needs to change” clarifies the underlying emotion of the client’s statement and restates the imperative that the client cannot continue their drinking. Answer B is a closed question because the client can respond with a number, and Answer C is an open question because, although likely brief, the client’s response is open-ended. Other reflections may be “You’re over it” or “Drinking is not worth the cost anymore.”.",
			alert_info:
				"Simple reflections add little or no meaning to what the client said. The therapist simply alters what a client says. Complex reflections provides understanding for the client's situation. The therapist reflects the client's feelings, autonomy, control and ability to make their own decisions. ",
			instruction:
				"The following are potential responses to client statements. After reading each client statement pick the therapist statement that is a reflection.",
			type: "identification",
			difficulty: "",
			solution: "You’re worried about your drinking, something needs to change",
			input_radio1: "You’re worried about your drinking, something needs to change",
			input_radio2: "How long has this been going on",
			input_radio3: "What do you like to drink",
		},
		{
			left_turn: "Client: My wife left me",
			right_turn: "...",
			alert_success:
				"You correctly identified the reflection. “She’s gone” is a reflection of a simple truth, plainly restated. Answer A is the therapist giving information about their reaction and Answer B is the therapist asking an open question. Other reflections may have added previously unstated but implied emotional content (“It hurts to be set aside like that”).",
			alert_danger:
				"This therapist response is not a reflection. “She’s gone” is a reflection of a simple truth, plainly restated. Answer A is the therapist giving information about their reaction and Answer B is the therapist asking an open question. Other reflections may have added previously unstated but implied emotional content (“It hurts to be set aside like that”).",
			alert_info:
				"Simple reflections add little or no meaning to what the client said. The therapist simply alters what a client says. Complex reflections provides understanding for the client's situation. The therapist reflects the client's feelings, autonomy, control and ability to make their own decisions. ",
			instruction:
				"The following are potential responses to client statements. After reading each client statement pick the therapist statement that is a reflection.",
			type: "identification",
			difficulty: "",
			solution: "She’s gone",
			input_radio1: "I’m so sorry",
			input_radio2: "What happened",
			input_radio3: "She’s gone",
		},
		{
			left_turn: "Client: I got pulled over, but I didn’t do anything wrong",
			right_turn: "...",
			alert_success:
				"You correctly identified the reflection. “You’re confused and angry about what happened” is a reflective statement that explicitly states the connoted emotional experience. Answer B is an open question and Answer C gives information in a confrontational way. Other reflections could be “It didn’t seem fair to you” or “You didn’t see why you were being pulled over.”.",
			alert_danger:
				"This therapist response is not a reflection. “You’re confused and angry about what happened” is a reflective statement that explicitly states the connoted emotional experience. Answer B is an open question and Answer C gives information in a confrontational way. Other reflections could be “It didn’t seem fair to you” or “You didn’t see why you were being pulled over.”.",
			alert_info:
				"Simple reflections add little or no meaning to what the client said. The therapist simply alters what a client says. Complex reflections provides understanding for the client's situation. The therapist reflects the client's feelings, autonomy, control and ability to make their own decisions. ",
			instruction:
				"The following are potential responses to client statements. After reading each client statement pick the therapist statement that is a reflection.",
			type: "identification",
			difficulty: "",
			solution: "You’re confused and angry about what happened",
			input_radio1: "You’re confused and angry about what happened",
			input_radio2: "What did they pull you over for",
			input_radio3: "Well, they typically don’t just pull over random people",
		},
	],
	response: [],
};
