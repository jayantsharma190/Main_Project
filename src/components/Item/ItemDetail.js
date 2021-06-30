import React, { useEffect, useState } from "react";
import "./ItemDetail.css";
import ItemSlider from "./ItemSlider/ItemSlider";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import { db } from "../auth/firebase";
import ItemTable from "./Item-Table/ItemTable";
import ItemFeature from "./Item-features/ItemFeature";
import Comments from "./Comments/Comments";

export default function ItemDetail() {
  let [item_detail, setitem_detail] = useState([]);
  let [isLoader, setisLoader] = useState(true);
  let item_id = useParams();
  let [userCommentName, setuserCommentName] = useState("");
  let [userComment, setuserComment] = useState("");
  let [commentCollection, setCommentCollection] = useState([]);

  const onEnterComment = (e) => {
    e.preventDefault();
    if (userCommentName === "" || userComment === "") {
      alert("Please Enter both the fields");
    } else {
      db.collection("items")
        .doc(item_id.id)
        .collection("comments")
        .add({
          commentName: userCommentName,
          commentValue: userComment,
          commentReplyName: [{}],
          commentReplyValue: [{}],
          enter_on: new Date().toLocaleDateString(),
          active: 1,
        });
    }
  };

  useEffect(() => {
    async function getItemDetail() {
      console.log(item_id.id);
      await db
        .collection("items")
        .doc(item_id.id)
        .onSnapshot((snapshot) => {
          setitem_detail(snapshot.data());
          console.log(item_detail);
          setisLoader(false);
        });
    }

    getItemDetail();
  }, [item_id.id]);

  useEffect(() => {
     async function getComments () {
      await db.collection("items")
        .doc(item_id.id)
        .collection("comments").orderBy('enter_on','asc')
        .onSnapshot((snapshot) => {
          setCommentCollection(
            snapshot.docs.map((docs) => {
              return {
                commentId: docs.id,
                commentData: docs.data(),
              };
            })
          );
          console.log(commentCollection);
        });
    }



    getComments();
  }, [item_id]);

  return (
    <>
      {isLoader ? (
        <Loader />
      ) : (
        <div className="item-detail-container">
          <div className="itemSlider-container">
            <ItemSlider imagesKey={item_detail?.images_url} />
          </div>
          <div className="item-detail">
            <div className="pg-name-address-container">
              <div className="pg-main1">
                <p className="pg-name">{item_detail.name}</p>
                <div className="address-container">
                  <div className="address">
                    <p className="address-locality address-common">
                      {item_detail.locality.toUpperCase()}
                    </p>
                    <p className="address-address  address-common">
                      {item_detail.address}(PinCode-{item_detail.pincode})
                    </p>
                    <p className="address-landmark address-common">
                      {item_detail.landmark}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="table-container">
              <ItemTable tableNumber={1} detail={item_detail} />
              <ItemTable tableNumber={2} detail={item_detail} />
              <ItemTable tableNumber={3} detail={item_detail} />
              <ItemTable tableNumber={4} detail={item_detail} />
            </div>

            <div className="pg-other-detail">
              <ItemFeature detail={item_detail} />
            </div>

            <div className="comments-container">
              <h2>Comments Section</h2>
              <div className="comments-form">
                <form>
                  <label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="comments-name-input"
                      onChange={(e) => {
                        setuserCommentName(e.target.value);
                      }}
                      required
                    />
                  </label>
                  <label>
                    <textarea
                      type="text"
                      row="10"
                      placeholder="Your comments"
                      className="comments-value-input"
                      onChange={(e) => {
                        setuserComment(e.target.value);
                      }}
                      required
                    ></textarea>
                  </label>
                  <label>
                    <button
                      onClick={(e) => {
                        onEnterComment(e);
                      }}
                    >
                      Enter
                    </button>
                  </label>
                </form>
              </div>

              <div className="comments-collection">
                  {
                      console.log(commentCollection)
                  }
                      {
                        commentCollection?.map((commentdata) => {
                            return (<Comments comment = {commentdata.commentData}/>);
                        })
                      }
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
