import {React,useState,useEffect}from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import InfiniteScroll from 'react-infinite-scroll-component'
const News =(props)=>{

  const[articles,setArticles]=useState([]);
  const[page,setPage]=useState(1);
  const[loading,setLoading]=useState(true);
  const[totalResults,setTotalResults]=useState(0);
 
  const updateNews =async ()=>{
    let data= await fetch(`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`)
    let parseData= await data.json();
    setArticles(parseData.articles);
    setTotalResults(parseData.totalResults);
    setLoading(false);
  }
  useEffect(()=>{
    document.title=`${props.category.charAt(0).toUpperCase()+props.category.slice(1)} - News`;
    updateNews();
    //eslint-disable-next-line
  },[])
  
  const fetchMoreData = async() => {
    let data= await fetch(`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`)
    setPage(page+1);
    let parseData= await data.json();
    setArticles(articles.concat(parseData.articles))
    setTotalResults(parseData.totalResults)
  };

  
                
    return (
      <div className="container my-3">
        <h1 className="text-center" style={{margin: "75px 0px"}}> Top {props.category.charAt(0).toUpperCase()+props.category.slice(1)} Headings</h1>
       {loading &&<Spinner/>}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!==totalResults}
          loader={<Spinner/>}>
            <div className='container'>
              <div className='row'>
                {articles.map((element)=>{
                    return <div className='col md-4' key={element.url}>
                              <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage?element.urlToImage:"https://images.hindustantimes.com/img/2022/02/09/1600x900/gavaskar-rohit-india_1644421814546_1644421819878.jpg"} url={element.url?element.url:""}/>
                            </div>
                })}
              </div>
           </div>
          </InfiniteScroll>
                
     </div>

    
    )
  
}
export default News;