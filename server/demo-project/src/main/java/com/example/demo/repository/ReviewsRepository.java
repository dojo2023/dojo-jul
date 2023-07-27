package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.Review;

public interface ReviewsRepository extends JpaRepository<Review, Integer>{

}
