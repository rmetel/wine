package com.example.wine.service;

import com.example.wine.model.Cart;

import java.util.List;

public interface CartService {
    Cart addCart(Cart cart);
    List<Cart> getAllCarts();
    List<Cart> getCartById(int id);
}
