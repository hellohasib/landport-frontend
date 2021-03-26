import React, { Component } from 'react'
import CargoService from '../services/CargoService';
import { BrowserRouter, Switch, Router } from "react-router-dom";
import ReactDOM from 'react-dom';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

class CreateCargoComponent extends Component {
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
            vehicleid: '',
            pilotid: '',
            checkoutvalidity: '',
            goodstype: '',
            unitofmeasurement: '',
            descriptionofgood: '',
            declaredweight: '',
            numberofpackage: '',
            importerid: '',
            cnfid: '',

        }
        this.changeImportIdHandler = this.changeImportIdHandler.bind(this);
        this.changedateTimeHandler = this.changedateTimeHandler.bind(this);
        this.changeSerialNoHandler = this.changeSerialNoHandler.bind(this);
        this.changeLcNoHandler = this.changeLcNoHandler.bind(this);
        this.changeLcDateHandler = this.changeLcDateHandler.bind(this);
        this.changeLcBankBranchHandler = this.changeLcBankBranchHandler.bind(this);
        this.changeVehicleIdHandler = this.changeVehicleIdHandler.bind(this);
        this.changePilotIdHandler = this.changePilotIdHandler.bind(this);
        this.changeCheckoutValidityHandler = this.changeCheckoutValidityHandler.bind(this);
        this.changeGoodsTypeHandler = this.changeGoodsTypeHandler.bind(this);
        this.changeUnitofMeasurementHandler = this.changeUnitofMeasurementHandler.bind(this);
        this.changeDescriptionofGoodHandler = this.changeDescriptionofGoodHandler.bind(this);
        this.changeDeclaredWeightHandler = this.changeDeclaredWeightHandler.bind(this);
        this.changeNumberofPackageHandler = this.changeNumberofPackageHandler.bind(this);
        this.changeImporterIdHandler = this.changeImporterIdHandler.bind(this);
        this.changeCnfIdHandler = this.changeCnfIdHandler.bind(this);
        this.saveOrUpdateCargo = this.saveOrUpdateCargo.bind(this);
    }

    // step 3
    componentDidMount(){
document.title = "Bangladesh Landport Authority"
        // step 4
        if(this.state.id === '_add'){
            return
        }
    }
    saveOrUpdateCargo = (e) => {
        e.preventDefault();
        let cargo = {importid: this.state.importid, datetime: this.state.datetime, serialno: this.state.serialno,lcno: this.state.lcno, lcdate: this.state.lcdate, lcbankbranch: this.state.lcbankbranch,
        vehicleid: this.state.vehicleid, pilotid: this.state.pilotid, checkoutvalidity: this.state.checkoutvalidity,goodstype: this.state.goodstype, unitofmeasurement: this.state.unitofmeasurement, descriptionofgood: this.state.descriptionofgood,
        declaredweight: this.state.declaredweight, numberofpackage: this.state.numberofpackage, importerid: this.state.importerid,cnfid: this.state.cnfid};
        console.log('cargo => ' + JSON.stringify(cargo));

        // step 5

            CargoService.createCargo(cargo).then(res =>{
                this.props.history.push('/cargos');
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
  changeVehicleIdHandler= (event) => {
          this.setState({vehicleid: event.target.value});
      }
    changePilotIdHandler= (event) => {
        this.setState({pilotid: event.target.value});
    }

    changeCheckoutValidityHandler= (event) => {
        this.setState({checkoutvalidity: event.target.value});
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

         changeNumberofPackageHandler= (event) => {
             this.setState({numberofpackage: event.target.value});
         }

         changeImporterIdHandler= (event) => {
             this.setState({importerid: event.target.value});
         }

          changeCnfIdHandler= (event) => {
              this.setState({cnfid: event.target.value});
          }

    cancel(){
        this.props.history.push('/cargos');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Cargo</h3>
        }else{
            return <h3 className="text-center">Update Cargo</h3>
        }
    }
    render() {
        return (
            <div>

                <br></br>
                   <div className = "container">

                        <div className = "row">

                             <div className="card col-md-12 offset-md-12 offset-md-12">
                                <center><h3>Add Cargo</h3></center>
                                <div className = "card-body">
                                    <form>
                                    <MDBContainer>
                                     <MDBRow>
                                      <MDBCol size="4">
                                        <div className = "form-group">
                                        
                                        
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

                                    <div className="form-group">
                                        <label> Lc Bank/ Branch: </label>
                                        <input placeholder="Owner Address" name="lcbankbranch" className="form-control"
                                            value={this.state.lcbankbranch} onChange={this.changeLcBankBranchHandler} />
                                    </div>
                                    </MDBCol>
                                                                                                            <MDBCol size="4">
                                    <div className="form-group">
                                        <label> Vehicle Id: </label>
                                        <input placeholder="Vehicle Id" name="vehicleid" className="form-control"
                                            value={this.state.vehicleid} onChange={this.changeVehicleIdHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Pilot Id: </label>
                                        <input placeholder="Pilot Id" name="pilotid" className="form-control"
                                            value={this.state.pilotid} onChange={this.changePilotIdHandler} />
                                    </div>

                                    <div className="form-group">

                                        <label> Checkout Validity: </label>
                                        <input placeholder="Checkout Validity" name="checkoutvalidity" className="form-control"
                                            value={this.state.checkoutvalidity} onChange={this.changeCheckoutValidityHandler} />
                                    </div>

                                    <div className="form-group">
                                        <label> Goods Type: </label>
                                        <input placeholder="Engine No" name="goodstype" className="form-control"
                                            value={this.state.goodstype} onChange={this.changeGoodsTypeHandler} />
                                    </div>

                                    <div className="form-group">
                                        <label> Unit of Measurement: </label>
                                        <input placeholder="Unit of Measurement" name="unitofmeasurement" className="form-control"
                                            value={this.state.unitofmeasurement} onChange={this.changeUnitofMeasurementHandler} />
                                    </div>
                                    </MDBCol>
                                                                                                                                                                                <MDBCol size="4">
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
                                    <div className="form-group">
                                        <label> C&F Id: </label>
                                        <input placeholder="C&F Id" name="cnfid" className="form-control"
                                            value={this.state.cnfid} onChange={this.changeCnfIdHandler} />
                                    </div>
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
                                     </MDBCol>

                                                                         </MDBRow>
                                                                         </MDBContainer>
                                        <button className="btn btn-success" onClick={this.saveOrUpdateCargo}>Save</button>
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

export default CreateCargoComponent