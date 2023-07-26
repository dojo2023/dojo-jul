package com.feseek.api;

import java.util.ArrayList;
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
    private TimelinesRepository timelinesRepository;

 // 特定のイベントIDに対応するタイムライン情報のうち、infomationだけを取得
    @GetMapping("/{eventId}")
    public ResponseEntity<List<String>> getTimelinesByEventId(@PathVariable Integer eventsId) {
        List<Timeline> timelines = timelinesRepository.findByEventId(eventsId);
        if (timelines.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        
        List<String> informationList = new ArrayList<>();
        for (Timeline timeline : timelines) {
            informationList.add(timeline.getInfomation());
        }
        
        return ResponseEntity.ok(informationList);
    }


 // タイムラインの削除
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTimeline(@PathVariable Integer id) {
        Optional<Timeline> optionalTimeline = timelinesRepository.findById(id);
        if (optionalTimeline.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        timelinesRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }

     //テキスト入力での投稿
    @PostMapping("/timeline")
    public ResponseEntity<Timeline> createTextPost(@RequestBody Timeline newTimeline) {
        // イベントにタイムラインを紐づける
        if (newTimeline.getEvent() == null) {
            Event event = new Event();
            event.setId(newTimeline.getEventsId());
            newTimeline.setEvent(event);
        }

        // タイムラインをデータベースに保存
        Timeline createdTimeline = timelinesRepository.save(newTimeline);
        return ResponseEntity.ok(createdTimeline);
    }
}


