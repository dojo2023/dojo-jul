package com.feseek.repository;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.feseek.entity.Event;
		
public interface EventsRepository extends JpaRepository<Event,Integer > 
{
	//キーワード検索用メソッド
	List<Event> findByEvent_Name(String event_name);
	//詳細検索用
	List<Event> findByGenreAndPrefectureAndDateAndSeasonAndDetail(String genre, String prefecture, LocalDate date, String season, String detail);

}
