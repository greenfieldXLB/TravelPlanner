import React from 'react';

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newIcon: ''
    }
  }



  render() {
    var data = this.props.information;
    // console.log('the weather component information is ', data);
    // console.log('the weather icon in the weather component is ', this.props.icon);
    var icons = new Skycons({"color": "blue"});
    icons.play();
      if(this.props.icon != this.state.newIcon) {
        this.setState({
          newIcon: this.props.icon
        })
      }

      if (this.props.icon === "clear-day") {
        icons.set("clear-day", Skycons.CLEAR_DAY);
      } else if (this.props.icon === "clear-night") {
        icons.set("clear-night", Skycons.CLEAR_NIGHT);
      } else if (this.props.icon === "partly-cloudy-day") {
        icons.set("partly-cloudy-day", Skycons.PARTLY_CLOUDY_DAY);
      } else if (this.props.icon === "partly-cloudy-night") {
        icons.set("partly-cloudy-night", Skycons.PARTLY_CLOUDY_NIGHT);
      } else if (this.props.icon === "cloudy") {
        icons.set("cloudy", Skycons.CLOUDY);
      } else if (this.props.icon === "rain") {
        icons.set("rain", Skycons.RAIN);
      } else if (this.props.icon === "sleet") {
        icons.set("sleet", Skycons.SLEET);
      } else if (this.props.icon === "snow") {
        icons.set("snow", Skycons.SNOW);
      } else if (this.props.icon === "wind") {
        icons.set("wind", Skycons.WIND);
      } else if (this.props.icon === "fog") {
        icons.set("fog", Skycons.FOG);
      }


      return(
        <div className = 'weather' >
          {data.map((item, index) =>
            <div key = {index}>
              <h3 >{item.averageTemp} °F</h3>
              <h5 ><i>{item.description}</i></h5>
            </div>
          )}
          <div>
            <figure className="icons">
              <canvas id={this.props.icon} width="64" height="64"></canvas>
            </figure>
          </div>
        </div>
      )
  }
}

export default Weather;
