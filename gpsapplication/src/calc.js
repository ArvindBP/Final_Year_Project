import React from "react";
import { render } from "react-dom";
import matchSorter from 'match-sorter'

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

export default class Calc extends React.Component {
  constructor() {
    super();
    this.state = {
      op: null
    };
  }
  componentWillMount(){
    let op = [];
      for(let j=1;j<11;j++){
        let obj = {};
        obj.number = j;
        obj.array = [];
        op.name  = '';
        op.servicable = '';
        op.push(obj);
      }

     
        for(let j=0;j<this.props.gpscoord.length;j++){
          for(let k=0;k<op.length;k++){
            if(this.props.gpscoord[j].number === op[k].number){
              op[k].name = this.props.gpscoord[j].name;
              op[k].servicable = this.props.gpscoord[j].servicable;
              op[k].array.push(this.props.gpscoord[j]);
            }
          }
        }
        for(let k=0;k<op.length;k++){
          op[k].latitude = op[k].array[op[k].array.length-1].latitude
          op[k].longitude = op[k].array[op[k].array.length-1].longitude
        }

        this.setState({
          op:op
        })
  }
  render() {
    

    console.log(this.state);

    return (
      <div>
        <ReactTable
          data={this.state.op}
          filterable
          defaultFilterMethod={(filter, row) =>
            String(row[filter.id]) === filter.value}
          columns={[
            {
              Header: "Name",
              columns: [
                {
                  Header: "Component Name",
                  id: "name",
                  accessor: d => d.name,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["name"] }),
                  filterAll: true
                },
              ]
            },
            {
              Header: "Position",
              columns: [
                {
                  Header: "Latitude",
                  id:"latitude",
                  accessor: d => d.latitude,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["latitude"] }),
                  filterAll: true
                },
                {
                  Header: "Longitude",
                  id: "longitude",
                  accessor: d => d.longitude,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["longitude"] }),
                  filterAll: true
                }
              ]
            },
            {
              Header: "Info",
              columns: [
                {
                  Header: "Servicable",
                  accessor: "servicable",
                  id: "over",
                  filterMethod: (filter, row) => {
                    if (filter.value === "all") {
                      return true;
                    }
                    if (filter.value === "true") {
                      return row[filter.id] == "Yes";
                    }
                    return row[filter.id] == "No";
                  },
                  Filter: ({ filter, onChange }) =>
                    <select
                      onChange={event => onChange(event.target.value)}
                      style={{ width: "100%" }}
                      value={filter ? filter.value : "all"}
                    >
                      <option value="all">Show All</option>
                      <option value="true">Yes</option>
                      <option value="false">No</option>
                    </select>
                }
              ]
            }
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
        />
        <br />
      </div>
    );
  }
}

