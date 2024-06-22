import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let{title,description,imageUrl,newsUrl}=this.props;
    return (
  <div className="my-3">
       <div className="card" style={{width: "18rem"}}>
        <div className ="card-body">
        <img src={!imageUrl?"https://www.reuters.com/resizer/TKr6iiTWx-IPLFuZj0WRSCPMVc0=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/4SWEIKP22BP6LNOIOCJHADTOXE.jpg":imageUrl} className="card-img-top" alt="..."/>
        <h5 className="card-title">{title}... </h5>
        <p className="card-text">{description}</p>
        <a href={newsUrl} target="blank" className="btn btn-sm btn-dark">Read More</a>
     </div>
    </div>

  </div>
    )
  }
}

export default NewsItem
