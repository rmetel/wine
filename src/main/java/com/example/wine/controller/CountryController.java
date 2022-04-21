package com.example.wine.controller;

import com.example.wine.model.Country;
import com.example.wine.model.Wine;
import com.example.wine.service.CountryService;
import com.example.wine.service.WineService;
import com.example.wine.util.Category;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/country")
@CrossOrigin(origins = {"http://localhost:8080", "http://localhost:3000"})
public class CountryController {
    @Autowired
    private CountryService countryService;

    @GetMapping("/all")
    public List<Country> getAllCountries(){
        return countryService.getAllCountries();
    }

}
