package com.feseek.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.feseek.entity.User;

public interface UsersRepository extends JpaRepository<User, String> {

    // ユーザー名とパスワードを使用してユーザー情報を取得するためのメソッド
   //Optional<User> findByIdAndPassword(String id, String password);
    
    // メールアドレスを使用してユーザー情報を取得するためのメソッド
   //List<User> findByEMail(String eMail);

    // ユーザー名またはメールアドレスを使用してユーザー情報を取得するためのメソッド
    //Optional<User> findByUserNameOrEMail(String userName, String eMail);
    
    //種別IDを使用してユーザー種別を取得するためのメソッド（いらなければ削除してよし）
    //Optional<User> findByCategoriesId(Integer categoriesId);
}
