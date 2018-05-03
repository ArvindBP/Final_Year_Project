import React, { Component } from 'react';
import './App.css';
import { withScriptjs, withGoogleMap, GoogleMap, Marker,Polyline } from "react-google-maps"

import _ from 'lodash';


export default class App1 extends Component {
  constructor(props){
    super(props);
    this.state = {
      op : null 
    }
  }

 

  Component


  render() {
   let op = [];
    for(let j=1;j<7;j++){
      let obj = {};
      obj.number = j;
      obj.array = [];
      op.push(obj);
    }

     
      for(let j=0;j<this.props.gpscoord.length;j++){
        for(let k=0;k<op.length;k++){
          if(this.props.gpscoord[j].number === op[k].number){
            op[k].array.push(this.props.gpscoord[j]);
          }
        }
      }
    

   this.state.op = op;
   

    

    let hello = [];
    let hello1 =[];


    
      hello = _.map(this.state.op, (number) => {
        let lat = Number(number.array[number.array.length-1].latitude);
        let lon = Number(number.array[number.array.length-1].longitude);
        

        return (  
          <Marker
            position={{lat: lat, lng: lon}}
            icon = 'https://maps.google.com/mapfiles/kml/shapes/parking_lot_maps.png'
            />
        )
      })

      hello1 = _.map(this.state.op,(number)=>{
         let poly = []
        for(let j=0;j<number.array.length;j++){
          let obj = {};
          obj.lat = Number(number.array[j].latitude);
          obj.lng = Number(number.array[j].longitude);
          poly.push(obj)

        }
          let color;
          if(number.number == 1)
            color = 'blue';
          else if(number.number==2)
            color = 'green';
          else
            color = 'red';
          
        
        return(

      <Polyline
        path={poly}
        geodesic={true}  
        options ={{
                    strokeColor:color
                  }}/>)
      })
      let MyMapComponent = withScriptjs(withGoogleMap((props) =>
        <GoogleMap
          defaultZoom={17}
          defaultCenter={{lat: 12.24839, lng: 77.10394}}>
          {hello}
        </GoogleMap>
      ))

    return (
      <div>
        <MyMapComponent 
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyB3v-9RtP_VlzRdyNIei06VhClmwpP0H_k&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `80vh` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
            
      </div>
    );
  }
}
