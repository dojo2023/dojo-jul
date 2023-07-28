import React from 'react';

export default class GeneralMenubar extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            
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
                        <a href="">　ログアウト　</a>/
                        <a href="GeneralProfile">　プロフィール</a>
                    </div>
                </div>
            </div>
        );
    }
}