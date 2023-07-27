package com.feseek.api;

import java.sql.Date;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.feseek.entity.Event;
import com.feseek.entity.EventGenre;
import com.feseek.entity.EventSearch;
import com.feseek.entity.Genre;
import com.feseek.repository.EventGenresRepository;
import com.feseek.repository.EventsRepository;
import com.feseek.repository.GenresRepository;

@RestController
public class EventSearchRestController {

    @Autowired
    private EventsRepository eventsRepository;
    @Autowired
    private EventGenresRepository eventGenresRepository;
    @Autowired
    private GenresRepository genresRepository;

    // キーワード検索
    @PostMapping("/api/search")
    protected List<Event> キーワード検索(@RequestBody EventSearch event) {
        String keyword = event.getKeyword();

        return eventsRepository.findByEventNameLikeOrOpenTimeLikeOrAddressLikeOrAccessLikeOrCostsLikeOrOrganizerLikeOrDetailLikeOrSeasonLikeOrContactAddressLike
                ("%" + keyword + "%"
                        , "%" + keyword + "%"
                        , "%" + keyword + "%"
                        , "%" + keyword + "%"
                        , "%" + keyword + "%"
                        , "%" + keyword + "%"
                        , "%" + keyword + "%"
                        , "%" + keyword + "%"
                        , "%" + keyword + "%"
                );
    }

    // イベント一覧
    @GetMapping("api/event")
    protected List<Event> イベント一覧() 
    {
        return eventsRepository.findAll();
    }

    // 詳細検索
    @PostMapping("/api/syousai")
    protected List<Event> search(@RequestBody EventSearch event)
    {
    	Integer areasId = event.getAreas_id();
    	String  season = event.getSeason();
    	Date    startDate = event.getStartDate();
    	String  genreName = event.getGenre();

    	 if (genreName != null) 
    	 {
    	    // ジャンル名に基づいてイベントを検索
    	     Genre genre = genresRepository.findByGenreName(genreName);
    	      if (genre != null)
    	      {
    	         List<EventGenre> eventGenres = eventGenresRepository.findByGenresId(genre.getId());
    	          if (!eventGenres.isEmpty())
    	          {
    	             return eventsRepository.findByIdIn(eventGenres.stream().map(EventGenre::getEventsId).collect(Collectors.toList()));
    	          }
    	      }
    	            // ジャンルが見つからないか、該当するイベントが存在しない場合は空のリストを返す
    	            return Collections.emptyList();
    	  } 
    	 else
    	 {
    	    if (areasId != null && season != null && startDate != null) 
    	    {
    	      return eventsRepository.findByAreasIdAndSeasonAndStartDate(areasId, season, startDate);
    	    } 
    	    else if (areasId != null && season != null)
    	    {
    	      return eventsRepository.findByAreasIdAndSeason(areasId, season);
    	    }
    	    else if (areasId != null)
    	    {
    	      return eventsRepository.findByAreasId(areasId);
    	    } 
    	    else if (season != null) 
    	    {
    	      return eventsRepository.findBySeason(season);
    	    } 
    	    else if (startDate != null) 
    	    {
    	      return eventsRepository.findByStartDate(startDate);
    	    } 
    	    else 
    	    {
    	      return eventsRepository.findAll();
    	    }
    	 }
    	}
    }
	
	/*
	//キーワード検索(テストプログラム)
	@GetMapping("/api/testsearch")
	protected List<Event> testsearch()
	{	
	 String keyword = "";//ここを変えると検索結果変わる

    return repository.findByEventNameLikeOrOpenTimeLikeOrAddressLikeOrAccessLikeOrCostsLikeOrOrganizerLikeOrDetailLikeOrSeasonLikeOrContactAddressLike
    		("%" + keyword + "%"
    		,"%" + keyword + "%"
    		,"%" + keyword + "%"
    		,"%" + keyword + "%"
    		,"%" + keyword + "%"
    		,"%" + keyword + "%"
    		,"%" + keyword + "%"
    		,"%" + keyword + "%"
    		,"%" + keyword + "%"
    		);
    		//一覧表示するもの
	      //return repository.findAll();
	}
*/
	/*
	 // ジャンル、都道府県、日付、季節を入力して検索（画面設計図利用者側1ページ)
    @PostMapping("/api/syousai")
    protected List<Event> searchEvents
    (
        @RequestParam(required = false) 
        String genre,
        @RequestParam(required = false) 
        Integer areas_id,
        @RequestParam(required = false) 
        Date date,
        @RequestParam(required = false) 
        String season,
        @RequestParam(required = false) 
        String detail
    )
    
   {	
    	//return repository.findByGenre(null);
    	//return repository. findBySeason(season);
    	return repository.findByAreasIdAndSeason(1,"夏");
    	
   
//    	 // 受け取った検索条件に基づいて検索を行う
//        if (genre != null || prefecture != null || date != null || season != null || detail != null) 
//        {
//            // いずれかの条件が選択されている場合は、条件を使って検索を行う
////        	  return repository.findByGenreAndPrefectureAndDateAndSeasonAndDetail
////        			 (genre, prefecture, date, season, detail);
//        	return repository.findByGenre("1");
//        }
//        else 
//        {
//            // どの条件も選択されていない場合は、すべてのイベントを取得
//            return repository.findAll();
//        }
    }
    */

