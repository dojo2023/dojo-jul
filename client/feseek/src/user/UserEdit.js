import React from "react";
import axios from "axios";
import './UserInfo.css';
import GuestMenubar from "../menubar/GuestMenubar";

export default class User extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            User:[],
            password:"",
            userName:"",
            mail:"",
            modPassword:"",
            modName:"",
            modMail:"",
        }
    }

    //マウント後に自動で動作する。
    componentDidMount(){
        //学習用にaxiosでなく、標準のfetchを利用している。
        fetch("/api/login")
        .then(res => res.json())
        .then(json => {
            console.log(json);
            //stateのbooksに受け取ったデータを保持する。
            //stateが変わると自動的に画面が再描画される。
            this.setState({
                User:json
            })
        });
    }

    //画面で何か入力された時に、その値をstateとして保持する。
    //これにより、JavaScript動作時に毎回画面を見に行くのではなく、画面と連動したstateだけを見ればよくなる。
    onInput = (e) => {
        const name = e.target.name;
        this.setState({
            [name]: e.target.value
        });
    }    

    // 更新ボタン処理
    saveUser = (info) => {
        //postデータ作成
        const {password,userName,mail} = this.state;
        const User = {password,userName,mail};
        axios.post("/api/user/profile/edit",User)
        this.setState({
            //stateにデータをいれる
            modPassword:User[info].password,
            modName:User[info].userName,
            modMail:User[info].mail,
        });
    }

    render(){
        return(
            <div>
                <header>
                    <GuestMenubar></GuestMenubar>
                </header>
                <body>
                    <h1>ユーザー情報編集</h1>
                        <div className="around_textbox">
                        {/* <p class="user_p">Password</p> */}
                        <input type="password" className="default_textbox" value={this.state.modPassword} name="password" minlength="8" required placeholder="Password(8~20文字で入力ください)"></input><br></br>
                        {/* <p class="user_p">ユーザー名</p> */}
                        <input type="text" className="default_textbox" value={this.state.modName} name="userName" minlength="2" required placeholder="ユーザー名(2~20文字で入力ください)"></input><br></br>
                        {/* <p class="user_p">メールアドレス</p> */}
                        <input type="text" className="default_textbox" value={this.state.modMail} name="mail" required placeholder="メールアドレス"></input><br></br>
                    </div>
                    <p class="error"></p><br></br>
                    <input type="button" className="default_button" value="更新" onclick={this.saveUser}></input>
                </body>
            </div>
        )
    }
}