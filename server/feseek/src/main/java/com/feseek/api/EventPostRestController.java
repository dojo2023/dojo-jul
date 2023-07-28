package com.feseek.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.feseek.entity.Event;
import com.feseek.repository.EventsRepository;

import jakarta.servlet.http.HttpSession;

@RestController
@RequestMapping("/api/events")
public class EventPostRestController {

    @Autowired
    private EventsRepository eventsRepository;

    // イベント投稿(主催者側)
    @PostMapping("/add")
    protected Event add(@RequestBody Event event, HttpSession session) {
        // セッションからユーザーIDを取得
        String usersId = (String) session.getAttribute("userId");

        if (usersId == null) {
            // ユーザーIDがセッションに保存されていない場合は、エラー
            throw new RuntimeException("User ID not found in session.");
        }
        
     // イベントIDをセッションに保存
        Integer eventId = event.getId(); // イベントIDを取得（仮定）
        session.setAttribute("event_id", eventId.toString());

        // ユーザーIDを投稿にセットして紐づける
        event.setUsersId(usersId);

        // 投稿をデータベースに保存
        eventsRepository.save(event);

        return event;
    }

}




