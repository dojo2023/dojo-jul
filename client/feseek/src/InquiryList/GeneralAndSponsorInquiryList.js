import React from 'react';
import './InquiryList.css';

export default class GeneralAndSponsorInquiryList extends React.Component{

    //親コンポーネントから受け取るデータなどがpropsに入っている。
    constructor(props) {
        super(props);
        //stateの設定。
        this.state = {
            inquiry_contents:[],
            subject: "",
            inquiry: "",
            showModal: false,
            modSubject: "",
            modInquiry: "",
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

    //お問い合わせ送信ボタンを押下したときに実行する
    modDetail = () => {
        this.toggleModal();
    }


    render(){

            const {inquiry_contents, showModal} =this.state;

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
                        <td></td>
                    </tr>
                    {inquiry_contents.map((inquiry_content,index) =>
                    <tr class="inquiry_contentrow">
                        <td></td>
                        <td class="inq_date">{inquiry_content.inq_date}</td>
                        <td class="inquiry">{inquiry_content.inquiry}</td>
                        <td>
                        <a href="./GeneralAndSponsorInquiryDetail"><button name="register">確認</button></a>
                        </td>
                    </tr>
                    )}
                </table>

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