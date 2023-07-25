package com.feseek.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.feseek.entity.Event;
		
public interface EventsRepository extends JpaRepository<Event,Integer > 
{
	//キーワード検索用メソッド
	//List<Event> findByEvent_nameOrOpenTimeOrAddressOrAccessOrCostsOrDetailOrOrganizerOrContactAddress(String event_name, String open_time, String address, 
	       // String access, String costs, String detail, 
	       // String organizer, String contact_address);
	//詳細検索用
	//List<Event> findByGenreAndPrefectureAndDateAndSeasonAndDetail(String genre, String prefecture, LocalDate date, String season, String detail);

}
