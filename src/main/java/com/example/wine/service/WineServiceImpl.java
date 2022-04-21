package com.example.wine.service;

import com.example.wine.model.Wine;
import com.example.wine.repository.WineRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class WineServiceImpl implements WineService {
    @Autowired
    private WineRepository wineRepository;

    @Override
    public Wine addWine(Wine wine) {
        return wineRepository.save(wine);
    }

    @Override
    public List<Wine> getAllWines() {
        return wineRepository.findAll();
    }

    @Override
    public Optional<Wine> getWineById(int id) {
        return wineRepository.findById(id);
    }

    @Override
    public List<Wine> findByCategoryId(int id) {
        return wineRepository.findByCategoryId(id);
    }
}
