import React from "react";
import "./Delivery.css";
import deliveryApp from "../assets/Images/Food-Ordering-Application.png"

function Delivery() {
  return (
    <div className="full-width-bg-white">
      <h3 className="text-orange-bold-large-center">Quick Delivery App</h3>
      <div className="width-1520px-center-grid-md-2">
        <img
          className="width-550px-center-my-4"
          src={deliveryApp} alt="Bull Dozer"
        />
        <div className="flex flex-col justify-center">
            <p className="text-color-00df9a-bold">Get the App</p>
            <h1 className="text-bold-responsive-py-2">Limitless Convenience on-demand</h1>
            <p></p>
        </div>
      </div>
    </div>
  );
}

export default Delivery;
