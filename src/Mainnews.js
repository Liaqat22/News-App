import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from './Component5/Nav'
import News from './Component5/News'
import LoadingBar from 'react-top-loading-bar'



export default function Mainnews() {
  // state = {
  //   progress: 0
  // }
  // setProgress = (progress) => {
  //   setState({ progress: progress })
  // }

  const [progress, setProgress] = useState(0)

  return (
    <div>
      <BrowserRouter>
        <Nav />
        <h1 className='text-center' style={{ marginTop: '68px', color: 'darkorange' }}>DailyNews Top-Headlines </h1>

        <LoadingBar
          color='#f11946'
          progress={progress}
        />
        <Routes>
          <Route path='/' element={<News setProgress={setProgress} key='general' catagori='general' />} />
          <Route path='/business' element={<News setProgress={setProgress} key='business' catagori='business' />} />
          <Route path='/health' element={<News setProgress={setProgress} key='health' catagori='health' />} />
          <Route path='/science' element={<News setProgress={setProgress} key='science' catagori='science' />} />
          <Route path='/sports' element={<News setProgress={setProgress} key='sports' catagori='sports' />} />
          <Route path='/technology' element={<News setProgress={setProgress} key='technology' catagori='technology' />} />
          <Route path='/entertainment' element={<News setProgress={setProgress} key='entertainment' catagori='entertainment' />} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}

