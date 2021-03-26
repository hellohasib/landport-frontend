import React, { Component } from 'react'
import ImporterService from '../services/ImporterService';
import { BrowserRouter, Switch, Router } from "react-router-dom";
import ReactDOM from 'react-dom';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
class CreateImporterComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            importername: '',
            address: '',
            companyname: '',
            tradelicenseno: '',
            cellphone: '',
            email: '',
            nidno: ''
        }
        this.changeImporterNameHandler = this.changeImporterNameHandler.bind(this);
        this.changeAddressHandler = this.changeAddressHandler.bind(this);
        this.changeProprietorNameHandler = this.changeProprietorNameHandler.bind(this);
        this.changeTradeLicenseNoHandler = this.changeTradeLicenseNoHandler.bind(this);
        this.changeCellphoneHandler = this.changeCellphoneHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changeNidNoHandler = this.changeNidNoHandler.bind(this);

        this.saveOrUpdateImporter = this.saveOrUpdateImporter.bind(this);
    }

    // step 3
    componentDidMount(){
document.title = "Bangladesh Landport Authority"
        // step 4
        if(this.state.id === '_add'){
            return
        }
    }
    saveOrUpdateImporter = (e) => {
        e.preventDefault();
        let importer = {importername: this.state.importername, address: this.state.address, companyname: this.state.companyname,
        tradelicenseno: this.state.tradelicenseno, cellphone: this.state.cellphone, email: this.state.email, nidno: this.state.nidno};
        console.log('importer => ' + JSON.stringify(importer));

        // step 5

            ImporterService.createImporter(importer).then(res =>{
                this.props.history.push('/importers');
            });

    }
    
    changeImporterNameHandler= (event) => {
        this.setState({importername: event.target.value});
    }

    changeAddressHandler= (event) => {
        this.setState({address: event.target.value});
    }
    changeProprietorNameHandler= (event) => {
            this.setState({companyname: event.target.value});
        }

        changeTradeLicenseNoHandler= (event) => {
            this.setState({tradelicenseno: event.target.value});
        }
     changeCellphoneHandler= (event) => {
             this.setState({cellphone: event.target.value});
         }

         changeEmailHandler= (event) => {
             this.setState({email: event.target.value});
         }

    changeNidNoHandler= (event) => {
        this.setState({nidno: event.target.value});
    }

    cancel(){
        this.props.history.push('/importers');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Importer</h3>
        }else{
            return <h3 className="text-center">Update Importer</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className="card col-md-12 offset-md-12 offset-md-12">
                                <center><h3>Add Importer</h3></center>
                                <div className = "card-body">
                                    <form>
<MDBContainer>
                                    <MDBRow>
                                        <MDBCol size="6">
                                        <div className = "form-group">
                                            <label> Importer Name: </label>
                                            <input placeholder="Importer Name" name="importername" className="form-control"
                                                value={this.state.importername} onChange={this.changeImporterNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Address: </label>
                                            <input placeholder="Address" name="address" className="form-control"
                                                value={this.state.address} onChange={this.changeAddressHandler}/>
                                        </div>

                                        <div className = "form-group">
                                                                                    <label> Proprietor Name: </label>
                                                                                    <input placeholder="Proprietor Name" name="companyname" className="form-control"
                                                                                        value={this.state.companyname} onChange={this.changeProprietorNameHandler}/>
                                                                                </div>
                                                                                <div className = "form-group">
                                                                                    <label> Trade License No: </label>
                                                                                    <input placeholder="Trade License No" name="tradelicenseno" className="form-control"
                                                                                        value={this.state.tradelicenseno} onChange={this.changeTradeLicenseNoHandler}/>
                                                                                </div>
                                                                                </MDBCol>
                                                                                                                                                                                                      <MDBCol size="6">
                                        <div className = "form-group">
                                                                                    <label> Cellphone: </label>
                                                                                    <input placeholder="Cellphone" name="cellphone" className="form-control"
                                                                                        value={this.state.cellphone} onChange={this.changeCellphoneHandler}/>
                                                                                </div>

                                                                                <div className = "form-group">
                                                                                    <label> Email: </label>
                                                                                    <input placeholder="Email" name="email" className="form-control"
                                                                                        value={this.state.email} onChange={this.changeEmailHandler}/>
                                                                                </div>
                                        <div className = "form-group">
                                            <label> Nid No: </label>
                                            <input placeholder="Nid No" name="nidno" className="form-control"
                                                value={this.state.nidno} onChange={this.changeNidNoHandler}/>
                                        </div>
</MDBCol>

                                    </MDBRow>
                                </MDBContainer>
                                        <button className="btn btn-success" onClick={this.saveOrUpdateImporter}>Save</button>
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

export default CreateImporterComponent
