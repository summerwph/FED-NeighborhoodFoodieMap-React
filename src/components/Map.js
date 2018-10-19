/* global google */
import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps"

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={0} zoom={props.zoom}
    defaultCenter={{ lat: 32.715736, lng: -117.161087 }} center={{lat:props.center.lat, lng:props.center.lng}}
  >
    {props.markers && props.markers.filter(marker => marker.isVisible).map((marker, id, arr, icon) => {
      const venueInfo = props.venues.find(v => v.id === marker.id);
      return(
        <Marker
         key={id}
         position={{ lat: marker.lat, lng: marker.lng }}
         onClick={() => props.handleMarkerClick(marker)}
         animation={arr.length === 1 ? google.maps.Animation.BOUNCE : google.maps.Animation.DROP}
         icon={{url:marker.icon}}
         >

          {marker.isOpen &&
            venueInfo.bestPhoto && (
            <InfoWindow>
              <React.Fragment>
                <h3>{venueInfo.name}</h3>
                <p>{venueInfo.location.formattedAddress}</p>
                <p>{venueInfo.contact.formattedPhone}</p>
                <img src={`${venueInfo.bestPhoto.prefix}180x180${venueInfo.bestPhoto.suffix}`} alt="Best Food"/>
              </React.Fragment>
            </InfoWindow>
          )}

        </Marker>
      )
    })}
  </GoogleMap>
))

class Map extends Component {
  render() {
    return (
        <MyMapComponent
          {...this.props}
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyAGPbTnNsp1tcR2u-Fp_pzYLrYxcaysANY"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100%`, width: `75%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
    );
  }
}

export default Map;
