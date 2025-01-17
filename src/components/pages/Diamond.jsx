import React from "react";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import RingBuilder from "./RingBuilder";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";
import { Input, InputAdornment } from "@mui/material";
import axios from "axios";
import DiamondList from "../Listitems/DiamondList";

const Diamond = (props) => {
  // const [diamond, setDiamond] = React.useState();
  // useEffect(() => {
  //   axios
  //     .post(
  //       "https://malaknew.belgiumwebnet.com/webapi/api/diamond/diamond_list?length=50"
  //     )
  //     .then((response) => {
  //       setDiamond(response.data.data.result);
  //     });
  // }, []);
  // console.log(diamond);
  const [value, setValue] = React.useState([0, 100]);
  const [caratw, setCarat] = React.useState([0, 100]);
  const [colorw, setColor] = React.useState([0, 100]);
  const [clarityw, setClarity] = React.useState([0, 100]);
  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleCaratChange = (event, newValue) => {
    setCarat(newValue);
  };
  const handleColorChange = (event, newValue) => {
    setColor(newValue);
  };
  const handleClarityChange = (event, newValue) => {
    setClarity(newValue);
  };
  const [startPrice, setStartPrice] = React.useState(0);
  const [endPrice, setEndPrice] = React.useState(10000000);

  const handleChange = (event, value) => {
    setStartPrice(value[0]);
    setEndPrice(value[1]);
  };
  const carat = [
    {
      value: 25,
      label: "Fair",
    },
    {
      value: 50,
      label: "Good",
    },
    {
      value: 75,
      label: "Very Good",
    },
    {
      value: 100,
      label: "Excellent",
    },
  ];
  const price = [
    {
      value: 0,
      label: "",
    },
    {
      value: 100,
      label: "",
    },
  ];
  const marks = [
    {
      value: 25,
      label: "Fair",
    },
    {
      value: 50,
      label: "Good",
    },
    {
      value: 75,
      label: "Very Good",
    },
    {
      value: 100,
      label: "Excellent",
    },
  ];
  const color = [
    {
      value: 10,
      label: "M",
    },
    {
      value: 20,
      label: "L",
    },
    {
      value: 30,
      label: "K",
    },
    {
      value: 40,
      label: "J",
    },
    {
      value: 50,
      label: "I",
    },
    {
      value: 60,
      label: "H",
    },
    {
      value: 70,
      label: "G",
    },
    {
      value: 80,
      label: "F",
    },
    {
      value: 90,
      label: "E",
    },
    {
      value: 100,
      label: "D",
    },
  ];
  const clarity = [
    {
      value: 0,
      label: "I1",
    },
    {
      value: 11,
      label: "SI2",
    },
    {
      value: 22,
      label: "SI1",
    },
    {
      value: 33,
      label: "VS2",
    },
    {
      value: 44,
      label: "VS1",
    },
    {
      value: 55,
      label: "VVS2",
    },
    {
      value: 66,
      label: "VVS1",
    },
    {
      value: 77,
      label: "IF",
    },
    {
      value: 88,
      label: "FL",
    },
    {
      value: 100,
      label: "D",
    },
  ];
  function valuetext(value) {
    return `${value}°C`;
  }

  function valueLabelFormat(value) {
    return marks.findIndex((mark) => mark.value === value) + 1;
  }
  return (
    <div className="bj_diamonds">
      <RingBuilder />
      <Container>
        <Row className="w-100 m-auto bj_diamond_filter_section bj_diamond_filter_section_desktop pr-3">
          <Col className="pl-md-0 mt-lg-5 mt-md-0 mb-5" md={6} sm={2} xs={12}>
            <Row className="w-100 m-auto">
              <Col className="p-0" sm={2} md={2}>
                <h2 title="Diamonds Shape">Shape</h2>
              </Col>
              <Col className="p-0" sm={10} md={10}>
                <ul className="action-area--soLSw table-align_filter--GVxiB">
                  <li className="longFilter--VqAB5 item--YBPgi">
                    <span className="single-item-container--Xo5ic">
                      <span className="title--jqbwB">Round</span>
                      <div className="filtered--yd5Rg"></div>
                      <img
                        src="https://malaknew.belgiumwebnet.com/webapi/assets/images/diamond_shape/round.png"
                        alt=""
                      ></img>
                    </span>
                  </li>
                  <li className="longFilter--VqAB5 item--YBPgi">
                    <span className="single-item-container--Xo5ic">
                      <span className="title--jqbwB">Princess</span>
                      <div className="filtered--yd5Rg"></div>
                      <img
                        src="https://malaknew.belgiumwebnet.com/webapi/assets/images/diamond_shape/round.png"
                        alt="Princess"
                      ></img>
                    </span>
                  </li>
                  <li className="longFilter--VqAB5 item--YBPgi">
                    <span className="single-item-container--Xo5ic">
                      <span className="title--jqbwB">Cushion</span>
                      <div className="filtered--yd5Rg"></div>
                      <img
                        src="https://malaknew.belgiumwebnet.com/webapi/assets/images/diamond_shape/round.png"
                        alt="Cushion"
                      ></img>
                    </span>
                  </li>
                  <li className="longFilter--VqAB5 item--YBPgi">
                    <span className="single-item-container--Xo5ic">
                      <span className="title--jqbwB">Emerald</span>
                      <div className="filtered--yd5Rg"></div>
                      <img
                        src="https://malaknew.belgiumwebnet.com/webapi/assets/images/diamond_shape/round.png"
                        alt="Emerald"
                      ></img>
                    </span>
                  </li>
                  <li className="longFilter--VqAB5 item--YBPgi">
                    <span className="single-item-container--Xo5ic">
                      <span className="title--jqbwB">Oval</span>
                      <div className="filtered--yd5Rg"></div>
                      <img
                        src="https://malaknew.belgiumwebnet.com/webapi/assets/images/diamond_shape/round.png"
                        alt="Oval"
                      ></img>
                    </span>
                  </li>
                  <li className="longFilter--VqAB5 item--YBPgi">
                    <span className="single-item-container--Xo5ic">
                      <span className="title--jqbwB">Radiant</span>
                      <div className="filtered--yd5Rg"></div>
                      <img
                        src="https://malaknew.belgiumwebnet.com/webapi/assets/images/diamond_shape/round.png"
                        alt="Radiant"
                      ></img>
                    </span>
                  </li>
                  <li className="longFilter--VqAB5 item--YBPgi">
                    <span className="single-item-container--Xo5ic">
                      <span className="title--jqbwB">Asscher</span>
                      <div className="filtered--yd5Rg"></div>
                      <img
                        src="https://malaknew.belgiumwebnet.com/webapi/assets/images/diamond_shape/round.png"
                        alt="Asscher"
                      ></img>
                    </span>
                  </li>
                  <li className="longFilter--VqAB5 item--YBPgi">
                    <span className="single-item-container--Xo5ic">
                      <span className="title--jqbwB">Marquise</span>
                      <div className="filtered--yd5Rg"></div>
                      <img
                        src="https://malaknew.belgiumwebnet.com/webapi/assets/images/diamond_shape/round.png"
                        alt="Marquise"
                      ></img>
                    </span>
                  </li>
                  <li className="longFilter--VqAB5 item--YBPgi">
                    <span className="single-item-container--Xo5ic">
                      <span className="title--jqbwB">Heart</span>
                      <div className="filtered--yd5Rg"></div>
                      <img
                        src="https://malaknew.belgiumwebnet.com/webapi/assets/images/diamond_shape/round.png"
                        alt="Heart"
                      ></img>
                    </span>
                  </li>
                  <li className="longFilter--VqAB5 item--YBPgi">
                    <span className="single-item-container--Xo5ic">
                      <span className="title--jqbwB">Pear</span>
                      <div className="filtered--yd5Rg"></div>
                      <img
                        src="https://malaknew.belgiumwebnet.com/webapi/assets/images/diamond_shape/round.png"
                        alt="Pear"
                      ></img>
                    </span>
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
          <Col className="pl-md-0 mt-lg-5 mt-md-0 mb-5" md={6} sm={2} xs={12}>
            <Row className="w-100 m-auto">
              <Col className="p-0" sm={2} md={2}>
                <h2 title="Diamonds Shape">Cut</h2>
              </Col>
              <Col className="p-0" sm={10} md={10}>
                <Box className="cut_filter">
                  <Slider
                    aria-label="Restricted values"
                    defaultValue={0}
                    value={value}
                    onChange={handleSliderChange}
                    valueLabelFormat={valueLabelFormat}
                    getAriaValueText={valuetext}
                    step={null}
                    valueLabelDisplay="auto"
                    marks={marks}
                    color="info"
                  />
                </Box>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="w-100 m-auto bj_diamond_filter_section bj_diamond_filter_section_desktop pr-3">
          <Col className="pl-md-0 mt-lg-5 mt-md-0 mb-5" md={6} sm={2} xs={12}>
            <Row className="w-100 m-auto">
              <Col className="p-0" sm={2} md={2}>
                <h2 title="Diamonds Shape">Color</h2>
              </Col>
              <Col className="p-0" sm={10} md={10}>
                <Box className="cut_filter">
                  <Slider
                    aria-label="Restricted values"
                    defaultValue={0}
                    value={colorw}
                    onChange={handleColorChange}
                    valueLabelFormat={valueLabelFormat}
                    getAriaValueText={valuetext}
                    marks={color}
                    color="warning"
                    step={null}
                  />
                </Box>
              </Col>
            </Row>
          </Col>
          <Col className="pl-md-0 mt-lg-5 mt-md-0 mb-5" md={6} sm={2} xs={12}>
            <Row className="w-100 m-auto">
              <Col className="p-0" sm={2} md={2}>
                <h2 title="Diamonds Shape">Carat</h2>
              </Col>
              <Col className="p-0" sm={10} md={10}>
                <Box className="cut_filter">
                  <Slider
                    aria-label="Restricted values"
                    defaultValue={0}
                    onChange={handleCaratChange}
                    valueLabelFormat={valueLabelFormat}
                    getAriaValueText={valuetext}
                    value={caratw}
                    step={null}
                    valueLabelDisplay="auto"
                    marks={carat}
                    color="info"
                  />
                </Box>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="w-100 m-auto bj_diamond_filter_section bj_diamond_filter_section_desktop pr-3">
          <Col className="pl-md-0 mt-lg-5 mt-md-0 mb-5" md={6} sm={2} xs={12}>
            <Row className="w-100 m-auto">
              <Col className="p-0" sm={2} md={2}>
                <h2 title="Diamonds Shape">Clarity</h2>
              </Col>
              <Col className="p-0" sm={10} md={10}>
                <Box className="cut_filter">
                  <Slider
                    aria-label="Restricted values"
                    defaultValue={0}
                    value={clarityw}
                    onChange={handleClarityChange}
                    valueLabelFormat={valueLabelFormat}
                    getAriaValueText={valuetext}
                    marks={clarity}
                    color="primary"
                    step={null}
                  />
                </Box>
              </Col>
            </Row>
          </Col>
          <Col className="pl-md-0 mt-lg-5 mt-md-0 mb-5" md={6} sm={2} xs={12}>
            <Row className="w-100 m-auto">
              <Col className="p-0" sm={2} md={2}>
                <h2 title="Diamonds Shape">Price</h2>
              </Col>
              <Col className="p-0" sm={10} md={10}>
                <Box className="cut_filter">
                  <Slider
                    getAriaLabel={(index) =>
                      index === 0 ? "Minimum price" : "Maximum price"
                    }
                    min={100}
                    max={100000000}
                    defaultValue={[startPrice, endPrice]}
                    onChangeCommitted={handleChange}
                    onChange={handleChange}
                    step={100}
                  />
                </Box>
                <Input
                  value={startPrice}
                  className="price-input price-input-1"
                  startAdornment={
                    <InputAdornment position="start">$</InputAdornment>
                  }
                />
                <Input
                  value={endPrice}
                  className="price-input price-input-2"
                  startAdornment={
                    <InputAdornment position="start">$</InputAdornment>
                  }
                />
              </Col>
            </Row>
          </Col>
        </Row>
        <br />
        <Row>
          <Col md={8} className="m-auto text-center">
            <h1>Find Diamonds Easily</h1>
            <p>
              The Diamond Search Feature helps you deploy various filters to
              help you find exactly what you're looking for.
            </p>
            <p>All diamonds are ethically mined and certified.</p>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            {/* {diamond?.map((element) => (
              <div className="col-md-4" key={element.url}>
                <DiamondList
                  shape={element.shape ? element.title: ""}
                  carat={element.carat ? element.carat: ""}
                  color={element.color ? element.color: ""}
                  clarity={element.clarity ? element.clarity: ""}
                  cut={element.cut ? element.cut: ""}
                  lab={element.lab ? element.lab: ""}
                  price={element.price ? element.price: ""}
                />
              </div>
            ))} */}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Diamond;
