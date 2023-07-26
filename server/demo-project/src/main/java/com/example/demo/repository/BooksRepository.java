package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.Book;

public interface BooksRepository extends JpaRepository<Book, Integer> {

	
	//著者名で検索
	List<Book> findByAuthorLike(String author);
	
}
