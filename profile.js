describe('Sign-In',function(){
it('into archon web application', function(){
	//browser.waitForAngularEnabled(false);
browser.get('http://54.148.17.17/sign-in');
//browser.driver.manage().window().setSize(1280, 1024);
browser.driver.manage().window().maximize();
//enter username
element(by.name("signin-email")).sendKeys("dbadmin@test.com");

//enter password
element(by.name("signin-password")).sendKeys("123456");
browser.sleep(3000);

element(by.xpath('//button[contains(text()," SIGN IN ")]')).click();//click on sign-in
console.log("signin successfull")
browser.sleep(2000);

//change profile name
var profile_DD = element(by.xpath("(//a[@class='dropdown-toggle trim-text'])[2]")).click();//click on profile DD
element(by.xpath("(//a[@class='trim-text'])[2]")).click();//click on profile
browser.driver.sleep(2000);
//element(by.xpath("//i[@class='fa fa-pencil archon-icon']")).click();//click on edit button
//var txt = element(by.id('userName'));
//txt.clear();
////browser.driver.sleep(1000);
//txt.sendKeys("db_admin");//change name
//browser.driver.sleep(2000);
//element(by.xpath("//button[@class='btn btn-primary']")).click();//click confirm btn
//browser.driver.sleep(2000);



//var success_msg = element(by.xpath("//div[@class='col-md-3 alert alert-success']"));
//expect(success_msg.getText()).toEqual("Name Changed Successfully. Please Logout and Login Again.");
//expect(success_msg.toEqual("Name Changed Successfully. Please Logout and Login Again."));
//expect(success_msg.getText());
//console.log(success_msg)

element(by.xpath("//button[contains(text(), 'Change Password')]")).click(); // clicks on change password btn
browser.driver.sleep(2000);
console.log("clicked");
element(by.id("oldPassword")).sendKeys("123456"); // current password field
console.log("current password entered");
element(by.id("newPassword")).sendKeys("1234567"); // new pswrd field
console.log("new password entered");
element(by.id("confirmPassword")).sendKeys("1234567"); // confirm pswrd field
element(by.xpath("//button[@class='btn btn-primary btn-popup ']")).click(); // clicks confirm btn
browser.driver.sleep(2000);



profile_DD.click();//clicks on profile name
browser.driver.sleep(1000);
element(by.xpath("(//a[@class='info-number'])[1]")).click();//logout
console.log("logged out successfully")

});

});
