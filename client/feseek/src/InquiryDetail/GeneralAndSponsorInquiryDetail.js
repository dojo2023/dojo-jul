import React from 'react';

export default class GeneralAndSponsorInquiryDetail extends React.Component{

    render(){
        return(
            <div>
                <h1>一般利用者、主催者お問い合わせ詳細ページ</h1>

                <table>
                    <tr>
                        <td>日時</td>
                        <td>件名</td>
                        <td>送信者</td>
                        <td>内容</td>
                    </tr>
                </table>

                <div>
                    <a href="./GeneralAndSponsorInquiryList">戻る</a>
                </div>
                
                <button>返信</button>


            </div>

            
            
        );
    }
}