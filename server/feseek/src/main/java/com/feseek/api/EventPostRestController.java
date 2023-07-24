package com.feseek.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.feseek.entity.Event;
import com.feseek.repository.EventsRepository;

@RestController
@RequestMapping("/api/events")
public class EventPostRestController {

    @Autowired
    private EventsRepository eventsRepository;

    // イベント投稿(主催者側)
    @PostMapping("/add")
    protected Event add(@RequestBody Event event, @RequestParam String users_id) {
        // ユーザーIDを投稿にセットして紐づける
        event.setUsers_id(users_id);

        // 投稿をデータベースに保存
        eventsRepository.save(event);

        return event;
    }
}



