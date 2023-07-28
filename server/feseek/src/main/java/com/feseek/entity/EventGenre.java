package com.feseek.entity;


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
	
	@Column(name="events_id")
	@NonNull
	private Integer eventsId;
	
	//eventテーブルとの関連付け
    @ManyToOne
    @JoinColumn(name = "events_id", referencedColumnName = "id", insertable = false, updatable = false)
    private Event event;
	
	@Column(name="genres_id")
	@NonNull
	private Integer genresId;
	
	//genreテーブルとの関連付け
    @ManyToOne
    @JoinColumn(name = "genres_id", referencedColumnName = "id", insertable = false, updatable = false)
    private Genre genre;
	
	
}
