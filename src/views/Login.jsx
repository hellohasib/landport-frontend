import React, { Component } from 'react'
import PilotService from '../services/PilotService';
import { BrowserRouter, Switch, Router } from "react-router-dom";
import ReactDOM from 'react-dom';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Button from "react-bootstrap/Button";
import logo from "assets/img/blpa.jpg";
import tamabil from "assets/img/tamabil.jpg";
class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            username: '',
            password: ''
          
        }
        this.changeUserNameHandler = this.changeUserNameHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.Login = this.Login.bind(this);
    }

    // step 3
    componentDidMount() {
document.title = "Bangladesh Landport Authority"
        // step 4
        if (this.state.id === '_add') {
            return
        }
    }
    Login = (e) => {
        e.preventDefault();
        let pilot = {
            username: this.state.username, password: this.state.password
        };
        this.props.history.push('admin/dashboard');

    }

    changeUserNameHandler = (event) => {
        this.setState({ username: event.target.value });
    }

    changePasswordHandler = (event) => {
        this.setState({ password: event.target.value });
    }



    cancel() {
        this.props.history.push('/login');
    }


    render() {
        return (
            <div

            >
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-12 offset-md-12 offset-md-12"
                        style={{
                                                                          backgroundImage: 'url('+tamabil+')',
                                                                          backgroundSize: "cover",
                                                                          height: "100vh",
                                                                          color: "#f5f5f5"
                                                                        }}>
                            <center><h3>User Login</h3></center>
                            <div className="card-body">
                                        <MDBContainer>
                                        <MDBRow>
                                        <MDBCol size="4">
                                        </MDBCol>
                                        <MDBCol size="4">

                                    <center><img src={logo} alt="logo" style={{width:"100px", height:"100px"}} /></center>

                                        </MDBCol>
                                        <MDBCol size="4">
                                        </MDBCol>
                                        </MDBRow>
                                        </MDBContainer>

                                <form>
                                    <MDBContainer>
                                        <MDBRow>
                                        <MDBCol size="4">
                                                                                                      </MDBCol>
                                            <MDBCol size="4">
                                                <div className="form-group">
                                                    <label> User Name: </label>
                                                    <input placeholder="User Name" name="username" className="form-control"
                                                        value={this.state.username} onChange={this.changeUserNameHandler} />
                                                </div>
                                                <div className="form-group">
                                                    <label> Password: </label>
                                                    <input placeholder="Password" name="password" className="form-control"
                                                        value={this.state.password} onChange={this.changePasswordHandler} />
                                                </div>

                                            </MDBCol>
                                            <MDBCol size="4">
                                                              </MDBCol>

                                        </MDBRow>
                                    </MDBContainer>

                                    <MDBContainer>
                                                                            <MDBRow>
                                                                            <MDBCol size="4">
                                                                                                                                          </MDBCol>
                                                                                <MDBCol size="4">
                                                                                    <button style={{backgroundColor:'#32a852',paddingBottom:'5px',paddingLeft:'15px',paddingRight:'15px',paddingTop:'5px',color:'#fff',border:'1px solid #32a852',borderRadius:'3px',fontWeight:'bold'}} onClick={this.Login}>Login</button>
                                                                                    <button style={{backgroundColor:'#eb1d1a',marginLeft: "10px",paddingBottom:'5px',paddingLeft:'15px',paddingRight:'15px',paddingTop:'5px',color:'#fff',border:'1px solid #eb1d1a',borderRadius:'3px',fontWeight:'bold'}} onClick={this.cancel.bind(this)}>Cancel</button>
                                                                                </MDBCol>
                                                                                <MDBCol size="4">
                                                                                                  </MDBCol>

                                                                            </MDBRow>
                                                                        </MDBContainer>

                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Login
