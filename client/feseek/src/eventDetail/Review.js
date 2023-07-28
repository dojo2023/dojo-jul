import React from 'react';
import axios from 'axios';
import './EventDetail.css';

export default class Review extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            Reviews: [],
            id: "",
            usersId: "",
            eventsId: "",
            satisfaction: "",
            security: "",
            again: "",
            atmosphere: "",
            revDate: "",
            revTitle: "",
            comment: "",
            revImage: "",
            user: "",
            event: "",
        }
    }

    componentDidMount(){
        const{id} = this.state;
        axios.get("/api/review/show/1")
    }

    render(){
        const{id,usersId,eventsId,satisfaction,security,again,atmosphere,revDate,revTitle,comment,revImage,user,event} = this.state;
        return(
            <div>
                <div>
                <h1>口コミ表示</h1>
                </div>
                <ul className="review_li">
                    <li className="rev_name">ユーザー名{user}</li>
                    <li className="rev_time">投稿日時{revDate}</li>
                    <li className="rev_image">写真{revImage}</li>
                    <li className="rev_star">評価（星）{user}</li>
                    <li className="rev_sentence">評価（○×）{user}</li>
                    <li className="rev_title">口コミ件名{revTitle}</li>
                    <li className="rev_text">口コミ本文{comment}</li>
                </ul>
           </div>
        )
    }
}