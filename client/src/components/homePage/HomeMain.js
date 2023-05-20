import React from "react";
import {Link} from 'react-router-dom'

const HomeMain = () => {

    return <>
        <div className=" wrapper container-fluid">
            <div className="home home-page-text">
                <h1 className="main-page-heading">Share Code in Real-time <br/> with Developers</h1>
                <h5 className="main-page-text">An online code editor for <br/> interviews, troubleshooting, teaching & more...</h5>
                <h6 className="main-page-text">Share Code for free!</h6>
                
                <div className="home-buttons">
                    <Link to="https://github.com/Ayush0202/Codeshare-2.0" className="btn btn-dark btn-lg"><i className="fa-brands fa-github"></i> Github</Link>
                    <Link to="/home" className="btn btn-danger btn-lg">Share Code</Link>
                </div>
            </div>
            
            <div className="home home-page-image">
                <img src="demo.gif" alt="Gif File" />
            </div>
        </div>

    </>

}

export default HomeMain