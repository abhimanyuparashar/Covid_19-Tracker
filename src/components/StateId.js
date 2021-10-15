import React, { useEffect, useState } from 'react';
import "./css/style.css";

const StateId = () => {
    const [data,setdata] = useState([]);
    const [info,setinfo] = useState("");
    var j = 0;
    // useEffect(() => {
    //     fetch('https://api.covid19india.org/data.json')
    //         .then((response) => response.json())
    //         .then((responseBody) => {
    //             setdata(responseBody.statewise);
    //         });
    // },[]);
    const search = (event) => {
        setinfo(event.target.value);
    }
    return(
        <>
            <input type = "text" placeholder = "Search State"
                onChange = {search}
                value = {info}
            />

            <div className = "text-dark">
                {
                    data.filter((val)=>{
                        if(info == ""){
                            return val;
                        }
                        else if(val.state.toLowerCase().includes(info.toLowerCase())){
                            console.log(val)
                            return val;
                        }
                    }).map(val =>(
                        <>
                        <div className = "container big_box">
                <div className="row align-items-center">
                    <div class="col box bg-success">
                            <h2 className = "bg-success">{val.state}</h2>
                    </div>
                    <div class="col box bg-success">
                        <h2 className = "bg-success">Active Cases</h2>
                        <h2 className = "bg-success text-warning">{val.active}</h2>
                    </div>
                    <div class="col box bg-success">
                        <h2 className = "bg-success">Confirmed Cases</h2>
                        <h2 className = "bg-success text-warning">{val.confirmed}</h2>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div class="col box bg-success">
                        <h2 className = "bg-success">Recovered Cases</h2>
                        <h2 className = "bg-success text-warning">{val.recovered}</h2>
                    </div>
                    <div class="col box bg-success">
                        <h2 className = "bg-success">Deaths</h2>
                        <h2 className = "bg-success text-danger">{val.deaths}</h2>
                    </div>
                    <div class="col box bg-success">
                        <h2 className = "bg-success">Last Updated</h2>
                        <h2 className = "bg-success">{val.lastupdatedtime}</h2>
                    </div>
                </div>
            </div>
            </>
                    ))
                }
            </div>
        </>
    )
}

export default StateId;