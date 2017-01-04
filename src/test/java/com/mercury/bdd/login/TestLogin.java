package com.mercury.bdd.login;

import static org.junit.Assert.assertEquals;

import java.io.FileNotFoundException;
import java.io.IOException;

import org.openqa.selenium.By;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

import com.bdd.util.Base;
import com.bdd.util.Readproperty;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class TestLogin extends Base {

	String logintext;
	
	@Given("^User is on Home Page Login$")
	public void user_is_on_Home_Page() throws Throwable {
		setup();
		driver.get(Readproperty.Readpropertyfile().toString());
	}

	@When("^User Navigate to LogIn Page$")
	public void user_Navigate_to_LogIn_Page() throws Throwable {
		driver.findElement(By.linkText("SIGN-ON")).click();
	}

	@And("^User enters \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_and(String Username, String Password) throws Throwable {
		try {
			driver.findElement(By.name("userName")).sendKeys(Username);
			driver.findElement(By.name("password")).sendKeys(Password);
			driver.findElement(By.name("login")).click();
			driver.findElement(By.linkText("SIGN-OFF")).toString();

		} catch (Exception e) {
			// TODO Auto-generated catch block
			logintext = driver.findElement(By.linkText("SIGN-OFF")).toString();
			String actualtext = "CheckText";
			assertEquals(logintext, actualtext);
			System.out.println("handled the exception");

		}
	}

	@Then("^Message displayed Login Successfully$")
	public void message_displayed_Login_Successfully() throws Throwable {
		System.out.println("Login Successfully");
		driver.close();
	}
}