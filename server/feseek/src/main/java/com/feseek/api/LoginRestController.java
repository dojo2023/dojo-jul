package com.feseek.api;

import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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

	    //ログイン
	    @PostMapping("/login")
	    public ResponseEntity<String> login(@RequestBody Map<String, String> loginRequest, HttpServletRequest request) {
	        String id = loginRequest.get("id");
	        String password = loginRequest.get("password");

	        Optional<User> optionalUser = usersRepository.findById(id);
	        User user = optionalUser.orElse(null); // デフォルト値としてnullを設定

	        if (user != null && user.getPassword().equals(password)) {
	            // 認証成功
	            HttpSession session = request.getSession();
	            session.setAttribute("id", id);
	            return new ResponseEntity<>("Login successful", HttpStatus.OK);
	        } else {
	            // 認証失敗
	            return new ResponseEntity<>("Invalid credentials", HttpStatus.UNAUTHORIZED);
	        }
	    }

	    //ログアウト
	    @PostMapping("/logout")
	    public ResponseEntity<String> logout(HttpServletRequest request) {
	        HttpSession session = request.getSession(false);
	        if (session != null) {
	            session.removeAttribute("id");
	            session.invalidate(); // セッションを無効化
	        }
	        return new ResponseEntity<>("Logout successful", HttpStatus.OK);
	    }

}
