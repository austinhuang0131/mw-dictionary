mw-dictionary
=============

Node.js wrapper for the Merriam-Webster Dictionary API

## Example
```js
var Dictionary = require('mw-dictionary'),
	dict = new Dictionary({
		key: "YOUR_API_KEY",
		type: "WHICH_DICTIONARY_ARE_YOU_USING"
	});

dict.define("memes", function(error, result){
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
```

You can register for a Merriam-Webster API key at [http://dictionaryapi.com](http://dictionaryapi.com)
