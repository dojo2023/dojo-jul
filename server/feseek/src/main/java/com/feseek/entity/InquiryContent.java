package com.feseek.entity;

import java.sql.Date;

import jakarta.persistence.Column;
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
@Table(name="inquiry_contents")
public class  InquiryContent{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@Column(name="inquiries_id")
	@NonNull
	private Integer inquiriesId;
	
	@Column(name="users_id")
	@NonNull
	private String usersId;
	
	@Column(name="inq_date")
	@NonNull
	private Date inqDate;
	@NonNull
	private String inquiry;
	
}
