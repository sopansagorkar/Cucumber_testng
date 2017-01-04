package com.mercury.bdd.register;

import org.junit.runner.RunWith;
import cucumber.api.testng.AbstractTestNGCucumberTests;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

	@RunWith(Cucumber.class)
	@CucumberOptions(plugin={"pretty","json:target/register.json","html:target/cucumber-html-report_register"}
			,features = "src/test/resources/"
			,tags="@Register"
			)

public class RunnerRegister extends AbstractTestNGCucumberTests{
		
}
