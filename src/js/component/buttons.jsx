import React from "react";

const Buttons = ({ turnOffLights, turnOnLights, changeColors }) => {
    return (
        <div className="row">
        <div className="col-6 d-flex justify-content-around">
            <button
                type="button"
                className="turn-off-light btn btn-danger btn-lg"
                onClick={() => {turnOffLights()}}>
                Turn off the lights
            </button>
            <button
                type="button"
                className="active-light btn btn-success btn-lg"
                onClick={() => {turnOnLights()}}>
                Turn on the lights
            </button>
            </div>

            <div className="col-6 d-flex justify-content-around">

            <button 
                type="button" 
                className="extra-color btn btn-info btn-lg"
                onClick={() =>{changeColors()}}>
                Make magic happens!
            </button>
        </div>
        </div>

    );
};

export default Buttons;