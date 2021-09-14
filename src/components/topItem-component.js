import React from 'react';
import '../App.css';
import './interface.css';
import './dashboard.css';
import './topItem.css'

function TopItem() {
    return(
    <div className="earning-section small-font-size">
        <div className="earning-header">
            <p className="small-font-size">Your Top Item</p>
        </div>
        <div className="topItem-section">
            <div className="product-header d-flex">
                <div className="product">
                    <p>Product</p>
                </div>
                <div className="product-earning">
                    <p>Earnings</p>
                </div>
            </div>
            <div className="earning-interface therox-wrapper">
                <div className="item">
                    <img src="therox.jpg" className="small-img"></img>
                </div>
                <div className="pro-coount month-account theorx-content">
                    <p>Therox 6 Template</p>
                    <p className="additional-yr month-display">Sketch App</p>
                </div>
                <div className="earning therox-progress">
                    <p>+16.9%</p>
                </div>
                <div className="pro-coount month-account therox">
                    <p>$24.58</p>               
                </div>
            </div>
            <div className="earning-interface therox-wrapper dashboard-interface">
                <div className="item">
                    <img src="therox.jpg" className="small-img"></img>
                </div>
                <div className="pro-coount month-account theorx-content">
                    <p>Dashboard Interface</p>
                    <p className="additional-yr month-display">Sketch App</p>
                </div>
                <div className="earning"></div>
                <div className="pro-coount month-account therox">
                    <p>$19.63</p>               
                </div>
            </div>
        </div>
    </div> 
    );
}

export default TopItem;