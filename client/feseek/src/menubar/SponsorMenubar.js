import React from "react";
import axios from "axios";
import './Menu.css';

export default class SponsorMenubar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            id:"react",
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
                    <h2>サイト名</h2>
                </div>
                <div class="link">
                    <a href="../eventSearch">検索　</a>/
                    <a href="../GeneralAndSponsorInquiryList">　お問い合わせ　</a>/
                    <a href="../login">　ログイン　</a>・
                    <a href="" onClick={this.logout}>　ログアウト　</a>/
                    <a href="../SponsorProfile">　プロフィール</a>
                </div>
            </div>
        </div>
    )
}




}