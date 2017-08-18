import React from 'react';


class SavedFoodPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }



  render() {
    if (this.props.trip.food.length === 0) {
      return (
        <div></div>
      )
    } else {
      return (
        <div>
          <h4><div className = "glyphicon glyphicon-cutlery"></div> Restaurants</h4>
            {this.props.trip.food.map((restaurant, index) =>
              <div>
                <div><h5><span className = "glyphicon glyphicon-heart"></span> {restaurant.name} ({restaurant.categories[0]['title']})</h5></div>
                <div><h6>{restaurant.location.display_address[0]}</h6></div>
                <div><h6>{restaurant.location.display_address[1]}</h6></div>
              </div>
            )}
            <br></br>
        </div>
      )
    }
  }
}

export default SavedFoodPanel;
