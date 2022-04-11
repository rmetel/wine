package com.example.wine.controller;

import com.example.wine.model.Wine;
import com.example.wine.service.WineService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/wine")
@CrossOrigin(origins = {"http://localhost:8080", "http://localhost:3000"})
public class WineController {
    @Autowired
    private WineService wineService;

    @PostMapping("/add")
    public boolean addWine(@RequestBody Wine wine) {
        try {
            wineService.addWine(wine);
        } catch (Exception e) {
            return false;
        }
        return true;
    }

    @GetMapping("/all")
    public List<Wine> getAllWines(){
        return wineService.getAllWines();
    }
}
