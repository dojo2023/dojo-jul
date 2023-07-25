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
@Table(name="inquiry_contents")
public class  InquiryReply{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	@NonNull
	private Integer inquiries_id;
	@NonNull
	private String users_id;
	@NonNull
	private Date inq_date;
	@NonNull
	private String subject;
	@NonNull
	private String inquiry;
	
}
