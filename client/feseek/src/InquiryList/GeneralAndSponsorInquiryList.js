import React from 'react';
import './InquiryList.css';

export default class GeneralAndSponsorInquiryList extends React.Component{

    //親コンポーネントから受け取るデータなどがpropsに入っている。
    constructor(props) {
        super(props);
        //stateの設定。
        this.state = {
            // books:[]
            subject: "",
            inquiry: "",
            showModal: false,
            modSubject: "",
            modInquiry: "",
        }
    }
    
    //モーダルウィンドウの表示切り替え
    toggleModal = () => {
        const{showModal} = this.state;
        this.setState({
            showModal: !showModal
        });
    }

    //お問い合わせ送信ボタンを押下したときに実行する
    modDetail = () => {
        this.toggleModal();
    }


    render(){

            const {showModal} =this.state;

        return(
            <div>
                <div>
                    <h1>一般利用者、主催者お問い合わせ一覧ページ</h1>
                </div>


                <button onClick={() =>{this.modDetail()}} >お問い合わせ送信</button>

                <table>
                    <tr>
                        <td>日時</td>
                        <td>件名</td>
                        <td>内容</td>
                        <td>
                            <button name="register">確認</button>
                        </td>
                    </tr>
                </table>

                <div>
                    <a href="./GeneralAndSponsorInquiryDetail">一般利用者、主催者お問い合わせ詳細ページに遷移</a>
                </div>

                <div>
                    <a href="./EventList">戻る</a>
                </div>

                {/* モーダルウィンドウ(送信) */}
                {showModal &&
                    <div id="overlay">
                        <div id="content">

                                件名<input type="text" name="modSubject"/>
                                内容<input type="text" name="modInquiry"/>

                            <button onClick={this.toggleModal}>閉じる</button>
                            <button type="submit" name="post">送信</button>
                        </div>
                    </div>
                }

            </div>
        );
    }
}