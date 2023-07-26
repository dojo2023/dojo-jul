package com.feseek.repository;


import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.feseek.entity.User;

public interface UsersRepository extends JpaRepository<User, String> {

    // ユーザー名とパスワードを使用してユーザー情報を取得するためのメソッド
   Optional<User> findByIdAndPassword(String id, String password);
    
    // メールアドレスを使用してユーザー情報を取得するためのメソッド
   List<User> findByMail(String mail);

    // ユーザー名またはメールアドレスを使用してユーザー情報を取得するためのメソッド
   List<User> findByUserNameOrMail(String userName, String mail);
    
    //種別IDを使用してユーザー種別を取得するためのメソッド（いらなければ削除してよし）
//    Optional<User> findByCategoriesId(Integer categoriesId);
}
