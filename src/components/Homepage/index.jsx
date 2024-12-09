import React ,{lazy} from 'react'

const Homepage=lazy(()=> import('./components/Homepage'));
const Sliding=lazy(()=> import('./components/Sliding'));


export default function index() {
  return (
    <div>
      <Homepage/>
      <Sliding/>
    </div>
  )
}
