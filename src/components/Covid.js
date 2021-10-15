import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./css/style.css";
import Covid_data from './data/Covid_data.json';
import 'C:/Users/Dell/node_modules/bootstrap/dist/css/bootstrap.min.css';
const url = 'https://api.covid19india.org/data.json';
const Covid = () => {
    const [data,setdata] = useState([]);
    const [statename,setstate] = useState("");
    const [actual_state,setactual_state] = useState(false);
    // const get_data = async () =>{
    //     try{
    //         const res = await fetch(url);
    //         console.log(res);
    //         // const ares = await res.json();
    //         // setdata(ares.statewise[0]);
    //     }
    //     catch(err){
    //         console.log(err);
    //     }
    // }
    useEffect(() => {
        setdata(Covid_data.statewise);
    },[]);
    const getState = (val) =>{
        setstate(val.target.value);
        setactual_state(false);
    }
    return(
        <>
            <h1 className = "display-4 text-center text-primary">Covid-19 Cases Tracker</h1>
            <br></br>
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Search for State" aria-label="Recipient's username" aria-describedby="basic-addon2" onChange = {getState}/>
                <div class="input-group-append">
                    <button class="btn btn-outline-secondary" type="button" onClick = {()=>{setactual_state(true);}}>Search</button>
                </div>
            </div>
            {
                actual_state ?
                    (<h3>{}</h3>)
                    :
                    (
                    <>
                        <h4 className ="text-center text-muted">Type name of the state.....</h4>
                    </>
                    )
            }
            <div className = "text-dark">
                {
                    data.filter((val)=>{
                        if(statename == ""){
                            return val;
                        }
                        else if(val.state.toLowerCase().includes(statename.toLowerCase())){
                            console.log(val)
                            return val;
                        }
                    }).map(val =>(
                        <>
                        <div className = "container big_box">
                <div className="row align-items-center">
                    <div class="col-md-4 col-xs-6 box bg-success shadow-lg p-3 mb-5 rounded">
                            {
                                val.state == "Total" ?
                                (<h1 className = "bg-success" style = {{marginTop : "7%",marginLeft:"34%",color:"rgb(16, 60, 255)"}}>India</h1>)
                                :
                                (<h2 className = "bg-success" style = {{color:"rgb(16, 60, 255)"}}>{val.state}</h2>)
                            }
                    </div>
                    <div class="col-md-4 col-xs-6 box bg-success shadow-lg p-3 mb-5 rounded">
                        <h2 className = "bg-success">Active Cases</h2>
                        <h2 className = "bg-success text-warning">{val.active}</h2>
                    </div>
                    <div class="col-md-4 col-xs-6 box bg-success shadow-lg p-3 mb-5 rounded">
                        <h2 className = "bg-success">Confirmed Cases</h2>
                        <h2 className = "bg-success text-warning">{val.confirmed}</h2>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div class="col-md-4 col-xs-6 box bg-success shadow-lg p-3 mb-5 rounded">
                        <h2 className = "bg-success">Recovered Cases</h2>
                        <h2 className = "bg-success text-warning">{val.recovered}</h2>
                    </div>      
                    <div class="col-md-4 col-xs-6 box bg-success shadow-lg p-3 mb-5 rounded">
                        <h2 className = "bg-success">Deaths</h2>
                        <h2 className = "bg-success text-danger">{val.deaths}</h2>
                    </div>
                    <div class="col-md-4 col-xs-6 box bg-success shadow-lg p-3 mb-5 rounded">
                        <h2 className = "bg-success">Last Updated</h2>
                        <h2 className = "bg-success">{val.lastupdatedtime}</h2>
                    </div>
                </div>
                <hr></hr>
            </div>
        </>
        ))
                }
            </div>
        </>
            
    )
}

export default Covid;