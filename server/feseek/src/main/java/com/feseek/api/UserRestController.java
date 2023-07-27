package com.feseek.api;

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
//    //ユーザーの新規登録　出来なかったやつ
//    @PostMapping("/register")
//    //ここのUserが違うかも。
//  public String registerUser(@RequestBody User request) {
//    
//        // ユーザー情報のバリデーションを行います（省略）。
//        
//      //   UserRegistrationRequestからUserエンティティを作成します。
//        User user = new User();
//        user.setUserName(request.getUserName());
//        user.setMail(request.getMail());
//        user.setPassword(request.getPassword());
//        user.setCategoriesId(request.getCategoriesId());
//
//    //     データベースにユーザーを保存します。
//        usersRepository.save(user);
//
//        return "ユーザーが正常に登録されました。";
//    }
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
// // ユーザーの削除　出来なかったやつ
//    @DeleteMapping("delete/users/{id}")
//    public String deleteUser(@PathVariable String id) {
//        // 指定されたIDのユーザーをデータベースから取得します。
//        Optional<User> optionalUser = usersRepository.findById(id);
//
//        // ユーザーが存在するか確認します。
//        if (optionalUser.isPresent()) {
//            User user = optionalUser.get();
//            usersRepository.delete(user);
//            return "ユーザーが正常に削除されました。";
//        } else {
//            return "指定されたIDのユーザーは見つかりませんでした。";
//        }
//    }
  //退会
  	@PostMapping("/delete/{id}")
  	protected User delete(@RequestBody User user) {
  		usersRepository.delete(user);
  		return user;
  	}	
  
    
    // ユーザー情報の更新 出来なかったやつ
//    @PutMapping("update/users/{id}")
//    public String updateUser(@PathVariable String id, @RequestBody User updatedUser) {
//        // 指定されたIDのユーザーをデータベースから取得します。
//        Optional<User> optionalUser = usersRepository.findById(id);
//
//        // ユーザーが存在するか確認します。
//        if (optionalUser.isPresent()) {
//            User user = optionalUser.get();
//            // パスワード、メールアドレス、ユーザー名を更新します。
//            user.setPassword(updatedUser.getPassword());
//            user.setMail(updatedUser.getMail());
//            user.setUserName(updatedUser.getUserName());
//            usersRepository.save(user);
//            return "ユーザー情報が正常に更新されました。";
//        } else {
//            return "指定されたIDのユーザーは見つかりませんでした。";
//        }
//    }
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
}