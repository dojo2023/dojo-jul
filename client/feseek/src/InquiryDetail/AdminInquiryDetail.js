import React from 'react';

export default class AdminInquiryDetail extends React.Component{

    render(){
        return(
            <div>
                <h1>管理者お問い合わせ詳細ページ</h1>

                <table>
                    <tr>
                        <td>日時</td>
                        <td>件名</td>
                        <td>送信者</td>
                        <td>内容</td>
                    </tr>
                </table>

                <div>
                    <a href="./AdminInquiryList">戻る</a>
                </div>
                
                <button>返信</button>
            </div>
        );
    }
}