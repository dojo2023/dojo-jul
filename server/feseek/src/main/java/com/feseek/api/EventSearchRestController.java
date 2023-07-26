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
    @GetMapping("/api/syousai")
    protected List<Event> searchEvents
    (
        @RequestParam(required = false) 
        String genre,
        @RequestParam(required = false) 
        String prefecture,
        @RequestParam(required = false) 
        Date date,
        @RequestParam(required = false) 
        String season,
        @RequestParam(required = false) 
        String detail
    )
{
	
        // 受け取った検索条件に基づいて検索を行う
        if (genre != null || prefecture != null || date != null || season != null) 
        {
            // いずれかの条件が選択されている場合は、条件を使って検索を行う
            return repository.findByGenreAndPrefectureAndDateAndSeasonAndDetail
            (
                genre, prefecture, date, season,detail
            );
        }
        else 
        {
            // どの条件も選択されていない場合は、すべてのイベントを取得
            return repository.findAll();
        }
    }
    */
}