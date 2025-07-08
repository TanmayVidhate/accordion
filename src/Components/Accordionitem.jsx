import "./index.css"
function Accordionitem({faqs : {title ,ans}, number, isOpen, onClick}) {
    return (
        <>
            <div className='item' >
                <p className='number'>{number + 1}</p>
                <p className='title'>{title}</p>
                <p className='icon' onClick={onClick}> {isOpen ? "-" : "+"} </p>
                <p>{" "}</p>
                <div className={isOpen ? 'content-box' : 'ans'}>{ans}</div>
            </div>
        </>
    )

}



export default Accordionitem