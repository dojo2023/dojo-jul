package com.feseek.entity;

import java.sql.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name="events")
public class Event 
{
	//ID列の指定
		@Id
		@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer id;
	@NonNull
	private String users_id;
	@NonNull
	private String event_name;
	@NonNull
	private Date start_date;
	@NonNull
	private Date end_date;
	@NonNull
	private String open_time; 
	@NonNull
	private String address;
	@NonNull
	private String access;
	@NonNull
	private String map;
	@NonNull
	private String costs;
	@NonNull
	private Integer areas_id;
	@NonNull
	private String detail;
	@NonNull
	private String organizer;
	@NonNull
	private String season;
	//------ここまで必須入力項目---------
	
	private String url;
	
	private String url_first;
	private String url_second;
	private String url_third;
	private String url_fourth;
	private String url_fifth;
	private String contact_address;
	
	//キーワード検索に必要なもの
	private String keyword;
	private String genre;
	private String prefecture;
	private String date;
	private String season;
}
