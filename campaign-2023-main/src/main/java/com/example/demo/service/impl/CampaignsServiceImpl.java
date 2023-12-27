package com.example.demo.service.impl;

import com.example.demo.entity.Campaign;
import com.example.demo.repository.CampaignsRepository;
import com.example.demo.service.CampaignsService;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@AllArgsConstructor
@Transactional
public class CampaignsServiceImpl implements CampaignsService {

    private CampaignsRepository campaignsRepository;

    @Override
    public Campaign getCampaignById(Long id) {
        return campaignsRepository
                .findById(id)
                .orElseThrow(() -> new RuntimeException("There is no campaign with id=" + id));
    }

    @Override
    public Page<Campaign> getCampaign(Pageable pageable) {
        return campaignsRepository.findAll(pageable);
    }

    @Override
    public Campaign addCampaign(Campaign campaign) {
        return campaignsRepository.save(campaign);
    }

    @Override
    public Campaign updateCampaign(Long id, Campaign campaign) {
        if (!id.equals(campaign.getId())) {
            throw new RuntimeException("Id`s should be equaled.");
        }
        if (!campaignsRepository.existsById(id)) {
            throw new RuntimeException("campaign with id=" + id + " must be created.");
        }
        return campaignsRepository.save(campaign);
    }

    @Override
    public void deleteCampaignById(Long id) {
        if (!campaignsRepository.existsById(id)) {
            throw new RuntimeException("campaign with id=" + id + " cannot be deleted.");
        }
        campaignsRepository.deleteById(id);
    }

}
