package com.feseek.api;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.feseek.entity.LoginRequest;
import com.feseek.entity.User;
import com.feseek.repository.UsersRepository;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;

	//ログイン・ログアウト
@RestController
@RequestMapping("/api")
public class LoginRestController {

    @Autowired
    private UsersRepository usersRepository;

    // ログイン
    @PostMapping("/login")
//    public ResponseEntity<String> login(@RequestBody Map<String, String> loginRequest, HttpServletRequest request) {
    public ResponseEntity<String> login(@RequestBody LoginRequest loginRequest, HttpServletRequest request) {
    	//String id = loginRequest.get("id");
        //String password = loginRequest.get("password");
    	String id = loginRequest.getId();
    	String password = loginRequest.getPassword();
    	
        Optional<User> optionalUser = usersRepository.findById(id);
        User user = optionalUser.orElse(null); // デフォルト値としてnullを設定

        if (user != null && user.getPassword().equals(password)) {
            // 認証成功
            HttpSession session = request.getSession();
            session.setAttribute("userId", id); // UserIDをセッションに格納
            //System.out.println(id); セッション確認ID
            session.setAttribute("categoriesId", user.getCategoriesId().toString()); // 種別IDをセッションに格納
            //System.out.println(user.getCategoriesId()); セッション確認categoriesID
            String category_id = (String)session.getAttribute("categoriesId");
            
            return new ResponseEntity<>(category_id, HttpStatus.OK);
        } else {
            // 認証失敗
//            return new ResponseEntity<>("Invalid credentials", HttpStatus.UNAUTHORIZED);
            return new ResponseEntity<>("Invalid credentials", HttpStatus.OK);
        }
    }

    // ログアウト
    @PostMapping("/logout")
    public ResponseEntity<String> logout(HttpServletRequest request) {
        HttpSession session = request.getSession(false);
        if (session != null) {
            session.removeAttribute("id");
            session.removeAttribute("categoriesId"); // セッションから種別IDを削除
            session.invalidate(); // セッションを無効化
        }
        return new ResponseEntity<>("Logout successful", HttpStatus.OK);
    }
}

