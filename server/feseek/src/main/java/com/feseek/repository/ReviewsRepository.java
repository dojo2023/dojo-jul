package com.feseek.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.feseek.entity.Review;

public interface ReviewsRepository extends JpaRepository<Review, Integer> {

	//イベント詳細ページ内口コミ一覧(イベントIDで完全一致検索)
	List<Review> findByEventId(Integer eventsId);
	
	//自分が投稿した口コミ一覧(ユーザIDで完全一致検索)
	List<Review> findByUserId(String userId);
	
	
}
