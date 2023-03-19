import React, { useEffect, useState } from 'react'
import Newsitems from './Newsitems'
import InfiniteScroll from "react-infinite-scroll-component";



export default function News(props) {

    // constructor() {
    //     super();
    //     this.state = {
    //         article: [],
    //         loading: false,
    //         page: 1,
    //         totalresults: 0
    //     }

    // }
    const [article, setArticle] = useState([])
    // const [loading,setLoading] = useState(false)
    const [page, setPage] = useState(1)
    const [totalresults, setTotalresults] = useState(0)


    const update = async () => {
        props.setProgress(20)
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.catagori}&apiKey=d83cd49d6e5149bdad52e4be8345e494&page=${page}&pageSize=30 `

        let response = await fetch(url)
        props.setProgress(30)
        let data = await response.json()
        props.setProgress(30)
        console.log(data)
        setArticle(data.articles)
        setTotalresults(data.totalResults)
        props.setProgress(100)
    }
    useEffect(() => {

        update();
    }, []);
    // const componentDidMount = async() => {
    //     update()
    // }
    const previous = async () => {
        console.log('privious');

        //     let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=d83cd49d6e5149bdad52e4be8345e494&page=${this.state.page-1}&pageSize=30`    

        //     let response = await fetch(url)
        // let data = await response.json()
        // console.log(data)
        // this.setState({article : data.articles,
        // page : this.state.page-1})

        setPage(page - 1)
        update()
    }

    const next = async () => {
        //     console.log('next')
        //     if(this.state.page+1 > Math.ceil(this.state.totalresults/30)){
        // console.log('if runs')
        //     }
        //     else{
        //         let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.catagori}&apiKey=d83cd49d6e5149bdad52e4be8345e494&page=${this.state.page+1}&pageSize=30`    

        //     let response = await fetch(url)
        // let data = await response.json()
        // console.log(data)
        // this.setState({article : data.articles,
        // page : this.state.page+1})
        // console.log(this.state.page+1+'hi')

        //     }
        this.setState({ page: this.state.page + 1 })
        this.update()
    }
    const fetchMoreData = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.catagori}&apiKey=d83cd49d6e5149bdad52e4be8345e494&page=${page + 1}&pageSize=30 `
        setPage(page + 1)
        let response = await fetch(url)
        let data = await response.json()
        console.log(data)
        setArticle(article.concat(data.articles))
        setTotalresults(data.totalResults)
    }



    return (
        <div>

            <InfiniteScroll
                dataLength={article.length}
                next={fetchMoreData}
                hasMore={article.length !== totalresults}
                loader={<h4>Loading...</h4>}
            >

                <div className="container">


                    <div className="row">
                        {article.map((element) => {
                            return <div className="col-md-4 my-3" key={element.url}>
                                <Newsitems title={element.title} description={element.description} imgurl={element.urlToImage} url={element.url} />
                            </div>
                        })}


                    </div>
                </div>
            </InfiniteScroll>
            <div className="container d-flex justify-content-between my-3">
                <button type="button" disabled={page <= 1} className="btn btn-dark" onClick={previous}> &larr; Previous</button>
                <button disabled={page + 1 > Math.ceil(totalresults / 30)} type="button" className="btn btn-dark " onClick={next}>Next &rarr;</button>

            </div>


        </div>
    )
}

