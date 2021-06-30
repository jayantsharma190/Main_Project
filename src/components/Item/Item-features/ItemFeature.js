import React from "react";
import { Img } from "react-image";
import "./ItemFeature.css";

function ItemFeature({ detail }) {
  return (
    <>
      <div className="item-feature-container">
        <div className="common-area-amenties">
          <h3>
            Common Areas <u>Amenities</u>
          </h3>
          <div className="common-amenties common-icons-grid">
            {detail.ro ? (
              <label className="common-amenties-label">
                <img
                  src="https://img.icons8.com/ios/64/000000/water-cooler.png"
                  className="img-icon-type-style"
                  alt=""
                />
                <p className="img-icon-name">Purifier</p>
              </label>
            ) : (
              ""
            )}
            {detail.fridge ? (
              <label className="common-amenties-label">
                <img
                  src="https://img.icons8.com/ios/50/000000/fridge.png"
                  className="img-icon-type-style"
                  alt=""
                />
                <p className="img-icon-name">Fridge</p>
              </label>
            ) : (
              ""
            )}
            {detail.microwave ? (
              <label className="common-amenties-label">
                <img
                  src="https://img.icons8.com/dotty/80/000000/toaster-oven.png"
                  className="img-icon-type-style"
                  alt=""
                />
                <p className="img-icon-name">Oven</p>
              </label>
            ) : (
              ""
            )}
            {detail.lift ? (
              <label className="common-amenties-label">
                <img
                  src="https://img.icons8.com/wired/64/000000/elevator.png"
                  className="img-icon-type-style"
                  alt=""
                />
                <p className="img-icon-name">Lift</p>
              </label>
            ) : (
              ""
            )}
            {detail.gym ? (
              <label className="common-amenties-label">
                <img
                  src="https://img.icons8.com/ios/50/000000/gum-.png"
                  className="img-icon-type-style"
                  alt=""
                />
                <p className="img-icon-name">Gym</p>
              </label>
            ) : (
              ""
            )}
            {detail.power_backup ? (
              <label className="common-amenties-label">
                <img
                  src="https://img.icons8.com/ios/50/000000/hdmi-cable.png"
                  className="img-icon-type-style"
                  alt=""
                />
                <p className="img-icon-name">Power-Backup</p>
              </label>
            ) : (
              ""
            )}
            {detail.washroom ? (
              <label className="common-amenties-label">
                <img
                  src="https://img.icons8.com/ios/50/000000/outdoor-toilet.png"
                  className="img-icon-type-style"
                  alt=""
                />
                <p className="img-icon-name">Washroom</p>
              </label>
            ) : (
              ""
            )}
            {detail.cupboard ? (
              <label className="common-amenties-label">
                <img
                  src="https://img.icons8.com/ios/50/000000/cupboard.png"
                  className="img-icon-type-style"
                  alt=""
                />
                <p className="img-icon-name">Cup Board</p>
              </label>
            ) : (
              ""
            )}
            {detail.TV ? (
              <label className="common-amenties-label">
                <img
                  src="https://img.icons8.com/ios/64/000000/retro-tv.png"
                  className="img-icon-type-style"
                  alt=""
                />
                <p className="img-icon-name">TV</p>
              </label>
            ) : (
              ""
            )}
            {detail.AC ? (
              <label className="common-amenties-label">
                <img
                  src="https://img.icons8.com/pastel-glyph/50/000000/air-conditioner--v2.png"
                  className="img-icon-type-style"
                  alt=""
                />
                <p className="img-icon-name">AC</p>
              </label>
            ) : (
              ""
            )}
            {detail.mattress ? (
              <label className="common-amenties-label">
                <img
                  src="https://img.icons8.com/pastel-glyph/64/000000/empty-bed.png"
                  className="img-icon-type-style"
                  alt=""
                />
                <p className="img-icon-name">Mattress</p>
              </label>
            ) : (
              ""
            )}
            {detail.sidetable ? (
              <label className="common-amenties-label">
                <img
                  src="https://img.icons8.com/glyph-neue/64/000000/table.png"
                  className="img-icon-type-style"
                  alt=""
                />
                <p className="img-icon-name">Side Table</p>
              </label>
            ) : (
              ""
            )}
            {detail.kitchen_self_cooking ? (
              <label className="common-amenties-label">
                <img
                  src="https://img.icons8.com/glyph-neue/64/000000/kitchen-room.png"
                  className="img-icon-type-style"
                  alt=""
                />
                <p className="img-icon-name">Self Cooking Kitchen</p>
              </label>
            ) : (
              ""
            )}
          </div>
        </div>

        <div className="services-available-container">
          <h3>
            Services <u>Available</u>
          </h3>
          <div className="services-available">
            {detail.laundry ? (
              <label className="common-amenties-label">
                <img
                  src="https://img.icons8.com/ios/50/000000/laundry-bag.png"
                  className="img-icon-type-style"
                  alt=""
                />
                <p className="img-icon-name">Laundry</p>
              </label>
            ) : (
              ""
            )}
            {detail.room_clean ? (
              <label className="common-amenties-label">
                <img
                  src="https://img.icons8.com/wired/64/000000/clean.png"
                  className="img-icon-type-style"
                  alt=""
                />
                <p className="img-icon-name">Room Clean</p>
              </label>
            ) : (
              ""
            )}
            {detail.warden ? (
              <label className="common-amenties-label">
                <img
                  src="https://img.icons8.com/ios/50/000000/athlete.png"
                  className="img-icon-type-style"
                  alt=""
                />
                <p className="img-icon-name">Warden</p>
              </label>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="food-provided-container">
          <h3>
            <u>Food</u> Provided
          </h3>
          <div className="food-provided">
            {detail.breakfast ? (
              <label className="common-amenties-label">
                <img
                  src="https://img.icons8.com/ios/50/000000/buffet-breakfast--v2.png"
                  className="img-icon-type-style"
                  alt=""
                />
                <p className="img-icon-name">Breakfast</p>
              </label>
            ) : (
              ""
            )}
            {detail.lunch ? (
              <label className="common-amenties-label">
                <img
                  src="https://img.icons8.com/pastel-glyph/64/000000/dinner--v2.png"
                  className="img-icon-type-style"
                  alt=""
                />
                <p className="img-icon-name">Lunch</p>
              </label>
            ) : (
              ""
            )}
            {detail.dinner ? (
              <label className="common-amenties-label">
                <img
                  src="https://img.icons8.com/ios/50/000000/dinner.png"
                  className="img-icon-type-style"
                  alt=""
                />
                <p className="img-icon-name">Dinner</p>
              </label>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="pg-rules-container">
            <h3>PG <u>Rules</u></h3>
          <div className="pg-rules">
            {detail.veg ? (
              <label className="common-amenties-label">
                <img
                  img src="https://img.icons8.com/carbon-copy/64/000000/vegetarian-food.png"
                  className="img-icon-type-style"
                  alt=""
                />
                <p className="img-icon-name">Veg Only</p>
              </label>
            ) : (
              ""
            )}
             {detail.no_smoke ? (
              <label className="common-amenties-label">
                <img
                  src="https://img.icons8.com/android/24/000000/no-smoking.png"
                  className="img-icon-type-style"
                  alt=""
                />
                <p className="img-icon-name">No Smoking</p>
              </label>
            ) : (
              ""
            )}
             {detail.no_alcohol ? (
              <label className="common-amenties-label">
                <img
                  src="https://img.icons8.com/pastel-glyph/64/000000/no-alcohol--v1.png"
                  className="img-icon-type-style"
                  alt=""
                />
                <p className="img-icon-name">No Alcohol</p>
              </label>
            ) : (
              ""
            )}
             {detail.guardian ? (
              <label className="common-amenties-label">
                <img
                  src="https://img.icons8.com/windows/32/000000/no-yelling.png"
                  className="img-icon-type-style"
                  alt=""
                />
                <p className="img-icon-name">Guardian Not Allowed</p>
              </label>
            ) : (
              ""
            )}
             {detail.opposite_gender ? (
              <label className="common-amenties-label">
                <img
                  src="https://img.icons8.com/ios/32/000000/collaboration-female-male.png"
                  className="img-icon-type-style"
                  alt=""
                />
                <p className="img-icon-name">Opposite Gender Not Allowed</p>
              </label>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemFeature;
