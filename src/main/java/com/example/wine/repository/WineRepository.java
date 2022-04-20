package com.example.wine.repository;

import com.example.wine.model.Wine;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface WineRepository extends JpaRepository<Wine, Integer> {
    List<Wine> findByCategoryId(int categoryId);
}