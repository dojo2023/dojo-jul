package com.feseek.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.feseek.entity.Event;
import com.feseek.entity.EventSearch;
import com.feseek.repository.EventsRepository;

@RestController
public class EventSearchRestController 
{
	@Autowired
	private EventsRepository repository;
	
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
	//キーワード検索
	@PostMapping("/api/search")
	protected List<Event> keysearch(@RequestBody EventSearch event)
	{
		String keyword = event.getKeyword();
		
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
	}
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
/*
	    @PostMapping("/api/syousai")
	    protected List<Event> searchEvents(@RequestBody EventSearch event)
	    {
	        Integer areas_id = event.getAreas_id();
	        String season = event.getSeason();
	        
	        // もしseasonがnullの場合、空文字列に設定して検索条件から除外する
	        if (season == null)
	        {
	            season = "";
	        }

	        return repository.findByAreasIdAndSeason(areas_id, season);
	    }

	    // 他のControllerメソッドやRepositoryの定義
	     */
	@PostMapping("/api/syousai")
	protected List<Event> searchEvents(@RequestBody EventSearch event) {
	    Integer areas_id = event.getAreas_id();
	    String season = event.getSeason();

	    if (areas_id != null && season != null) {
	        // areas_idとseasonの両方が指定されている場合
	        return repository.findByAreasIdAndSeason(areas_id, season);
	    } else if (areas_id != null) {
	        // areas_idのみが指定されている場合
	        return repository.findByAreasId(areas_id);
	    } else if (season != null) {
	        // seasonのみが指定されている場合
	        return repository.findBySeason(season);
	    } else {
	        // どちらも指定されていない場合は空のリストを返す
	    	 return repository.findAll(); 
	    }
	}
	//このように修正することで、areas_idとseasonのどちらか一方だけを指定して検索することができるようになります。seasonが含まれていない場合は、その条件を無視してareas_idのみで検索を行います。また、どちらも指定されていない場合は空のリストを返すことで、全てのイベントを取得することもできます。







	}
