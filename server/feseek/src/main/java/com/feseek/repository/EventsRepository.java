package com.feseek.repository;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.feseek.entity.Event;

public interface EventsRepository extends JpaRepository<Event,Integer > 
{
	//キーワード検索用メソッド
	List<Event>findByKeywordSearch(String event_name,String start_date,String end_date,String open_time,String address,String access,String costs,String detail,String organizer,String contact_address);
	//詳細検索用
	List<Event> findByGenreAndPrefectureAndDateAndSeasonAndDetail(String genre, String prefecture, LocalDate date, String season, String detail);
}
