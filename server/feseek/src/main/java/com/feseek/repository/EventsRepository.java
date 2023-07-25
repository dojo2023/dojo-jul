package com.feseek.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.feseek.entity.Event;

public interface EventsRepository extends JpaRepository<Event,Integer > 
{
	//キーワード検索用メソッド
//	List<Event>findByKeywordSearch(String event_name,String open_time,String address,String access,String costs,String detail,String organizer,String contact_address);
	//List<Event>findByKeyword(String keyword);

	
	//詳細検索用
//	List<Event> findByGenreAndPrefectureAndDateAndSeasonAndDetail(String genre, String prefecture, Date date, String season, String detail);

	//List<Event> findByGenre(String genre);

}
