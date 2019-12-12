import React, { Component } from 'react';
import "./index.css"
import $ from "jquery"

class login extends Component {
    

     
    //设置value的初始值
    constructor() {
        super()
        this.state = { value: '' }
    }
    //改变value的值
    handleChange(event) {
        console.log(event.target.value)
        this.setState({ value: event.target.value })
        const userMsg = event.target.value;
        return userMsg;
        //输入框失去焦点的时候
    }
    // react表单提交需要对input框中的state进行实时获取和重写，否则无效
    //进行表单验证
    //当输入框失去焦点时,获取当前的value进行判断。如果判断元当前的value值是空，则返回错误提示
    render() {
        {
            $("")
        }
        
        return (
            <div className="login">
                <div className="login-warp">
                    <h1>欢迎登录雕刻网站</h1>
                    <form>
                        <div className="login-box">
                            <label>用户名：</label>
                            <input
                                maxLength={16}
                                placeholder="请输入用户名"
                                name="username"
                                className="login-box-input login-box-username"
                                value={this.state.name}
                                onChange={(e) => this.handleChange(e)}
                            />
                             <p name="error" value="" className="error_light">用户名输入格式有误，请重新输入</p>
                            <label>密&nbsp;&nbsp;&nbsp;码：</label>
                            <input
                                type="password"
                                placeholder="请输入密码"
                                name="password"
                                className="login-box-input login-box-password"
                                value={this.state.pwd}
                                onChange={(e) => this.handleChange(e)}
                            />
                            <p name="error" value="" className="error_light">密码输入格式有误，请重新输入</p>
                        </div>
                    </form>
                    <div className="login-box-submit login-box-submit-green"   onClick={function(){alert("登陆成功")}}>登录</div>
                    <div className="login-box-submit login-box-submit-red">取消</div>
                </div>
            </div>
        );
    }
}

export default login;