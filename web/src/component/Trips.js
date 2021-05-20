import React from 'react';
import './Trips.scss';



class Trips extends React.Component {
  trip = this.props.name;
  constructor(props) {
    super(props);
    this.state = {
      check: false,
    };
    this.textChange = this.textChange.bind(this);
  }
  componentDidMount() {
    this.descript()
  }
  
  searchTag(value){
    this.props.tagSearchCallback(value);
  }

  textChange = () => {
    this.setState({
      check : true
    })
  }

  descript(){
    if(!this.state.check && this.trip.description.length >= 350){

      let text = `${this.trip.description.slice(0, 350)}...`
      return <p className="t-grey">{text} <span className="click-description" onClick={this.textChange} >อ่านต่อ</span> </p>
      
    }else{
      return <p className="t-grey">{this.trip.description}...<span className="t-span">สนใจข้อมูลเพิ่มเติม</span> <a className="click-description" href={this.trip.url} >คลิก!!</a></p>
    }
  }

  render() {

    const tag = []
    const photo = []

  for (const [index, value] of this.trip.tags.entries()) {
    if(index === this.trip.tags.length-1){
      tag.push(
        <span key={index}>และ <span className="t-tag t-grey" onClick={this.searchTag.bind(this, value)}>{value}</span> </span>
      )
    }else if(index === this.trip.tags.length-2){
      tag.push(
        <span key={index}><span className="t-tag t-grey" onClick={this.searchTag.bind(this, value)}>{value}</span> </span>
      )
    }
    else{
      tag.push(
        <span key={index}><span className="t-tag t-grey" onClick={this.searchTag.bind(this, value)}>{value}</span>, </span>
      )
    }
  }

  for (const [index, value] of this.trip.photos.entries()) {
    if(index !== 0){
      photo.push(
        <div key={index} className="img_content">
          <img src={value} alt="..." />
        </div>
      )
    }

  }
    return (
      <div className="row g-2">
        <div className="col-3 d-flex justify-content-center img_head">
          <img src={this.trip.photos[0]} alt="..." />
        </div>
        <div className="col-9">
            <a className="t-title" href={this.trip.url}>{this.trip.title}</a>
          
          {this.descript()}
          <p className="t-grey">หมวด - {tag}</p>
          <div className="d-flex">
            {photo}
          </div>
        </div>
      </div>
    );
  }
}

export default Trips