import React from 'react'
// import Navbar from './Navbar'
import { useState } from 'react'
// import { useState } from 'react'

export default function About() {
  const [darkmode , setdarkmode] = useState({
    color: 'black',
    backgroundColor: 'white'
  })

  const [btntext, setbtntext] = useState("Enable dark mode")

  const handledarkmode = ()=>{
    if(darkmode.color === 'black'){
      setdarkmode({
        color: 'white',
        backgroundColor: 'black',
        border: '1px solid white '
      })
      setbtntext("Enable light mode")
    }
    else{
      setdarkmode({
        color:'black',
        backgroundColor:'white'
      })
      setbtntext("Enable dark mode")
    }
  }


  return (
    <>
    <div className='container'style={darkmode}>
        <h2>About us
        <div className="form-check form-switch">
  <input className="form-check-input" onClick={handledarkmode}  type="checkbox" role="switch" id="mycheck" />
  <label >{btntext}</label>
</div>
        </h2>
    <div className="accordion" id="accordionExample">
  <div className="accordion-item" style={darkmode}>
    <h2 className="accordion-header">
      <button className="accordion-button my-1" style={darkmode} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" style={darkmode} className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={darkmode}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed my-1" style={darkmode} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" style={darkmode} data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={darkmode}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed my-1" style={darkmode} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>

{/* <div classNameName="container my-3">

<button classNameName="btn btn-primary" onClick={handledarkmode} >{btntext}</button>
</div> */}

    </div>
    </>
  )
}
