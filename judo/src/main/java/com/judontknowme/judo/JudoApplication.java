package com.judontknowme.judo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.ServletComponentScan; // is this needed?

@ServletComponentScan
@SpringBootApplication
public class JudoApplication {

  public static void main(String[] args) {
      SpringApplication.run(JudoApplication.class, args);
  }
}