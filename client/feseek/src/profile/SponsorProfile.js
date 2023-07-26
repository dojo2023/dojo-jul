import React from "react";
import SponsorMenubar from "../menubar/SponsorMenubar";
import axios from "axios";
// import './Profile.css';

export default class SponsorProfile extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            user_name:"",
            password:"",
            category_id:"",
            category:"",
            id:"",
            e_mail:"",
            profile:[],
        }
    }

    componentDidMount(){
        // const {user_name, category_id,category,id, e_mail} = this.state;
        // const data = {user_name:user_name, category_id:category_id, category:category, id:id, e_mail:e_mail};
        // axios.get("/api/user/profile")
        // .then(json => {
        //     console.log(json);
        //     this.setState({
        //         profile:json
        //     });
        // })
    }

    profile = () =>{
        window.location='./UserEdit';
    }


    
    render(){
        const{user_name,password,category,id, e_mail} = this.state;
        return(
            <div>
                <SponsorMenubar></SponsorMenubar>

                <h3>MYプロフィール※主催者プロフィール</h3>
                <table class="profile" /*border={"2px solid #000"}*/>
                <tr>
                    <td>ID：{id}</td>
                    <td>権限：{category}</td>
                </tr>
                <tr>
                    <td>ユーザー名：{user_name}</td>
                    <td>パスワード：{password}</td>
                </tr>
                <tr>
                    <td class="title">メールアドレス：{e_mail}</td>
                </tr>
                </table>
                {/* <td><a href="/MyEventList">イベント履歴一覧</a>　<a href="/UserEdit">プロフィール編集</a></td>
                <td><button>退会</button><button>戻るdokoni?</button></td> */}
                    <td><button onClick={this.profile}>プロフィール編集</button> <button>退会</button> <button>イベント履歴</button></td>
            </div>
        )
    }
}