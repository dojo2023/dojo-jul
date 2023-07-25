package com.feseek.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.feseek.entity.User;

public interface UsersRepository extends JpaRepository<User, String> {
	// ユーザIDを使用してユーザー情報を取得するためのメソッド
    //Optional<User> findById(String id);

    // ユーザー名とパスワードを使用してユーザー情報を取得するためのメソッド
    //Optional<User> findByIdAndPassword(String id, String password);
    
    // メールアドレスを使用してユーザー情報を取得するためのメソッド
    //List<User> findByE_mail(String e_mail);

    // ユーザー名またはメールアドレスを使用してユーザー情報を取得するためのメソッド
    //Optional<User> findByUser_nameOrE_mail(String user_name, String e_mail);
    
    //種別IDを使用してユーザー種別を取得するためのメソッド（いらなければ削除してよし）
    //Optional<User> findByCategories_id(Integer Categories_id);
}
