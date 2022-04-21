package com.example.wine.service;

import com.example.wine.model.Country;
import com.example.wine.model.Wine;
import com.example.wine.repository.CountryRepository;
import com.example.wine.repository.WineRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CountryServiceImpl implements CountryService {
    @Autowired
    private CountryRepository countryRepository;

    @Override
    public List<Country> getAllCountries() {
        return countryRepository.findAll();
    }
}
