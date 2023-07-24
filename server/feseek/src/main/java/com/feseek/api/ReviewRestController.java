package com.feseek.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.feseek.entity.Review;
import com.feseek.repository.ReviewsRepository;

@RestController
public class ReviewRestController {
	//口コミ
	
	@Autowired
	private ReviewsRepository repository;
		
	//イベント詳細ページでの口コミ一覧表示
	@GetMapping("/api/review/show")
	protected List<Review> events_review(@RequestBody Integer events_id){
		return repository.findEventsReview(events_id);
	}
	
	
	//投稿
	@PostMapping("/api/review/post")
	protected Review add(@RequestBody Review Review) {
		repository.save(Review);
		return Review;
	}
	
	//自分が投稿した口コミ一覧表示
	@GetMapping("/api/review/mylist")
	protected List<Review> user_review(@RequestBody Integer users_id){
		return repository.findMyReview(users_id);
	}
	
	//編集
	@PostMapping("/api/review/edit")
	protected Review edit(@RequestBody Review Review) {
		//対象のIDが存在するかチェックする
		repository.save(Review);
		return Review;
	}
	
	
	//削除
	@PostMapping("/api/review/delete")
	protected Review delete(@RequestBody Review Review) {
		repository.delete(Review);
		return Review;
	}
	
	
	
	

}
