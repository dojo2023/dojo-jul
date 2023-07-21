//package com.feseek.api;
//
//import java.util.Map;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//import com.feseek.entity.User;
//import com.feseek.repository.UsersRepository;
//
//	//ログイン
//	@RestController
//	@RequestMapping("/api")
//	public class LoginRestController {
//
//	    @Autowired
//	    private UsersRepository usersRepository;
//
//	    @PostMapping("/login")
//	    public ResponseEntity<String> login(@RequestBody Map<String, String> loginRequest) {
//	        String id = loginRequest.get("id");
//	        String password = loginRequest.get("password");
//
////	       // User user = usersRepository.findById(id);
////
////	        //if (user != null && user.getPassword().equals(password)) {
////	            // 認証成功
////	            return new ResponseEntity<>("Login successful", HttpStatus.OK);
////	        } else {
////	            // 認証失敗
////	            return new ResponseEntity<>("Invalid credentials", HttpStatus.UNAUTHORIZED);
////	        }
//	    }
//	}
	
	//ログアウト

