import React, { useState } from 'react'
import "./index.css"
import Accordionitem from './Accordionitem.jsx'
import { faqs } from '../../public/data'
function Accordion() {
  const [openIndex, setOpenIndex] = useState(null);

  console.log("openIndex ==",openIndex)
  return (
    <>
      <div className='accordion'>
        {faqs.map((faq, i) => (
        
        <Accordionitem
          key={i}
          faqs = {faq}
          number = {i}
          isOpen={openIndex === i}
          onClick={() => { setOpenIndex(openIndex === i ? null : i)}}
        />
      ))}
      </div>
    </>
  )
}

export default Accordion