import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState, useContext } from "react";
import { db } from "../../config/firebase";
import { PostContext } from "../../store/PostContext";

import "./View.css";
function View() {
  const [userDetails, setUserDetails] = useState([]);
  const { postDetails } = useContext(PostContext);

  useEffect(() => {
    const { userId } = postDetails;
    const getUser = async () => {
      const q = query(collection(db, "users"), where("id", "==", userId));
      await getDocs(q).then((user) => {
        user.forEach((doc) => {
          setUserDetails(doc.data());
        });
      });
    };
    getUser();
  }, []);

  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img src={postDetails.url} alt="" />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetails.price} </p>
          <span>{postDetails.name}</span>
          <p>{postDetails.category}</p>
          <span>Tue May 04 2021</span>
        </div>
        {userDetails && (
          <div className="contactDetails">
            <p>Seller details</p>
            <p>{userDetails.username}</p>
            <p>{userDetails.phone}</p>
          </div>
        )}
      </div>
    </div>
  );
}
export default View;
