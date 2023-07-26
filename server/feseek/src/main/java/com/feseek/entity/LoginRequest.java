package com.feseek.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
/**
 * ログインに必要な情報受取るためのBean
 *
 */
public class LoginRequest {

	//ID
	private String id;
	
	//password
	private String password;
}
