exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function(fn, obj) {
  	let context = fn.call(obj);
  	return context;
  },

  alterObjects: function(constructor, greeting) {
  	constructor.prototype.greeting = greeting;
  	return constructor.greeting;
  },

  iterate: function(obj) {
	let ownProperties = [];
	for (let prop in obj) {
		if (obj.hasOwnProperty(prop)) {
			ownProperties.push(prop + ': ' + obj[prop]);
		}
	}
	return ownProperties;
  }
};
