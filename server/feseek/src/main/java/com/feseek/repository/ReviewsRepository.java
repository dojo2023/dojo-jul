package com.feseek.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.feseek.entity.Review;

public interface ReviewsRepository extends JpaRepository<Review, Integer> {

	//イベント詳細ページ内口コミ一覧(イベントIDで完全一致検索)
	//List<Review> findEventsReview(Integer events_id);
	List<Review> findByEvents_id(Integer events_id);
	
	//並び替えあり
//	List<Review> findEventsReview(Integer events_id, Sort sort);
	
	//自分が投稿した口コミ一覧(ユーザIDで完全一致検索)
	List<Review> findByUserID(Integer users_id);
	
	//並び替えあり
//	List<Review> findMyReview(Integer users_id, Sort sort);
	
}
