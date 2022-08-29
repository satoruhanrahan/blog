import React from 'react'
import { Link } from "react-router-dom";
import Loader from '../Components/Loader'
// import ProductCard from '../Components/ProductCard'
import { useAxiosGet } from '../Hooks/HttpRequests'
// import axios from 'axios'

function Home(){

  // const url = `https://5feff5539515c400179744b0.mockapi.io/api/v1/products?page=1&limit=10`
  const url = `/api/posts`
  
  let posts = useAxiosGet(url)
  // console.log(posts)
  // componentDidMount() {
    // axios.get('/api/posts').then((res) => {
      // console.log(res.data)
      // const response = res.data;
      // this.setState({response});
    // });
  // }
  
  let content = null

  if(posts.error) {
    content = <p>There was an error, please try again later.</p>
  }

  if(posts.loading) {
    content = <Loader></Loader>
  }

  if(posts.data) {
    content = posts.data
    console.log(content)
    // posts.data.map((post) => 
    //     <ProductCard key={post.id} post={post}></ProductCard>
    //   )
  }

  return(
    <div>
      <div id="wallpaper-div" style={{ backgroundImage: "url('/img/mountains.png')"}}>
        <div id="wallpaper-text-large">Digital Enlightenment</div>
        <div id="wallpaper-text-small">Articles about web dev, Japan, philosophy, and more...</div>
      </div>
      <div id="content">
        <h1></h1>
        <div id="nav-bar">
          <Link to="/" className="nav-link -active">WEB DEV</Link>
          <Link to="/" className="nav-link">JAPAN</Link>
          <Link to="/" className="nav-link">INVESTING</Link>
          <Link to="/" className="nav-link">OTHER</Link>
        </div>
        <div className="post-lrg">
          <Link to="/"><img className="post-img" src="img/react-logo.png" alt="ReactJS-logo"></img></Link>
          <Link to="/"><h2 className="post-title">How to start a React JS project</h2></Link>
          <Link to="/"><p className="post-text">The first steps in making a project with React JS.</p></Link>
          <Link to="/"><p className="post-date">16th May 2021</p></Link>
        </div>
        <div className="section-header">POPULAR POSTS</div>
        <div className='post-sml'>
          <Link to="/"><img className="post-img" src="img/react-logo.png" alt="ReactJS-logo"></img></Link>
          <Link to="/"><h3 className="post-title">How to start a React JS project</h3></Link>
          <Link to="/"><p className="post-text">The first steps in making a project with React JS.</p></Link>
          <Link to="/"><p className="post-date">16th May 2021</p></Link>
        </div>
        <div className='post-sml'>
          <Link to="/"><img className="post-img" src="img/react-logo.png" alt="ReactJS-logo"></img></Link>
          <Link to="/"><h3 className="post-title">How to start a React JS project</h3></Link>
          <Link to="/"><p className="post-text">The first steps in making a project with React JS.</p></Link>
          <Link to="/"><p className="post-date">16th May 2021</p></Link>
        </div>
        <div className='post-sml'>
          <Link to="/"><img className="post-img" src="img/react-logo.png" alt="ReactJS-logo"></img></Link>
          <Link to="/"><h3 className="post-title">How to start a React JS project</h3></Link>
          <Link to="/"><p className="post-text">The first steps in making a project with React JS.</p></Link>
          <Link to="/"><p className="post-date">16th May 2021</p></Link>
        </div>
        <div className="section-header">EDITOR'S PICK</div>
        <div className='post-sml'>
          <Link to="/"><img className="post-img" src="img/react-logo.png" alt="ReactJS-logo"></img></Link>
          <Link to="/"><h3 className="post-title">How to start a React JS project</h3></Link>
          <Link to="/"><p className="post-text">The first steps in making a project with React JS.</p></Link>
          <Link to="/"><p className="post-date">16th May 2021</p></Link>
        </div>
        <div className='post-sml'>
          <Link to="/"><img className="post-img" src="img/react-logo.png" alt="ReactJS-logo"></img></Link>
          <Link to="/"><h3 className="post-title">How to start a React JS project</h3></Link>
          <Link to="/"><p className="post-text">The first steps in making a project with React JS.</p></Link>
          <Link to="/"><p className="post-date">16th May 2021</p></Link>
        </div>
        <div className='post-sml'>
          <Link to="/"><img className="post-img" src="img/react-logo.png" alt="ReactJS-logo"></img></Link>
          <Link to="/"><h3 className="post-title">How to start a React JS project</h3></Link>
          <Link to="/"><p className="post-text">The first steps in making a project with React JS.</p></Link>
          <Link to="/"><p className="post-date">16th May 2021</p></Link>
        </div>
      </div>
    </div>
  )
}

export default Home