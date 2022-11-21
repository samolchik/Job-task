import React, { useState, useEffect } from "react";
import "./jobDetails.css";
import { Link, useParams } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { BsFillBookmarkFill } from "react-icons/bs";
import { IoMdPin } from "react-icons/io";
import { BsShareFill } from "react-icons/bs";
import { BiEuro } from "react-icons/bi";
import { MOCK } from "../../mock";
import moment from "moment";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

export const JobDetails = () => {
  const { id } = useParams();
  const [post, setPost] = React.useState(MOCK.find((item) => item.id === id));

  // const [post, setPost] = useState(null);
  // useEffect(() => {
  //   const fetchPost = async () => {
  //     try {
  //       const post = await fetch(
  //         `https://api.json-generator.com/templates/ZM1r0eic3XEy/data/${id}`,
  //         {
  //           method: "GET",
  //           headers: new Headers({
  //             Authorization: "Bearer wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu",
  //             "Content-Type": "application/json",
  //           }),
  //         }
  //       );

  //       setPost(await post.json());

  //     } catch (err) {
  //       console.log("err = ", err);
  //     }
  //   };

  //   fetchPost();
  // }, [id]);

  const containerStyle = {
    width: "386px",
    height: "245px",
  };

  const center = {
    lat: post.location.lat,
    lng: post.location.long,
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCcsBQQUVo6DuJKntFGGRZqtSaEJHbrDFU",
  });

  const mapRef = React.useRef(undefined);

  const onLoad = React.useCallback(function callback(map) {
    mapRef.current = map;
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    mapRef.current = undefined;
  }, []);

  const posted = moment(post.createdAt).format("DD MMM, YYYY");
  let [postSave, setPostSave] = useState(false);
  let [addEmployOne, setAddEmployOne] = useState(false);
  let [addEmployTwo, setAddEmployTwo] = useState(false);
  let [addBenefitOne, setAddBenefitOne] = useState(false);
  let [addBenefitTwo, setAddBenefitTwo] = useState(false);

  const [activeEmployBtn, setActiveEmployBtn] = useState(() => {
    if (post.employmentType[1] === undefined) {
      return false;
    }

    return true;
  });

  const [activeBenefitBtn, setActiveBenefitBtn] = useState(() => {
    if (post.benefits[1] === undefined) {
      return false;
    }

    return true;
  });

  return (
    <div className="job__page">
      {post && (
        <>
          <div>
            <h2 className="job__contact-title">Contact</h2>
            <div className="job__contact">
              <p className="job__contact-name">{post.name}</p>
              <address className="job__contact-address">
                <IoMdPin />
                {post.address}
              </address>
              <address className="job__contact-address">{post.phone}</address>
              <address className="job__contact-address">{post.email}</address>
              <div className="job__map">
                {isLoaded ? (
                  <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={5}
                    onLoad={onLoad}
                    onUnmount={onUnmount}
                  >
                    <Marker position={center} />
                  </GoogleMap>
                ) : (
                  <h2>Loading...</h2>
                )}
              </div>
            </div>
          </div>
          <div>
            <div className="job__items">
              <div className="job__header">
                <h1 className="job__caption">Job Details</h1>
                <div className="job__header-icon">
                  <BsFillBookmarkFill
                    onClick={() => setPostSave((postSave = !postSave))}
                    className={`job__icon-save ${postSave && "active"}`}
                  />{" "}
                  <span className="job__icon-text">Save to my list</span>
                  <BsShareFill className="job__icon-share" />{" "}
                  <span className="job__icon-text">Share</span>
                </div>
              </div>
              <hr className="job__line" />
              <button className="apply-btn btn-none" type="submit">
                Apply now
              </button>
            </div>
            <div className="job__body">
              <div className="job__title-page">
                <h3 className="title-page__title">{post.title}</h3>
                <span className="title-page__salary">
                  {" "}
                  <BiEuro /> 60k-71k
                </span>
              </div>
              <time className="job__post-create">Posted {posted}</time>
              <p className="job__description">{post.description}</p>
              <div className="job__btn">
                <button className="apply-btn" type="submit">
                  Apply now
                </button>
              </div>
              <div className="job__add-info">
                <div>
                  <h2 className="job__add-title">Additional info</h2>
                  <hr className="job__line" />
                  <div className="job__employment">
                    <h3 className="job__employment-title">Employment type</h3>
                    <div className="job__employment-btns">
                      <button
                        onClick={() =>
                          setAddEmployOne((addEmployOne = !addEmployOne))
                        }
                        className={`job__employment-one ${
                          addEmployOne && "active"
                        }`}
                        type="button"
                      >
                        {post.employmentType[0]}
                      </button>
                      {activeEmployBtn && (
                        <button
                          onClick={() =>
                            setAddEmployTwo((addEmployTwo = !addEmployTwo))
                          }
                          className={`job__employment-two ${
                            addEmployTwo && "active"
                          }`}
                          type="button"
                        >
                          {post.employmentType[1]}
                        </button>
                      )}
                    </div>
                  </div>
                  <div className="job__benefits">
                    <h3 className="job__benefits-title">Benefits</h3>
                    <div className="job__benefits-btns">
                      <button
                        onClick={() =>
                          setAddBenefitOne((addBenefitOne = !addBenefitOne))
                        }
                        className={`job__benefits-one ${
                          addBenefitOne && "active"
                        }`}
                        type="button"
                      >
                        {post.benefits[0]}
                      </button>
                      {activeBenefitBtn && (
                        <button
                          onClick={() =>
                            setAddBenefitTwo((addBenefitTwo = !addBenefitTwo))
                          }
                          className={`job__benefits-two ${
                            addBenefitTwo && "active"
                          }`}
                          type="button"
                        >
                          {post.benefits[1]}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
                <div>
                  <h2 className="job__images-title">Attached images</h2>
                  <hr className="job__line" />
                  <ul className="job__images">
                    <li>
                      <img
                        className="job__image"
                        src={post.pictures[0]}
                        alt=""
                      />
                    </li>
                    <li>
                      <img
                        className="job__image"
                        src={post.pictures[1]}
                        alt=""
                      />
                    </li>
                    <li>
                      <img
                        className="job__image"
                        src={post.pictures[2]}
                        alt=""
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <Link to="/">
              {" "}
              <button className="goHome">
                <IoIosArrowBack className="arrow" /> Return to job board
              </button>
            </Link>{" "}
          </div>
        </>
      )}
    </div>
  );
};
