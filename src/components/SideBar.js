import React, { Component } from 'react';
import VenuesList from './VenuesList';

class SideBar extends Component {
  state = {
    query: "",
    venues: []
  }

  handleFilterVenues = () => {
    if (this.state.query.trim() !== "") {
      const venues = this.props.venues.filter(v => v.name.toLowerCase().includes(this.state.query.toLowerCase()))
      console.log(venues);
      return venues;
    }
    return this.props.venues
  }

  handleChange = e => {
    this.setState({ query: e.target.value });

    // if (this.state.query.trim() !== "") {
    const markers = this.props.venues.map( v => {
      const isWatched = v.name.toLowerCase().includes(e.target.value.toLowerCase());
      const marker = this.props.markers.find(m => m.id === v.id);
      if (isWatched) {
        marker.isVisible = true;
      } else {
        marker.isVisible = false;
      }
      return marker;
    });
    this.props.updateSuperState({ markers })
}

  render() {

    return (
      <div className="sideBar">
        <h1><a aria-label="Neighborhood Foodie Map" tabIndex="1" href="/">Neighborhood Foodie Map</a></h1>
        <input role="textbox" aria-describedby="keywords-help" tabIndex="2" type={"search"} id={"search"} placeholder={"Filter venues"} onChange={this.handleChange} />
        <div id="keywords-help">Type a keyword to filter search result such as Mexician</div>
        <VenuesList {...this.props} venues={this.handleFilterVenues()} />
      </div>
    );
  }
}

export default SideBar;