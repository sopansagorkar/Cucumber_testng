package com.mercury.bdd.register;

import static org.junit.Assert.assertEquals;

import java.nio.channels.ReadPendingException;
import java.util.concurrent.TimeUnit;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import com.bdd.util.Base;
import com.bdd.util.Readproperty;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.api.java.Before;
import cucumber.api.java.After;
import cucumber.api.java.en.And;

public class TestRegister extends Base {

	// public static WebDriver driver;

	
	
	@Given("^User is on Home Page$")
	public void user_is_on_Home_Page() throws Throwable {
		setup();
		driver.get(Readproperty.Readpropertyfile().toString());

	}

	@When("^User Navigate to Register Page$")
	public void User_navigates_Registration_Page() throws Throwable {
		driver.findElement(By.linkText("REGISTER")).click();
	}

	@And("^User enters Contact Information as \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
	public void User_enters_Contact_information(String firstname, String lastName, String phone, String userName)
			throws Throwable {
		driver.findElement(By.name("firstName")).sendKeys(firstname);
		driver.findElement(By.name("lastName")).sendKeys(lastName);
		driver.findElement(By.name("phone")).sendKeys(phone);
		driver.findElement(By.name("userName")).sendKeys(userName);

	}

	@And("^User enters Mailing Information as \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
	public void User_enters_Mailing_information(String address1, String city, String state, String postalCode,
			String Country) throws Throwable {
		driver.findElement(By.name("address1")).sendKeys(address1);
		driver.findElement(By.name("city")).sendKeys(city);
		driver.findElement(By.name("state")).sendKeys(state);
		driver.findElement(By.name("postalCode")).sendKeys(postalCode);
		driver.findElement(By.xpath("//select/option[@value=" + Country + "]")).click();
	}

	@And("^User enters User Information as \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
	public void User_enters_User_information(String email, String password, String confirmpassword) throws Throwable {
		driver.findElement(By.name("email")).sendKeys(email);
		driver.findElement(By.name("password")).sendKeys(password);
		driver.findElement(By.name("confirmPassword")).sendKeys(confirmpassword);
		driver.findElement(By.name("register")).click();
		driver.close();
	}

	@Then("^Message displayed Registered Successfully$")
	public void Message_displayed() throws Throwable {
		System.out.println("Registered successfully");
	}

	
}
