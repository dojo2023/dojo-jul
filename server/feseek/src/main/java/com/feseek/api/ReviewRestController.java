package com.feseek.api;

import java.util.Collections;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.feseek.entity.Review;
import com.feseek.repository.ReviewsRepository;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;

@RestController
public class ReviewRestController {
	//口コミ
	@Autowired
	private ReviewsRepository repository;
		
	// イベント詳細ページでの口コミ一覧表示(並び替えは後でする)
//    @GetMapping("/api/review/show")
//    protected List<Review> events_review(@RequestParam Integer events_id) {
//        return repository.findByEventId(events_id);
//    }
//
//	
//	//投稿
//	@PostMapping("/api/review/post")
//	protected Review add(@RequestBody Review Review) {
//		repository.save(Review);
//		return Review;
//	}
	
	//自分が投稿した口コミ一覧表示(並び替えは後でする)
	@GetMapping("/api/review/mylist")
	public List<Review> getMyReviews(HttpServletRequest request) {
	    // ログインしたユーザーのIDを取得
	    HttpSession session = request.getSession(false);
	    if (session == null || session.getAttribute("id") == null) {
	        return Collections.emptyList();
	    }

	    String userId = (String) session.getAttribute("id");
		// ユーザーIDを使って自分の投稿した口コミを取得する
	    return repository.findByUserId(userId);

	}




	
//	//編集
//	@PostMapping("/api/review/edit")
//	protected Review edit(@RequestBody Review Review) {
//		//対象のIDが存在するかチェックする
//		repository.save(Review);
//		return Review;
//	}
//	
//	
//	//削除
//	@PostMapping("/api/review/delete")
//	protected Review delete(@RequestBody Review Review) {
//		repository.delete(Review);
//		return Review;
//	}
	
	
	

}
