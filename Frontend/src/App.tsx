import { useState } from 'react'

import './App.css'
import Records from './records/records'
import Nav from './nav/nav'
import TimeLine from './timeline/timeline'

function App() {

  return (
    <div>
      <Nav />
      <Records />
      <TimeLine />
    </div>
  )
}

export default App
