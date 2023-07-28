package com.feseek.api;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.feseek.entity.User;
import com.feseek.repository.UsersRepository;

@RestController
@RequestMapping("/api")
public class UserRestController {

    private UsersRepository usersRepository;

    public UserRestController(UsersRepository userRepository) {
        this.usersRepository = userRepository;
    }

    //ユーザーの新規登録
    @PostMapping("/create")
    protected ResponseEntity<User> createUser(@RequestBody User newUser) {
        // 新しいユーザーを保存する前に、既存のIDでユーザーが存在しないことを確認する
        Optional<User> existingUser = usersRepository.findById(newUser.getId());
        if (existingUser.isPresent()) {
            // すでに同じIDのユーザーが存在する場合はエラーレスポンスを返す
            return ResponseEntity.status(HttpStatus.CONFLICT).build();
        } else {
            User createdUser = usersRepository.save(newUser);
            return ResponseEntity.ok(createdUser);
        }	
    }

  //退会
  	@PostMapping("/delete/{id}")
  	protected User delete(@RequestBody User user) {
  		usersRepository.delete(user);
  		return user;
  	}	

  //更新
  	@PostMapping("/update/{id}")
  	protected ResponseEntity<User> updateUser(@PathVariable String id, @RequestBody User updateUser) {
  		//対象のIDが存在するかチェックする
  		Optional<User> existingUser = usersRepository.findById(id);
        if (existingUser.isPresent()) {
        	User updatedUser = usersRepository.save(updateUser);
        	return ResponseEntity.ok(updatedUser);
        } else {
            // IDに対応するユーザーが見つからない場合はエラーレスポンスを返す
            return ResponseEntity.notFound().build();
        }	
  	}
  	// パスワードリセット
  	// ID,メールアドレスを入力してもらい正しければ新しいパスワードを設定してもらう。
  	@PostMapping("/reset-password")
    protected ResponseEntity<String> resetPassword(@RequestBody Map<String, String> requestMap) {
        String userId = requestMap.get("userId");
        String userMail = requestMap.get("userMail");
        String newPassword = requestMap.get("newPassword");

        // ユーザーの情報を取得するためにメールアドレスを使用する
        List<User> userList = usersRepository.findByMail(userMail);

        // ユーザーが存在するかチェックする
        for (User user : userList) {
            if (user.getId().equals(userId)) {
                // 新しいパスワードを設定する
                user.setPassword(newPassword);
                usersRepository.save(user);

                return ResponseEntity.ok("Password reset successful.");
            }
        }

        // ユーザーが見つからない場合はエラーレスポンスを返す
        return ResponseEntity.notFound().build();
    }
  	//IDリセット
  	//パスワード、メールアドレスを入力してもらい正しければ新しいIDを設定してもらう。
  	@PostMapping("/reset-id")
  	protected ResponseEntity<String> resetId(@RequestBody Map<String, String> requestMap) {
  	    String userMail = requestMap.get("userMail");
  	    String password = requestMap.get("password");
  	    String newUserId = requestMap.get("newUserId");

  	    // ユーザーの情報を取得するためにメールアドレスを使用する
  	    List<User> userList = usersRepository.findByMail(userMail);

  	    // ユーザーが存在し、パスワードが正しいかチェックする
  	    for (User user : userList) {
  	    	
  	    	System.out.println("userあり");

 	    	System.out.println(user.getPassword());
 	    	System.out.println(password);
  	        if (user.getPassword().equals(password)) {

  	        	
  	 	    	System.out.println("パスワードチェックK");
  	 	    	
  	 	    	
  	 	      	            // 新しいユーザーIDを設定する
  	            user.setId(newUserId);
  	            usersRepository.save(user);

  	            return ResponseEntity.ok("新しいIDに変更できました");
  	        }
  	    }

  	    // ユーザーが見つからない場合またはパスワードが間違っている場合はエラーレスポンスを返す
  	    return ResponseEntity.ok().body("メールかパスワードが間違ってます。");
  	}
}