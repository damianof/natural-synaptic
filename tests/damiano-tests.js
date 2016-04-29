var expect = require('expect.js');
var NaturalSynaptic = require('../lib');

describe('Natural Language classifier', function() {
  describe('classifier', function() {

    it('should classify with strings', function() {
		
      var classifier = new NaturalSynaptic();
	  
      classifier.addDocument(
		  'Minimum And Overall Wages Are Rising, Luring Workers Back'
	  	, 'social');
      classifier.addDocument(
	  	'For workers who want a raise, this was an encouraging week, with minimum-wage legislation gaining momentum and employers paying more across the board.'
	  	, 'social');
	  classifier.addDocument(
		'4 Things To Know About Donald Trump\'s Foreign Policy Approach'
		, 'politics');

      classifier.train();

      console.log(classifier.classify('trump is an idiot'));
      console.log(classifier.classify('workers are lazy'));
    });
  });
});
