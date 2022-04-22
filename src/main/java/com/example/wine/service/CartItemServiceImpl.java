package com.example.wine.service;

import com.example.wine.model.Cart;
import com.example.wine.model.CartItem;
import com.example.wine.repository.CartItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartItemServiceImpl implements CartItemService {
    @Autowired
    private CartItemRepository cartItemRepository;

    @Override
    public CartItem addCartItem(CartItem cartItem) {
        return cartItemRepository.save(cartItem);
    }

    @Override
    public List<CartItem> getAllCartItems() {
        return cartItemRepository.findAll();
    }

    @Override
    public boolean deleteCartItem(int id) {
        try {
            cartItemRepository.deleteById(id);
        } catch (Exception e) {
            return false;
        }

        return true;
    }
}
