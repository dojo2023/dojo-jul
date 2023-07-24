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
@AllArgsConstructor
@NoArgsConstructor
@Data
@Table(name="reviews")
public class Review {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	@NonNull
	private String users_id;
	@NonNull
	private Integer events_id;
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
	@NonNull
	private Date rev_date;
	@NonNull
	private String rev_title;
	@NonNull
	private String comment;
	
	private String rev_image;
	

}
