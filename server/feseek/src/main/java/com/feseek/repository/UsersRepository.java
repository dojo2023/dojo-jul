package com.feseek.repository;


import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.feseek.entity.User;

public interface UsersRepository extends JpaRepository<User, String> {

    // ユーザー名とパスワードを使用してユーザー情報を取得するためのメソッド
    Optional<User> findByIdAndPassword(String id, String password);
    
    // メールアドレスを使用してユーザー情報を取得するためのメソッド
    List<User> findByE_mail(String eMail);

    // ユーザー名またはメールアドレスを使用してユーザー情報を取得するためのメソッド
    Optional<User> findByUser_nameOrE_mail(String userName, String eMail);
    
    //種別IDを使用してユーザー種別を取得するためのメソッド（いらなければ削除してよし）
    Optional<User> findByCategories_id(Integer categoriesId);
}
