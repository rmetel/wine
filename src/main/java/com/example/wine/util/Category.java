package com.example.wine.util;

public enum Category {
    RED(1),
    WHITE(2);

    private final int categoryId;

    Category(int categoryId) {
        this.categoryId = categoryId;
    }

    public int getCategoryId() {
        return this.categoryId;
    }
}
