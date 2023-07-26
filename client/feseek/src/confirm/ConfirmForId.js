import React from "react";
import './Remind.css';
import IdReRegister from "./IdReRegister";
import axios from "axios";
import { json } from "react-router-dom";

export default class ConfirmForIPassword extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email:"",
            pass:"",
        }
    }

    //入力値とstateを連動させる
    onInput = (e) => {
        let key = e.target.name;
        this.setState({
            [key]: e.target.value
        })
    }

    onSubmit = () => {
        const {email,pass} = this.state;
        const data = {e_mail:email,password:pass};
        //emailとpassをapiに渡して処理をしてもらう
        axios.post("/api/user/profile",data)
        .then(json =>{
            window.location="/IdReRegister"
        });
        //OKならid再登録画面に遷移
        //ダメならエラーメッセージを表示
    }

    render(){
        const {pass,email} = this.state;
        let errMsg;
        if(!pass || !email){
            errMsg = (<p>※エラーメッセージ</p>)
        }
        return(
            <div>
                <p>あなたのIDとメールアドレスを入力してください</p>
                {/* <form action="" method="POST"> */}
                    <input type="pass" placeholder="ID" name="pass" value={pass} onChange={this.onInput}></input><br />
                    <input type="email" placeholder="メールアドレス" name="email" value={email} onChange={this.onInput}></input><br />
                    <span>{errMsg}</span>
                    <input type="submit" value={"送信"} onClick={this.onSubmit}></input>
                {/* </form> */}
                <p><a href="../login">ログインページに戻る</a></p>
            </div>
        )
    }
}