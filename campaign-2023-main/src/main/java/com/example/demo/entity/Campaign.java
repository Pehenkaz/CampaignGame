package com.example.demo.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import jakarta.persistence.*;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "campaign")
public class Campaign {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "campaign_id")
    private Long id;

    @Column(name = "title")
    private String title;

    @Column(name = "count_players")
    private Integer count_players;

    @Column(name = "age_rating")
    private Integer age_rating;

    @Column(name = "genre")
    private String genre;

    @Column(name = "count_hours")
    private Double count_hours;
}
