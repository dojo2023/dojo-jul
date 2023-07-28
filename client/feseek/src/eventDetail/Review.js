import React from 'react';

export default class Review extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render(){
        return(
            <div>
                <div>
                <h1>口コミ表示</h1>
                </div>
                <ul class="review_li">
                    <li class="rev_name">ユーザー名</li>
                    <li class="rev_time">投稿日時</li>
                    <li class="rev_image">写真</li>
                    <li class="rev_star">評価（星）</li>
                    <li class="rev_sentence">評価（○×）</li>
                    <li class="rev_title">口コミ件名</li>
                    <li class="rev_text">口コミ本文</li>
                </ul>
           </div>
        )
    }
}