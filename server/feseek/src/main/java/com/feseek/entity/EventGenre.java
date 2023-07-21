package com.feseek.entity;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name="event_genres")
public class EventGenre 
{
	//ID列の指定
		@Id
		@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer id;
	private Integer events_id;
	private Integer genres_id;
}
