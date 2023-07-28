import React from 'react';
import './Menu.css';

export default class GuestMenubar extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            id:"",
        }
    }

    render(){
        return(
            <div>
                {/* <h1>ゲストメニューバーページ</h1> */}
                <div class="menu">
                    <div class="logo">
                    <a href="GuestEventList"><h2>Feseek</h2></a>
                    </div>
                    <div class="link">
                        <a href="GuestEventList">イベントリスト　</a>/
                        <a href="login">　ログイン・新規登録はこちら</a>
                    </div>
                </div>
            </div>
        );
    }
}