package com.feseek.entity;

import java.sql.Date;

import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name="events")
public class Event 
{
	private Integer id;
	private String users_id;
	private String event_name;
	private Date start_date;
	private Date end_date;
	private String open_time; 
	private String address;
	private String access;
	private String map;
	private String costs;
	private Integer areas_id;
	private String detail;
	private String organizer;
	private String url;
	private String url_first;
	private String url_second;
	private String url_third;
	private String url_fourth;
	private String url_fifth;
	private String contact_address;
	
}
