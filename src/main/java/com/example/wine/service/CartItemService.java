package com.example.wine.service;

import com.example.wine.model.Cart;
import com.example.wine.model.CartItem;

import java.util.List;

public interface CartItemService {
    CartItem addCartItem(CartItem cartItem);
    List<CartItem> getAllCartItems();
    boolean deleteCartItem(int id);
}
