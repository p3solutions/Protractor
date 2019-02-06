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
	
// Adding Database connection 
	
element(by.xpath("(//a[@class='dropdown-toggle trim-text'])[2]")).click(); //clicks on profile DD
//browser.driver.sleep(2000);
element(by.xpath("(//a[@class='trim-text'])[3]")).click(); //clicks on manage
//browser.driver.sleep(2000);
element(by.xpath("(//img[@class='icon-img'])[1]")).click(); //clicks on DB icon
//browser.driver.sleep(2000);
//element(by.xpath("(//button[@id='db-add'])")).click; //clicks on + button
element(by.xpath("//i[@class='fa fa-plus fa-lg']")).click();
browser.driver.sleep(2000);
console.log("add btn clicked");

element(by.id("profileName")).sendKeys("auto"); //enters db profile name
browser.driver.sleep(2000);

element(by.xpath("//button[@class='btn btn-default dropdown-toggle']")).click(); //clicks on db server dd
browser.driver.sleep(1000);
element(by.cssContainingText('li', 'MYSQL')).click(); //selects mysql from list
browser.driver.sleep(1000);
element(by.id("host")).sendKeys("mysql-trials.cvjyd2ccvc3m.us-west-2.rds.amazonaws.com").click(); //enters host name
browser.driver.sleep(500);
element(by.css("#databaseName")).sendKeys("world"); //database name
element(by.name("schemaName")).sendKeys("world"); //schema name
element(by.id("next-btn")).click(); 
browser.driver.sleep(1000);

//authentication
element(by.xpath("//input[@id='userName']")).sendKeys("ubuntu"); //username
element(by.xpath("//input[@id='password']")).sendKeys("p3solutions"); //password
element(by.xpath("//button[@id='next-btn']")).click(); // clicks on nxt btn
browser.driver.sleep(1000);

// Review details
element(by.cssContainingText('button', ' Test Connection ')).click(); //clicks on test connection
browser.driver.sleep(1000);
element(by.xpath("//button[@id='create-btn']")).click(); //clicks on create btn
browser.driver.sleep(3000);

element(by.id("ok-btn")).click(); //clicks on done btn
browser.driver.sleep(4000);

});
});