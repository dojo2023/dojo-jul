package com.feseek.api;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class UserRestController {
	/*

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
        user.setUser_name(request.getUser_name());
        user.setE_mail(request.getE_mail());
        user.setPassword(request.getPassword());
        user.setCategories_id(request.getCategories_id());

    //     データベースにユーザーを保存します。
        usersRepository.save(user);

        return "ユーザーが正常に登録されました。";
    }
    
 // ユーザーの削除
    @DeleteMapping("/users/{id}")
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
    @PutMapping("/users/{id}")
    public String updateUser(@PathVariable String id, @RequestBody User updatedUser) {
        // 指定されたIDのユーザーをデータベースから取得します。
        Optional<User> optionalUser = usersRepository.findById(id);

        // ユーザーが存在するか確認します。
        if (optionalUser.isPresent()) {
            User user = optionalUser.get();
            // パスワード、メールアドレス、ユーザー名を更新します。
            user.setPassword(updatedUser.getPassword());
            user.setE_mail(updatedUser.getE_mail());
            user.setUser_name(updatedUser.getUser_name());
            usersRepository.save(user);
            return "ユーザー情報が正常に更新されました。";
        } else {
            return "指定されたIDのユーザーは見つかりませんでした。";
        }
    }
    */
}