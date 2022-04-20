package com.example.wine.controller;

import com.example.wine.model.Wine;
import com.example.wine.service.WineService;
import com.example.wine.util.Category;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/category")
@CrossOrigin(origins = {"http://localhost:8080", "http://localhost:3000"})
public class CategoryController {
    @Autowired
    private WineService wineService;

    @GetMapping("/red")
    public List<Wine> getAllRedWines(){
        return wineService.findByCategoryId(Category.RED.getCategoryId());
    }

    @GetMapping("/white")
    public List<Wine> getAllWhiteWines(){
        return wineService.findByCategoryId(Category.WHITE.getCategoryId());
    }
}
