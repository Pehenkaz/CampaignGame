package com.example.demo.service;

import com.example.demo.entity.Campaign;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface CampaignsService {

    Campaign getCampaignById(Long id);

    Page<Campaign> getCampaign(Pageable pageable);

    Campaign addCampaign(Campaign product);

    Campaign updateCampaign(Long id, Campaign product);

    void deleteCampaignById(Long id);

}
