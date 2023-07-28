import React from 'react';
import './ReviewEdit.css';
import GeneralMenubar from '../menubar/GeneralMenubar';
import axios from 'axios';

export default class MyReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      showModal: false,
      modEdit: "",
    }
  }

  componentDidMount() {
    // マウント後にAPIを呼び出す
    axios.get('/api/review/mylist')
    .then(response => {
        // APIレスポンスからデータを取得してstateにセットする
    // .then(json => {
    //     console.log(json.data);
    
        this.setState({ reviews: response.data });
    // })
    })
    .catch(error => {
        console.log(error);
    });



}

  fetchReviewData() {
    axios.get('/api/review/mylist') // Spring BootのAPIエンドポイントを指定
      .then(response => {
        this.setState({
          reviews: response.data
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  toggleModal = () => {
    const { showModal } = this.state;
    this.setState({
      showModal: !showModal
    });
  }

  modEdit = (reviewId) => {
    this.toggleModal();

    // 編集対象の口コミデータを取得
    axios.get(`/api/review/${reviewId}`)
        .then(response => {
            // 取得した口コミデータをstateにセットしてモーダル内で表示する
            this.setState({ modEdit: response.data });
        })
        .catch(error => {
            console.log(error);
        });
}


diaDelete = (reviewId) => {
    if (window.confirm("本当に削除しますか？")) {
        console.log('削除確認ダイアログ');

        // 削除処理を実行するAPIリクエストを行う
        axios.delete(`/api/review/${reviewId}`)
            .then(response => {
                // 成功した場合は、一覧から該当の口コミを削除する
                this.setState(prevState => ({
                    reviews: prevState.reviews.filter(review => review.id !== reviewId)
                }));
                console.log('削除が完了しました');
            })
            .catch(error => {
                console.log(error);
            });
    } else {
        console.log('削除キャンセル');
    }
};


  render() {
    const { reviews, showModal } = this.state;

    return (
      <div>
        <div className="menubar">
          <GeneralMenubar></GeneralMenubar>
        </div>

        <h1>投稿した口コミ一覧</h1>

        <table className='myreviewlist_table'>
          <tr>
            <td>日時</td>
            <td>タイトル</td>
            <td>評価</td>
            <td>本文</td>
            
          </tr>

         {reviews.map((review, index) => 
            <tr className="reviewsrow" key={index}>
              <td className="revDate">{review.revDate}</td>
              <td className="revTitle">{review.revTitle}</td>
              {/* <td className="evaluation">{review.satisfaction, review.security, review.again, review.atmosphere, review.continuation}</td> */}
              <td className="comment">{review.comment}</td>
              {/* <td><button onClick={() => { this.modEdit() }} name="edit">編集</button></td>
              <td><button onClick={() => { this.diaDelete() }} name="delete">削除</button></td> */}
            </tr>
          )}
            <button className='default_button' onClick={() => { this.modEdit() }} name="edit">編集</button>
            <button className='default_button' onClick={() => { this.diaDelete() }} name="delete">削除</button>
        </table>

        
        

        {/* モーダルウィンドウ(送信) */}
        {showModal &&
          <div id="overlay">
            <div id="content">
              タイトル<input type="text" name="modTitle" /><br />
              評価<input type="text" name="modEvaluation" /><br />
              本文<input type="text" name="modContent" /><br />
              <button onClick={this.toggleModal}>閉じる</button>
              <button type="submit" name="post">更新</button>
            </div>
          </div>
        }
      </div>
    );
  }
}
