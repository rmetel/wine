package com.example.wine.model;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
public class Wine {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Integer id;

    private String name;
    private String country;
    private String region;
    private String grape;
    private int year;
    private double price;
    @ManyToOne()
    @JoinColumn(name="category_id", referencedColumnName = "id", insertable = false, updatable = false)
    private Category category;
}
