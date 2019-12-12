import React, { Component } from 'react';
import "./index.css"
import Userico from "./logo.svg"
import userimg from "./user1.png"



const ifSure = false;
class header extends Component {
    render() {
        return (
            <div className="header-warp">
                <div className="header-warp-left">
                    <div className="header-warp-left-img"><img src={Userico} /></div>
                    <div className="header-warp-left-text"><span>雕刻网站</span></div>
                </div>
              {/* 通过判断当地cookie，来巨鼎是否让当前的用户进行登录 */}
                {
                   ifSure ? ( 
                        <div className="header-warp-right">
                            <div className="header-warp-right-img">
                                <img src={userimg}  alt=""/>
                            </div>
                            <div className="header-warp-right-text">
                            <span><a  href="">请登录</a></span>
                            </div>
                            
                        </div>
                    ) : (
                            <div className="header-warp-right">
                                <div className="header-warp-right-img">
                                    <img src={Userico} alt=""/>
                                </div>
                                <div className="header-warp-right-text">
                                <span><a>用户名</a></span>
                                </div>
                            </div>
                        )            
                }
            </div>
        )                                                                                        
    }
}

export default header;