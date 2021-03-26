import React, { Component } from 'react'
import CargoService from '../services/CargoService'
import MUIDataTable from 'mui-datatables';
import fetch from 'isomorphic-fetch';


class ListCargoComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                cargos: []
        }
        this.addCargo = this.addCargo.bind(this);
        this.editCargo = this.editCargo.bind(this);
        this.deleteCargo = this.deleteCargo.bind(this);


    }

    state = {
        page: 0,
        count: 10,
        data: [],
      };



    deleteCargo(id){
        CargoService.deleteCargo(id).then( res => {
            this.setState({cargos: this.state.cargos.filter(cargo => cargo.id !== id)});
        });
    }
    viewCargo(id){
        this.props.history.push(`/view-cargo/${id}`);
    }
    editCargo(id){
        this.props.history.push(`/add-cargo/${id}`);
    }

    componentDidMount(){
        CargoService.getCargos().then((res) => {
            this.setState({ cargos: res.data});
        });
        this.getData(this.state.page, this.state.count);
    }

    addCargo(){
        this.props.history.push('/add-cargo/_add');
    }
     // get data
      getData = (page, rowsPerPage) => {
        fetch(`http://localhost:8080/api/v1/cargos`)
          .then(response => {
            if (response.status >= 400) {
              throw new Error('Bad response from server');
            }
            return response.json();
          })
          .then(data => {
            console.log('data: ', data);
            data = data.map(el => Object.values(el));
            console.log('data: ', data);
            this.setState({
              page,
              data,
            });
          });
      };

    render() {
    const columns = [
          'id',
          'Import Id',
          'Datetime',
          'Serial no',
          'Lc No',
          'Lc Date',
          'Lc Bank/Branch',
          'Vehicle Id',
          'Pilot Id',
          'Checkout Validity',
          'Goods Type',
          'Unit of Measurement',
          'Description of Good',
          'Declared Weight',
          'Number of Package',
          'Importer Id',
          'Cnf Id',
        ];
        const { data, page, count } = this.state;

        const options = {
          filter: true,
          filterType: 'dropdown',
          responsive: 'scroll',
          serverSide: true,
          rowsPerPage: 10,
          count: 100,
          selectableRows: false,
          page: page,
          onTableChange: (action, tableState) => {
            console.log(action, tableState);
            // a developer could react to change on an action basis or
            // examine the state as a whole and do whatever they want

            switch (action) {
              case 'changePage':
                this.changePage(tableState.page, tableState.rowsPerPage);
                break;
            }
          },
        };
        return (
            <div>
                 <h2 className="text-center">Cargos List</h2>

                 <br></br>

                       <MUIDataTable
                               title={'Cargo list'}
                               data={data}
                               columns={columns}
                               options={options}
                             />
            </div>
        )
    }
}

export default ListCargoComponent
