import React from 'react';
import './interface.css';
import './dashboard.css';
import '../App.css';
// import { BsSearch } from "../react-icons";
// import { BsSearch } from '../node_modules/react-icons/bs/BsSearch';
import TopItem from './topItem-component';


function DashBoard() {
  return (    
    <div className="row dashboard-row">
        <div className="col-6 dashboard-profile">
            <div className="dashboard-name">
                <p className="large-font">Hello Tam</p>
                <p className="medium-font">Have a nice day at work &#x1F60a; </p>
            </div>

            <div className="dashboard-porfolio">
                <div className="project-portfolio">
                    <div className="project small-font-size blue-border-style">
                        Your Pro
                    </div>
                    <div className="portfolio small-font-size blue-border-style">
                        Your Portfolio
                    </div>
                </div>
                <div className="view-more">
                    <span class="dot"></span>
                    <span class="dot"></span>
                    <span class="dot"></span>
                </div>                
            </div>

            <div className="dashboard-account">
                <div className="image-section">
                    <img src="dashboard.jpg"></img>

                    <div className="renew-account">
                        <div className="time">
                            <img src="time.jpg"></img>
                        </div>
                        <div className="pro-coount">
                            <p>Renew Your Pro Account</p>
                            <p className="additional-yr">$99.00 for on additional year</p>
                        </div>
                        <div className="rebew-btn">
                            <p>Renew Account</p>
                        </div>
                    </div>
                </div>              
            </div>
        </div>
        <div className="col-6 dashboard-search">
            <div className="search-section d-flex">
                <div className="search-input">
                <div class="input-group rounded">
                    <input type="search" class="form-control" placeholder="Search" aria-label="Search"
                        aria-describedby="search-addon" />
                    <span class="input-group-text border-0" id="search-addon">
                        {/* <BsSearch/> */}
                    </span>
                </div>
                </div>
                <div className="item-container">
                    <div className="items">
                        <div className="item-number">
                            <p>6</p>
                        </div>
                    </div>                    
                </div>                
                <div className="right-logo">
                    <img src="logo.jpg"></img>
                </div>
            </div>

            <div className="earning-section small-font-size">
                <div className="earning-header">
                    <p className="small-font-size">Your Earning</p>
                </div>
                <div className="earning-interface">
                    <div className="chart">
                        <img src="chart.jpg"></img>
                    </div>
                    <div className="earning">
                        <div className="dollar graphic-chart"><p>$ <span className="large-font">98.00</span></p></div>
                        <div className="d-flex align-items-center graphic-chart">
                            <div className="pink-line blue-line"></div><span className="small-font-size">Graphics</span>
                        </div>
                        <div className="d-flex align-items-center graphic-chart">
                            <div className="pink-line"></div><span className="small-font-size">Interfaces</span>
                        </div>
                    </div>
                    <div className="right-section">
                        <div>
                            <div className="chart circle-chart">
                                <img src="circle-chart.jpg"></img>
                                <div class="view-more right-section-dot">
                                    <span class="dot"></span>
                                    <span class="dot"></span>
                                    <span class="dot"></span>
                                </div>  
                            </div>                            
                        </div>
                        <div className="chart wave-chart">
                            <img src="wave-chart.jpg"></img>
                        </div>
                    </div>
                </div>
            </div>

            <div className="earning-section small-font-size d-flex">
                <div className="weather-section month-section">
                    <div className="earning-header">
                        <p className="small-font-size">Your Best Month</p>
                    </div>
                    <div className="dashboard-account">
                        <div className="image-section">
                            {/* <img src="dashboard.jpg"></img> */}
                            <div className="renew-account month-tool">
                                <div className="time">
                                    <img src="month.jpg" className="small-img"></img>
                                </div>
                                <div className="pro-coount month-account">
                                    <p>$24.89</p>
                                    <p className="additional-yr month-display">February</p>
                                </div>
                                <div className="rebew-btn custom-btn-dot">
                                    <div class="view-more month-view-more">
                                        <span class="dot month-dot"></span>
                                        <span class="dot month-dot"></span>
                                        <span class="dot month-dot"></span>
                                        {/* <ul>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                        </ul> */}
                                    </div>
                                </div>
                            </div>
                        </div>              
                    </div>
                </div>   

                <div className="weather-section">
                    <div className="earning-header">
                        <p className="small-font-size">Your Best Tool</p>
                    </div>
                    <div className="dashboard-account d-flex dashboard-tool">                        
                        <div className="dashboard-image">
                            <img src="tool.jpg" className="small-img"></img>
                        </div>
                        <div>
                            <p className="tool-price">$129.00</p>
                            <p className="additional-yr small-font-size">Strech App</p>
                        </div>                            
                    </div>               
                </div>  
            </div>  

           {/* team section            */}
           <TopItem></TopItem>
          
        </div>
    </div>
  );
}

export default DashBoard;

