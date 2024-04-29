import {
  faBars,
  faExternalLink,
  faFilter,
  faHeart,
  faPaperclip,
  faScissors,
  faSearch,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const Customization = () => {
  const [color, setColor] = useState("red");
  const [tab, setTab] = useState("fabric");

  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value); // update the state with the new input value
  };

  const svg1 = (
    <svg
      className=" w-1/2 "
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 451.47 136.35"
    >
      <defs>
        <style>{` .cls-1{fill:yellow;}.cls-1,.cls-2{stroke:#1d1d1b;stroke-miterlimit:10;}.cls-2{fill:yellow;}`}</style>
      </defs>
      <path
        class="cls-1"
        d="M90.24,285.3s10.93-18,19.28,0c0,0,6.43,48.86,42.43,49.5,0,0,36.43,6.07,50.28-19.55,1-1.84,2-3.65,3.18-5.4l12.76-19.41s11.57-14.78,27-3.85l-14.79,9s-3.21,3.21,1.29,7.71l-22.06,24a61.14,61.14,0,0,1-22.37,15.48c-12.28,4.87-30.22,9.32-46.22,3,0,0-36.64-9-46.28-39.21Z"
        transform="translate(-68.84 -276.8)"
      />
      <path
        class="cls-1"
        d="M409.09,353.09s8.13.79,12.65,12.48a7.86,7.86,0,0,0,8.65,5.09c3.29-.62,6-2.67,3.78-8.38,0,0-2.9-11.41-16.4-10.76Z"
        transform="translate(-68.84 -276.8)"
      />
      <path
        class="cls-1"
        d="M370.52,335.19s14.13-6.23,23.57,6.48a39,39,0,0,0,3.84,4.55c2.72,2.67,6.85,7.92,3.45,12.69,0,0-3.78,5.67-13.32-7.74a55.56,55.56,0,0,0-7.25-8.36Z"
        transform="translate(-68.84 -276.8)"
      />
      <path
        class="cls-1"
        d="M344.81,319.05s14.46-1.68,23.78,13.47c0,0,13.83,18.62,0,19,0,0-3.85-1.69-4.71-4,0,0-10.29-20.58-17.79-19.5Z"
        transform="translate(-68.84 -276.8)"
      />
      <path
        class="cls-1"
        d="M272.17,285.94s8.9-3.24,15.5,6.43a14.92,14.92,0,0,0,1,1.35c1.39,1.62,5.4,7.39,4.69,19.36,0,0-7,11.71-10.57,0,0,0,1.57-10.64-2.61-14.6Z"
        transform="translate(-68.84 -276.8)"
      />
      <path
        class="cls-1"
        d="M304.73,314.81l6,12.28s4.46,5.06,8.18,1.16a6.36,6.36,0,0,0,1.35-6.28c-1.31-4.23-4.46-12.3-10.37-16.6-.89-.65-1.76-1.33-2.59-2.06a17.64,17.64,0,0,0-10-4,2.55,2.55,0,0,0-2.72,1.86c-.27,1.1,0,2.52,1.94,3.87A25,25,0,0,1,304.73,314.81Z"
        transform="translate(-68.84 -276.8)"
      />
      <path
        class="cls-1"
        d="M327,307s14.15.62,16.5,10.07l2.79,15.5s-.66,10.46-6,5.75a9.52,9.52,0,0,1-3-5.2c-.83-3.89-3.25-11.92-9.48-14.79,0,0-6.05-3.92-9.24-.77l-3-5.78A15.74,15.74,0,0,1,327,307Z"
        transform="translate(-68.84 -276.8)"
      />
      <path
        class="cls-1"
        d="M231.67,303.3s107.78,51,157.5,63.43l81,28.29-21-21-14.33-6.8s-9.52,10.8-14.1-3.85c0,0-5.07-8.81-11.65-9.28l-6.68-1s1.31,9.84-7.25,5.65L385.31,347S375,336.43,371.45,337c0,0,7.54,11.86-.93,14.31,0,0-4.93,2.37-11.25-11.8,0,0-12.27-15.85-13-9.51,0,0,.75,9-3.91,9.51,0,0-5.89-1.91-7.44-13.58,0,0-5.44-11.91-16.32-8.4,0,0,5.36,9.26-1,11.75,0,0-7.43,5.11-13.82-16.37,0,0-1.18-6.38-7.08-7.74,0,0-2.61-2.41-3.69-.76,0,0,2.92,8.76-3.58,13.08,0,0-5,3-6.63-4.39,0,0,1.89-10.9-2.61-14.6,0,0-6.63-.52-14.56,5.52,0,0-6,1.53-7.47-3.17a5.77,5.77,0,0,1,2.23-6.33l11.77-8.56s-14,12.06-27,.65c0,0-15.45,7.33-15.84,11.22C229.33,297.81,229.38,302.23,231.67,303.3Z"
        transform="translate(-68.84 -276.8)"
      />
      <path
        class="cls-1"
        d="M519.68,402.94s-7.09-24.21-27.66-26.35l-33-2-9.86-.59,21,21s8.08,14.13,5.43,17.35Z"
        transform="translate(-68.84 -276.8)"
      />
      <path
        class="cls-1"
        d="M490.36,409.21s3.24-17.6-9.27-22.55L449.17,374"
        transform="translate(-68.84 -276.8)"
      />
      <path
        class="cls-1"
        d="M506,405.86s4.42-16.41-12.08-21.34l-31.52-9.71"
        transform="translate(-68.84 -276.8)"
      />
      <path
        class="cls-2"
        d="M90.24,285.3s-20.9,34-20.9,62l10.45-10.47s8.2-9.38,16.55,2.65c0,0,13.77,15.3,23.13,14.19,0,0,14.16.84,19.95-7.73,0,0-23.93-10.9-29.95-17.2C109.47,328.75,91.52,311.66,90.24,285.3Z"
        transform="translate(-68.84 -276.8)"
      />
    </svg>
  );

  const svg2 = (
    <svg
    className="w-1/2"
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 407.66 119.5"
    >
      <defs>
        <style>{`.cls-1{fill:${color};}.cls-1,.cls-2{stroke:#1d1d1b;stroke-miterlimit:10;}.cls-2{fill:none;}`}</style>
      </defs>
      <polygon
        class="cls-1"
        points="292.1 55.3 253.25 119 282.18 118.88 317.75 63.4 292.1 55.3"
      />
      <polygon
        class="cls-1"
        points="273.59 48.46 226.24 118.5 200.06 117.16 252.1 39.94 273.59 48.46"
      />
      <polygon
        class="cls-1"
        points="212.01 22.93 232.16 31.63 172.89 114.7 148.69 112.78 212.01 22.93"
      />
      <circle class="cls-2" cx="236.82" cy="43.28" r="1.36" />
      <circle class="cls-2" cx="229.32" cy="52.92" r="1.36" />
      <circle class="cls-2" cx="221.61" cy="64.92" r="1.36" />
      <circle class="cls-2" cx="212.61" cy="79.22" r="1.36" />
      <circle class="cls-2" cx="203.32" cy="92.34" r="1.36" />
      <circle class="cls-2" cx="194.32" cy="106.49" r="1.36" />
      <circle class="cls-2" cx="246.8" cy="109.49" r="1.36" />
      <circle class="cls-2" cx="246.8" cy="109.49" r="1.36" />
      <circle class="cls-2" cx="256.66" cy="96.31" r="1.36" />
      <circle class="cls-2" cx="264.8" cy="83.24" r="1.36" />
      <circle class="cls-2" cx="272.23" cy="70.18" r="1.36" />
      <circle class="cls-2" cx="279.54" cy="58.79" r="1.36" />
      <path
        class="cls-2"
        d="M270.42,289.86s123.2,57.92,178.92,70.9l59.58,20.81s7.66,10.7,5.44,17.35c0,0-34.33,6.95-80.31,8.09,0,0-102.56,2.47-132.13-1.09l-102.87-7.8-82.91-1.55-8,.5V333.86l8.36-7.82s7.71-13.31,18.64,0l14.14,12a26.23,26.23,0,0,0,21.22,0l7.71-5.54s23.6,10.76,55.19-6.46C233.36,326,259.48,305.29,270.42,289.86Z"
        transform="translate(-107.6 -289.22)"
      />
    </svg>
  );

  const [currentSvg, setCurrentSvg] = useState(svg1);
  const [currentSvg2, setCurrentSvg2] = useState(svg2);

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-100 text-gray-800">
      {/* Left Sidebar */}
      <div className="w-full md:w-1/3 p-10">
        {/* Filter Section */}
        <div className="flex justify-between items-center mb-6">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded hover:bg-gray-200 transition">
            <FontAwesomeIcon icon={faFilter} />
            <span>Filter</span>
          </button>
          <span className="text-sm text-gray-600">193/193</span>
        </div>

        {/* Search Section */}
        <div className="relative mb-6">
          <input
            type="text"
            className="w-full py-2 pl-10 pr-3 bg-white border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
            placeholder="Search by name or property"
          />
          <FontAwesomeIcon
            className="absolute top-3 left-3 text-gray-500"
            icon={faSearch}
          />
        </div>

        {tab === "style" ? (
          <div className="flex flex-col items-center">
            <h1 className="text-xl font-bold">Soals</h1>
            <div className="flex justify-between items-center   ">
              <div onClick={()=>setCurrentSvg("")}>

              {currentSvg}
              </div>
          <div>

              {currentSvg2}
          </div>
            </div>

            <div className="flex flex-wr ap justify-between items-center"></div>
          </div>
        ) : (
          ""
        )}
        {tab === "accents" ? (
          <div className="flex flex-col items-center">
            <h1 className="text-xl font-bold">Accents</h1>
            <div>
              <input
                type="text"
                value={inputValue}
                placeholder="Enter text..."
                onChange={handleInputChange} // when the input changes, update the state
              />
            </div>
            <div className="flex flex-wrap justify-between items-center"></div>
          </div>
        ) : (
          ""
        )}
        <div>
          {/* Product List */}
          {tab === "fabric" ? (
            <div className="grid grid-cols-2 gap-6 overflow-y-auto">
              <section className="flex flex-col gap-2">
                <div className="rounded overflow-hidden">
                  <img
                    className="w-full"
                    src="https://d2w9m16hs9jc37.cloudfront.net/dimg/fabric/shirt/3023_huge_c300.jpg"
                    alt="Fabric"
                    onClick={() => setColor("yellow")}
                  />
                </div>
                <div className="flex justify-between text-xs font-semibold">
                  <span>Poppin</span>
                  <span>$69</span>
                </div>
                <span className="text-xs text-gray-600">
                  Cotton . Year Around
                </span>
              </section>
              <section className="flex flex-col gap-2">
                <div className="rounded overflow-hidden">
                  <img
                    onClick={() => setColor("blue")}
                    className="w-full"
                    src="https://d2w9m16hs9jc37.cloudfront.net/dimg/fabric/shirt/2740_huge_c300.jpg"
                    alt="Fabric"
                  />
                </div>
                <div className="flex justify-between text-xs font-semibold">
                  <span>Poppin</span>
                  <span>$69</span>
                </div>
                <span className="text-xs text-gray-600">
                  Cotton . Year Around
                </span>
              </section>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>

      {/* Right Content */}
      <div className="flex-1 bg-white p-10 shadow-lg flex flex-col justify-between overflow-y-scroll">
        <div className="flex justify-between items-center mb-8 h-[35vh] md:h-max">
          <div className="flex items-center gap-3 text-gray-700">
            <FontAwesomeIcon className="text-xl" icon={faBars} />
            <span className="text-xl font-bold">Website</span>
          </div>
          <div className="flex items-center gap-3 text-gray-700">
            <FontAwesomeIcon className="text-xl" icon={faExternalLink} />
            <FontAwesomeIcon className="text-xl" icon={faHeart} />
            <FontAwesomeIcon className="text-xl" icon={faShoppingBag} />
          </div>
        </div>

        {/* Main Content with Centered SVG */}
        <div className="flex  justify-start    items-start mb-[10vh]  ">
          {/* Left-side Text */}
          <div className="flex flex-col items-center gap-6 text-gray-700">
            <div
              className="flex flex-col items-center gap-2 cursor-pointer"
              onClick={() => setTab("fabric")}
            >
              <FontAwesomeIcon className="text-2xl" icon={faPaperclip} />
              <span className="text-xs uppercase">Fabric</span>
            </div>
            <div
              className="flex flex-col items-center gap-2 cursor-pointer "
              onClick={() => setTab("style")}
            >
              <FontAwesomeIcon className="text-2xl" icon={faScissors} />
              <span className="text-xs uppercase">Style</span>
            </div>
            <div
              className="flex flex-col items-center gap-2 cursor-pointer"
              onClick={() => setTab("accents")}
            >
              <FontAwesomeIcon className="text-2xl" icon={faPaperclip} />
              <span class="text-xs uppercase">Accents</span>
            </div>
          </div>

          {/* Centered SVG */}
          <div className="flex justify-center flex-1">
            <div className=" relative w-[70vw] h-[70vh] md:w-[30vw]  md:h-1/2 flex justify-center items-center text-center mr-10">
              <div>
                <div className="w-72 relative h-40 ">
                  <div className="absolute top-0 w-[40vw] left-0">{currentSvg}</div>
                  <div className="relative  w-[40vw] top-[12px] -left-[1px]">
                    {currentSvg2 }
                    {/* <svg
                      id="Layer_1"
                      data-name="Layer 1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 407.66 119.5"
                    >
                      <defs>
                        <style>{`.cls-1{fill:#1d1d1b;}.cls-1,.cls-2{stroke:#1d1d1b;stroke-miterlimit:10;}.cls-2{fill:none;}`}</style>
                      </defs>
                      <polygon
                        class="cls-1"
                        points="292.1 55.3 253.25 119 282.18 118.88 317.75 63.4 292.1 55.3"
                      />
                      <polygon
                        class="cls-1"
                        points="273.59 48.46 226.24 118.5 200.06 117.16 252.1 39.94 273.59 48.46"
                      />
                      <polygon
                        class="cls-1"
                        points="212.01 22.93 232.16 31.63 172.89 114.7 148.69 112.78 212.01 22.93"
                      />
                      <circle class="cls-2" cx="236.82" cy="43.28" r="1.36" />
                      <circle class="cls-2" cx="229.32" cy="52.92" r="1.36" />
                      <circle class="cls-2" cx="221.61" cy="64.92" r="1.36" />
                      <circle class="cls-2" cx="212.61" cy="79.22" r="1.36" />
                      <circle class="cls-2" cx="203.32" cy="92.34" r="1.36" />
                      <circle class="cls-2" cx="194.32" cy="106.49" r="1.36" />
                      <circle class="cls-2" cx="246.8" cy="109.49" r="1.36" />
                      <circle class="cls-2" cx="246.8" cy="109.49" r="1.36" />
                      <circle class="cls-2" cx="256.66" cy="96.31" r="1.36" />
                      <circle class="cls-2" cx="264.8" cy="83.24" r="1.36" />
                      <circle class="cls-2" cx="272.23" cy="70.18" r="1.36" />
                      <circle class="cls-2" cx="279.54" cy="58.79" r="1.36" />
                      <path
                        class="cls-2"
                        d="M270.42,289.86s123.2,57.92,178.92,70.9l59.58,20.81s7.66,10.7,5.44,17.35c0,0-34.33,6.95-80.31,8.09,0,0-102.56,2.47-132.13-1.09l-102.87-7.8-82.91-1.55-8,.5V333.86l8.36-7.82s7.71-13.31,18.64,0l14.14,12a26.23,26.23,0,0,0,21.22,0l7.71-5.54s23.6,10.76,55.19-6.46C233.36,326,259.48,305.29,270.42,289.86Z"
                        transform="translate(-107.6 -289.22)"
                      />
                    </svg> */}
                  </div>

                  {/* <svg
                    id="Layer_1"
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 453.03 56.38"
                  >
                    <defs>
                      <style>{`.cls-1{fill:none;stroke:#1d1d1b;stroke-miterlimit:10;}`}</style>
                    </defs>
                    <path
                      class="cls-1"
                      d="M69,432.38l279.89,3.18c2.47,0,4.92-.05,7.38-.22,18.79-1.3,102.59-7.48,130.38-16,3.24-1,6.55-1.74,9.86-2.48,4.53-1,11.35-5.5,10.92-23.64l0-12.86s-61.73,14.79-91.31,16.07c0,0-115.71,6.43-174.85-.64,0,0-136.06-9.92-175-8.61-1.92.07-5-.06-7-.09C57,387,56,388.79,55.5,401.53v17.35S53.58,432.21,69,432.38Z"
                      transform="translate(-54.93 -379.68)"
                    />
                  </svg> */}
                </div>
                <div></div>
                <div></div>
              </div>
              {/* <svg
                id="Layer_1"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 587.35 333.52"
              >
                <defs>
                  <style>{`.cls-1,.cls-2{fill:${color};stroke:#1d1d1b;stroke-miterlimit:10;}.cls-2{stroke-dasharray:2 2;}`}</style>
                </defs>
                <path
                  class="cls-1"
                  d="M21.21,481.07s5.15,14.14,80.68,26c0,0,73.29,10.93,110.9,11.25l121.82,4.18s143-5.15,167.14-8.36c0,0,72.32-5.47,82.29-8.68,0,0,3.85-1.61,4.17,4.82l2.25,47.89s2.9,3.86-7.07,7.08c0,0-10.82,10.07-74.46,10.71H400.71l-106.28-2.36-98.79-7.71-52.93-4.5s-48.42-7.5-65.57-13.29c0,0-40.07-10.93-50.57-16.07,0,0-24.43-13.07-21.43-30.21,0,0,.86-10.72,6.22-9.86C11.36,492,10.07,484.93,21.21,481.07Z"
                  transform="translate(-4.39 -242.98)"
                />
                <path
                  class="cls-1"
                  d="M41.36,450s-2.57,4.07,8.57,6.21l39.64,5.58s36,3.85,42.43,7.28c0,0,19.93,9.43,29.14,12a16,16,0,0,0,13.93-2.36s10-6.64,6.94-13.71c0,0-16.37-16.07-2.22-22.5l4.61-1.42s2.1,5.22,4,7.21c0,0,9.49,8.15,14.71-1.82,0,0,.74-3.77-2.48-8.26l-.48-1.42,16-5s-1.57,16.07,9.57,14.68c0,0,9,.74,5.79-13.61l-.36-9.21,11.29-5.77s1,14.72,5.67,15.64c0,0,12.11,5.34,9.43-9.66l.6-16.5s9.37-1.19,11.73,2.4c0,0,1.29-3.21,6.43-5.38,0,0,2.11,13.26,7.64,13.8,0,0,11.54,2.45,11.27-5.9L289.5,400l-1.66-4.4,13-9.72s2.56,13.33,17,12.29c0,0,8.72-6.52-1.91-17.07l-2.76-5.49s14-13.95,27.4-10.79c0,0,7.81,19.87,17.77,15.05,0,0,4.57-1.69-2.59-18.17l10.41-2.51s10.5-2.57,4.72-9.21l-6.22-5.79h22s8-1.07,7.07-9.43c0,0-2.46-5.53-7.07-6.73H361.5l12-30.77L342.21,328s-3.61-1.45-7.24,3c0,0-5.33,5.53-5.5,8.12a4.34,4.34,0,0,0-.25,2.33l-22.58,18.82s-1.93-5.32-5.78-.39c0,0-5.47,4.7-6.27,8.4a9.35,9.35,0,0,0-.17,2.1l-11,8.72s-.67-3.76-5.64-.13c0,0-5.71,2.59-5.29,7.16v1s-13.1,6.18-13.66,12.21c0,0,.81-7.38-4.33-4.38l-7.29,2.24s-4.5,1.85-4.66,7.89c0,0-7.74,2-9.79,6.36,0,0,2.57-8.25-5.1-3.7,0,0-10,.78-9.94,6.68s-.08.45-.08.45l-19.26,6.08s-.34-6-10.9-.76c0,0-6,.9-5.42,6.3,0,0-7.71,1.45-8.46,5.73l-62,7.61-62.15,8.36Z"
                  transform="translate(-4.39 -242.98)"
                />
                <path
                  class="cls-1"
                  d="M382.93,291.43l7.93-11.57s5.14-5.79,19.28-1.5c0,0,37.29,13.93,52.29,21.85,0,0,31.71,17.79,53.36,18.22,0,0,28.92,1.07,35.14-4.07,0,0,10.28-1.68,10.93,13.62,0,0,1.07,16.59,3.85,22.81,0,0,2.36,9.21,1.29,13.5,0,0,.21,8.57-10.07,4.92,0,0-34.93-16.28-42.64-21.85l-50.36-27.43-53.14-27.22S395,283.09,382.93,291.43Z"
                  transform="translate(-4.39 -242.98)"
                />
                <path
                  class="cls-1"
                  d="M353.18,317.19s5.53-29.4,12.18-36.26c0,0,4.71-7.72,11.35-7.72,0,0,10.08-.21,11.36,1.72,0,0-11.36,11.83-13.28,20.27Z"
                  transform="translate(-4.39 -242.98)"
                />
                <path
                  class="cls-1"
                  d="M418.71,250.93s5.79-12.22,16.29-5.36c0,0,28.07,16.77,36,31.21,0,0,6.64,12.43,5.79,22.72l-9.86-4.3S462.21,282,453,274.5C453,274.5,433.07,253.5,418.71,250.93Z"
                  transform="translate(-4.39 -242.98)"
                />
                <path
                  class="cls-1"
                  d="M393.83,271.93l16.1-17.57s5.79-6.29,18.75.5c0,0,21,14.5,26.82,21.92,0,0,9.38,10,11.43,18.42l-30-12.13-22.5-8.57S406.46,270.55,393.83,271.93Z"
                  transform="translate(-4.39 -242.98)"
                />
                <path
                  class="cls-1"
                  d="M545.14,308.57s11.49.08,3.39,7.11c0,0-17,5.28-32.74,2.75,0,0-26.82-4.91-40.69-11.87l-42.52-19.48s-26.94-13.38-35.51-10.3c0,0-9,1.58-14.14,14.65,0,0-11.14,11.18-18.22,36.55H361.5l13.29-32.78s4.65-14.13,13.28-20.27,23.59-1.48,23.59-1.48l55.27,21.75s28.07,14.44,47.78,15.73C514.71,310.93,541.07,311.36,545.14,308.57Z"
                  transform="translate(-4.39 -242.98)"
                />
                <path
                  class="cls-1"
                  d="M567,364.29s-.43,6.85-10.07,4.92L537.71,360l-33-17.85-36.4-19.83-57.87-29.8s-13.71-9.19-27.48-1.07c0,0-6.81,8.23-10,15,0,0-8.11,17.24-8.25,21.51h22s7.39,2.88,7.07,8.13c0,0,.32,6.64-7.07,8h-22S379.45,357,389.09,362.3l44.68,28s33.59,17.84,35.36,29.89c0,0,2.89,9.32,2.73,14,0,0,33.43-2.73,63-15.1,0,0,34.39-11.25,39.85-17.52Z"
                  transform="translate(-4.39 -242.98)"
                />
                <path
                  class="cls-1"
                  d="M581.14,420.94s4.82.67,5.15,9.35V496.5s.67,9-8.53,10.28l-122,10.58s17.36-48.18,69.76-69.07l43.87-16.56S580.34,427,581.14,420.94Z"
                  transform="translate(-4.39 -242.98)"
                />
                <path
                  class="cls-1"
                  d="M527.14,430.71s52.5-17.47,54-20.95c0,0,3.43-8.72-6.43-8.24,0,0-10.15,8.44-27.36,13.14l-37.9,12.78s-34.38,7.35-37.59,6.7c0,0-22.5-3.85-54.22-18.85L370.5,392.36s-18.7-1.93-38.46,11.57l-25.88,20.25s-15,12.05-26.68,16.55c0,0-9.32,4.18-9.32,17,0,0-2.57,16.55,4.82,37,0,0,5.29,22.5,10.44,26.12l52.9,1.55S364.18,486.7,395,473c0,0,26.84-12.38,39-13.83C434.09,459.21,518.62,437.25,527.14,430.71Z"
                  transform="translate(-4.39 -242.98)"
                />
                <path
                  class="cls-1"
                  d="M588.54,517.36l-.95.29"
                  transform="translate(-4.39 -242.98)"
                />
                <path
                  class="cls-2"
                  d="M585.67,518.19c-8.12,2.2-33.24,8.18-73.31,10.35l-214.72,6.53-159.43-8.85s-99.73-11.86-125.35-32.9"
                  transform="translate(-4.39 -242.98)"
                />
                <path
                  class="cls-1"
                  d="M12.09,492.67c-.25-.22-.5-.44-.73-.67"
                  transform="translate(-4.39 -242.98)"
                />
                <path
                  class="cls-1"
                  d="M21.21,481.07s1.37-27.8,20.15-31.07c0,0-1.6,4.78,8.57,6.21l28.45,4,39,5.33s16.23,2.09,23.33,7.53c0,0,22.94,11.93,29.64,8,0,0,12.16-6.18,11.89-11.12,0,0,1-3.59-.27-4.95,0,0,13.1,10.29,19,24.27l11.09,22.18s3.34,7.07-3.06,6.84l-55.93-4.52-65.53-9.08s-28.53-4.89-41.81-10.14C45.81,494.55,24.43,487,21.21,481.07Z"
                  transform="translate(-4.39 -242.98)"
                />
                <path
                  class="cls-1"
                  d="M405.36,372.49s-6.25,17.56-29.61,19.77l-5.25.1,49.57,24.06,18.09,7.63,22.19,7.35,11.51,2.74s-1.79-11.7-2.82-14.45c0,0-2.05-7.42-12.48-14.76,0,0-12.8-8.94-18.83-12.45l-22.36-13.73Z"
                  transform="translate(-4.39 -242.98)"
                />
                <path
                  class="cls-1"
                  d="M212.79,518.36l72.63,2.49A117.27,117.27,0,0,1,274.05,492s-7.48-24.42-2.76-45.53l2.57-25.53s-.86-15-11.15-13.74l-4.65.16-.19,19.12s.56,8.39-6.51,8.13c0,0-6.78-1.57-7.89-6.48l-1.11-10.25-11.29,5.77s-.21,11.34,1,15.2c0,0,.18,7.72-6.47,7.62,0,0-8.14.26-8.89-6.57a28.34,28.34,0,0,1-.68-8.11l-16,5s6.46,9.35.46,13.75c0,0-11.3,3.32-14.54-5.91l-1.63-3.55S174.3,442.29,174,450a27.87,27.87,0,0,0,8,15,117.86,117.86,0,0,1,22,30.12l8.16,16.33S216,516.86,212.79,518.36Z"
                  transform="translate(-4.39 -242.98)"
                />
                <path
                  class="cls-1"
                  d="M269.79,409.76s4.62-5.73,6.43-5.38c0,0,2.51,9.27,3.1,10,0,0,6,7.9,13.85,2.57,0,0,4.31-3.25-.35-10.48,0,0-4.17-8.42-5-10.95l13-9.72s2.88,13.22,17,12.29c0,0,6.64-4.74,1-13.65,0,0-4.87-7.21-5.66-8.91,0,0,9.2-7.93,14.43-9.43,0,0,10.3-2.91,13-1.36,0,0,7,15.83,12.41,15.44,0,0,7.5,1.53,6.79-3.86,0,0,.79-6-4-14.7,0,0,18.55-3.38,16.84-7.55,0,0-.1-3.21-1.71-4.17l34.43,22.56s-4.65,13.93-22.43,18.51c0,0-10,2.32-12.43,1.36,0,0-15.66-1.15-29.23,6.25a87.9,87.9,0,0,0-20.54,14.17L299,429.52s-13.91,9.93-19.54,11.21a13.31,13.31,0,0,0-7,7.15l-1,2.29,1.09-16S276.16,415.76,269.79,409.76Z"
                  transform="translate(-4.39 -242.98)"
                />
                <path
                  class="cls-1"
                  d="M338.32,522.4s29.56-41.77,65.59-53.25l81-23.9s81.26-27.35,88.73-31.42l7.46-4.07v11.18s-4.43,8-11.73,10.79l-39.26,14.82s-33.43,10.26-53.9,37.5c0,0-14.68,14.64-20.47,33.31Z"
                  transform="translate(-4.39 -242.98)"
                />
                <path
                  class="cls-1"
                  d="M590.34,555.63a95.85,95.85,0,0,1-23,5.48s-69.77,7.39-141.6,5.14L300,563.32,180,552.75S126.43,549,99,540.32c0,0-50.14-11.78-67-22L5.14,501.86s-.6,23.65,26.69,32.41c0,0,54.49,17.46,81.36,22.1s137.23,16.3,198.6,17.66L521,576s58.84-3.93,65.26-11.82C586.3,564.18,593.76,564,590.34,555.63Z"
                  transform="translate(-4.39 -242.98)"
                />
                <circle class="cls-1" cx="146.12" cy="196.95" r="0.56" />
                <circle class="cls-1" cx="146.12" cy="202.73" r="0.56" />
                <circle class="cls-1" cx="146.68" cy="208.36" r="0.56" />
                <circle class="cls-1" cx="147.25" cy="213.67" r="0.56" />
                <circle class="cls-1" cx="147.25" cy="219.86" r="0.56" />
                <circle class="cls-1" cx="126.67" cy="213.67" r="0.56" />
                <circle class="cls-1" cx="127.24" cy="208.93" r="0.56" />
                <circle class="cls-1" cx="128.12" cy="203.86" r="0.56" />
                <circle class="cls-1" cx="129.25" cy="198.47" r="0.56" />
                <circle class="cls-1" cx="119.76" cy="200.88" r="0.56" />
                <circle class="cls-1" cx="117.35" cy="207.02" r="0.56" />
                <circle class="cls-1" cx="110.28" cy="203.86" r="0.56" />
                <circle class="cls-1" cx="107.71" cy="211.89" r="0.56" />
                <circle class="cls-1" cx="99.84" cy="207.02" r="0.56" />
                <circle class="cls-1" cx="93.49" cy="202.73" r="0.56" />
                <circle class="cls-1" cx="89.15" cy="210.05" r="0.56" />
                <circle class="cls-1" cx="81.92" cy="204.98" r="0.56" />
                <circle class="cls-1" cx="69.54" cy="204.42" r="0.56" />
                <circle class="cls-1" cx="66.81" cy="208.93" r="0.56" />
                <circle class="cls-1" cx="66.81" cy="208.93" r="0.56" />
                <circle class="cls-1" cx="53.15" cy="207.58" r="0.56" />
                <path
                  class="cls-1"
                  d="M186,469.17s-5.71,9.65-11.07,11.9a21.28,21.28,0,0,1-17.35,1.39s-15-6.32-18.11-8.35c0,0-11.36-5.57-19.71-6.32l-34.05-5s-35.81-4-38.17-4.91c0,0-8.66-1.88-9.2-7.16"
                  transform="translate(-4.39 -242.98)"
                />
                <path
                  class="cls-1"
                  d="M187.33,470.62s-7.11,10.46-12.46,12.71a21.31,21.31,0,0,1-17.36,1.39s-12.7-5.68-17.4-8.26a32.36,32.36,0,0,0-3.87-1.8c-3.91-1.54-11.34-4.19-17.2-4.72l-33.3-5.5s-35.65-4-38-4.82c0,0-10.28-3-10.82-8.27"
                  transform="translate(-4.39 -242.98)"
                />
                <path
                  class="cls-1"
                  d="M185.14,420.94l8.68-2.87s5.14-1.61,4.5,4.5l.06,5.79s1.23,10,3.8,12.85c0,0,2.89,7.08-1.61,9.33,0,0-9.64,2.89-12.21-2.25,0,0-6.11-8-5.79-16.4C182.57,431.89,180.23,422.57,185.14,420.94Z"
                  transform="translate(-4.39 -242.98)"
                />
                <path
                  class="cls-1"
                  d="M220.82,409.76l10.93-3.26s1.29.42,1.29,3.26c0,0-3.54,18.28-1.61,23.1,0,0,2.25,13.5-4.5,13.5,0,0-10,1.93-11.25-10.29l1.93-21.21S218.24,410.54,220.82,409.76Z"
                  transform="translate(-4.39 -242.98)"
                />
                <path
                  class="cls-1"
                  d="M247.18,397.18l8.36-2.57s3.85-2.57,3.21,5.46c0,0-2.25,21.54-1.29,23.79,0,0,2.9,10.26-6.1,10.75,0,0-8-.47-9-11.4V406.5S242.8,398.53,247.18,397.18Z"
                  transform="translate(-4.39 -242.98)"
                />
                <path
                  class="cls-1"
                  d="M279.32,377.89s4.18-2.57,4.5,3.54c0,0,4.18,16.71,6.43,19.93l3.21,6.43s4.83,8.29-1.28,10.09c0,0-7.72,3.81-12.86-3.47,0,0-6.75-20.77-6.43-24.3,0,0-1.93-6.43,2.25-9.32Z"
                  transform="translate(-4.39 -242.98)"
                />
                <path
                  class="cls-1"
                  d="M300.86,359.89s3.85-5.46,6.43,1.93c0,0,7.71,19.61,11.89,24.11,0,0,5.46,7-1.29,12.19,0,0-11.25.34-14.78-7.05l-7.84-18.32S291.21,367.61,300.86,359.89Z"
                  transform="translate(-4.39 -242.98)"
                />
                <path
                  class="cls-1"
                  d="M341.36,328.39l17,39.22s3.22,8.68,0,12.21c0,0-7.07,2.57-12.21-5.46,0,0-14.79-24.75-16.07-30.86,0,0-3.22-3.21,2.57-9.64C332.68,333.86,337.82,326.14,341.36,328.39Z"
                  transform="translate(-4.39 -242.98)"
                />
                <path
                  class="cls-1"
                  d="M386.68,328s6.75,2,7.07,8.13c0,0-1,8-7.07,8H348.2l-6.84-15.75Z"
                  transform="translate(-4.39 -242.98)"
                />
                <circle class="cls-1" cx="395.21" cy="67.39" r="5.77" />
              </svg> */}
              <p className="absolute bottom-1 font-semibold -right-11">
                <svg
                  width="300"
                  height="150"
                  viewBox="0 0 300 150"
                  className="  p-2  bg-transparent"
                >
                  {/* Define the path for the text */}
                  <path
                    id="curve"
                    d="M 50,100 C 150,20 250,20 300,100"
                    fill="transparent"
                    stroke="none"
                    strokeWidth="2"
                  />

                  {/* Place the text on the path */}
                  <text fontSize="12" fill="black">
                    <textPath href="#curve" startOffset="0%">
                      {inputValue}
                    </textPath>
                  </text>
                </svg>
              </p>
            </div>

            {/* Right-side Content */}
            <div className="flex flex-col gap-4 text-right text-gray-700">
              <div>
                <h1 className="text-2xl font-bold uppercase">
                  Your Custom Shirt
                </h1>
              </div>
              <div className="flex flex-col gap-2 text-gray-600">
                <span className="text-xl">$49</span>
                <span className="text-xs">VAT included</span>
              </div>
              <button className="px-6 py-2 text-lg text-white bg-yellow-600 rounded hover:bg-yellow-700 transition">
                Next
              </button>
              <div className="flex flex-col items-center gap-2 text-gray-700">
                <span className="text-sm">
                  Order today, receive in 3 weeks.
                </span>
                <div className="flex items-center gap-2">
                  <button class="w-8 h-8 border border-gray-300 rounded-full hover:bg-gray-200 transition">
                    +
                  </button>
                  <span className="text-sm">ZOOM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customization;
