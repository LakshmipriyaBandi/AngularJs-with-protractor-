describe('signalfx homepage', function() {
	beforeEach(function(){
		browser.get('https://signalfx.com');
	var loginElement = element(by.css('.login.utility-link.hidden-xs'));
	loginElement.click();
	expect(browser.getCurrentUrl()).toMatch('https://app.signalfx.com/#/signin');
	
	element(by.model('user.email')).sendKeys('bandilakshmipriya14@gmail.com');
	element(by.model('user.password')).sendKeys('Lakshmi99@');
	var button = element(by.buttonText("Sign in")).click();
	expect(browser.getCurrentUrl()).toMatch('https://app.signalfx.com/#/dashboards/DIx297uAYAA');
	browser.waitForAngular();
	});
	
  it('to go dashboards/DIx297uAYAA from catalog/DIx297uAYAA', function() {
    
	var catalogElement = element(by.css('.sf-global-header-nav-item.menu-bar-item.ng-isolate-scope'));
	catalogElement.click();
	expect(browser.getCurrentUrl()).toMatch('#/catalog/DIx297uAYAA');
	
	element(by.model('tentativeQueryParam.query')).sendKeys('Dashboard group');
	
	var dashoardGroupElement = element(by.css('.bucket-header-text.ng-binding'));
	dashoardGroupElement.click();
	
	
	
	//browser.get('https://app.signalfx.com/#/signin');
	
	
  });
  
  //test automation for detector
  //still working on it
  it('should create detector', function() {
	  
	  var dropDownMenu = element(by.repeater('action in items'). column('description'));
	  expect(description.getText()).toMatch('New');
  });
});
