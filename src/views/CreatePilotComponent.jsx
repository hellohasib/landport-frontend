import React, { Component } from 'react'
import PilotService from '../services/PilotService';
import { BrowserRouter, Switch, Router } from "react-router-dom";
import ReactDOM from 'react-dom';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';

class CreatePilotComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            pilotname: '',
            fathername: '',
            address: '',
            drivinglicense: '',
            dob: '',
            cellphone: '',
            nationality: '',
            country: ''
        }
        this.changePilotNameHandler = this.changePilotNameHandler.bind(this);
        this.changeFatherNameHandler = this.changeFatherNameHandler.bind(this);
        this.changeaddressHandler = this.changeaddressHandler.bind(this);
        this.changedrivinglicenseHandler = this.changedrivinglicenseHandler.bind(this);
        this.changedobHandler = this.changedobHandler.bind(this);
        this.changecellphonesHandler = this.changecellphonesHandler.bind(this);
        this.changenationalityHandler = this.changenationalityHandler.bind(this);
        this.changecountryHandler = this.changecountryHandler.bind(this);
        this.saveOrUpdatePilot = this.saveOrUpdatePilot.bind(this);
        this.handleTakePhoto=this.handleTakePhoto.bind(this);
    }


    // step 3
    componentDidMount() {
document.title = "Bangladesh Landport Authority"
        // step 4
        if (this.state.id === '_add') {
            return
        }
    }
    saveOrUpdatePilot = (e) => {
        e.preventDefault();
        let pilot = {
            pilotname: this.state.pilotname, fathername: this.state.fathername, address: this.state.address, drivinglicense: this.state.drivinglicense, dob: this.state.dob,
            cellphone: this.state.cellphone, nationality: this.state.nationality, country: this.state.country
        };
        console.log('pilot => ' + JSON.stringify(pilot));


        PilotService.createPilot(pilot).then(res => {
            this.props.history.push('/pilots');
        });

    }

    changePilotNameHandler = (event) => {
        this.setState({ pilotname: event.target.value });
    }

    changeFatherNameHandler = (event) => {
        this.setState({ fathername: event.target.value });
    }

    changeaddressHandler = (event) => {
        this.setState({ address: event.target.value });
    }
    changedrivinglicenseHandler = (event) => {
        this.setState({ drivinglicense: event.target.value });
    }
    changedobHandler = (event) => {
        this.setState({ dob: event.target.value });
    }
    changecellphonesHandler = (event) => {
        this.setState({ cellphone: event.target.value });
    }
    changenationalityHandler = (event) => {
        this.setState({ nationality: event.target.value });
    }
    changecountryHandler = (event) => {
        this.setState({ country: event.target.value });
    }

    cancel() {
        this.props.history.push('/pilots');
    }
     handleTakePhoto (dataUri) {
            // Do stuff with the photo...
            console.log('takePhoto');
          }

    getTitle() {
        if (this.state.id === '_add') {
            return <h3 className="text-center">Add Pilot</h3>
        } else {
            return <h3 className="text-center">Update Pilot</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-12 offset-md-12 offset-md-12">
                            <center><h3>Add Pilot</h3></center>
                            <div className="card-body">
                                <form>
                                    <MDBContainer>
                                        <MDBRow>
                                            <MDBCol size="6">
                                                <div className="form-group">
                                                    <label> Pilot Name: </label>
                                                    <input placeholder="Pilot Name" name="pilotname" className="form-control"
                                                        value={this.state.pilotname} onChange={this.changePilotNameHandler} />
                                                </div>
                                                <div className="form-group">
                                                    <label> Father's Name: </label>
                                                    <input placeholder="Father's Name" name="fathername" className="form-control"
                                                        value={this.state.fathername} onChange={this.changeFatherNameHandler} />
                                                </div>
                                                <div className="form-group">
                                                    <label> Address: </label>
                                                    <input placeholder="Address" name="address" className="form-control"
                                                        value={this.state.address} onChange={this.changeaddressHandler} />
                                                </div>
                                                <div className="form-group">
                                                    <label> Driving License: </label>
                                                    <input placeholder="Driving License" name="drivinglicense" className="form-control"
                                                        value={this.state.drivinglicense} onChange={this.changedrivinglicenseHandler} />
                                                </div>
                                                 <div className="form-group">
                                                                                                    <label> Driver Image: </label>
                                                                                                    <input  name="driverimage" className="form-control"
                                                                                                         type="file" />
                                                                                                </div>
                                            </MDBCol>
                                            <MDBCol size="6">
                                                <div className="form-group">
                                                    <label> Date Of Birth: </label>
                                                    <input placeholder="Date of Birth" type="date" name="dob" className="form-control"
                                                        value={this.state.dob} onChange={this.changedobHandler} />
                                                </div>
                                                <div className="form-group">
                                                    <label> Cell Phone: </label>
                                                    <input placeholder="Cell Phone" name="cellphone" className="form-control"
                                                        value={this.state.cellphone} onChange={this.changecellphonesHandler} />
                                                </div>
                                                <div className="form-group">
                                                    <label> Nationality: </label>
                                                    <input placeholder="Address" name="nationality" className="form-control"
                                                        value={this.state.nationality} onChange={this.changenationalityHandler} />
                                                </div>
                                                <div className="form-group">
                                                    <label> Country: </label>
                                                    <input placeholder="Country" name="country" className="form-control"
                                                        value={this.state.country} onChange={this.changecountryHandler} />
                                                </div>
                                                <div className="form-group">
                                                                                                    <label> Capture Driver Image: </label>
                                                                                                    <Camera
                                                                                                          onTakePhoto = { (dataUri) => { handleTakePhoto(dataUri); } }
                                                                                                        />
                                                                                                </div>
                                            </MDBCol>

                                        </MDBRow>
                                    </MDBContainer>
                                    <button className="btn btn-success" onClick={this.saveOrUpdatePilot}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default CreatePilotComponent
