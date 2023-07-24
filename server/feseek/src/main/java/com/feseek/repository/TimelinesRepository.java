package com.feseek.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.feseek.entity.Timeline;

public interface TimelinesRepository extends JpaRepository<Timeline, Integer> {
	 // イベントIDに対応するタイムライン情報を取得するメソッド
    List<Timeline> findByEvents_id(Integer events_id);

}
