
package com.feseek.repository;

import java.sql.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.feseek.entity.Event;

public interface EventsRepository extends JpaRepository<Event,Integer > 
{
	//キーワード検索用メソッド
	List<Event>findByEventNameLikeOrOpenTimeLikeOrAddressLikeOrAccessLikeOrCostsLikeOrOrganizerLikeOrDetailLikeOrSeasonLikeOrContactAddressLike(String event_name,String openTime,String address,String access,String costs,String organizer,String detail,String season,String contactAddress);

	
	//詳細検索用
	List<Event> findByGenreAndPrefectureAndDateAndSeasonAndDetail(String genre, String prefecture, Date date, String season, String detail);

	//List<Event> findByGenre(String genre);

	//イベント詳細表示
	Optional<Event> findById(Integer id);

}