import React from 'react';
import axios from 'axios';
import './App.css';
import Trips from './component/Trips';


class App extends React.Component {
  
  state = {
    dataTrips: [],
    value: ''
  }

  countDown = NaN
  text=""

  async componentDidMount() {
    try {
      if(this.props.location.search){
        var params = this.props.location.search.split("=")[1];   
        this.setState({
          value : decodeURI(params)
        })
        this.searchTrip(decodeURI(params))
      }else{
      const {data} = await axios.get(`http://localhost:3333/trips`)
      this.setState({
        dataTrips : data
      })
    }
    } catch (error) {
      console.log(error)
    }
  }

  handleChange = event => {
    this.setState({value: event?.target?.value?? event});
    if(!isNaN(this.countDown)) {
      clearTimeout(this.countDown)
    }
    let keyword = event?.target?.value?? event
    this.countDown = setTimeout(() => this.searchTrip(keyword), 1000);
  }
  async searchTrip(keyword){
    try {
      const {data} = await axios.get(
        `http://localhost:3333/api/trips`,
        {
          params: {
            keyword
          }
        }
      );
      this.setState({
        dataTrips : data.trips
      })
      if(keyword){
      this.props.history.push({
        pathname: '/',
        search: "?" + new URLSearchParams({keys: keyword})
      })
    }else{
      this.props.history.push({})
    }

    } catch (error) {
      console.log(error)
    }
  }

  render() {
    const trips = []
    for (const [index, value] of this.state.dataTrips.entries()) {
      trips.push(
        <div key={index} className="p-trips">
          <Trips tagSearchCallback= {this.handleChange.bind(this)} name={value}/>
        </div>
      )
    }

    return (
      <div className="App container">
        <div className="header text-center">เที่ยวไหนดี</div>
        <div className="mb-3 container d-flex justify-content-center">
          <input type="text" className="form-search" value={this.state.value} onChange={this.handleChange} placeholder="หาที่เที่ยวแล้วไปกัน..."/>
        </div>
          {trips}
      </div>
    );
  }
}

export default App;