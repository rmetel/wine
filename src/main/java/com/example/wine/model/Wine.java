package com.example.wine.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
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

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="category_id", foreignKey = @ForeignKey(name = "none", value = ConstraintMode.NO_CONSTRAINT))
    @JsonIgnore
    private Category category;
}
