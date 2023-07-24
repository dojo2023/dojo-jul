import React from 'react';

export default class GeneralProfile extends React.Component{

    render(){
        return(
            <div>
                <h3>MYプロフィール</h3>
                
                <table>
                <tr>
                    <td>ID</td> <td>一般利用者</td>
                </tr>
                <tr>
                    <td>ユーザ名</td> <td>パスワード</td>
                </tr>
                <tr>
                    <td>メールアドレス</td>
                </tr>
                <tr>
                    <td>
                        <button onClick={"location.href='/UserEdit'"}>編集</button>
                    </td>
                    <td>
                        <button>退会</button>
                    </td>
                    <td>
                        <p><a href="/generalProfile/MyReviewList">投稿した口コミ一覧ページ</a></p>
                    </td>
                </tr>
                </table>

            </div>
        );
    }
}