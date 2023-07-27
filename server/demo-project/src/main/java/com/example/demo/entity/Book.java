package com.example.demo.entity;

import java.util.List;

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
import lombok.ToString;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@Table(name="books")

public class Book {
	
	//IDの列指定
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name = "id")
	private Integer id;
	
	//名前
	@Column(name = "name")
	private String name;
	
	//著者
	@Column(name = "author", nullable = false)
	private String author;
	
	//概要
	@Column(name = "overview")
	private String overview;
	

	@OneToMany(mappedBy="book", cascade = CascadeType.ALL)
//	@JsonIgnore
	@ToString.Exclude
	private List<Review> abc;
	
}
