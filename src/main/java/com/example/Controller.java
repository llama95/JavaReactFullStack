package com.example;

import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.cors.CorsConfiguration;

@RestController
@CrossOrigin(origins ="http://localhost:3000/" )
public class Controller {
    @RequestMapping(method = RequestMethod.GET, path = "/hello")
    public String helloWorld() {
        return "hello wrld 999";
    }

    @RequestMapping(method = RequestMethod.GET, path = "/helloBean/{name}")
    public HelloWorldBean helloWorldPathVariable(@PathVariable String name) {
        return new HelloWorldBean(String.format("hello world bean %s", name));
    }

    @RequestMapping(method = RequestMethod.GET, path = "/hello-bean")
    public HelloWorldBean helloWorldPathBean() {
        return new HelloWorldBean("hello world bean");
    }


    @EnableWebSecurity
    public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

        @Override
        protected void configure(HttpSecurity http) throws Exception {
            http.cors().configurationSource(request -> new CorsConfiguration().applyPermitDefaultValues());
        }


    }
}