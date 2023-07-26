import React from 'react';
import AdminMenubar from '../menubar/AdminMenubar';

export default class AdminInquiryDetail extends React.Component{

    //親コンポーネントから受け取るデータなどがpropsに入っている。
    constructor(props) {
        super(props);
        //stateの設定。
        this.state = {
            inquiry_contents:[],
            showModal: false,
            modPost: "",
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

    //モーダルウィンドウの表示切り替え
    toggleModal = () => {
        const{showModal} = this.state;
        this.setState({
            showModal: !showModal
        });
    }

    //返信ボタンを押下したときに実行する
    modPost = () => {
        this.toggleModal();
    }

    render(){

        const {inquiry_contents,showModal} = this.state;

        return(
            <div>
                <div class = "menubar">
                    <AdminMenubar></AdminMenubar>
                </div>

                <h1>管理者お問い合わせ詳細ページ</h1>

                <table>
                <tr>
                        <td>日時</td>
                    </tr>
                    <tr>
                        <td>送信者</td>
                    </tr>
                    <tr>
                        <td>件名</td>
                    </tr>
                    <tr>
                        <td>内容</td>
                    </tr>
                    {/* {inquiry_contents.map((inquiry_content,index) =>
                    <tr class="inquiry_contentrow">
                        <td class="inq_date">{inquiry_content.inq_date}</td>
                        <td>{inquiry_content.users_id}</td>
                        <td class="subject">{inquiry_content.subject}</td>
                        <td class="inquiry">{inquiry_content.inquiry}</td>
                    </tr>
                    )} */}
                </table>

                <div>
                    <a href="./AdminInquiryList">戻る</a>
                </div>
                
                <button onClick={() =>{this.modPost()}}>返信</button>

                {/* モーダルウィンドウ(送信) */}
                {showModal &&
                    <div id="overlay">
                        <div id="content">

                                返信内容<input type="text" name="modInquiry"/>
                                <br />

                            <button onClick={this.toggleModal}>閉じる</button>
                            <button type="submit" name="post">送信</button>
                        </div>
                    </div>
                }  
            </div>
        );
    }
}