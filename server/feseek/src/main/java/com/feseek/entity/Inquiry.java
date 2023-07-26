//package com.feseek.entity;
//
//import java.util.List;
//
//import jakarta.persistence.CascadeType;
//import jakarta.persistence.Entity;
//import jakarta.persistence.GeneratedValue;
//import jakarta.persistence.GenerationType;
//import jakarta.persistence.Id;
//import jakarta.persistence.OneToMany;
//import jakarta.persistence.Table;
//import lombok.AllArgsConstructor;
//import lombok.Data;
//import lombok.NoArgsConstructor;
//import lombok.NonNull;
//
//@Entity
//@Data
//@Table(name = "inquiries")
//@NoArgsConstructor
//@AllArgsConstructor
//public class Inquiry {
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Integer id;
//    @NonNull
//    private String userId;
//    @NonNull
//    private String subject;
//    @NonNull
//    private String inquiry;
//
//    // 問い合わせの返信リスト 1対多の関係のやつ
//    @OneToMany(cascade = CascadeType.ALL, mappedBy = "inquiry")
//    private List<InquiryReply> inquiryReplies;
//}





