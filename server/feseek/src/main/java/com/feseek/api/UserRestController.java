package com.feseek.api;

import java.util.Optional;

import org.springframework.web.bind.annotation.DeleteMapping;
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
    @PostMapping("/register")
    //ここのUserが違うかも。
  public String registerUser(@RequestBody User request) {
    
        // ユーザー情報のバリデーションを行います（省略）。
        
      //   UserRegistrationRequestからUserエンティティを作成します。
        User user = new User();
        user.setUserName(request.getUserName());
        user.setMail(request.getMail());
        user.setPassword(request.getPassword());
        user.setCategoriesId(request.getCategoriesId());

    //     データベースにユーザーを保存します。
        usersRepository.save(user);

        return "ユーザーが正常に登録されました。";
    }
    
 // ユーザーの削除
    @DeleteMapping("delete/users/{id}")
    public String deleteUser(@PathVariable String id) {
        // 指定されたIDのユーザーをデータベースから取得します。
        Optional<User> optionalUser = usersRepository.findById(id);

        // ユーザーが存在するか確認します。
        if (optionalUser.isPresent()) {
            User user = optionalUser.get();
            usersRepository.delete(user);
            return "ユーザーが正常に削除されました。";
        } else {
            return "指定されたIDのユーザーは見つかりませんでした。";
        }
    }
    
    // ユーザー情報の更新
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
  	@PostMapping("update/users/edit")
  	protected User edit(@RequestBody User user) {
  		//対象のIDが存在するかチェックする
  		usersRepository.save(user);
  		return user;
  	}
    
    
}