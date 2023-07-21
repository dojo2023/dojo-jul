package com.feseek.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@Table(name="users")

public class User {
	//ID列の指定
	@Id
	private String id;
	private String password;
	private String e_mail;
	private String user_name;
	private Integer categories_id;
}
