import React from 'react'
import "./index.css"


function Accordionitem({ faq : {title, ans} ,number}) {

    return (
        <>
            <div className='item' >
                <p className='number'>{ number + 1}</p>
                <p className='title'>{title}</p>
                <p className='icon'>+</p>
                <p>{" "}</p>
                <div className='ans'>{ans}</div>
            </div>
        </>
    )
}

export default Accordionitem