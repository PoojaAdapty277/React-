import React from 'react';
import './interface.css';
import '../App.css';


function InterFace() {
  return (    
    <div className="interface-container">
        <div className="interface-wrapper interface-header-section">
            <div className="interface-header">
                <p>Interface</p>
            </div>
            <div className="interface-icon">
                <div className="dot-container">
                    <span class="dot"></span>
                    <span class="dot"></span>
                    <span class="dot"></span>
                    <span class="dot"></span>
                </div>           
            </div>
        </div>

        {/* dashboard section */}
        <div className="interface-wrapper dashboard-wrapper">
            <div className="interface-icon dashboard-icon">
                <div className="dot-container">
                    <span class="dot"></span>
                    <span class="dot"></span>
                    <span class="dot"></span>
                    <span class="dot"></span>
                </div>           
            </div>
            <div className="small-font-size dashboard-header">
                <p>DashBoard</p>
            </div>
        </div>
        <div className="interface-wrapper">
            <div className="interface-icon dashboard-icon">
                <img src="profile.jpg"></img>       
            </div>
            <div className="small-font-size dashboard-header light-font-style">
                <p>Profile</p>
            </div>
        </div>
        <div className="interface-wrapper">
            <div className="interface-icon dashboard-icon">
                <div className="interface-icon dashboard-icon">
                    <img src="setting.jpg"></img>       
                </div>         
            </div>
            <div className="small-font-size dashboard-header light-font-style">
                <p>Settings</p>
            </div>
        </div>

        <div className="interface-wrapper">
            <div className="interface-icon dashboard-icon">
                <div className="interface-icon dashboard-icon">
                    <img src="cloud.jpg"></img>       
                </div>            
            </div>
            <div className="small-font-size dashboard-header light-font-style">
                <p>Cloud</p>
            </div>
        </div>

        <div className="interface-wrapper">
            <div className="interface-icon dashboard-icon">
                <img src="message.jpg"></img>       
            </div> 
            <div className="small-font-size dashboard-header light-font-style">
                <p>Message</p>
            </div>
        </div>

        {/* new item add section */}
        <div className="add-item-container">
            <div className="interface-wrapper dashboard-wrapper newItem-wrapper">
                <div className="interface-icon dashboard-icon">
                    <i class="fa fa-plus" aria-hidden="true"></i>        
                </div>
                <div className="small-font-size dashboard-header">
                    <p>New Item</p>
                </div>            
            </div>
            <div className="add-items font-style">
                <p>Click '+' to create your new Items</p>
            </div>
        </div>        
    </div>
  );
}

export default InterFace;

