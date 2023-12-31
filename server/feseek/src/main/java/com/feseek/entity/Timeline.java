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
@AllArgsConstructor
@NoArgsConstructor
@Data
@Table(name="timelines")
public class Timeline {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer id;
	
	@Column(name="events_id")
	@NonNull
	private Integer eventsId;
	
	// events_idを外部キーとして取得
    @ManyToOne
    @JoinColumn(name = "events_id", referencedColumnName = "id", insertable = false, updatable = false)
    private Event event;

	
	@NonNull
	private String infomation;
	

}
