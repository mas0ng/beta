import React from "react";
import { X } from "../../icons/X";
import "./style.css";

export const Frame = () => {
  return (
    <div className="frame">
      <div className="fake-ticket-wrapper">
        <div className="fake-ticket">
          <div className="overlap-group">
            <p className="text-wrapper">Valid till 01:59 am tomorrow</p>
            <div className="div">seconds</div>
            <div className="overlap">
              <div className="text-wrapper-2">minutes</div>
              <div className="text-wrapper-3">hours</div>
            </div>
            <div className="text-wrapper-4">days</div>
            <div className="ellipse" />
            <div className="text-wrapper-5">☐☐</div>
            <div className="text-wrapper-6">☐☐</div>
            <div className="text-wrapper-7">☐☐</div>
            <div className="text-wrapper-8">☐☐</div>
          </div>
          <img className="line" alt="Line" src="/img/line-1.svg" />
          <div className="overlap-2">
            <div className="overlap-3">
              <div className="ellipse-2" />
              <div className="text-wrapper-9">i</div>
            </div>
            <div className="text-wrapper-10">☐☐☐☐☐☐☐☐☐☐☐☐☐☐☐☐☐☐☐☐</div>
            <div className="text-wrapper-11">☐☐☐☐☐☐☐☐☐☐</div>
          </div>
          <div className="overlap-4">
            <div className="overlap-5">
              <img className="polygon" alt="Polygon" src="/img/polygon-1.svg" />
              <div className="text-wrapper-12">!</div>
            </div>
            <p className="p">Ticket could not be fetched</p>
            <div className="text-wrapper-13">Internal server error: ER482</div>
            <p className="text-wrapper-14">
              Please try again later, if this problem continues, contact arriva customer support
            </p>
          </div>
          <X className="size-48" />
        </div>
      </div>
    </div>
  );
};
