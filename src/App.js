import React, { Component } from 'react';
import Map from './components/Map';
import SquareAPI from './utils/MapAPI'
import SideBar from './components/SideBar';

import './App.css';

class App extends Component {
    state = {
      venues: [],
      markers: [],
      center: [],
      zoom: 13,
      updateSuperState: obj => {
        this.setState(obj);
      }
    }

  //Default searching
  componentDidMount() {
      SquareAPI.search({
        near: "San Diego,CA",
        query: "food",
        limit: 10
      }).then((res) => {
        if (res.meta.code === 200) {
          const { venues } = res.response;
          const { center } = res.response.geocode.feature.geometry;
          const markers = venues.map(v => {
            return {
              lat: v.location.lat,
              lng: v.location.lng,
              isOpen: false,
              isVisible: true,
              id: v.id,
              icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'
            };
          });
          this.setState({venues, center, markers})
          // console.log(res);
        } else {
          window.alert("Foursquare error: " + res.meta.code)
        }
      })
  }

  //Close all markers
  closeAllMarkers = () => {
    const markers = this.state.markers.map(marker => {
      marker.isOpen = false;
      marker.icon = 'http://maps.google.com/mapfiles/ms/icons/red-dot.png';
      return marker;
    });
    this.setState({ markers: Object.assign(this.state.markers, markers) });
  };

  //List items on click, going to showing the corresponding marker
  handleListItemClick = (venue) => {
     const marker = this.state.markers.find(m => m.id === venue.id);
     this.handleMarkerClick(marker);
    // console.log(venue);
  }

  //Marker on click, going to close other markers and open the click one to show details information.
  handleMarkerClick = (marker) => {
    this.closeAllMarkers();
    marker.isOpen = true;
    marker.icon = 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
    this.setState({ markers: Object.assign(this.state.markers, marker) })
    const venue = this.state.venues.find(v => v.id === marker.id)

    //console.log(venue);
    SquareAPI.getDetail(marker.id)
    .then(res => {
      if (res.meta.code === 200) {
        const venueDetail  = Object.assign(venue, res.response.venue);
        this.setState({ venues: Object.assign(this.state.venues, venueDetail)})
        console.log(venueDetail);
      } else {
        window.alert("Foursquare Error: " + res.meta.code + " , " + res.meta.errorDetail)
      }
    })
  }

  render() {
    return (
      <div className="App">
        <SideBar {...this.state} handleListItemClick={this.handleListItemClick}/>
        <Map {...this.state} handleMarkerClick={this.handleMarkerClick}/>
      </div>
    );
  }
}

export default App;
