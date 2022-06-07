import React from 'react'

export const AboutMe = ({setShowAboutMe}) => {
  const closeModel = () => {
   setShowAboutMe(false)
  }
  return (
    <div className='aboutme-div'>
            <div className="container-about-me">
                <div className="close-bt">
                    <button className="close-model-bt" onClick={closeModel}>X</button>
                </div>
                    <div className="heading-div">
                        <h1 className="heading-text">about me</h1>
                    </div>
                    <div className="info-div">
                            <p className="my-name">Name : <span className="extra">Mohit Agarwal</span></p>
                            <p className="my-name">Mobile : <span className="extra">+91-9680038708</span></p>
                            <p className="my-name">e-Mail : <span className="extra">mohit724agarwal@gmail.com</span></p>
                            <p className="my-name">Study Background : <span className="extra">Commerce</span></p>
                            <p className="my-name">Home Town : <span className="extra">Jaipur, Rajasthan</span></p>
                            <p className="my-thoughts">Looking to work in a challenging and responsible position in a professional organization where I can contribute to the success and growth of the organization by utilizing my skills and competencies.</p>
                    </div>
            </div>
    </div>
  )
}
