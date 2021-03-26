import React, { Component } from 'react'
import ReportService from '../services/ReportService';
import { BrowserRouter, Switch, Router } from "react-router-dom";
import ReactDOM from 'react-dom';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import axios from 'axios'
class ReportGenerate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            fromdate: '',
            todate: ''

        }
        this.changefromDateHandler = this.changefromDateHandler.bind(this);
        this.changetoDateHandler = this.changetoDateHandler.bind(this);

        this.saveOrUpdatePilot = this.saveOrUpdatePilot.bind(this);
    }

    // step 3
    componentDidMount() {

        // step 4
        if (this.state.id === '_add') {
            return
        }
    }
    saveOrUpdatePilot = (e) => {
        //e.preventDefault();
        //const fromdate=this.state.fromdate;
        //const todate=this.state.todate;
       axios({
         url: 'http://localhost:8080/api/v1/report/export/excel/',
         method: 'GET',
         responseType: 'blob', // important
       }).then((response) => {
         const url = window.URL.createObjectURL(new Blob([response.data]));
         const link = document.createElement('a');
         link.href = url;
         link.setAttribute('download', 'file.pdf');
         document.body.appendChild(link);
         link.click();
       });

    }


    changefromDateHandler = (event) => {
        this.setState({ fromdate: event.target.value });
    }
    changetoDateHandler = (event) => {
            this.setState({ todate: event.target.value });
        }


    cancel() {
        this.props.history.push('/report');
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
                            <center><h3>Generate Weight Report</h3></center>
                            <div className="card-body">
                                <form>
                                    <MDBContainer>
                                        <MDBRow>
                                            <MDBCol size="6">
                                                <div className="form-group">
                                                                                                    <label> From Date: </label>
                                                                                                    <input placeholder="From Date" type="date" name="fromdate" className="form-control"
                                                                                                        value={this.state.fromdate} onChange={this.changefromDateHandler} />
                                                                                                </div>
                                                <div className="form-group">
                                                                                                    <label> To Date: </label>
                                                                                                    <input placeholder="To Date" type="date" name="todate" className="form-control"
                                                                                                        value={this.state.todate} onChange={this.changetoDateHandler} />
                                                                                                </div>

                                            </MDBCol>
                                            <MDBCol size="6">

                                            </MDBCol>

                                        </MDBRow>
                                    </MDBContainer>
                                    <a href="http://localhost:8080/api/v1/report/export/excel/" className="btn btn-success">Download</a>
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

export default ReportGenerate
