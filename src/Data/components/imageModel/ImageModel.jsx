import React from 'react'

export const ImageModel = ({id,setImageModel}) => {
  return (
    <div className='image-model-div'>
        <button className="close-model-bt" onClick={() => {setImageModel(false)}}>X</button>
            <div className="container-image-model">
                    <img src={id} alt="" className='mode-img' />
            </div>
    </div>
  )
}
