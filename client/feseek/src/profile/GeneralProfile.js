import React from 'react';
import GeneralMenubar from '../menubar/GeneralMenubar';

export default class GeneralProfile extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render(){
        return(
            <div>
                <header>
                    <GeneralMenubar></GeneralMenubar>
                </header>
                <body>
                    <h1>MYプロフィール</h1>
                    
                    <table className="profile_table">
                        <tr>
                            <td>ID</td> <td>一般利用者</td>
                        </tr>
                        <tr>
                            <td>ユーザ名</td> <td>パスワード</td>
                        </tr>
                        <tr>
                            <td>メールアドレス</td>
                        </tr>
                    </table>

                            <button className="default_button" onClick={"location.href='/UserEdit'"}>編集</button>
                            <button className="default_button">退会</button>
                            <a href="/MyReviewList"><button className="default_button">投稿した口コミ一覧ページ</button></a>
                    
                </body>
            </div>
        );
    }
}