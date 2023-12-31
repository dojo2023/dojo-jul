import React from "react";
import axios from "axios";
import './Menu.css';

export default class SponsorMenubar extends React.Component{
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
            <div class="menu">
                <div class="logo">
                    <a href="SponsorEventList"><h2>Feseek</h2></a>
                </div>
                <div class="link">
                    <a href="SponsorEventList">　イベントリスト　</a>/
                    {/* <a href="../login">　ログイン　</a>・ */}
                    <a href="" onClick={this.logout}>　ログアウト　</a>/
                    <a href="../SponsorProfile">　プロフィール</a>
                </div>
            </div>
        </div>
    )
}




}