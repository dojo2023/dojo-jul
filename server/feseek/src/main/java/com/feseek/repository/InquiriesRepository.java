package com.feseek.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.feseek.entity.Inquiry;

public interface InquiriesRepository extends JpaRepository<Inquiry, Integer> {

}
