package com.example.wine.service;

import com.example.wine.model.Country;
import com.example.wine.model.Wine;

import java.util.List;
import java.util.Optional;

public interface CountryService {
    List<Country> getAllCountries();
}
