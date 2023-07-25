import React from "react";
import axios from "axios";
import './TimeDetail.css';

export default class TimeLine extends React.Component{
    // コンストラクタ
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            showDeleteModal: false,

        }
    }

    //削除ボタン処理
    deleteBook = () => {
        const {books, delIndex} = this.state;
        //postデータ作成
        const data = {id:books[delIndex].id};
        axios.post("/api/book/delete",data)
        .then((json) =>{
            //再読み込み
            this.toggleDeleteModal();
            this.componentDidMount();
        });
    }

    // デリートモーダル
    showDeleteModal = (index) => {
        this.setState({
            delIndex:index
        });
        this.toggleDeleteModal();
    }

    // モーダルウィンドウの切り替え
    toggleModal = () => {
        const{showModal} = this.state;
        this.setState({
            showModal: !showModal
        });
    }

    render(){
        return(
            <div>
                <div>タイムラインページ</div>
                <ul class="time_ul">
                    <li class="time_li">
                        <div class="tl_name">ユーザー名</div><br></br>
                        <div class="tl_time">投稿時間</div><br></br>
                        <div class="tl_content">投稿内容</div>
                        <input type="submit" value="投稿削除" action=""></input>
                    </li>
                    <li class="time_li">
                        <div class="tl_name">ユーザー名</div><br></br>
                        <div class="tl_time">投稿時間</div><br></br>
                        <div class="tl_content">投稿内容</div>
                        <input type="submit" value="投稿削除" action=""></input>
                    </li>
                    <li class="time_li">
                        <div class="tl_name">ユーザー名</div><br></br>
                        <div class="tl_time">投稿時間</div><br></br>
                        <div class="tl_content">投稿内容</div>
                        <input type="submit" value="投稿削除" action=""></input>
                    </li>
                </ul>
            </div>
        )
    }
}