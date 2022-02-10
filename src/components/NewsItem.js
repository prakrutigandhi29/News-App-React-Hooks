import React from 'react'

const NewsItem =(props)=> {
  
    let {title,description,imageUrl,url}=props
    return (
     
      <div className="container mx-1 my-1">
            <div className="card" style={{width: "18rem"}}>
            <img className="card-img-top" src={imageUrl} alt="hello"/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href={url} className="btn btn-primary">Read More</a>
                </div>
            </div>
      </div>
    )
  
}
export default NewsItem