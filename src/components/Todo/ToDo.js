import React from 'react'

import {BiEdit} from "react-icons/bi"
import {AiFillDelete} from "react-icons/ai"

const ToDo = ({text, updateMode, deleteToDo}) => {
    return (
        <div className="todo">
            <div className='text' style={{ color: 'grey'}}>{text}</div>
            <div className="icons" style={{ color: '#5A4FCF'}}>
                <BiEdit className='icon' onClick={updateMode} />
                <AiFillDelete className='icon' onClick={deleteToDo} />
            </div>
        </div>
    )
}

export default ToDo