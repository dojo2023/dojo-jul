
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
	 	List<Event> findByAreasId(Integer areas_id);
	    List<Event> findBySeason(String season);
	    List<Event> findByStartDate(Date start_date);
	    List<Event> findByAreasIdAndSeason(Integer areas_id,String seasons);
	    List<Event> findByAreasIdAndSeasonAndStartDate(Integer areas_id, String season,Date startdate);
	    List<Event> findByIdIn(List<Integer> eventIds);
	    List<Event> findBySeasonAndStartDate(String season, Date startDate);
	    List<Event>  findByAreasIdAndStartDate(Integer areas_id,Date startDate);
	    List<Event> findByAreasIdAndSeasonAndStartDateAndIdIn(Integer areasId, String season, Date startDate, List<Integer> eventIds);

	    List<Event> findByAreasIdAndSeasonAndIdIn(Integer areasId, String season, List<Integer> eventIds);

	    List<Event> findBySeasonAndStartDateAndIdIn(String season, Date startDate, List<Integer> eventIds);


	    List<Event> findByAreasIdAndStartDateAndIdIn(Integer areasId, Date startDate, List<Integer> eventIds);

	    List<Event> findByAreasIdAndIdIn(Integer areasId, List<Integer> eventIds);

	    List<Event> findBySeasonAndIdIn(String season, List<Integer> eventIds);

	    List<Event> findByStartDateAndIdIn(Date startDate, List<Integer> eventIds);
	
	Optional<Event> findById(Integer id);
	
	//1人の主催者が投稿したイベント一覧表示
	List<Event> findByUsersId(String usersId);

}