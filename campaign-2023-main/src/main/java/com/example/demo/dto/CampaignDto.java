package com.example.demo.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CampaignDto {

    private String title;

    private int count_players;

    private int age_rating;

    private String genre;

    private double count_hours;

    private String image;
}
