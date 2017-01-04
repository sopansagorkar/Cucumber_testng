package com.bdd.util;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;

public class Readproperty {

	public static String Readpropertyfile() throws FileNotFoundException, IOException {
		String Testurl;
		Properties config = new Properties();
		config.load(new FileInputStream(Links.propfilepath));
		Testurl = config.getProperty("Test_URL");
		return Testurl;
	}
}
