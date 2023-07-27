package com.feseek.api;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.feseek.entity.Event;
import com.feseek.repository.EventsRepository;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;

@RestController
public class EventDetailRestController {
	
	//イベント詳細画面
	
	@Autowired
	private EventsRepository repository;
	
	//イベントIDを受け取って表示
	@GetMapping("/api/event/detail/{id}")
	protected Optional<Event> findById(@PathVariable Integer id){
		return repository.findById(id);
	}
	
	//主催者が投稿したイベント一覧
	@GetMapping("/api/event/sponser")
	protected List<Event> findByUsersId (HttpServletRequest request){
		HttpSession session = request.getSession();
		String id = (String)session.getAttribute("id");
		System.out.println(id);
		return repository.findByUsersId(id);
	}
	
	
}
