import React from 'react';
import AdminMenubar from '../menubar/AdminMenubar';

export default class AdminInquiryDetail extends React.Component{

    //親コンポーネントから受け取るデータなどがpropsに入っている。
    constructor(props) {
        super(props);
        //stateの設定。
        this.state = {
            // books:[]
            showModal: false,
            modPost: "",
        }
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

        const {showModal} = this.state;

        return(
            <div>
                <div class = "menubar">
                    <AdminMenubar></AdminMenubar>
                </div>

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