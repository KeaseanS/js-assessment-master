exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {

  	let promise = new Promise(
		function(fulill, reject) {

			if (value) {
				fulill(value);
			}
			else {
				reject(new Error("It's a no go"));
			}
		}
	);

	return promise;

  },

  manipulateRemoteData: function(url) {
  	let nameArray = null;
  	let promise = new Promise(
		function(fulill, reject) {

			let fetchData  = $.ajax({
			  url: url
			});

			fetchData.done(function(data){
		  		peopleArray = [];
		  		nameArray = [];
		    	for (var person in data.people){
			      nameArray.push(data.people[person].name);
			    }

			    nameArray.sort();
			    fulill(nameArray);

			});


			fetchData.fail(function(){
			  reject(new Error("It's a no go"));
			});

		}
	);
	
	return promise;
  }
};
