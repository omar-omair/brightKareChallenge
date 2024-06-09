import { useState } from 'react'

import './App.css'
import Records from './records/records'
import Nav from './nav/nav'
import TimeLine from './timeline/timeline'
import DatePicker from './datePicker/datePicker'
import History from './history/history'
import Personal from './personal/personal'
import { personalProps } from './types'

function App() {
  const [person, setPerson] = useState<personalProps>({ name: "Ali Alkhatani", email: "Ali@test.com", age: 39, gender: "M", phone_number: "+966503034500", address: "Riyadh" })

  return (
    <div>
      <Nav />
      <Records />
      <TimeLine />
      <DatePicker futureLocked={true} />
      <History />
      <Personal name={person.name} age={person.age} gender={person.gender} email={person.email} address={person.address} phone_number={person.phone_number} />

    </div>
  )
}

export default App
