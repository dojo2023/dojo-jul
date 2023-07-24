import React from "react";

export default class SponsorProfile extends React.Component{
    render(){
        return(
            <div>
                <h3>主催者プロフィール画面</h3>
                {/* <button onClick={"location.href='/UserEdit'"}>編集</button> */}
                <a href="/UserEdit">編集</a>
                <button>退会</button>
                <p><a href="/SponsorProfile/MyEventList">投稿したイベントの一覧ページ</a></p>
            </div>
        )
    }
}