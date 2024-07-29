import React from "react";
import experience from "./Experience";
import ExpCard from "./ExpCards";

function Exp() {

    return (
        <div className="exp row row-cols-1 row-cols-sm-2 row-cols-md-2 align-items-stretch" id="exp">
        <h1 className="display-5 col-12 fw-bold text-body-emphasis lh-1 mb-3">Where I've Worked</h1>
        {
            experience.map((xp, index) => 
                <ExpCard 
                    key= {index}
                    title= {xp.title}
                    where= {xp.where}
                    yr= {xp.yr}
                    resp= {xp.resp}
                />
            ) 
        }
        </div>
    )

}

export default Exp;