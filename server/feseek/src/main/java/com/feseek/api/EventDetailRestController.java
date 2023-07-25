package com.feseek.api;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.feseek.entity.Event;
import com.feseek.repository.EventsRepository;

@RestController
public class EventDetailRestController {
	Integer id = 1;
	
	//イベント詳細画面
	
	@Autowired
	private EventsRepository repository;
	
	@GetMapping("/api/event/detail")
	protected Optional<Event> findById(@RequestBody Event event){
		//return repository.findById(id);
		return repository.findById(event.getId());
	}
	
	/*
	@GetMapping("/api/event/detail")
	protected List<Event> findAll(){
		return repository.findAll(1);
	}
	*/
	
	
}
