package com.example.wine.controller;

import com.example.wine.model.Cart;
import com.example.wine.model.Wine;
import com.example.wine.service.CartService;
import com.example.wine.service.WineService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/cart")
@CrossOrigin(origins = {"http://localhost:8080", "http://localhost:3000"})
public class CartController {
    @Autowired
    private CartService cartService;

    @PostMapping("/add")
    public boolean addCart(@RequestBody Cart cart) {
        try {
            cartService.addCart(cart);
        } catch (Exception e) {
            return false;
        }
        return true;
    }

    @GetMapping("/all")
    public List<Cart> getAllWines(){
        return cartService.getAllCarts();
    }

    @DeleteMapping("/delete/{id}")
    public List<Cart> getWineById(@PathVariable String id){
        return cartService.getCartById(Integer.parseInt(id));
    }
}
