import React, { Component } from 'react'
import FastWeightService from '../services/FastWeightService';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { BrowserRouter, Switch, Router } from "react-router-dom";
import ReactDOM from 'react-dom';
const loadercolor = {
      marginLeft:"20%",
      display:"block"

    };

class CreateFastWeightComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            importid: '',
            serialno: '',
            descriptionofgood: '',
            declaredweight: '',
            importerid: '',
            numberofpackage: '',
            loadweight: '',
            unloadweight: '',
            netweight: ''
        }
        this.changeImportIdHandler = this.changeImportIdHandler.bind(this);

        this.changeSerialNoHandler = this.changeSerialNoHandler.bind(this);

        this.changeDescriptionofGoodHandler = this.changeDescriptionofGoodHandler.bind(this);
        this.changeDeclaredWeightHandler = this.changeDeclaredWeightHandler.bind(this);
        this.changeImporterIdHandler = this.changeImporterIdHandler.bind(this);
        this.changeNumberofPackageHandler = this.changeNumberofPackageHandler.bind(this);
        this.changeLoadWeightHandler = this.changeLoadWeightHandler.bind(this);
        this.changeUnloadWeightHandler = this.changeUnloadWeightHandler.bind(this);
        this.changeNetWeightHandler = this.changeNetWeightHandler.bind(this);
        this.saveOrUpdateWeight = this.saveOrUpdateWeight.bind(this);
    }

    // step 3
    componentDidMount(){
document.title = "Bangladesh Landport Authority"
        // step 4
        if(this.state.id === '_add'){
            return
        }
    }
    saveOrUpdateWeight = (e) => {
        e.preventDefault();
        let fastweight = {importid: this.state.importid, serialno: this.state.serialno,
        descriptionofgood: this.state.descriptionofgood,
        declaredweight: this.state.declaredweight, importerid: this.state.importerid, numberofpackage: this.state.numberofpackage, loadweight: this.state.loadweight,
        unloadweight: this.state.unloadweight, netweight: this.state.netweight};
        console.log('fastweight => ' + JSON.stringify(fastweight));

        // step 5

            FastWeightService.createWeight(fastweight).then(res =>{
                this.props.history.push('/fastweights');
            });

    }

     changeImportIdHandler= (event) => {
            this.setState({importid: event.target.value});
        }
        changedateTimeHandler= (event) => {
                this.setState({datetime: event.target.value});
            }
        changeSerialNoHandler= (event) => {
                this.setState({serialno: event.target.value});
            }
       changeLcNoHandler= (event) => {
                   this.setState({lcno: event.target.value});
               }
       changeLcDateHandler= (event) => {
                      this.setState({lcdate: event.target.value});
                  }
       changeLcBankBranchHandler= (event) => {
                         this.setState({lcbankbranch: event.target.value});
                     }
   changeGoodsTypeHandler= (event) => {
                            this.setState({goodstype: event.target.value});
                        }
 changeUnitofMeasurementHandler= (event) => {
                            this.setState({unitofmeasurement: event.target.value});
                        }
  changeDescriptionofGoodHandler= (event) => {
                             this.setState({descriptionofgood: event.target.value});
                         }
 changeDeclaredWeightHandler= (event) => {
                              this.setState({declaredweight: event.target.value});
                          }
  changeImporterIdHandler= (event) => {
                               this.setState({importerid: event.target.value});
                           }
 changeNumberofPackageHandler= (event) => {
                               this.setState({numberofpackage: event.target.value});
                           }
 changeLoadWeightHandler= (event) => {
                                this.setState({loadweight: event.target.value});
                            }
 changeUnloadWeightHandler= (event) => {
                                 this.setState({unloadweight: event.target.value});
                             }
 changeNetWeightHandler= (event) => {
                                  this.setState({netweight: event.target.value});
                              }
    cancel(){
        this.props.history.push('/fastweights');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Weight</h3>
        }else{
            return <h3 className="text-center">Update Weight</h3>
        }
    }
    render() {
        return (

            <div>

                <br></br>
                <div className="container">
                    <div className="row">
                        <center>
                            <div className="spinner-border text-primary loadercolor" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </center>
                        <div className="card col-md-12 offset-md-12 offset-md-12">
                            <center><h3>Add Weight</h3></center>
                            <div className="card-body">
                                <MDBContainer>
                                    <MDBRow>
                                        <MDBCol size="6">
                                            <div className="form-group">


                                                <label> Import Id: </label>
                                                <input placeholder="Vehicle Reg No" name="importid" className="form-control"
                                                    value={this.state.importid} onChange={this.changeImportIdHandler} />
                                            </div>

                                            <div className="form-group">
                                                <label> Serial No: </label>
                                                <input placeholder="Serial No" name="serialno" className="form-control"
                                                    value={this.state.serialno} onChange={this.changeSerialNoHandler} />
                                            </div>




                                                                                        <div className="form-group">

                                                                                            <label> Importer Id: </label>
                                                                                            <input placeholder="Importer Id" name="importerid" className="form-control"
                                                                                                value={this.state.importerid} onChange={this.changeImporterIdHandler} />
                                                                                        </div>


                                        </MDBCol>
                                        <MDBCol size="6">



                                            <div className="form-group">
                                                <label> Load Weight: </label>
                                                <input placeholder="Load Weight" name="loadweight" className="form-control"
                                                    value={this.state.loadweight} onChange={this.changeLoadWeightHandler} />
                                            </div>
                                            <div className="form-group">
                                                <label> Unload Weight: </label>
                                                <input placeholder="Unload Weight" name="unloadweight" className="form-control"
                                                    value={this.state.unloadweight} onChange={this.changeUnloadWeightHandler} />
                                            </div>
                                            <div className="form-group">
                                                <label> Net weight: </label>
                                                <input placeholder="Net weight" name="netweight" className="form-control"
                                                    value={this.state.netweight} onChange={this.changeNetWeightHandler} />
                                            </div>
                                        </MDBCol>

                                    </MDBRow>
                                </MDBContainer>
                                <form>




                                    <button className="btn btn-success" onClick={this.saveOrUpdateWeight}>Save</button>
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

export default CreateFastWeightComponent
