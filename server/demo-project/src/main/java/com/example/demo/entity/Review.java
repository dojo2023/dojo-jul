package com.example.demo.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@Table(name="reviews")
public class Review {
	
	//IDの列指定
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name = "id")
	private Integer id;
	
	@ManyToOne
	@JsonIgnore
	@JoinColumn(name = "book_id")
	//Book
	private Book book;
	
	//タイトル
	@Column(name = "title")
	private String title;
	
	//内容
	@Column(name = "content")
	private String content;
		
	//評価
	@Column(name = "rate")
	private Integer rate;

}