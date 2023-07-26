import React from 'react';
import AdminMenubar from '../menubar/AdminMenubar';

export default class AdminInquiryList extends React.Component{

    render(){
        return(
            <div>
                <div class = "menubar">
                    <AdminMenubar></AdminMenubar>
                </div>

                <div>
                    <h1>管理者お問い合わせ一覧ページ</h1>
                </div>

                <table>
                    <tr>
                        <td>日時</td>
                        <td>件名</td>
                        <td>内容</td>
                        <td><a href="./AdminInquiryDetail"><button type="submit" name="register">確認</button></a></td>
                    </tr>
                </table>

                <div>
                    <a href="./EventList">戻る</a>
                </div>
            </div>
        );
    }
}