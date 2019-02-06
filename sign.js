describe('Sign-In',function(){
it('into archon web application', function(){
	//browser.waitForAngularEnabled(false);
browser.get('http://54.148.17.17/sign-in');

browser.driver.manage().window().maximize();

element(by.name("signin-email")).sendKeys("dbadmin@test.com");//enter username


element(by.name("signin-password")).sendKeys("123456");//enter password
browser.sleep(3000);

element(by.xpath('//button[contains(text()," SIGN IN ")]')).click();//click on sign-in
console.log("signin successfull")
browser.driver.sleep(2000);

});
});