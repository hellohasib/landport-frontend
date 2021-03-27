import React, { Component } from 'react'
import VehicleService from '../services/VehicleService';
import { BrowserRouter, Switch, Router } from "react-router-dom";
import ReactDOM from 'react-dom';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
class CreateVehicleComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            vehicleregno: '5',
            chassisno: '',
            engineno: '',
            vehicleregcertificateno: '',
            ownerofvehicle: '',
            owneraddress: '',
            ownercellphone: ''
        }
        this.changevehicleRegNoHandler = this.changevehicleRegNoHandler.bind(this);
        this.changechassisNoHandler = this.changechassisNoHandler.bind(this);
        this.changeengineNoHandler = this.changeengineNoHandler.bind(this);
        this.changevehicleRegCertificateNoHandler = this.changevehicleRegCertificateNoHandler.bind(this);
        this.changeownerOfVehicleHandler = this.changeownerOfVehicleHandler.bind(this);
        this.changeownerAddressHandler = this.changeownerAddressHandler.bind(this);
        this.changeownerCellPhoneHandler = this.changeownerCellPhoneHandler.bind(this);

    }

    // step 3
    componentDidMount(){
document.title = "Bangladesh Landport Authority"
        // step 4
        if(this.state.id === '_add'){
            return
        }
    }
    saveOrUpdateVehicle = (e) => {
        e.preventDefault();
        let vehicle = {vehicleregno: this.state.vehicleregno,chassisno: this.state.chassisno,engineno : this.state.engineno,vehicleregcertificateno : this.state.vehicleregcertificateno,
                                           ownerofvehicle : this.state.ownerofvehicle,owneraddress : this.state.owneraddress,ownercellphone : this.state.ownercellphone};
        console.log('vehicle => ' + JSON.stringify(vehicle));

        // step 5

            VehicleService.createVehicle(vehicle).then(res =>{
                this.props.history.push('/vehicles');
            });

    }
    
    changevehicleRegNoHandler= (event) => {
        this.setState({vehicleregno: event.target.value});
    }

    changechassisNoHandler= (event) => {
        this.setState({chassisno: event.target.value});
    }

    changeengineNoHandler= (event) => {
        this.setState({engineno: event.target.value});
    }

    changevehicleRegCertificateNoHandler= (event) => {
            this.setState({vehicleregcertificateno: event.target.value});
        }

        changeownerOfVehicleHandler= (event) => {
            this.setState({ownerofvehicle: event.target.value});
        }

        changeownerAddressHandler= (event) => {
            this.setState({owneraddress: event.target.value});
        }
        changeownerCellPhoneHandler= (event) => {
            this.setState({ownercellphone: event.target.value});
        }
    cancel(){
        this.props.history.push('/vehicles');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Vehicle</h3>
        }else{
            return <h3 className="text-center">Update Vehicle</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className="card col-md-12 offset-md-12 offset-md-12">
                                <center><h3>Add Vehicle</h3></center>
                                <div className = "card-body">

                                    <form>
                                    <MDBContainer>
                                                                                                            <MDBRow>
                                                                                                                <MDBCol size="6">
                                        <div className = "form-group">
                                        <label> Vehicle Reg No: </label>
                                        <input placeholder="Vehicle Reg No" name="vehicleregno" className="form-control"
                                            value={this.state.vehicleregno} onChange={this.changevehicleRegNoHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Chassis No: </label>
                                        <input placeholder="Chassis No" name="chassisno" className="form-control"
                                            value={this.state.chassisno} onChange={this.changechassisNoHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Engine No: </label>
                                        <input placeholder="Engine No" name="engineno" className="form-control"
                                            value={this.state.engineno} onChange={this.changeengineNoHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> vehicle Reg CertificateNo: </label>
                                        <input placeholder="Vehicle Reg Certificate No" name="vehicleregcertificateno" className="form-control"
                                            value={this.state.vehicleregcertificateno} onChange={this.changevehicleRegCertificateNoHandler} />
                                    </div>
                                     </MDBCol>
                                                                                                                     <MDBCol size="6">
                                    <div className="form-group">
                                        <label> Owner Of Vehicle: </label>
                                        <input placeholder="Owner Of Vehicle" name="ownerofvehicle" className="form-control"
                                            value={this.state.ownerofvehicle} onChange={this.changeownerOfVehicleHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Owner Address: </label>
                                        <input placeholder="Owner Address" name="owneraddress" className="form-control"
                                            value={this.state.owneraddress} onChange={this.changeownerAddressHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Owner Cell Phone: </label>
                                        <input placeholder="Owner Cell Phone" name="ownercellphone" className="form-control"
                                            value={this.state.ownercellphone} onChange={this.changeownerCellPhoneHandler} />
                                    </div>
</MDBCol>
</MDBRow>
                                </MDBContainer>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateVehicle}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default CreateVehicleComponent
