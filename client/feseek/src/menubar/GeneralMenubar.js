import React from 'react';

export default class GeneralMenubar extends React.Component{

    render(){
        return(
            <div>
                <h1>一般利用者メニューバーページ</h1>
                <div class="menu">
                    <div class="logo">
                        <h2>Feseek</h2>
                    </div>
                    <div class="link">
                        <a href="eventSearch">検索　</a>/
                        <a href="GeneralAndSponsorInquiryList">　お問い合わせ　</a>/
                        <a href="login">　ログイン　</a>・
                        <a href="">　ログアウト　</a>/
                        <a href="GeneralProfile">　プロフィール</a>
                    </div>
                </div>
            </div>
        );
    }
}