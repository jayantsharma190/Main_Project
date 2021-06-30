import React, { useEffect, useMemo } from "react";
import "./ItemSlider.css";
import { Img } from "react-image";
import { Carousel } from "react-responsive-carousel";
import Loader from "../../Loader/Loader";
import { db } from "../../auth/firebase";

function ItemSlider({imagesKey}) {


  useMemo(() => {
    console.log("1");
  }, []);

  useEffect(() => {

    console.log(imagesKey);
  }, []);

  return (
      <>
    <div className="item-slider-container">
      <div className="item-slider">
        <Carousel showArrows={true} >
          {imagesKey?.map((key) => {
            return <div>
                <img src = {key} loader = {<Loader/>} showthumbs = {true} alt="slider-img"/>
            </div>;
          })}


        </Carousel>
      </div>
    </div>
    </>
  );
}

export default ItemSlider;


// <div className="item-slider-img">
// <Img
//   src="https://firebasestorage.googleapis.com/v0/b/pinpointstay-here.appspot.com/o/item_images%2Fuid%2FIMG_20210406_061226.jpg?alt=media&token=e3d2b8c7-5132-4bb9-b2b3-0a1366d94ef9"
//   loader={<Loader />}
// />
// {/* { <p className="legend">Legend 1</p> */} */}
// </div>
// <div className="item-slider-img">
// <img src="https://firebasestorage.googleapis.com/v0/b/pinpointstay-here.appspot.com/o/item_images%2Fuid%2FIMG_20210406_061226.jpg?alt=media&token=e3d2b8c7-5132-4bb9-b2b3-0a1366d94ef9" />
// {/* <p className="legend">Legend 2</p> */}
// </div>
// <div className="item-slider-img">
// <img src="https://firebasestorage.googleapis.com/v0/b/pinpointstay-here.appspot.com/o/item_images%2Fuid%2FIMG_20210406_061226.jpg?alt=media&token=e3d2b8c7-5132-4bb9-b2b3-0a1366d94ef9" />
// {/* <p className="legend">Legend 3</p> */}
// </div>
// <div className="item-slider-img">
// <img src="https://firebasestorage.googleapis.com/v0/b/pinpointstay-here.appspot.com/o/item_images%2Fuid%2FIMG_20210406_061226.jpg?alt=media&token=e3d2b8c7-5132-4bb9-b2b3-0a1366d94ef9" />
// {/* <p className="legend">Legend 4</p> */}
// </div>
// <div className="item-slider-img">
// <img src="https://firebasestorage.googleapis.com/v0/b/pinpointstay-here.appspot.com/o/item_images%2Fuid%2FIMG_20210406_061226.jpg?alt=media&token=e3d2b8c7-5132-4bb9-b2b3-0a1366d94ef9" />
// {/* <p className="legend">Legend 5</p> */}
// </div>
// <div className="item-slider-img">
// <img src="https://firebasestorage.googleapis.com/v0/b/pinpointstay-here.appspot.com/o/item_images%2Fuid%2FIMG_20210406_061226.jpg?alt=media&token=e3d2b8c7-5132-4bb9-b2b3-0a1366d94ef9" />
// {/* <p className="legend">Legend 6</p> */}
// </div>