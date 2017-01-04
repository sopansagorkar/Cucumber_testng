package com.bdd.util;

import java.net.MalformedURLException;
import java.net.URL;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;

public class Base {

	public static WebDriver driver;
	static String hubUrl;
	
	public void setup() throws MalformedURLException {
		//driver = new FirefoxDriver();
		
		hubUrl="http://172.27.59.69:4444/wd/hub";
		driver=new RemoteWebDriver(new URL(hubUrl),DesiredCapabilities.firefox());
		driver.manage().window().maximize();
	}

	public void quit() {
		driver.quit();
	}

}
