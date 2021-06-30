import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import FreshItems from "./fresh-items/FreshItems.js";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";
import HomeIcon from "@material-ui/icons/Home";
import "./Main.css";
import Loader from "../Loader/Loader.js";
import { db } from "../auth/firebase.js";

import Select from "../../common/components/Select";
import { Box } from "grommet";

const sortOptions = (arr) => {
  arr.sort((first, second) => {
    return first.label > second.label ? 1 : first.label < second.label ? -1 : 0;
  });
};

const occupancyOptions = [
  { label: "PG", value: "PG" },
  { label: "Flat", value: "Flat" },
];
const locationOptions = [
  { label: "Chandigarh", value: "Chandigarh" },
  { label: "Panchkula", value: "Panchkula" },
  { label: "Haridwar", value: "Haridwar" },
  { label: "Roorkee", value: "Roorkee" },
  { label: "Panipat", value: "Panipat" },
  { label: "Sonipat", value: "Sonipat" },
  { label: "Gurugram", value: "Gurugram" },
  { label: "Delhi", value: "Delhi" },
  { label: "Ambala", value: "Ambala" },
  { label: "Kurukshetra", value: "Kurukshetra" },
  { label: "Zirakpur", value: "Zirakpur" },
  { label: "Derabassi", value: "Derabassi" },
  { label: "Karnal", value: "Karnal" },
];
const budgetOptions = [
  { label: "<5000", value: "<5000" },
  { label: "5000-8000", value: "5000-8000" },
  { label: "8000-10000", value: "8000-10000" },
  { label: "10000-15000", value: "10000-15000" },
  { label: ">15000", value: ">15000" },
];
sortOptions(occupancyOptions);
sortOptions(locationOptions);

const Main = () => {
  const [isLoader, setisLoader] = useState(true);
  const [occupancy, setOccupancy] = useState(null);
  const [location, setLocation] = useState(null);
  const [budget, setBudget] = useState(null);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getItems = async () => {
      db.collection("items").onSnapshot((snapshot) => {
        setItems(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );

        setisLoader(false);
      });
    };

    getItems();
  }, []);

  return (
    <>
      {isLoader ? (
        <Loader />
      ) : (
        <div>
          <div className="fresh_items_here">
            <div className="fresh_item_form">
              <div className="fresh_item_inputBox">
                <LocationOnIcon style={{ color: "green" }} />
                <Box width="small" margin={{ horizontal: "small" }}>
                  <Select
                    defaultOptions={locationOptions}
                    placeholder="location"
                    name="location"
                    onChange={(val) => setLocation(val)}
                    value={location}
                  />
                </Box>
                <HomeIcon style={{ color: "green" }} />
                <Box width="small" margin={{ horizontal: "small" }}>
                  <Select
                    defaultOptions={occupancyOptions}
                    placeholder="Occupancy "
                    onChange={(val) => setOccupancy(val)}
                    value={occupancy}
                    name="occupancy"
                  />
                </Box>
                <div className="rupee_icon_form">
                  <label style={{ color: "green" }}>₹</label>
                </div>
                <Box width="small" margin={{ horizontal: "small" }}>
                  <Select
                    defaultOptions={budgetOptions}
                    placeholder="Budget "
                    onChange={(val) => setBudget(val)}
                    value={budget}
                    name="budget"
                  />
                </Box>
              </div>
              <div className="fresh_item_button">
                <Button
                  variant="contained"
                  color="#267370"
                  startIcon={<SearchIcon />}
                >
                  Search
                </Button>
              </div>
            </div>
            <div className="fresh_items_header">
              <h3>Recommendations depending upon your search</h3>
              <label></label>
            </div>

            <div className="fresh_items_container">
              {items?.map((item, index) => {
                return (
                  <Link class="fresh_item_link" to={"/item/" + item.id}>
                    <FreshItems key={index} id={item.id} data={item.data} />
                  </Link>
                );
              })}
            </div>

            <div className="more_btn">
              <button>More</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Main;
