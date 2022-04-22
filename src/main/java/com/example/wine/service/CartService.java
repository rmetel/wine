package com.example.wine.service;

import com.example.wine.model.Cart;

import java.util.List;
import java.util.Optional;

public interface CartService {
    Cart addCart(Cart cart);
    List<Cart> getAllCarts();
    Optional<Cart> findById(int id);
    Optional<Cart> findByUserId(int userId);
}
