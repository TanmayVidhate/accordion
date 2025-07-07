import React from 'react'
import "./index.css"
import Accordionitem from './Accordionitem.jsx'
import { faqs } from '../../public/data'
function Accordion() {
  return (
    <>  
        <div className='accordion'>
           {
            faqs.map((faq,i) => 
                <Accordionitem faq = {faq} key = {i} number = {i} />
            )
           }
        </div>
    </>
  )
}

export default Accordion