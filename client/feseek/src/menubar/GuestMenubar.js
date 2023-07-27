import React from 'react';

export default class GuestMenubar extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render(){
        return(
            <div>
                {/* <h1>ゲストメニューバーページ</h1> */}
                <div class="menu">
                    <div class="logo">
                        <h2>Feseek</h2>
                    </div>
                    <div class="link">
                        <a href="eventSearch">検索　</a>/
                        <a href="login">　ログイン・新規登録はこちら</a>
                    </div>
                </div>
            </div>
        );
    }
}