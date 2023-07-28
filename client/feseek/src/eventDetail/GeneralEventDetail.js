import React from 'react';
import './EventDetail.css';
import GeneralMenubar from '../menubar/GeneralMenubar';

export default class GeneralEventDetail extends React.Component{

    //親コンポーネントから受け取るデータなどがpropsに入っている。
    constructor(props) {
        super(props);
        //stateの設定。
        this.state = {
            eventDetail: "",
            showModal: false,
            modSubject: "",
            modsatisfaction: "",
            modsecurity: "",
            modagain: "",
            modatmosphere: "",
            modcontinuation: "",
            modcomment: "",
            modrevImage: "",
            
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
            <div>
                <header>
                    <GeneralMenubar></GeneralMenubar>
                </header>
                <body>
                    <div class="eventh1">
                    <h1>イベント詳細</h1>
                    </div>
                    <br />
                    <img src="　"></img>

                    <p>ここに詳細文をたくさん記載</p>

                    <h2>基本情報</h2>
                    <table class="list">
                        <tr>
                            <th>イベント名</th> <td>第8回富津市民花火大会</td>
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
                        <button class="btn" onClick={() =>{this.modDetail()}}>投稿</button>
                        <br />
                        <iframe src="./review"></iframe>
                    </div>

                    <div class="timeline">
                    <h2>タイムライン</h2>
                        <br />
                        <iframe class="iframe_tl" src="./Timeline"></iframe>
                    </div>
                </div>
            </body>

                {/* モーダルウィンドウ(送信) */}
                {showModal &&
                    <div id="overlay">
                        <div id="content">
                        <button class="round_btn" onClick={this.toggleModal}></button>
                            <div><h3>口コミ投稿</h3></div>
                                件名<input type="text" name="modSubject"/>
                                <br />
                                評価<div>
                                        <input type="checkbox" id="item1" name="modsatisfaction" />
                                        <label for="modsatisfaction">満足か</label>
                                    </div>
                                    <div>
                                        <input type="checkbox" id="item2" name="modatmosphere" />
                                        <label for="modatmosphere">雰囲気が良い</label>
                                    </div>
                                    <div>
                                        <input type="checkbox" id="item3" name="modsecurity" />
                                        <label for="modsecurity">治安が良い</label>
                                    </div>
                                    <div>
                                        <input type="checkbox" id="item4" name="modagain" />
                                        <label for="modagain">また来たい</label>
                                    </div>
                                    <div>
                                        <input type="checkbox" id="item15" name="modcontinuation" />
                                        <label for="horns">続いて欲しい</label>
                                    </div>

                                内容<br />
                                <textarea name="modcomment" rows="4" cols="70"></textarea>
                                <br />
                                画像<br />
                                <input type="file" name="modrevImage" accept="image/*"></input>
                                
                                <br />
                            <button class="btn" type="submit" name="post">投稿</button>
                        </div>
                    </div>
                }


            </div>
        );
    }
}