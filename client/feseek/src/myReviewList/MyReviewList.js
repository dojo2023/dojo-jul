import React from 'react';
import './ReviewEdit.css';

export default class MyReviewList extends React.Component{

    //親コンポーネントから受け取るデータなどがpropsに入っている。
    constructor(props) {
        super(props);
        //stateの設定。
        this.state = {
            // books:[]
            showModal: false,
            modEdit: "",
        }
    }

    //モーダルウィンドウの表示切り替え
    toggleModal = () => {
        const{showModal} = this.state;
        this.setState({
            showModal: !showModal
        });
    }

    //編集ボタンを押下したときに実行する
    modEdit = () => {
        this.toggleModal();
    }


    // diaDelete = () => {
    //     // onBeforeunloadイベントのハンドラー関数
    //     const handleBeforeUnload = (e) => {
    //         // カスタムメッセージの設定（ブラウザによっては無視される）
    //         e.returnValue = "本当にページを離れますか？";
    //     };
    // }

    render(){

        const {showModal} = this.state;

        return(
            <div>
                <h1>投稿した口コミ一覧</h1>

                <table>
                    <tr>
                        <td>日時</td>
                        <td>タイトル</td>
                        <td>評価</td>
                        <td>本文</td>
                        <td><button onClick={() =>{this.modEdit()}} name="edit">編集</button></td>
                        <td><button onClick={() =>{this.diaDelete()}} name="delete">削除</button></td>
                    </tr>
                </table>

                <div>
                    <a href="/generalProfile">戻る</a>
                </div>

                {/* モーダルウィンドウ(送信) */}
                {showModal &&
                    <div id="overlay">
                        <div id="content">

                                タイトル<input type="text" name="modTitle"/><br />
                                評価<input type="text" name="modEvaluation"/><br />
                                本文<input type="text" name="modContent"/><br />

                            <button onClick={this.toggleModal}>閉じる</button>
                            <button type="submit" name="post">更新</button>
                        </div>
                    </div>
                }  

            </div>
        );
    }
}