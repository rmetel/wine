package com.example.wine.controller;

import com.example.wine.model.*;
import com.example.wine.service.CartItemService;
import com.example.wine.service.CartService;
import com.example.wine.service.UserService;
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
    @Autowired
    private CartItemService cartItemService;

    @Autowired
    private UserService userService;

    @Autowired
    WineService wineService;

    @PostMapping("/add")
    public boolean addToCart(@RequestBody CartItemDTO cartItemDTO) {
        try {
            Optional<User> user = userService.findById(1); // userId hardcoded due to single user demo application

            if(user.isPresent()) {
                Optional<Cart> cart = cartService.findByUserId(user.get().getId());
                Optional<Wine> wine = wineService.findById(cartItemDTO.getWineId());

                if(cart.isPresent() && wine.isPresent()) {
                    CartItem cartItem = new CartItem();
                    cartItem.setCart(cart.get());
                    cartItem.setWine(wine.get());
                    cartItem.setAmount(cartItemDTO.getAmount());
                    cartItemService.addCartItem(cartItem);
                }
            } else {
                throw new Exception("missing data");
            }
        } catch (Exception e) {
            return false;
        }
        return true;
    }

    @GetMapping("/all")
    public List<CartItem> getAllCartItems(){
        return cartItemService.getAllCartItems();
    }

    @GetMapping("/delete/{id}")
    public boolean deleteCartItemById(@PathVariable String id){
        return cartItemService.deleteCartItem(Integer.parseInt(id));
    }
}
