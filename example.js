//To run:
//      $ node example.js [your-merriam-webster-api-key] [word] [type]

var Dictionary = require('./dictionary'),
	
	//pass the constructor a config object with your key
	dict = new Dictionary({
		key: process.argv[2],
		type: process.argv[4]
	});

//sample method
dict.define(process.argv[3], function(error, result){
	if (error == null) {
		for(var i=0; i<result.length; i++){
			console.log(i+'.');
			console.log('Part of speech: '+result[i].partOfSpeech);
			console.log('Definitions: '+result[i].definition);
			console.log(result[i].definition)
		}
	}
	else if (error === "suggestions"){
		console.log(process.argv[3] + ' not found in dictionary. Possible suggestions:');
		for (var i=0; i<result.length; i++){
			console.log(result[i]);
		}
	}
	else console.log(error);
});


//test words
// charlatan
// patutukis
// doodle
