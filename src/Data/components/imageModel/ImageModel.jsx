import React, { useEffect } from 'react'

export const ImageModel = ({id,setImageModel}) => {
  useEffect(() => {
    document.addEventListener('keydown', keyPressHandler)
    return () => {
        document.removeEventListener('keydown', keyPressHandler)
    }
  }, [])
  const keyPressHandler = (e) => {
    if(e.keyCode == 27){
      setImageModel(false)
    }
  }
  
  return (
    <div className='image-model-div'>
        <button className="close-model-bt" onClick={() => {setImageModel(false)}}>X</button>
            <div className="container-image-model">
                    <img src={id} alt="" className='mode-img' />
            </div>
    </div>
  )
}
