import React, { Component } from 'react'
import NewsItem from './NewsItem'
export class News extends Component {

  constructor(){
    super();
    this.state={
      articles:[],
      loading:false
      
    }

  }
  async componentDidMount()
  { 
  let url=`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=eba451539ace45d79fa07bf78d436cfe&page=1&pageSize=${this.props.pageSize}`;
   let data = await fetch(url); 
   let parsedData=await data.json()
    console.log(parsedData);
     this.setState({articles: parsedData.articles,totalresults:parsedData.totalResults})
}
handlePrevClick=async()=>{
 console.log("previous");
 let url=`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=eba451539ace45d79fa07bf78d436cfe&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
   let data = await fetch(url); 
   let parsedData=await data.json()
    console.log(parsedData);
    
  this.setState({ articles: parsedData.articles ,
    page:this.state.page-1,
  })


}
 handleNextClick=async()=>{
  console.log("next");
  if(this.state.page+1 > Math.ceil(this.state.totalResults/20)){
  }
  else{
  let url=`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=eba451539ace45d79fa07bf78d436cfe&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
   let data = await fetch(url); 
   let parsedData=await data.json()
    console.log(parsedData);
    
  this.setState({ articles: parsedData.articles,
    page:this.state.page+1, })
  
  }
}


  render() {
    console.log("render")
    return (
      <div className="container my-3">
        <h1 className="text-center">News App-top headlines</h1>
      
        <div className="row">
        {this.state.articles.map((element)=>{
        return <div className="col md-4" key={element.url}>
        <NewsItem  title={element.title?element.title:""}  description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url}/>
        </div>

       
    })}
        
        </div>
        <div className="container d-flex justify-content-between" >
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr;Previous</button>
        <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/20) }type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
    
      </div>
    )
  }
}

export default News

