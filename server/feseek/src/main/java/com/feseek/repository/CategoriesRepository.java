package com.feseek.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.feseek.entity.Category;

public interface CategoriesRepository extends JpaRepository<Category, Integer> {

}
