package com.feseek.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class EventSearch 
{
	private String keyword;
	private String event_name;
}
/*
//キーワード検索に必要なもの
private String keyword;
private String genre;
private String prefecture;
private LocalDate date;
*/