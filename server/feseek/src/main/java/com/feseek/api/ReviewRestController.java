package com.feseek.api;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.feseek.entity.Event;
import com.feseek.entity.Review;
import com.feseek.repository.ReviewsRepository;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;

@RestController
public class ReviewRestController {
	//口コミ
	@Autowired
	private ReviewsRepository repository;
//		
	//イベント詳細ページでの口コミ一覧表示(並び替えは後でする)
	@GetMapping("/api/review/show/{eventsId}")
    protected List<Review> events_review(@PathVariable Integer eventsId) {
        return repository.findByEventId(eventsId);
    }
//
//	
	//投稿
	@PostMapping("/api/review/post")
	public ResponseEntity<Review> createReview(@RequestBody Review newReview) {
	    // イベントに口コミを紐づける
	    if (newReview.getEvent() == null) {
	        Event event = new Event();
	        event.setId(newReview.getEventsId());
	        newReview.setEvent(event);
	    }

	    // 口コミをデータベースに保存
	    Review createdReview = repository.save(newReview);
	    return ResponseEntity.ok(createdReview);
	}


	
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
	
	@PutMapping("/api/review/{id}")
    public ResponseEntity<String> updateReview(@PathVariable Integer id, @RequestBody Review updatedReview) {
        // 対象のIDに対応する口コミが存在するか確認
        Optional<Review> existingReviewOptional = repository.findById(id);
        if (existingReviewOptional.isEmpty()) {
            return new ResponseEntity<>("Review not found", HttpStatus.NOT_FOUND);
        }

        // 更新対象の口コミエンティティを取得
        Review existingReview = existingReviewOptional.get();

        // リクエストのデータで口コミエンティティのフィールドを更新
        existingReview.setSatisfaction(updatedReview.getSatisfaction());
        existingReview.setSecurity(updatedReview.getSecurity());
        existingReview.setAgain(updatedReview.getAgain());
        existingReview.setAtmosphere(updatedReview.getAtmosphere());
        existingReview.setContinuation(updatedReview.getContinuation());
        existingReview.setRevTitle(updatedReview.getRevTitle());
        existingReview.setComment(updatedReview.getComment());
        existingReview.setRevImage(updatedReview.getRevImage());

        // 更新した口コミエンティティをデータベースに保存
        repository.save(existingReview);

        return new ResponseEntity<>("Review updated successfully", HttpStatus.OK);
    }

	
	
	//削除
	@DeleteMapping("/api/review/{id}")
    public ResponseEntity<Void> deleteReview(@PathVariable Integer id) {
        // 指定されたIDの口コミをデータベースから取得
        Optional<Review> optionalReview = repository.findById(id);
        if (optionalReview.isEmpty()) {
            // 指定されたIDの口コミが存在しない場合、404 Not Foundを返す
            return ResponseEntity.notFound().build();
        }

        // 口コミを削除
        repository.deleteById(id);
        // 削除成功時は204 No Contentを返す
        return ResponseEntity.noContent().build();
    }
	
	
	

}
