import React from 'react';
import  _ from "lodash";
import {Table, Column, Cell} from 'fixed-data-table';
import "fixed-data-table/dist/fixed-data-table.min.css";

import 'react-table/react-table.css';
import ReactTable from "react-table";

export default class Indi extends React.Component{
	constructor(props){
    	super(props);
    	this.state = {
      		op : null 
    	}
  	}


	render(){

		console.log(this.props.gpscoord)
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

      	this.state.op = op;
      	var rows = this.state.op;
		//console.log(this.state.op);

		return(
			<div className="main-container">
				

                     <Table
                    rowHeight={50}
                    rowsCount={rows.length}
                    width={800}
                    maxHeight={1000}
                    headerHeight={50}>
      
                    <Column
                        header={<Cell>Name</Cell>}

                        cell={({ rowIndex}) => (
                            <Cell>
                                {rows[rowIndex].name}
                            </Cell>
                            ) }
                        width={200}
                    />

                    <Column
                        header={<Cell>Latitude</Cell>}
                        cell={({ rowIndex }) => (
                            <Cell >
                                {rows[rowIndex].latitude}
                            </Cell>
                            ) }
                        width={200}
                    />
                    <Column
                        header={<Cell>Longitude</Cell>}
                        cell={({ rowIndex }) => (
                            <Cell >
                                {rows[rowIndex].longitude}
                            </Cell>
                            ) }
                        width={200}
                    />
                    <Column
                        header={<Cell>Servicable</Cell>}
                        cell={({ rowIndex }) => (
                            <Cell >
                                {rows[rowIndex].servicable}
                            </Cell>
                            ) }
                        width={200}
                    />

                </Table>        
			</div>
		);
	}
}