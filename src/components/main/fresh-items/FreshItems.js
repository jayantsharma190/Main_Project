import React from "react";
import { MDBRow, MDBCol } from "mdbreact";
import { Img } from "react-image";

import "./FreshItems.css";
import Loader from "../../Loader/Loader";

function FreshItems({ id, data }) {
  // function demo() {
  //   console.log(id, data);
  // }

  // demo();

  return (
    <div className="fresh_item">
      <div className="fresh_item_img">
        <MDBRow>
          <MDBCol>
            <Img
              src={data?.images_url[0]}
              alt="thumbnail"
              className="img-thumbnail"
              loader={<Loader />}
            />
          </MDBCol>
        </MDBRow>
      </div>
      <div className="fresh_item_info">
        <h4>₹{data?.oneBedCost}</h4>
        <h4>{data?.name}</h4>
        <div className="fresh_item_info1">
          <h6 className="fresh_item_location">{data?.locality}</h6>
          <h6 className="fresh_item_date">{data?.created_on}</h6>
        </div>
      </div>
      <div className="fresh_item_icons">
        <div className="fresh_item_featured">
          <h5>Verified</h5>
        </div>
      </div>
    </div>
  );
}

export default FreshItems;
