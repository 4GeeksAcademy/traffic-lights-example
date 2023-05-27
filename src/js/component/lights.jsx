import React from "react";

const Lights = ({red, orange, green, setRed, setOrange, setGreen, glowColor}) => {

    return (

        <div className="container-fluid m-3 p-5 justify-content-center tracking-in-expand-forward-top">
            <div className="row-signal d-flex justify-content-center">
                <div className="traffic-light">
                    <div
                        className={red}
                        onClick={() => glowColor("red", setRed)}>
                    </div>
                    <div
                        className={orange}
                        onClick={() => glowColor("orange", setOrange)}>
                    </div>
                    <div 
                        className={green} 
                        onClick={() => glowColor("green", setGreen)}>
                    </div>
                </div>
            </div>
            <div className="row-post d-flex justify-content-center">
                <div className="post"></div>
            </div>

        </div>
    );
}

export default Lights;
