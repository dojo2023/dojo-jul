import React from "react";
import axios from "axios";

import './Login.css';

export default class Login extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            id: "",
            password: "",
            ErrorMsg:"",
        }
    }

    // onInput = (e) => {
    //     // const {id,password}=this.state;
    //     this.setState ({
    //         id:e.target.value,
    //         password:e.target.value,
    //     });
    // }
    onInput = (e) => {
        //onChangeイベントでテキストボックスに入力された値を、stateに格納する処理
        this.setState ({
            [e.target.name]:e.target.value
        });
    }


    onSubmit = () => {
        console.log("onSubmit");
        const{id,password} = this.state;
        const data = {id:id,password:password};

        //IDとパスワードをapiに渡してチェックしてもらう。
        axios.post("/api/login",data)
        .then(json =>{
            //OK(Login successful)なら、次の画面（利用者、主催者、管理者）
            //ここに、ログイン成功した際のurlを記述するのはカッコ悪いので、WebAPIでログイン成功したときのurlを教えて貰う方がすっきり
            if(json.data === 'Login successful'){
                //ログイン成功
                window.location = "/eventSearch"
            }else{
               //ログイン失敗
               console.log('ログイン失敗');
               this.setState({
                    ErrorMsg : <span>※IDまたはパスワードが間違っています</span>

               })
            }
            // console.log(json);
        });
    }
    
    /*
    onSubmit = () => {
        console.log(data);
        if (data.id === "id" && data.password === "password"){
            loginSuccess();
        }else{
            loginError();
        }
    };
    loginSuccess = () => {
        navigate("/");
    }
    loginError = () => {
        false();
    }
    */

    render(){
        // let ErrorMsg;        
        //stateに入っている値とテキストボックスの中身を紐づけるため
        const{id,password} = this.state;
        return(
            <div>
                <div>ログインページ</div>
                {/* <p class="user_p">ID</p> */}
                <input type="text" className="l_text" name="id" minLength="5" required placeholder="ID" 
                    onChange={this.onInput} value={id}></input>
                <br></br>
                {/* <p class="user_p">Password</p> */}
                <input type="password" className="l_text" name="password" minLength="8" required placeholder="Password" 
                    onChange={this.onInput} value={password}></input>
                <br></br>
                <p className="error">{this.state.ErrorMsg}</p><br></br>

                <input type="button" className="l_button" value="ログイン" onClick={this.onSubmit}></input><br></br>

                <a href="/ConfirmForId">IDを忘れた方はこちら</a><br></br>
                <a href="/ConfirmForPassword">パスワードを忘れた方はこちら</a><br></br>
                <a href="/NewUserRegister">新規登録はこちら</a>
            </div>
        )
    }
}