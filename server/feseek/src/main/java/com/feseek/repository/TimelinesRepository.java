package com.feseek.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.feseek.entity.Timeline;

public interface TimelinesRepository extends JpaRepository<Timeline, Integer> {
	 // イベントIDに対応するタイムライン情報を取得するメソッド
    //List<Timeline> findByEventId(Integer event_id);

}
