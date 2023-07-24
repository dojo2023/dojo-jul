package com.feseek.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.feseek.entity.Genre;

public interface GenresRepository extends JpaRepository<Genre, Integer>
{

}
