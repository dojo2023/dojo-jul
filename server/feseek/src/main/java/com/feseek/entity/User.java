package com.feseek.entity;


import jakarta.persistence.Entity;
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
@Table(name="users")

public class User {
	//ID列の指定
	@Id
	@NonNull
	private String id;
	@NonNull
	private String password;
	@NonNull
	private String e_mail;
	@NonNull
	private String user_name;
	@NonNull
	private Integer categories_id;
}
