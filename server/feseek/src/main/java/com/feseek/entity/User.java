package com.feseek.entity;


import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@Table(name = "users")

public class User {
	//ID列の指定
	@Id
	@NonNull
	private String id;
	@NonNull
	private String password;
	
	@NonNull
	@Column(name="e_mail")
	private String eMail;
	
	@Column(name="user_name")
	@NonNull
	private String userName;
	
	@Column(name="categories_id")
	@NonNull
	private Integer categoriesId;
	
	@OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<Review> reviews;
}
