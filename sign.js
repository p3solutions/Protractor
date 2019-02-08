describe('Sign-In',function(){
it('into archon web application', function(){
	//browser.waitForAngularEnabled(false);
	browser.ignoreSynchronization = true;
browser.get(browser.baseUrl);

browser.driver.manage().window().maximize();

element(by.name("signin-email")).sendKeys("dbadmin@test.com");//enter username


element(by.name("signin-password")).sendKeys("123456");//enter password
browser.sleep(3000);

element(by.xpath('//button[contains(text()," SIGN IN ")]')).click();//click on sign-in
console.log("signin successfull")
browser.driver.sleep(2000);

});
});