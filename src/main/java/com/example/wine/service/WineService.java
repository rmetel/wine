package com.example.wine.service;

import com.example.wine.model.Wine;

import java.util.List;

public interface WineService {
    Wine addWine(Wine wine);
    List<Wine> getAllWines();
}
