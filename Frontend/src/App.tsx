import { useState } from 'react'

import './App.css'
import Records from './records/records'
import Nav from './nav/nav'
import TimeLine from './timeline/timeline'
import DatePicker from './datePicker/datePicker'
import History from './history/history'
import Personal from './personal/personal'
import { personalProps } from './types'
import { MOBILE_W } from './constants'

function App() {
  return (
    <>

      <div className={`flex flex-col flex-shrink-0`}>
        <Nav />
        <Records />
        <TimeLine />
        <DatePicker futureLocked={true} />
        <History />
        <Personal />

      </div>


    </>

  )
}

export default App
