/*exports.config={
		directConnect: true,
		framework:'jasmine',
//seleniumAddress:'http://localhost:4444/wd/hub',
specs:['funs.js']
}*/

// An example configuration file.
exports.config = {
  directConnect: true,
////  
//  multiCapabilities: [{
//	  'browserName': 'chrome'
//	}, {
//	  'browserName': 'firefox'
//	}],
       
  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },
  
 
  

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',
  baseUrl: 'http://54.148.17.17/sign-in'

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  //specs: ['negsignin.js'],
  specs: ['profile.js' ],
  //specs: ['workspace.js'],
//specs: ['sign.js'],
  //specs: ['Create_DB.js'],
  
//  
//  suites: {
//	    smoke: [
//	        'sign.js',
//	        'Create_DB.js'
//	    ],
//	},
  
  

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 300000

    
    
  }
  
};
