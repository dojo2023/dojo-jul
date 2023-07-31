import React from 'react';
import axios from "axios";
import './Menu.css';

export default class GeneralMenubar extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            id:"",
        }
    }

    logout = () =>{
        const {id} = this.state;
        if(window.confirm("ログアウトしますか？")){
            console.log('ログアウト処理');
            axios.post("/api/logout",id)
            .then((json)=>{
                console.log(json);
                window.location = './login';
            })
        }else{
            console.log('ログアウトキャンセル');
        }
    }

    render(){
        return(
            <div>
                {/* <h1>一般利用者メニューバーページ</h1> */}
                <div class="menu">
                    <div class="logo">
                        <a href="GeneralEventList"><h2>Feseek</h2></a>
                    </div>
                    <div class="link">
                        <a href="GeneralEventList">イベントリスト　</a>/
                        {/* <a href="login">　ログイン　</a>・ */}
                        <a href="" onClick={this.logout}>　ログアウト　</a>/
                        <a href="GeneralProfile">　プロフィール</a>
                    </div>
                </div>
            </div>
        );
    }
}