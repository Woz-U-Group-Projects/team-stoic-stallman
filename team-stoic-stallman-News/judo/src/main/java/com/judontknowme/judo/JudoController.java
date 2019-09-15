package com.judontknowme.judo;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

//this class is a controller
@RestController
@Controller
@RequestMapping({"/","/judoapplication"})
public class JudoController {

    @GetMapping()
    public String index() {
        // the string index will be looked for in src/main/resources/templates
        return "index";
    }
}