import React from 'react';

export default class GuestMenubar extends React.Component{

    render(){
        return(
            <div>
                <h1>ゲストメニューバーページ</h1>

                <a href="./eventSearch">検索</a>
                <a href="./login">新規登録・ログインはこちら</a>

            </div>
        );
    }
}