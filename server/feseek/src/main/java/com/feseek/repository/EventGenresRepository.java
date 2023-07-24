package com.feseek.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.feseek.entity.EventGenre;

public interface EventGenresRepository 
extends JpaRepository<EventGenre, Integer> {
	
	//List<EventGenre>findByOverviewLike1(Integer events_id);
	//List<EventGenre>findByOverviewLike(Integer genres_id);

}
