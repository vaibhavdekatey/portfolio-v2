import React from "react";

function ExpCard(props) {
    console.log(props.resp);
    return(
        <div className=" col-6 row flex-lg-row-reverse align-items-center g-2 ">

            <div className="col-lg ">
            <h2 className="pos display-9 fw-bold text-body-emphasis lh-1 ">{props.title}</h2>
            <h2 className="display-9 fw-bold text-body-emphasis lh-1 mb-3">{props.where}</h2>  
            <p className="yr">{props.yr}
            </p>

            <ul className="resp">
                {props.resp.map((l, i) =>
                    <li key = {i}>{l}</li>
                    ) 
                }
            </ul>

            </div>
        </div>

    )
}

export default ExpCard;