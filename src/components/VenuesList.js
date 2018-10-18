import React, { Component } from 'react';
import ListItem from './ListItem';

//Wrapping the ListItems to VenuesList
class VenuesList extends Component {
  render() {
    return (
      <ul className="venueList" >
        {
          this.props.venues &&
          this.props.venues.map((venue, id) => <ListItem  key={id} {...venue} handleListItemClick={this.props.handleListItemClick}/>)}
      </ul>
    );
  }
}

export default VenuesList;
