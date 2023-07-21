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

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@Table(name="reviews")
public class Review {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private String users_id;
	private Integer events_id;
	private Integer satisfaction;
	private Integer security;
	private Integer again;
	private Integer atmosphere;
	private Integer continuation;
	private Date rev_date;
	private String rev_title;
	private String comment;
	private String rev_image;
	

}
