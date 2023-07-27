import React from 'react';

export default class SponsorEventDetail extends React.Component{

     //親コンポーネントから受け取るデータなどがpropsに入っている。
    constructor(props) {
        super(props);
        //stateの設定。
        this.state = {
            eventDetail: "",
            showModal: false,
            modinformation: "",
            
        }
    }

    //モーダルウィンドウの表示切り替え
    toggleModal = () => {
        const{showModal} = this.state;
        this.setState({
            showModal: !showModal
        });
    }

    //口コミ投稿ボタンを押下したときに実行する
    modDetail = () => {
        this.toggleModal();
    }

    render(){
            const {showModal} =this.state;

        return(
            <div class="body">
                <h1>主催者イベント詳細画面（タイムライン投稿モーダルも表示）ページ</h1>
                <img src="　"></img>

                <p>ここに詳細文をたくさん記載</p>

                <h2>基本情報</h2>
                <table class="list">
                    <tr>
                        <th>イベント名</th> <td>あ</td>
                    </tr>
                    <tr>
                        <th>主催者名</th> <td>い</td>
                    </tr>
                    <tr>
                        <th>開催日時</th> <td>う</td>
                    </tr>
                    <tr>
                        <th>住所</th> <td>え</td>
                    </tr>
                    <tr>
                        <th>マップURL</th> <td>お</td>
                    </tr>
                    <tr>
                        <th>アクセス</th> <td>か</td>
                    </tr>
                    <tr>
                        <th>参加費</th> <td>き</td>
                    </tr>
                    <tr>
                        <th>HP　URL</th> <td>く</td>
                    </tr>
                    <tr>
                        <th>連絡先</th> <td>け</td>
                    </tr>
                </table>

                <div class="side">
                    <div class="review">
                    <h2>口コミ</h2>
                        <br />
                        <iframe src="./review"></iframe>
                    </div>

                    <div class="timeline">
                    <h2>タイムライン</h2>
                        <button onClick={() =>{this.modDetail()}}>投稿</button>
                        <br />
                        <iframe src="./Timeline"></iframe>
                    </div>
                </div>

                    {/* モーダルウィンドウ(送信) */}
                {showModal &&
                    <div id="overlay">
                        <div id="content">
                        <button class="round_btn" onClick={this.toggleModal}></button>
                            <div><h3>イベントの最新情報を発信します</h3></div>
                                内容<br />
                                <textarea required name="modinformation" rows="10" cols="70"></textarea>
                                <br />
                            <button type="submit" name="post">投稿</button>
                        </div>
                    </div>
                }

            </div>
        );
    }
}