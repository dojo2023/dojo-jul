package com.feseek.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.feseek.entity.Event;
import com.feseek.repository.EventsRepository;

@RestController
public class EventDetailRestController {
	
	//イベント詳細画面
	
	@Autowired
	private EventsRepository repository;
	
	@GetMapping("/api/event/detail")
	protected List<Event> findAll(){
		return repository.findAll();
	}
	
}
