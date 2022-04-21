package com.example.wine.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
public class Region {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Integer id;
    private String name;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="country_id")
    @JsonIgnore
    private Country country;

    @OneToMany(mappedBy = "region", fetch = FetchType.LAZY)
    @JsonIgnore
    List<Wine> wines;
}
