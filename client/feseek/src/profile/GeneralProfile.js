import React from 'react';
import axios from "axios";
import GeneralMenubar from '../menubar/GeneralMenubar';

export default class GeneralProfile extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            userName:"",
            password:"",
            categoriesId:"",
            category:"",
            id:"",
            mail:"",
            profile:{
                category: {}
            },
            
        }
    }

    componentDidMount(){
        // const {user_name, category_id,category,id, e_mail} = this.state;
        // const data = {user_name:user_name, category_id:category_id, category:category, id:id, e_mail:e_mail};
        axios.get("/api/user/profile/d0004")
        .then(json => {
            console.log(json.data);
            this.setState({
                profile:json.data
            });
        })
    }

    profile = () =>{
        window.location='./UserEdit';
    }

    delete = () =>{
        const{id} = this.state;
        if(window.confirm('これまでのデータは全て失われます。本当に退会しますか？')){
            //アカウント削除処理
            // axios.delete('api/users/'+ id)
            // .then

        }else{
            //何もしない
        }
    }

    myEventList = () =>{
        window.location='./MyReviewList';
    }

    render(){
        const{profile} = this.state;
        return(
            <div>
                <header>
                    <GeneralMenubar></GeneralMenubar>
                </header>
                <body>
                    <h1>MYプロフィール</h1>
                    
                    <table className="profile_table" /*border={"2px solid #000"}*/>
                        <tr>
                            <td>ID：{profile.id}</td>
                            <td>権限：{profile.category.category}</td>
                        </tr>
                        <tr>
                            <td>ユーザー名：{profile.userName}</td>
                            <td>パスワード：{profile.password}</td>
                        </tr>
                        <tr>
                            <td className="title">メールアドレス：{profile.mail}</td>
                        </tr>
                    </table>

                            {/* <td><a href="/MyEventList">イベント履歴一覧</a>　<a href="/UserEdit">プロフィール編集</a></td>
                        <td><button>退会</button><button>戻るdokoni?</button></td> */}
                        <button className="default_button" onClick={this.profile}>プロフィール編集</button>
                        <button className="default_button" onClick={this.delete}>退会</button>
                        <button className="default_button" onClick={this.MyReviewList}>投稿した口コミ一覧ページ</button>
                    
                </body>
            </div>
        );
    }
}