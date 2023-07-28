package com.feseek.entity;


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
@AllArgsConstructor
@Data
@Table(name="genres")
@NoArgsConstructor
public class Genre {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@Column(name="genre_name")
	@NonNull
	private String genreName;
	
	
	// イベントジャンルとの関連付けを定義
	@NonNull
	@JsonIgnore
    @OneToMany(mappedBy = "genre", cascade = CascadeType.ALL)
    private List<EventGenre> genres;
	
}
