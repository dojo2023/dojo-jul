package com.feseek.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.feseek.entity.Event;
import com.feseek.repository.EventsRepository;

public class EventSearchRestController 
{
	
	@Autowired
	private EventsRepository repository;
	
	//イベント検索
	@GetMapping("/api/events/search")
	protected List<Events> search(@RequestBody Event event)
	
}
