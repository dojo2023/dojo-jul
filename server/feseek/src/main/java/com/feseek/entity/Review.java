package com.feseek.entity;

import java.sql.Date;

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
import lombok.NonNull;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@Table(name="reviews")
public class Review {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@Column(name="users_id")
	@NonNull
	private String usersId;
	
	//eventテーブルとの関連付け
    @ManyToOne
    @JoinColumn(name = "users_id", referencedColumnName = "id", insertable = false, updatable = false)
    private User user;
	
	@Column(name="events_id")
	@NonNull
	private Integer eventsId;
	
	//eventテーブルとの関連付け
    @ManyToOne
    @JoinColumn(name = "events_id", referencedColumnName = "id", insertable = false, updatable = false)
    private Event event;
	
	
	@NonNull
	private Integer satisfaction;
	
	@NonNull
	private Integer security;
	
	@NonNull
	private Integer again;
	
	@NonNull
	private Integer atmosphere;
	
	@NonNull
	private Integer continuation;
	
	@Column(name="rev_date")
	@NonNull
	private Date revDate;
	
	@Column(name="rev_title")
	@NonNull
	private String revTitle;
	
	@NonNull
	private String comment;
	
	@Column(name="rev_image")
	private String revImage;
	

}
