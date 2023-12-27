package com.example.demo.repository;

import com.example.demo.entity.Campaign;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;
import java.util.Set;

public interface CampaignsRepository extends PagingAndSortingRepository<Campaign, Long>, CrudRepository<Campaign, Long> {

}
