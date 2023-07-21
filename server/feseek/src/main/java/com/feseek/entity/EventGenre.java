package com.feseek.entity;

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
	private Integer id;
	private Integer events_id;
	private Integer genres_id;
}
