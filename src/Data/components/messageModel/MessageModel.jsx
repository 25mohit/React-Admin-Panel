import React from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'
export const MessageModel = ({setShowMessage}) => {
  return (
    <div className='message-model'>
            <div className="container-message-model">
                    <h1 className='message-model-text'>Get best exprence of this app in Full Screen</h1>
                    <div className="footer-btns-div">
                        <button className='ok-btn' onClick={() => {setShowMessage(false)}}>OK</button>
                    </div>
            </div>
    </div>
  )
}
