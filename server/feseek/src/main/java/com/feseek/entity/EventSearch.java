package com.feseek.entity;

import java.sql.Date;

import lombok.Data;

@Data
//@NoArgsConstructor
//@AllArgsConstructor
public class EventSearch 
{
	private String keyword;
	private String Season;
	private Integer Areas_id;
	private Date StartDate;
	private String genre;
}
/*
//キーワード検索に必要なもの

*/