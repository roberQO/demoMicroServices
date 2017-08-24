package com.ms.ui_client;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * @UiClientApplication: clase main de la aplicacion.
 * */
@SpringBootApplication// (scanBasePackages={"com.ms.ui_client"}) // Anotacion que engloba @Configuration @EnableAutoConfiguration @ComponentScan
public class UiClientApplication {

	public static void main(String[] args) {
		SpringApplication.run(UiClientApplication.class, args);
	}
}
