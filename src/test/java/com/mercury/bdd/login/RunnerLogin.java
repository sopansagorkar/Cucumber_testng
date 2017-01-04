package com.mercury.bdd.login;
import java.io.IOException;

import org.junit.runner.RunWith;
import org.testng.annotations.Test;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import cucumber.api.testng.AbstractTestNGCucumberTests;
import cucumber.api.testng.TestNGCucumberRunner;

@RunWith(Cucumber.class)
@CucumberOptions(plugin={"pretty","json:target/cucumber.json","html:target/cucumber-html-report_Login"}
		,features = "src/test/resources/"
		,tags="@Login"
		)
 
public class RunnerLogin extends AbstractTestNGCucumberTests{
	

}


