package com.example.wine.controller;

import com.example.wine.model.Category;
import com.example.wine.model.Wine;
import com.example.wine.service.WineServiceImpl;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;

import java.util.function.BooleanSupplier;

import static org.junit.jupiter.api.Assertions.assertTrue;

class WineControllerTest {
    @Test
    @Disabled
    void addWine() {
        wineService = new WineServiceImpl();

        Category category = new Category();
        category.setName("Rot");
        category.setId(1);

        Wine wine = new Wine();
        wine.setId(1000);
        wine.setName("Arzuaga");
        wine.setCategory(category);
        wine.setCountry("Spanien");
        wine.setRegion("Riberad Del Duero");
        wine.setGrape("Tempranillo");
        wine.setYear(2018);
        wine.setPrice(22.99);

        assertTrue((BooleanSupplier) wineService.addWine(wine));
    }

    private WineServiceImpl wineService;
}