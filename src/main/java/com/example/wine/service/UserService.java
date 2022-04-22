package com.example.wine.service;

import com.example.wine.model.User;

import java.util.List;
import java.util.Optional;

public interface UserService {
    User addUser(User user);
    List<User> getAllUsers();
    Optional<User> findById(int id);
}
