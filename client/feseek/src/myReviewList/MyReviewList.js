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
    this.fetchReviewData();
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

  modEdit = () => {
    this.toggleModal();
    // 編集処理を追加
    // ここで編集する口コミのデータを取得してもよいです
    // 例えば、this.state.modEdit に編集対象の口コミIDをセットしておき、
    // モーダル内でそのIDを元に編集対象の口コミデータを表示するなど
  }

  diaDelete = () => {
    if (window.confirm("本当に削除しますか？")) {
      console.log('削除確認ダイアログ');
      // 削除処理を追加
      // 例えば、this.state.modEdit に削除対象の口コミIDをセットしておき、
      // それを使ってAPIリクエストを行って削除するなど
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
            <td></td>
            <td></td>
          </tr>

          {reviews.map((review, index) =>
            <tr className="reviewsrow" key={index}>
              <td className="rev_date">{review.rev_date}</td>
              <td className="rev_title">{review.rev_title}</td>
              {/* <td className="evaluation">{review.satisfaction, review.security, review.again, review.atmosphere, review.continuation}</td> */}
              <td className="comment">{review.comment}</td>
              {/* <td><button onClick={() => { this.modEdit() }} name="edit">編集</button></td>
              <td><button onClick={() => { this.diaDelete() }} name="delete">削除</button></td> */}
            </tr>
          )}

        </table>

        <button className='default_button' onClick={() => { this.modEdit() }} name="edit">編集</button>
        <button className='default_button' onClick={() => { this.diaDelete() }} name="delete">削除</button>

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
