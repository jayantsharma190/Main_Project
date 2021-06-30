import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import "./PG.css";

import { storage, db } from "../auth/firebase.js";

function PG() {
  let [p1, setp1] = useState(true);
  let [p2, setp2] = useState(false);
  let [p3, setp3] = useState(false);
  let [p4, setp4] = useState(false);
  let [p5, setp5] = useState(false);
  let [p6, setp6] = useState(false);
  let [p7, setp7] = useState(false);
  let [p8, setp8] = useState(false);
  let [p9, setp9] = useState(true);
  let [p10, setp10] = useState(false);

  let [entireSubmit, setentireSubmit] = useState(false);
  let image_uploading = "Uploading ...";
  let [btnUpload, setbtnUpload] = useState(false);
  let image = "";
  let [images_url, setImagesUrl] = useState([]);
  let [locality, setLocality] = useState("");
  let [address, setAddress] = useState("");
  let [pincode, setPincode] = useState("");
  let [landmark, setLandmark] = useState("");
  let [operational_since, setOperational] = useState("");
  let [pg_present_in, setPGPresence] = useState("");
  let [maintainance,setmaintainance] = useState(0);
  let [deposit,setdeposit] = useState(0);
  let [noticePeriod,setnoticePeriod] = useState("");
  let [electricityCharge,setelectricityCharge] = useState(0);
  let [kitchen_self_cooking, setKitchenSelf] = useState(false);
  let [washroom, setwashroom] = useState(false);
  let [cupboard, setcupboard] = useState(false);
  let [TV, setTV] = useState(false);
  let [AC, setAC] = useState(false);
  let [cot, setcot] = useState(false);
  let [mattress, setmattress] = useState(false);
  let [sidetable, setsidetable] = useState(false);
  let [aircooler, setaircooler] = useState(false);

  let [ro, setRo] = useState(false);
  let [fridge, setFridge] = useState(false);
  let [microwave, setMicrowave] = useState(false);
  let [lift, setLift] = useState(false);
  let [gym, setGym] = useState(false);
  let [power_backup, setPowerBackup] = useState(false);
  let [name, setName] = useState(false);
  let [laundry, setLaundry] = useState(false);
  let [room_clean, setRoomClean] = useState(false);
  let [warden, setWarden] = useState(false);
  let [breakfast, setBreakFast] = useState(false);
  let [lunch, setLunch] = useState(false);
  let [dinner, setDinner] = useState(false);
  let [nosmoke, setNoSmoke] = useState(false);
  let [noalcohol, setNoAlcohol] = useState(false);
  let [guardian, setGuardian] = useState(false);
  let [oppgender, setOppGender] = useState(false);
  let [veg, setVeg] = useState(false);
  let [male, setMale] = useState(false);
  let [female, setFemale] = useState(false);


  let [professional, setProfessional] = useState(false);
  let [student, setStudent] = useState(false);
  let [OneBedRadio, setOneBedRadio] = useState(false);
  let [TwoBedRadio, setTwoBedRadio] = useState(false);
  let [MultipleBedRadio, setMultipleBedRadio] = useState(false);
  let [oneBedCost, setOneBedCost] = useState(0);
  let [TwoBedCost, setTwoBedCost] = useState(0);
  let [MultipleBedCost, setMultipleBedCost] = useState(0);

  const checkPageOneVal = () => {
    if (
      locality === "" ||
      address === "" ||
      pincode === "" ||
      operational_since === ""
    ) {
      alert("Please enter required fields");
    } else {
      setp1(false);
      setp2(true);
    }
  };

  const checkPageTwoVal = () => {
    setp2(false);
    setp3(true);
  };

  const checkPageThreeVal = () => {
    if (name === "") {
      alert("Please enter you pg name ...");
    } else {
      setp3(false);
      setp4(true);
    }
  };

  const checkPageFourVal = () => {
    setp4(false);
    setp5(true);
  };

  const setImageAsFile = (event) => {
    if (event.target.files.length === 1) {
      image = event.target.files[0];
      console.log(image);
    } else {
      alert("please upload an file");
    }
  };

  const handleFirebaseUpload = (event) => {
    event.preventDefault();
    if (image !== "") {
      const uploadTask = storage
        .ref(`/item_images/uid/${image.name}`)
        .put(image);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          setbtnUpload(true);
          console.log(snapshot);
        },
        (err) => {
          console.log(err);
        },
        () => {
          alert(
            ":) Your image is uploaded successfully repeat the above steps to upload more"
          );
          setbtnUpload(false);
          storage
            .ref("item_images/uid/")
            .child(image.name)
            .getDownloadURL()
            .then((url) => {
              console.log(url);
              const temp = images_url;
              temp.push(url);
              setImagesUrl(temp);
            });
        }
      );
    } else {
      alert("Please upload images as it's the required");
    }
  };

  const SubmitEntirePGForm = async () => {
    setentireSubmit(true);
    await db.collection("items").add({
      name: name,
      locality: locality,
      address: address,
      pincode: pincode,
      landmark: landmark,
      operational_since: operational_since,
      pg_present_in: pg_present_in,
      kitchen_self_cooking: kitchen_self_cooking,
      ro: ro,
      fridge: fridge,
      microwave: microwave,
      lift: lift,
      gym: gym,
      power_backup: power_backup,
      laundry: laundry,
      room_clean: room_clean,
      warden: warden,
      breakfast: breakfast,
      lunch: lunch,
      dinner: dinner,
      images_url: images_url,
      no_smoke: nosmoke,
      no_alcohol: noalcohol,
      guardian: guardian,
      opposite_gender: oppgender,
      veg: veg,
      male: male,
      female: female,
      professional: professional,
      student: student,
      oneBedCost:oneBedCost,
      twoBedCost:TwoBedCost,
      multipleBedCost:MultipleBedCost,
      created_on:new Date().toLocaleDateString(),
      views:1,
      created_by:1234,
      washroom:washroom,
      cupboard:cupboard,
      TV:TV,
      AC:AC,
      cot:cot,
      mattress:mattress,
      sidetable:sidetable,
      aircooler:aircooler,
      maintainance:maintainance,
      noticePeriod:noticePeriod,
      deposit:deposit,
      electricityCharge:electricityCharge,
      Active:1


    });
    alert("Success");
  };

  const backtopagep1 = () => {
    setp2(false);
    setp1(true);
  };

  const backtopagep2 = () => {
    setp2(true);
    setp3(false);
  };

  const backtopagep3 = () => {
    setp3(true);
    setp4(false);
  };

  const backtopagep4 = () => {
    setp5(false);
    setp4(true);
  };

  const backtopagep5 = () => {
    setp5(true);
    setp6(false);
  };

  const backtopagep6 = () => {
    setp6(true);
    setp7(false);
  };

  const backtopagep7 = () => {
    setp7(true);
    setp8(false);
  };
  const backtopagep8 = () => {
    setp9(false);
    setp8(true);
  };

  const backtopagep9 = () => {
    setp10(false);
    setp9(true);
  };

  const checkPageFiveVal = () => {
    setp5(false);
    setp6(true);
  };

  const checkPageTenVal = () => {
    const confirmBox = window.confirm("Are you sure ?");

    if (confirmBox === true) {
      SubmitEntirePGForm();
    } else {
      alert("what happen");
    }
  };

  const checkPageSixVal = () => {
    setp6(false);
    setp7(true);
  };

  const checkPageSevenVal = () => {
    setp7(false);
    setp8(true);
  };
  const checkPageEightVal = () => {
    setp8(false);
    setp9(true);
  };
  const checkPageNineVal = () => {
    if (OneBedRadio) {
      if (oneBedCost === 0) {
        alert(
          "Please Fill one bed cost as you checked it otherwise uncheck it ..."
        );
        return;
      }
    }
    if (TwoBedRadio) {
      if (TwoBedCost === 0) {
        alert(
          "Please Fill two bed cost as you checked it otherwise uncheck it ..."
        );
        return;
      }
    }
    if (MultipleBedRadio) {
      if (MultipleBedCost === 0) {
        alert(
          "Please Fill multiple bed cost as you checked it otherwise uncheck it ..."
        );
        return;
      }
    }
    if (oneBedCost === 0 && TwoBedCost === 0 && MultipleBedCost === 0) {
      alert("Are you selling you PG in free");
      return;
    }
    setp9(false);
    setp10(true);
  };
  return (
    <>
      <div className="pg_register_container">
        {p1 ? (
          <div className="pg_r_1 pg_r_common">
            <div className="pg_r_heading">
              <label>
                <h2>Enter Your PG Address</h2>
                <p>Make sure the address is correct, complete and precise</p>
              </label>
            </div>
            <form>
              <div className="pg_r_locality">
                <label>
                  <p className="para_margin">
                    Locality <span style={{ color: "red" }}>*</span>
                  </p>
                  <input
                    type="text"
                    className="input_common_style"
                    onChange={(event) => {
                      setLocality(event.target.value);
                    }}
                  />
                </label>
              </div>
              <div className="pg_r_address">
                <label>
                  <p className="para_margin">
                    Address <span style={{ color: "red" }}>*</span>
                  </p>
                  <input
                    type="text"
                    className="input_common_style"
                    onChange={(event) => {
                      setAddress(event.target.value);
                    }}
                  />
                </label>
              </div>
              <div className="pg_r_pincode">
                <label>
                  <p className="para_margin">
                    Pincode <span style={{ color: "red" }}>*</span>
                  </p>
                  <input
                    type="text"
                    className="input_common_style"
                    onChange={(event) => {
                      setPincode(event.target.value);
                    }}
                  />
                </label>
              </div>
              <div className="pg_r_landmark">
                <label>
                  <p className="para_margin">Landmark</p>
                  <input
                    type="text"
                    className="input_common_style"
                    onChange={(event) => {
                      setLandmark(event.target.value);
                    }}
                  />
                </label>
              </div>
              <div className="pg_r_operational">
                <label>
                  <p className="para_margin">
                    PG operational since <span style={{ color: "red" }}>*</span>
                  </p>
                  <input
                    type="text"
                    className="input_common_style"
                    onChange={(event) => {
                      setOperational(event.target.value);
                    }}
                  />
                </label>
              </div>
              <div className="pg_r_is_present_on">
                <label>
                  <p className="para_margin">
                    PG is present in <span style={{ color: "red" }}>*</span>
                  </p>
                  <select
                    className="input_common_style"
                    onChange={(event) => {
                      setPGPresence(event.target.value);
                    }}
                  >
                    <option value="An independent building">
                      An independent building
                    </option>
                    <option value="An independent Flat">
                      An independent Flat
                    </option>
                    <option value="Present in a Society">
                      Present in a Society
                    </option>
                  </select>
                </label>
              </div>
              <div className="pg_r_btn pg_r_1">
                <label>
                  <Button
                    onClick={() => {
                      checkPageOneVal();
                    }}
                    variant="contained"
                    color="secondary"
                    className="right_first_button1"
                  >
                    Continue
                  </Button>
                </label>
              </div>
            </form>
          </div>
        ) : (
          ""
        )}
        {p2 ? (
          <div className="pg_r_2 pg_r_common">
            <div className="pg_r_heading">
              <label>
                <h2>Common Areas Ammenties</h2>
              </label>
            </div>
            <div className="pg_r_kitchen_self_cokking">
              <label className="d-flex1">
                <span className="span-d-flex">
                  <img
                    className="pg_r_2_img_common"
                    src="https://st2.depositphotos.com/1024516/7360/v/600/depositphotos_73603209-stock-illustration-vector-food-service-logo-design.jpg"
                    alt="self-cokking"
                  />
                  <p className="para_margin1">Kitchen for self cooking</p>
                </span>
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input pg_r_2_radio"
                    id="defaultUnchecked1"
                    onChange={() => {
                      setKitchenSelf(kitchen_self_cooking ? false : true);
                    }}
                  />
                  <label
                    className="custom-control-label"
                    for="defaultUnchecked1"
                  ></label>
                </div>
              </label>
            </div>
            <hr />
            <div className="pg_r_ro">
              <label className="d-flex1">
                <span className="span-d-flex">
                  <img
                    className="pg_r_2_img_common"
                    src="data:image/jpeg;base64,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"
                    alt="self-cokking"
                  />
                  <p className="para_margin1">RO(Purifier)</p>
                </span>
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input pg_r_2_radio"
                    id="defaultUnchecked2"
                    onChange={() => {
                      setRo(ro ? false : true);
                    }}
                  />
                  <label
                    className="custom-control-label"
                    for="defaultUnchecked2"
                  ></label>
                </div>
              </label>
            </div>
            <hr />

            <div className="pg_r_fridge">
              <label className="d-flex1">
                <span className="span-d-flex">
                  <img
                    className="pg_r_2_img_common"
                    src="https://img.icons8.com/ios/452/fridge.png"
                    alt="self-cokking"
                  />
                  <p className="para_margin1">Fridge</p>
                </span>
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input pg_r_2_radio"
                    id="defaultUnchecked3"
                    onChange={() => {
                      setFridge(fridge ? false : true);
                    }}
                  />
                  <label
                    className="custom-control-label"
                    for="defaultUnchecked3"
                  ></label>
                </div>
              </label>
            </div>
            <hr />

            <div className="pg_r_microwave">
              <label className="d-flex1">
                <span className="span-d-flex">
                  <img
                    className="pg_r_2_img_common"
                    src="data:image/png;base64,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"
                    alt="self-cokking"
                  />
                  <p className="para_margin1">Microwave</p>
                </span>
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input pg_r_2_radio"
                    id="defaultUnchecked4"
                    onChange={() => {
                      setMicrowave(microwave ? false : true);
                    }}
                  />
                  <label
                    className="custom-control-label"
                    for="defaultUnchecked4"
                  ></label>
                </div>
              </label>
            </div>
            <hr />

            <div className="pg_r_lift">
              <label className="d-flex1">
                <span className="span-d-flex">
                  <img
                    className="pg_r_2_img_common"
                    src="https://thumbs.dreamstime.com/b/elevator-icon-148796261.jpg"
                    alt="self-cokking"
                  />
                  <p className="para_margin1">Lift</p>
                </span>
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input pg_r_2_radio"
                    id="defaultUnchecked5"
                    onChange={() => {
                      setLift(lift ? false : true);
                    }}
                  />
                  <label
                    className="custom-control-label"
                    for="defaultUnchecked5"
                  ></label>
                </div>
              </label>
            </div>
            <hr />

            <div className="pg_r_ro">
              <label className="d-flex1">
                <span className="span-d-flex">
                  <img
                    className="pg_r_2_img_common"
                    src="https://i.pinimg.com/736x/0f/8a/78/0f8a7847f053d3b12aa7a5f4e63a285f.jpg"
                    alt="self-cokking"
                  />
                  <p className="para_margin1">Gym</p>
                </span>
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input pg_r_2_radio"
                    id="defaultUnchecked6"
                    onChange={() => {
                      setGym(gym ? false : true);
                    }}
                  />
                  <label
                    className="custom-control-label"
                    for="defaultUnchecked6"
                  ></label>
                </div>
              </label>
            </div>
            <hr />

            <div className="pg_r_ro">
              <label className="d-flex1">
                <span className="span-d-flex">
                  <p>Icon</p>
                  <p className="para_margin1">Power Backup</p>
                </span>
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input pg_r_2_radio"
                    id="defaultUnchecked7"
                    onChange={() => {
                      setPowerBackup(power_backup ? false : true);
                    }}
                  />
                  <label
                    className="custom-control-label"
                    for="defaultUnchecked7"
                  ></label>
                </div>
              </label>
            </div>
            <hr />
            <div className="pg_r_ro">
              <label className="d-flex1">
                <span className="span-d-flex">
                  <p>Icon</p>
                  <p className="para_margin1">Washrooms</p>
                </span>
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input pg_r_2_radio"
                    id="defaultUnchecked8"
                    onChange={() => {
                      setwashroom(washroom ? false : true);
                    }}
                  />
                  <label
                    className="custom-control-label"
                    for="defaultUnchecked8"
                  ></label>
                </div>
              </label>
            </div>
            <hr />
            <div className="pg_r_ro">
              <label className="d-flex1">
                <span className="span-d-flex">
                  <p>Icon</p>
                  <p className="para_margin1">CupBoard</p>
                </span>
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input pg_r_2_radio"
                    id="defaultUnchecked9"
                    onChange={() => {
                      setcupboard(cupboard ? false : true);
                    }}
                  />
                  <label
                    className="custom-control-label"
                    for="defaultUnchecked9"
                  ></label>
                </div>
              </label>
            </div>
            <hr />

            <div className="pg_r_ro">
              <label className="d-flex1">
                <span className="span-d-flex">
                  <p>Icon</p>
                  <p className="para_margin1">TV</p>
                </span>
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input pg_r_2_radio"
                    id="defaultUnchecked10"
                    onChange={() => {
                      setTV(TV ? false : true);
                    }}
                  />
                  <label
                    className="custom-control-label"
                    for="defaultUnchecked10"
                  ></label>
                </div>
              </label>
            </div>
            <hr />

            <div className="pg_r_ro">
              <label className="d-flex1">
                <span className="span-d-flex">
                  <p>Icon</p>
                  <p className="para_margin1">AC</p>
                </span>
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input pg_r_2_radio"
                    id="defaultUnchecked11"
                    onChange={() => {
                      setAC(AC ? false : true);
                    }}
                  />
                  <label
                    className="custom-control-label"
                    for="defaultUnchecked11"
                  ></label>
                </div>
              </label>
            </div>
            <hr />

            <div className="pg_r_ro">
              <label className="d-flex1">
                <span className="span-d-flex">
                  <p>icon</p>
                  <p className="para_margin1">Cot</p>
                </span>
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input pg_r_2_radio"
                    id="defaultUnchecked12"
                    onChange={() => {
                      setcot(cot ? false : true);
                    }}
                  />
                  <label
                    className="custom-control-label"
                    for="defaultUnchecked12"
                  ></label>
                </div>
              </label>
            </div>
            <hr />

            <div className="pg_r_ro">
              <label className="d-flex1">
                <span className="span-d-flex">
                  <p>icon</p>
                  <p className="para_margin1">Mattress</p>
                </span>
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input pg_r_2_radio"
                    id="defaultUnchecked13"
                    onChange={() => {
                      setmattress(mattress ? false : true);
                    }}
                  />
                  <label
                    className="custom-control-label"
                    for="defaultUnchecked13"
                  ></label>
                </div>
              </label>
            </div>
            <hr />

            <div className="pg_r_ro">
              <label className="d-flex1">
                <span className="span-d-flex">
                  <p>Icon</p>
                  <p className="para_margin1">Side Table</p>
                </span>
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input pg_r_2_radio"
                    id="defaultUnchecked14"
                    onChange={() => {
                      setsidetable(sidetable ? false : true);
                    }}
                  />
                  <label
                    className="custom-control-label"
                    for="defaultUnchecked14"
                  ></label>
                </div>
              </label>
            </div>
            <hr />
            <div className="pg_r_ro">
              <label className="d-flex1">
                <span className="span-d-flex">
                  <p>Icon</p>
                  <p className="para_margin1">Air Cooler</p>
                </span>
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input pg_r_2_radio"
                    id="defaultUnchecked15"
                    onChange={() => {
                      setaircooler(aircooler ? false : true);
                    }}
                  />
                  <label
                    className="custom-control-label"
                    for="defaultUnchecked15"
                  ></label>
                </div>
              </label>
            </div>
            <hr />

            <div className="pg_r_btn pg_r_2">
              <label className="d-flex1">
                <Button
                  onClick={() => {
                    backtopagep1();
                  }}
                  varient="contained"
                  color="primary"
                >
                  Back
                </Button>
                <Button
                  onClick={() => {
                    checkPageTwoVal();
                  }}
                  variant="contained"
                  color="secondary"
                  className="right_first_button1"
                >
                  Continue
                </Button>
              </label>
            </div>
          </div>
        ) : (
          ""
        )}
        {p3 ? (
          <div className="pg_r_3 pg_r_common">
            <div className="pg_r_heading">
              <label>
                <h2>Confirm your PG name</h2>
                <p>
                  The name will be visible to the guests when they search pg on
                  Pinpointstay
                </p>
              </label>
            </div>
            <div className="pg_r_name">
              <label>
                <p className="para_margin">
                  Name of the PG<span style={{ color: "red" }}>*</span>
                </p>
                <input
                  type="text"
                  className="input_common_style"
                  onChange={(event) => {
                    setName(event.target.value);
                  }}
                />
              </label>
            </div>
            <div className="pg_r_btn pg_r_3">
              <label className="d-flex1">
                <Button
                  onClick={() => {
                    backtopagep2();
                  }}
                  varient="contained"
                  color="primary"
                >
                  Back
                </Button>
                <Button
                  onClick={() => {
                    checkPageThreeVal();
                  }}
                  variant="contained"
                  color="secondary"
                  className="right_first_button1"
                >
                  Continue
                </Button>
              </label>
            </div>
          </div>
        ) : (
          ""
        )}
        {p4 ? (
          <div className="pg_r_4 pg_r_common">
            <div className="pg_r_heading">
              <label>
                <h2>Services Available</h2>
              </label>
            </div>
            <div className="pg_r_kitchen_self_cokking">
              <label className="d-flex1">
                <span className="span-d-flex">
                  <p>Icon</p>
                  <p className="para_margin1">Laundry</p>
                </span>
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input pg_r_2_radio"
                    id="defaultUnchecked20"
                    onChange={() => {
                      setLaundry(laundry ? false : true);
                    }}
                  />
                  <label
                    className="custom-control-label"
                    for="defaultUnchecked20"
                  ></label>
                </div>
              </label>
            </div>
            <hr />
            <div className="pg_r_ro">
              <label className="d-flex1">
                <span className="span-d-flex">
                  <p>Icon</p>
                  <p className="para_margin1">Room Cleaning</p>
                </span>
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input pg_r_2_radio"
                    id="defaultUnchecked21"
                    onChange={() => {
                      setRoomClean(room_clean ? false : true);
                    }}
                  />
                  <label
                    className="custom-control-label"
                    for="defaultUnchecked21"
                  ></label>
                </div>
              </label>
            </div>
            <hr />
            <div className="pg_r_ro">
              <label className="d-flex1">
                <span className="span-d-flex">
                  <p>Icon</p>
                  <p className="para_margin1">Warden</p>
                </span>
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input pg_r_2_radio"
                    id="defaultUnchecked22"
                    onChange={() => {
                      setWarden(warden ? false : true);
                    }}
                  />
                  <label
                    className="custom-control-label"
                    for="defaultUnchecked22"
                  ></label>
                </div>
              </label>
            </div>
            <hr />

            <div style={{ marginTop: "40px" }}>
              <h3>Food Provided</h3>
            </div>
            <div className="pg_r_microwave">
              <label className="d-flex1">
                <span className="span-d-flex">
                  <p>Icon</p>
                  <p className="para_margin1">Breakfast</p>
                </span>
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input pg_r_2_radio"
                    id="defaultUnchecked23"
                    onChange={() => {
                      setBreakFast(breakfast ? false : true);
                    }}
                  />
                  <label
                    className="custom-control-label"
                    for="defaultUnchecked23"
                  ></label>
                </div>
              </label>
            </div>
            <hr />
            <div className="pg_r_microwave">
              <label className="d-flex1">
                <span className="span-d-flex">
                  <p>Icon</p>
                  <p className="para_margin1">Lunch</p>
                </span>
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input pg_r_2_radio"
                    id="defaultUnchecked24"
                    onChange={() => {
                      setLunch(lunch ? false : true);
                    }}
                  />
                  <label
                    className="custom-control-label"
                    for="defaultUnchecked24"
                  ></label>
                </div>
              </label>
            </div>
            <hr />
            <div className="pg_r_microwave">
              <label className="d-flex1">
                <span className="span-d-flex">
                  <p>Icon</p>
                  <p className="para_margin1">Dinner</p>
                </span>
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input pg_r_2_radio"
                    id="defaultUnchecked25"
                    onChange={() => {
                      setDinner(dinner ? false : true);
                    }}
                  />
                  <label
                    className="custom-control-label"
                    for="defaultUnchecked25"
                  ></label>
                </div>
              </label>
            </div>
            <hr />
            <div className="pg_r_btn pg_r_3">
              <label className="d-flex1">
                <Button
                  onClick={() => {
                    backtopagep3();
                  }}
                  varient="contained"
                  color="primary"
                >
                  Back
                </Button>
                <Button
                  onClick={() => {
                    checkPageFourVal();
                  }}
                  variant="contained"
                  color="secondary"
                  className="right_first_button1"
                >
                  Continue
                </Button>
              </label>
            </div>
          </div>
        ) : (
          ""
        )}
        {p5 ? (
          <div className="pg_r_common pg_r_3">
            <h2>Please Uplaod Images One by One</h2>
            <h4>Property with photos get more attention from buyers</h4>
            <p>Try to upload minimum 4 Images</p>
            <p>
              Steps follow to upload files :<br />
              1.Please choose an image after clicking to ChooseFile Button,
              <br />
              2.Than Click on Upload Button and <br /> 3.Repeat the steps if u
              want to upload more
            </p>
            <form onSubmit={handleFirebaseUpload}>
              <input
                type="file"
                required
                accept=".jpg,.jpeg,.png"
                onChange={(e) => {
                  setImageAsFile(e);
                }}
              />
              <br />
              {btnUpload ? image_uploading : <button>Upload</button>}
            </form>
            <div className="pg_r_btn pg_r_3">
              <label className="d-flex1">
                <Button
                  onClick={() => {
                    backtopagep4();
                  }}
                  varient="contained"
                  color="primary"
                >
                  Back
                </Button>
                <Button
                  onClick={() => {
                    checkPageFiveVal();
                  }}
                  variant="contained"
                  color="secondary"
                  className="right_first_button1"
                >
                  Continue
                </Button>
              </label>
            </div>
          </div>
        ) : (
          ""
        )}
        {p6 ? (
          <div className="pg_r_6 pg_r_common">
            <div className="pg_r_heading">
              <label>
                <h2>PG Rules</h2>
              </label>
            </div>
            <div className="pg_r_veg_only">
              <label className="d-flex1">
                <span className="span-d-flex">
                  <p>Icon</p>
                  <p className="para_margin1">Veg Only</p>
                </span>
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input pg_r_2_radio"
                    id="defaultUnchecked26"
                    onChange={() => {
                      setVeg(veg ? false : true);
                    }}
                  />
                  <label
                    className="custom-control-label"
                    for="defaultUnchecked26"
                  ></label>
                </div>
              </label>
            </div>
            <hr />
            <div className="pg_r_no_smoking">
              <label className="d-flex1">
                <span className="span-d-flex">
                  <p>Icon</p>
                  <p className="para_margin1">No Smoking</p>
                </span>
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input pg_r_2_radio"
                    id="defaultUnchecked27"
                    onChange={() => {
                      setNoSmoke(nosmoke ? false : true);
                    }}
                  />
                  <label
                    className="custom-control-label"
                    for="defaultUnchecked27"
                  ></label>
                </div>
              </label>
            </div>
            <hr />
            <div className="pg_r_alcohol_allow">
              <label className="d-flex1">
                <span className="span-d-flex">
                  <p>Icon</p>
                  <p className="para_margin1">Drinking Alcohol not allowed</p>
                </span>
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input pg_r_2_radio"
                    id="defaultUnchecked28"
                    onChange={() => {
                      setNoAlcohol(noalcohol ? false : true);
                    }}
                  />
                  <label
                    className="custom-control-label"
                    for="defaultUnchecked28"
                  ></label>
                </div>
              </label>
            </div>
            <hr />
            <div className="pg_r_alcohol_allow">
              <label className="d-flex1">
                <span className="span-d-flex">
                  <p>Icon</p>
                  <p className="para_margin1">
                    Entry of opposite gender not allowed
                  </p>
                </span>
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input pg_r_2_radio"
                    id="defaultUnchecked29"
                    onChange={() => {
                      setOppGender(oppgender ? false : true);
                    }}
                  />
                  <label
                    className="custom-control-label"
                    for="defaultUnchecked29"
                  ></label>
                </div>
              </label>
            </div>
            <hr />
            <div className="pg_r_alcohol_allow">
              <label className="d-flex1">
                <span className="span-d-flex">
                  <p>Icon</p>
                  <p className="para_margin1">Guardian not allowed</p>
                </span>
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input pg_r_2_radio"
                    id="defaultUnchecked30"
                    onChange={() => {
                      setGuardian(guardian ? false : true);
                    }}
                  />
                  <label
                    className="custom-control-label"
                    for="defaultUnchecked30"
                  ></label>
                </div>
              </label>
            </div>
            <hr />
            <div className="pg_r_btn pg_r_3">
              <label className="d-flex1">
                <Button
                  onClick={() => {
                    backtopagep5();
                  }}
                  varient="contained"
                  color="primary"
                >
                  Back
                </Button>
                <Button
                  onClick={() => {
                    checkPageSixVal();
                  }}
                  variant="contained"
                  color="secondary"
                  className="right_first_button1"
                >
                  Continue
                </Button>
              </label>
            </div>
          </div>
        ) : (
          ""
        )}
        {p7 ? (
          <div className="pg_r_common pg_r_7">
            <div className="pg_r_heading">
              <label>
                <h2>Preferred Gender</h2>
              </label>
            </div>
            <div className="pg_r_male">
              <label className="d-flex1">
                <span className="span-d-flex">
                  <p>Icon</p>
                  <p className="para_margin1">Male</p>
                </span>
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input pg_r_2_radio"
                    id="defaultUnchecked31"
                    onChange={() => {
                      setMale(male ? false : true);
                    }}
                  />
                  <label
                    className="custom-control-label"
                    for="defaultUnchecked31"
                  ></label>
                </div>
              </label>
            </div>
            <hr />
            <div className="pg_r_female">
              <label className="d-flex1">
                <span className="span-d-flex">
                  <p>Icon</p>
                  <p className="para_margin1">Female</p>
                </span>
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input pg_r_2_radio"
                    id="defaultUnchecked32"
                    onChange={() => {
                      setFemale(female ? false : true);
                    }}
                  />
                  <label
                    className="custom-control-label"
                    for="defaultUnchecked32"
                  ></label>
                </div>
              </label>
            </div>
            <hr />

            <div className="pg_r_btn pg_r_3">
              <label className="d-flex1">
                <Button
                  onClick={() => {
                    backtopagep6();
                  }}
                  varient="contained"
                  color="primary"
                >
                  Back
                </Button>
                <Button
                  onClick={() => {
                    checkPageSevenVal();
                  }}
                  variant="contained"
                  color="secondary"
                  className="right_first_button1"
                >
                  Continue
                </Button>
              </label>
            </div>
          </div>
        ) : (
          ""
        )}
        {p8 ? (
          <div className="pg_r_common pg_r_7">
            <div className="pg_r_heading">
              <label>
                <h2>Set Your Tenanat Preferences</h2>
              </label>
            </div>
            <div className="pg_r_professional">
              <label className="d-flex1">
                <span className="span-d-flex">
                  <p>Icon</p>
                  <p className="para_margin1">Professional</p>
                </span>
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input pg_r_2_radio"
                    id="defaultUnchecked33"
                    onChange={() => {
                      setProfessional(professional ? false : true);
                    }}
                  />
                  <label
                    className="custom-control-label"
                    for="defaultUnchecked33"
                  ></label>
                </div>
              </label>
            </div>
            <hr />
            <div className="pg_r_student">
              <label className="d-flex1">
                <span className="span-d-flex">
                  <p>Icon</p>
                  <p className="para_margin1">Student</p>
                </span>
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input pg_r_2_radio"
                    id="defaultUnchecked34"
                    onChange={() => {
                      setStudent(student ? false : true);
                    }}
                  />
                  <label
                    className="custom-control-label"
                    for="defaultUnchecked34"
                  ></label>
                </div>
              </label>
            </div>
            <hr />
            <div className="pg_r_btn pg_r_3">
              <label className="d-flex1">
                <Button
                  onClick={() => {
                    backtopagep7();
                  }}
                  varient="contained"
                  color="primary"
                >
                  Back
                </Button>
                <Button
                  onClick={() => {
                    checkPageEightVal();
                  }}
                  variant="contained"
                  color="secondary"
                  className="right_first_button1"
                >
                  Continue
                </Button>
              </label>
            </div>
          </div>
        ) : (
          ""
        )}
        {p9 ? (
          <div className="pg_r_common pg_r_7">
            <div className="pg_r_heading">
              <label>
                <h2>Rent details for your rooms</h2>
              </label>
            </div>
            <div className="d-flex1">
              <h3>One Bed</h3>
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input pg_r_2_radio"
                  id="defaultUnchecked35"
                  onChange={() => {
                    setOneBedRadio(OneBedRadio ? false : true);
                    setOneBedCost(0);
                  }}
                />
                <label
                  className="custom-control-label"
                  for="defaultUnchecked35"
                ></label>
              </div>
            </div>
            {OneBedRadio ? (
              <div className="pg_r_OneBed">
                <label>
                  <p className="para_margin">
                    Monthly Rent Per Bed <span style={{ color: "red" }}>*</span>
                  </p>
                  <input
                    type="number"
                    className="input_common_style"
                    onChange={(event) => {
                      setOneBedCost(event.target.value);
                    }}
                  />
                </label>
              </div>
            ) : (
              ""
            )}
            <hr />
            <div className="d-flex1">
              <h3>Two Bed</h3>
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input pg_r_2_radio"
                  id="defaultUnchecked36"
                  onChange={() => {
                    setTwoBedRadio(TwoBedRadio ? false : true);
                    setTwoBedCost(0);
                  }}
                />
                <label
                  className="custom-control-label"
                  for="defaultUnchecked36"
                ></label>
              </div>
            </div>
            <hr />
            {TwoBedRadio ? (
              <div className="pg_r_TwoBed">
                <label>
                  <p className="para_margin">
                    Monthly Rent Per Bed <span style={{ color: "red" }}>*</span>
                  </p>
                  <input
                    type="number"
                    className="input_common_style"
                    onChange={(event) => {
                      setTwoBedCost(event.target.value);
                    }}
                  />
                </label>
              </div>
            ) : (
              ""
            )}
            <div className="d-flex1">
              <h3>Multiple Beds</h3>
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input pg_r_2_radio"
                  id="defaultUnchecked37"
                  onChange={() => {
                    setMultipleBedRadio(MultipleBedRadio ? false : true);
                    setMultipleBedCost(0);
                  }}
                />
                <label
                  className="custom-control-label"
                  for="defaultUnchecked37"
                ></label>
              </div>
            </div>
            <hr />
            {MultipleBedRadio ? (
              <div className="pg_r_ThreeBed">
                <label>
                  <p className="para_margin">
                    Monthly Rent Per Bed <span style={{ color: "red" }}>*</span>
                  </p>
                  <input
                    type="number"
                    className="input_common_style"
                    onChange={(event) => {
                      setMultipleBedCost(event.target.value);
                    }}
                  />
                </label>
              </div>
            ) : (
              ""
            )}
             <div className="pg_r_address">
                <label>
                  <p className="para_margin">
                    Maintainance
                  </p>
                  <input
                    type="number"
                    className="input_common_style"
                    onChange={(event) => {
                      setmaintainance(event.target.value);
                    }}
                  />
                </label>
              </div>
              <div className="pg_r_address">
                <label>
                  <p className="para_margin">
                    Deposit Amounnt
                  </p>
                  <input
                    type="number"
                    className="input_common_style"
                    onChange={(event) => {
                      setdeposit(event.target.value);
                    }}
                  />
                </label>
              </div>
              <div className="pg_r_address">
                <label>
                  <p className="para_margin">
                    Electricity Charge
                  </p>
                  <input
                    type="number"
                    className="input_common_style"
                    onChange={(event) => {
                      setelectricityCharge(event.target.value);
                    }}
                  />
                </label>
              </div>
              <div className="pg_r_is_present_on">
                <label>
                  <p className="para_margin">
                    Notice Period
                  </p>
                  <select
                    className="input_common_style"
                    onChange={(event) => {
                      setnoticePeriod(event.target.value);
                    }}
                  >
                    <option value="An independent building">
                      1 month
                    </option>
                    <option value="An independent Flat">
                      2 month
                    </option>
                    <option value="Present in a Society">
                      3 month
                    </option>
                  </select>
                </label>
              </div>
            <div className="pg_r_btn pg_r_3">
              <label className="d-flex1">
                <Button
                  onClick={() => {
                    backtopagep8();
                  }}
                  varient="contained"
                  color="primary"
                >
                  Back
                </Button>
                <Button
                  onClick={() => {
                    checkPageNineVal();
                  }}
                  variant="contained"
                  color="secondary"
                  className="right_first_button1"
                >
                  Continue
                </Button>
              </label>
            </div>
          </div>
        ) : (
          ""
        )}
        {entireSubmit ? (
          "Wait please ... !"
        ) : (
          <label>
            {p10 ? (
              <>
                <div className="submit-btn-form">
                  <img
                    src="https://media.istockphoto.com/vectors/thank-you-lettering-on-white-background-hand-drawn-inscription-vector-id1186070150?k=6&m=1186070150&s=612x612&w=0&h=Ic1t2pfkLYblip6MV0OVxW2PIQJH5n6XAmjZfvSWXTU="
                    alt="thankyou-img"
                  />
                  <Button
                    onClick={() => {
                      backtopagep9();
                    }}
                    varient="contained"
                    color="primary"
                    className="back-btn"
                    >
                    Back
                  </Button>
                  <Button
                    onClick={() => {
                      checkPageTenVal();
                    }}
                    variant="contained"
                    color="secondary"
                    className="submit-btn"
                  >
                    Submit
                  </Button>
                </div>
              </>
            ) : (
              ""
            )}
          </label>
        )}
      </div>
    </>
  );
}

export default PG;
