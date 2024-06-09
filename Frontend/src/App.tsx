import { useState } from 'react'

import './App.css'
import Records from './records/records'
import Nav from './nav/nav'
import TimeLine from './timeline/timeline'
import DatePicker from './datePicker/datePicker'
import History from './history/history'

function App() {

  return (
    <div>
      <Nav />
      <Records />
      <TimeLine />
      <DatePicker futureLocked={true} />
      <History />

    </div>
  )
}

export default App
