import { useState } from 'react'

import './App.css'
import Records from './records/records'
import Nav from './nav/nav'
import TimeLine from './timeline/timeline'
import DatePicker from './datePicker/datePicker'

function App() {

  return (
    <div>
      <Nav />
      <Records />
      <TimeLine />
      <DatePicker futureLocked={true} />

    </div>
  )
}

export default App
