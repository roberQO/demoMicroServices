package com.ms.ui_client.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import org.springframework.web.servlet.view.InternalResourceViewResolver;

/**
 * @MvcConfig: clase de configuracion para la definicion del viewController (Conecta parte servidora (Java) con la parte cliente (AngularJS)).
 * */
@Configuration
public class MvcConfig extends WebMvcConfigurerAdapter{

	/**
	 * @addViewControllers: crea un nuevo ViewControler para capturar todas las peticiones lanzadas desde el directorio raiz ("localhost:puerto/") y
	 * las redirige al fichero index.html de la parte cliente.
	 * */
    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
        registry.addViewController("/").setViewName("index");
    }    
    
    /**
     * @viewResolver: resolvedor del vistas, el cual indica la ruta en la que se encuentra el fichero index.html
     * */
    @Bean
	public InternalResourceViewResolver viewResolver() {
		InternalResourceViewResolver resolver = new InternalResourceViewResolver();
		resolver.setPrefix("/templates/");
		resolver.setSuffix(".html");
		return resolver;
	}	
}
