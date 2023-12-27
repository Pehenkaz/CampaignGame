package com.example.demo.controller;

import com.example.demo.dto.PageDto;
import com.example.demo.dto.CampaignDto;
import com.example.demo.entity.Campaign;
import com.example.demo.service.CampaignsService;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

@AllArgsConstructor
@RestController
@RequestMapping("/Campaigns")
public class CampaignsController {

    private final CampaignsService CampaignsService;
    private final ModelMapper modelMapper = new ModelMapper();

    @GetMapping("/{id}")
    public Campaign getCampaignById(@PathVariable Long id) {
        return CampaignsService.getCampaignById(id);
    }

    @GetMapping
    public Page<Campaign> getCampaign(PageDto pageDto) {
        return CampaignsService.getCampaign(pageDto.getPageable());
    }

    @PostMapping
    public Campaign addCampaign(@RequestBody CampaignDto CampaignDto) {
        Campaign Campaign = modelMapper.map(CampaignDto, Campaign.class);
        return CampaignsService.addCampaign(Campaign);
    }

    @PutMapping("/{id}")
    public Campaign updateCampaign(@PathVariable Long id, @RequestBody Campaign Campaign) {
        return CampaignsService.updateCampaign(id, Campaign);
    }

    @DeleteMapping("/{id}")
    public void deleteCampaignById(@PathVariable Long id) {
        CampaignsService.deleteCampaignById(id);
    }

}
