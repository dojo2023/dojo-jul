package com.feseek.api;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.feseek.entity.Event;
import com.feseek.entity.Timeline;
import com.feseek.repository.TimelinesRepository;

@RestController
@RequestMapping("/api/timeline")
public class TimelineRestController {

    @Autowired
    private TimelinesRepository timelineRepository;

    // 特定のイベントIDに対応するタイムライン情報を取得
    @GetMapping("/{eventId}")
    public ResponseEntity<List<Timeline>> getTimelinesByEventId(@PathVariable Integer events_id) {
        List<Timeline> timelines = timelineRepository.findByEvents_id(events_id);
        if (timelines.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(timelines);
    }

    // タイムラインの削除
    @DeleteMapping("/{timelineId}")
    public ResponseEntity<Void> deleteTimeline(@PathVariable Integer id) {
        Optional<Timeline> optionalTimeline = timelineRepository.findById(id);
        if (optionalTimeline.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        timelineRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }

    // テキスト入力での投稿
    @PostMapping("/{eventId}")
    public ResponseEntity<Timeline> createTextPost(@PathVariable Integer events_id, @RequestBody String infomation) {
        Timeline newTimeline = new Timeline();
        newTimeline.setInfomation(infomation);

        // イベントにタイムラインを紐づける
        Event event = new Event();
        event.setId(events_id);
        newTimeline.setEvent_id(events_id);

        // タイムラインをデータベースに保存
        Timeline createdTimeline = timelineRepository.save(newTimeline);
        return ResponseEntity.ok(createdTimeline);
    }
}

