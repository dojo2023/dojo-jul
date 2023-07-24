import React from 'react';

export default class GeneralAndSponsorInquiryList extends React.Component{

    render(){
        return(
            <div>
                <div>
                    <h1>一般利用者、主催者お問い合わせ一覧ページ</h1>
                </div>


                <button type="submit">お問い合わせ送信</button>

                <table>
                    <tr>
                        <td>日時</td>
                        <td>件名</td>
                        <td>内容</td>
                        <td><button type="submit" name="register">確認</button></td>
                    </tr>
                </table>

                <div>
                    <a href="./GeneralAndSponsorInquiryDetail">一般利用者、主催者お問い合わせ詳細ページに遷移</a>
                </div>

                <div>
                    <a href="./EventList">戻る</a>
                </div>
            </div>
        );
    }
}