package com.feseek.entity;

import java.sql.Date;
import java.time.LocalDate;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
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
	
	@Column(name="users_id")
	@NonNull
	private String usersId;
	
	@Column(name="event_name")
	@NonNull
	private String eventName;
	
	@Column(name="start_date")
	@NonNull
	private Date startDate;
	
	@Column(name="end_date")
	@NonNull
	private Date endDate;
	
	@Column(name="open_time")
	@NonNull
	private String openTime; 
	
	@NonNull
	private String address;
	@NonNull
	private String access;
	@NonNull
	private String map;
	@NonNull
	private String costs;
	
	@Column(name="areas_id")
	@NonNull
	private Integer areasId;
	@NonNull
	private String detail;
	@NonNull
	private String organizer;
	@NonNull
	private String season;
	//------ここまで必須入力項目---------
	
	// タイムラインとの関連付けを定義
	@JsonIgnore
    @OneToMany(mappedBy = "event", cascade = CascadeType.ALL)
    private List<Timeline> timelines;
	
	private String url;
	
	@Column(name="url_first")
	private String urlFirst;
	
	@Column(name="url_second")
	private String urlSecond;
	
	@Column(name="url_third")
	private String urlThird;
	
	@Column(name="url_fourth")
	private String urlFourth;
	
	@Column(name="url_fifth")
	private String urlFifth;
	
	@Column(name="contact_address")
	private String contactAddress;
	
	private String genre;
	private String prefecture;
	private LocalDate date;

}
