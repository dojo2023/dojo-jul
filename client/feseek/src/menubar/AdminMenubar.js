import React from "react";
// import axios from "axios";
import './Menu.css';

export default class AdminMenubar extends React.Component{

render(){
    return(
        <div>
            <div class="menu">
                <div class="logo">
                    <h2>Feseek</h2>
                </div>
                <div class="link">
                    <a href="/eventSearch">検索　</a>/
                    <a href="AdminInquiryList">　問い合わせ一覧　</a>/
                    <a href="login">　ログイン　</a>・
                    <a href="">　ログアウト　</a>/
                </div>
            </div>
        </div>
    )
}




}