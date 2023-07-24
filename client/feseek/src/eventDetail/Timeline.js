import React from "react";
import './TimeDetail.css';

export default class TimeLine extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            
        }
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