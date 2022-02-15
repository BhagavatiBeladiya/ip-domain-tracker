import React, { useEffect, useState } from "react";
import axios from "axios";
import { isIP } from 'is-ip';
import $ from "jquery"

import { Map, Overlay } from "pigeon-maps"

import MarkerIcon from "../images/icon-location.svg"
const IPApi = `http://ip-api.com/json`


const Main = () => {

  const [zoom, setZoom] = useState(11);
  const [position, setPosition] = useState("");
  const [searchText, setSearchText] = useState("");
  const [ipDomain, setIpDomain] = useState("");
  const [isIp, setIsIp] = useState(true);

  const getData = async () => {
    let url = IPApi;
    console.log(isIP(searchText))
    if (searchText && isIP(searchText)) {
      setIpDomain(searchText);
      url = `${IPApi}/${searchText}`;
    } else if (searchText) {
      setIsIp(false)
      const { hostname } = new URL(searchText);
      setIpDomain(hostname);
      url = `${IPApi}/${hostname}`;
    }
    await axios.get(url).then((res) => {
      setPosition(res.data)
    }).catch((error) => { console.log(error) });
  }

  useEffect(() => {
    getData(); // eslint-disable-next-line
  }, []);

  useEffect(() => {
    setPosition(position);
    setZoom(13);
  }, [position])

  $(document).ready(() => {
    var height = $(".wrapper").height();
    $(".details").css("top", (100 * height / 100) + "px");
  })


  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="top">
            <div className="wrapper">
              {/* ------------- Title ------------ */}
              <p className="main_title mt-5 text-white text-center fw-bold h2">
                IP Address Tracker
              </p>

              {/* -------------- Search Bar -------------- */}
              <div className="wrapper-search input-group mb-5 mt-4 mt-lg-5 m-auto">
                <input type="text" className="radius form-control p-3" placeholder="Search for any IP address or domain" onChange={(e) => setSearchText(e.target.value)} />
                <div className="input-group-append">
                  <button className="btn_radius btn bg-dark py-3 px-4" type="button" onClick={getData}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14"><path fill="none" stroke="#FFF" stroke-width="3" d="M2 1l6 6-6 6" /></svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* -------------- Details Div ------------- */}

          <div className="details position-absolute">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-12">
                  <div className="info">
                    <div className="row">
                      <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className="mb-4 pb-lg-1 mb-lg-0">
                          <p className="p">{isIp ? "ip address" : "domain name"}</p>
                          <p className="h3">{ipDomain ? ipDomain : position.query}</p>
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-6 col-lg-3 border-left">
                        <div className="mb-4 pb-0 pb-lg-1 mb-lg-0">
                          <p className="p">location</p>
                          <p className="h3">{position.city && position.city + ","}&nbsp;{position.countryCode}<br />{position.zip}</p>
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-6 col-lg-3 border-left">
                        <div className="mb-4 pb-lg-1 mb-lg-0">
                          <p className="p">timezone</p>
                          <p className="h3">{position.timezone}</p>
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-6 col-lg-3 border-left">
                        <div className="mb-lg-0">
                          <p className="p">isp</p>
                          <p className="h3">{position.isp}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* -------------- Map ------------- */}

        </div>
      </div>
      <div className="mapContainer position-relative">
        {
          position &&
          <Map height={"100vh"} center={[position.lat, position.lon]} zoom={zoom} animate={true}>
            {/* <Marker width={50} anchor={position} /> */}
            <Overlay anchor={[position.lat, position.lon]} offset={[12, 40]} >
              <img src={MarkerIcon} alt='' />
            </Overlay>
          </Map>
        }

      </div>
    </>
  )
}

export default Main;