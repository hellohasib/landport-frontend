import React, { Component } from 'react'
import WeightService from '../services/WeightService';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { BrowserRouter, Switch, Router } from "react-router-dom";
import ReactDOM from 'react-dom';
const loadercolor = {
      marginLeft:"20%",
      display:"block"

    };

class CreateWeightComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            importid: '',
            datetime: '',
            serialno: '',
            lcno: '',
            lcdate: '',
            lcbankbranch: '',
            goodstype: '',
            unitofmeasurement: '',
            descriptionofgood: '',
            declaredweight: '',
            importerid: '',
            numberofpackage: '',
            loadweight: '',
            unloadweight: '',
            netweight: ''
        }
        this.changeImportIdHandler = this.changeImportIdHandler.bind(this);
        this.changedateTimeHandler = this.changedateTimeHandler.bind(this);
        this.changeSerialNoHandler = this.changeSerialNoHandler.bind(this);
        this.changeLcNoHandler = this.changeLcNoHandler.bind(this);
        this.changeLcDateHandler = this.changeLcDateHandler.bind(this);
        this.changeLcBankBranchHandler = this.changeLcBankBranchHandler.bind(this);
        this.changeGoodsTypeHandler = this.changeGoodsTypeHandler.bind(this);
        this.changeUnitofMeasurementHandler = this.changeUnitofMeasurementHandler.bind(this);
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
        let weight = {importid: this.state.importid, datetime: this.state.datetime, serialno: this.state.serialno,
        lcno: this.state.lcno, lcdate: this.state.lcdate, lcbankbranch: this.state.lcbankbranch,
        goodstype: this.state.goodstype, unitofmeasurement: this.state.unitofmeasurement, descriptionofgood: this.state.descriptionofgood,
        declaredweight: this.state.declaredweight, importerid: this.state.importerid, numberofpackage: this.state.numberofpackage, loadweight: this.state.loadweight,
        unloadweight: this.state.unloadweight, netweight: this.state.netweight};
        console.log('weight => ' + JSON.stringify(weight));

        // step 5

            WeightService.createWeight(weight).then(res =>{
                this.props.history.push('/weights');
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
        this.props.history.push('/weights');
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
                                        <MDBCol size="4">
                                            <div className="form-group">


                                                <label> Import Id: </label>
                                                <input placeholder="Vehicle Reg No" name="importid" className="form-control"
                                                    value={this.state.importid} onChange={this.changeImportIdHandler} />
                                            </div>
                                            <div className="form-group">
                                                <label> Date Time: </label>
                                                <input placeholder="Date Time" type="date" name="datetime" className="form-control"
                                                    value={this.state.datetime} onChange={this.changedateTimeHandler} />
                                            </div>
                                            <div className="form-group">
                                                <label> Serial No: </label>
                                                <input placeholder="Serial No" name="serialno" className="form-control"
                                                    value={this.state.serialno} onChange={this.changeSerialNoHandler} />
                                            </div>
                                            <div className="form-group">
                                                <label> Lc No: </label>
                                                <input placeholder="Lc No" name="lcno" className="form-control"
                                                    value={this.state.lcno} onChange={this.changeLcNoHandler} />
                                            </div>
                                            <div className="form-group">
                                                <label> Lc Date: </label>
                                                <input placeholder="Lc Date" type="date" name="lcdate" className="form-control"
                                                    value={this.state.lcdate} onChange={this.changeLcDateHandler} />
                                            </div>
                                            </MDBCol>
                                                                                    <MDBCol size="4">

                                            <div className="form-group">
                                                <label> Lc Bank/ Branch: </label>
                                                <input placeholder="Lc Bank/ Branch" name="lcbankbranch" className="form-control"
                                                    value={this.state.lcbankbranch} onChange={this.changeLcBankBranchHandler} />
                                            </div>

                                            <div className="form-group">
                                                <label> Goods Type: </label>
                                                <input placeholder="Goods Type" name="goodstype" className="form-control"
                                                    value={this.state.goodstype} onChange={this.changeGoodsTypeHandler} />
                                            </div>
                                            <div className="form-group">
                                                <label> Unit of Measurement: </label>
                                                <input placeholder="Unit of Measurement" name="unitofmeasurement" className="form-control"
                                                    value={this.state.unitofmeasurement} onChange={this.changeUnitofMeasurementHandler} />
                                            </div>



                                            <div className="form-group">
                                                <label> Description of Good: </label>
                                                <input placeholder="descriptionofgood" name="descriptionofgood" className="form-control"
                                                    value={this.state.descriptionofgood} onChange={this.changeDescriptionofGoodHandler} />
                                            </div>
                                            <div className="form-group">
                                                <label> Declared Weight: </label>
                                                <input placeholder="Declared Weight" name="declaredweight" className="form-control"
                                                    value={this.state.declaredweight} onChange={this.changeDeclaredWeightHandler} />
                                            </div>
</MDBCol>
                                        <MDBCol size="4">
                                            <div className="form-group">

                                                <label> Importer Id: </label>
                                                <input placeholder="Importer Id" name="importerid" className="form-control"
                                                    value={this.state.importerid} onChange={this.changeImporterIdHandler} />
                                            </div>
                                            <div className="form-group">
                                                <label> Number of Package: </label>
                                                <input placeholder="Number of Package" name="numberofpackage" className="form-control"
                                                    value={this.state.numberofpackage} onChange={this.changeNumberofPackageHandler} />
                                            </div>
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

export default CreateWeightComponent
