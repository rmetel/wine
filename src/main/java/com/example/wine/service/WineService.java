package com.example.wine.service;

import com.example.wine.model.Wine;

import java.util.List;
import java.util.Optional;

public interface WineService {
    Wine addWine(Wine wine);
    List<Wine> getAllWines();
    Optional<Wine> getWineById(int id);
    List<Wine> findByCategoryId(int categoryId);
}
