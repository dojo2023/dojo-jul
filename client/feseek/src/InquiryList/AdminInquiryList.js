import React from 'react';
import AdminMenubar from '../menubar/AdminMenubar';

export default class AdminInquiryList extends React.Component{

    //親コンポーネントから受け取るデータなどがpropsに入っている。
    constructor(props) {
        super(props);
        //stateの設定。
        this.state = {
            inquiry_contents:[],
        }
    }


    //マウント後に自動で動作する
    componentDidMount(){
        //学習用にaxiosでなく、標準のfetchを利用している。
        fetch("/inquiries/{userId}")
        .then(res => res.json())
        .then(json => {
            console.log(json);
            //stateのreviewsに受け取ったデータを保持する。
            //stateが変わると自動的に画面が再描画される。
            this.setState({
                inquiry_contents:json
            })
        });
    }

    render(){
        const {inquiry_contents} = this.state;

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
                        <td></td>
                    </tr>
                    {inquiry_contents.map((inquiry_content,index) =>
                    <tr class="inquiry_contentrow">
                        <td class="inq_date">{inquiry_content.inq_date}</td>
                        <td class="subject">{inquiry_content.subject}</td>
                        <td class="inquiry">{inquiry_content.inquiry}</td>
                        <td><a href="./AdminInquiryDetail"><button type="submit" name="register">確認</button></a></td>
                    </tr>
                    )}
                </table>

                <div>
                    <a href="./EventList">戻る</a>
                </div>
            </div>
        );
    }
}