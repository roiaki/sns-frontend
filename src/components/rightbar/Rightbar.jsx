import React from 'react';
import "./Rightbar.css";
import { Users } from "../../dummyData";
import Online from '../online/Online';

export default function Rightbar({ profile }) {

  const HomeRightbar = () => {
    return (
      <>
        <div className="eventContainer">
          <img src="assets/star.png" alt="" className="startImg" />
          <span className="eventText"><b>フォロワー限定イベント開催中！</b>
          </span>
        </div>
          
        <img src="assets/event.jpeg" alt="" className="eventImg"/>
        <h4 className="rightbarTitle">オンラインの友達</h4>
        <ul className="rightbarFriendList">
          { Users.map((user) =>  (
            <Online user={user} key={user.id}/>
          ))}
        
        </ul>
        <p className="promotionTitle">プロモーション広告</p>
        <img
          className="rightbarPromotionImg"
          src="assets/promotion/promotion1.jpeg"
          alt=""
        />
        <p className="promotionName">ショッピング</p>
        <img
          className="rightbarPromotionImg"
          src="assets/promotion/promotion2.jpeg"
          alt=""
        />
        <p className="promotionName">カーショップ</p>
        <img
          className="rightbarPromotionImg"
          src="assets/promotion/promotion3.jpeg"
          alt=""
        />
        <p className="promotionName">ShinCode株式会社</p>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
      <h4 className="rightbarTitle">ユーザー情報</h4>
      <div className='rightbarInfo'>
        <div className='rightbarInfoItem'>
          <span className='rightbarInfoKey'>出身：</span>
          <span className='rightbarInfoKey'>福岡</span>
        </div>
        <h4 className='rightbarTitle'>あなたの友達s</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img 
              src="assets/person/1.jpeg"
              art=""
              className='rightbarFollowingImg'
            />
            <span className='rightbarFollowingName'>Shin Code</span>
          </div>
          <div className="rightbarFollowing">
            <img 
              src="assets/person/2.jpeg"
              art=""
              className='rightbarFollowingImg'
            />
            <span className='rightbarFollowingName'>test user1</span>
          </div>
          <div className="rightbarFollowing">
            <img 
              src="assets/person/3.jpeg"
              art=""
              className='rightbarFollowingImg'
            />
            <span className='rightbarFollowingName'>test user2</span>
          </div>
          <div className="rightbarFollowing">
            <img 
              src="assets/person/4.jpeg"
              art=""
              className='rightbarFollowingImg'
            />
            <span className='rightbarFollowingName'>test user3</span>
          </div>
          <div className="rightbarFollowing">
            <img 
              src="assets/person/5.jpeg"
              art=""
              className='rightbarFollowingImg'
            />
            <span className='rightbarFollowingName'>test user4</span>
          </div>
        </div>
      </div>
      </>
    );
  }
  
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}
