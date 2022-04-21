package com.example.wine.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Country {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Integer id;
    private String name;

    @OneToMany(mappedBy = "country", fetch = FetchType.LAZY)
    @JsonIgnore
    List<Region> regions;

    @OneToMany(mappedBy = "country", fetch = FetchType.LAZY)
    @JsonIgnore
    List<Wine> wines;
}
