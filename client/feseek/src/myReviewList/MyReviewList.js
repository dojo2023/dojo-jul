import React from 'react';
import './ReviewEdit.css';
import GeneralMenubar from '../menubar/GeneralMenubar';

export default class MyReviewList extends React.Component{

    //親コンポーネントから受け取るデータなどがpropsに入っている。
    constructor(props) {
        super(props);
        //stateの設定。
        this.state = {
            reviews:[],
            showModal: false,
            modEdit: "",
        }
    }

    //マウント後に自動で動作する
    componentDidMount(){
        //学習用にaxiosでなく、標準のfetchを利用している。
        fetch("/api/review/mylist")
        .then(res => res.json())
        .then(json => {
            console.log(json);
            //stateのreviewsに受け取ったデータを保持する。
            //stateが変わると自動的に画面が再描画される。
            this.setState({
                reviews:json
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

        const {reviews, showModal} = this.state;

        return(
            <div>
                <div class = "menubar">
                    <GeneralMenubar></GeneralMenubar>
                </div>

                <h1>投稿した口コミ一覧</h1>

                <table>
                    <tr>
                        <td>日時</td>
                        <td>タイトル</td>
                        <td>評価</td>
                        <td>本文</td>
                        <td></td>
                        <td></td>
                    </tr>

                    {reviews.map((review,index) =>
                    <tr class = "reviewsrow">
                        <td class="rev_date">{review.rev_date}</td>
                        <td class="rev_title">{review.rev_title}</td>
                        {/* <td class="evaluation">{review.satisfaction, review.security, review.again, review.atmosphere, review.continuation}</td> */}
                        <td class="comment">{review.comment}</td>
                        <td><button onClick={() =>{this.modEdit()}} name="edit">編集</button></td>
                        <td><button onClick={() =>{this.diaDelete()}} name="delete">削除</button></td>
                    </tr>
                    )}

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