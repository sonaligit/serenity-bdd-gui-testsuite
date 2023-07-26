package info.steps;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class Testdriver {

	public static void main(String[] args) {
		// TODO Auto-generated method stub	
		System.setProperty("webdriver.chrome.driver", "D:\\Tools\\chromedriver.exe");
		WebDriver driver = new ChromeDriver();
		driver.get("https://google.com");

	}

}
