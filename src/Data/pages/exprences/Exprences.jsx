import React, { useState } from 'react'
import { VerticalTimelineElement, VerticalTimeline} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import {HiOutlineDesktopComputer} from 'react-icons/hi'
import { useEffect } from 'react'

export const Exprences = () => {
var cMonth = new Date().toLocaleString(
    'default', {month: 'long'}
  );
  const [month, setMonth] = useState('')
  useEffect(() => {
  if(cMonth=== 'January'){
    setMonth(6)
  } else if(cMonth=== 'February'){
    setMonth(6+1);
  } else if(cMonth=== 'March'){
    setMonth(6+2);
  } else if(cMonth=== 'April'){
    setMonth(6+3);
  } else if(cMonth=== 'May'){
    setMonth(6+4);
  } else if(cMonth=== 'June'){
    setMonth(6+5);
  } else if(cMonth=== 'July'){
    setMonth(6+6);
  } else if(cMonth=== 'August'){
    setMonth(6+7);
  } else if(cMonth=== 'September'){
    setMonth(6+8);
  } else if(cMonth=== 'October'){
    setMonth(10-7);
  } else if(cMonth=== 'November'){
    setMonth(11-7);
  } else if(cMonth=== 'December'){
    setMonth(12-7);
  } 
    },[])


    return(
        <div className="exprences-div">
                <div className="container-exprences">
                    <VerticalTimeline lineColor='#6E4FEB'>
                            <VerticalTimelineElement id='hjhjkhkjh'
                            className='vertical-timeline-element--education' 
                            date={`July-2022 - (${month}) Months Now`}
                            iconStyle={{background: "#6E4FEB", color:"fff"}}
                            icon={<HiOutlineDesktopComputer className='icon-computer'/>}
                            > 
                            <h3 className="vertical-timeline-element-title">Front End Developer</h3>
                            <p>Working as a Front-end Developer in InfowareIndia</p>
                            </VerticalTimelineElement>

                            <VerticalTimelineElement id='hjhjkhkjh'
                            className='vertical-timeline-element--education' 
                            date='2022'
                            iconStyle={{background: "#6E4FEB", color:"fff"}}
                            icon={<HiOutlineDesktopComputer className='icon-computer'/>}
                            > 
                            <h3 className="vertical-timeline-element-title">Fresher</h3>
                            <p>Looking to work in a challenging and responsible position in a professional organization as a Front-end-Developer</p>
                            </VerticalTimelineElement>


                            <VerticalTimelineElement 
                            className='vertical-timeline-element--education' 
                            date='2022'
                            iconStyle={{background: "#6E4FEB", color:"fff"}}
                            icon={<HiOutlineDesktopComputer className='icon-computer'/>}
                            > 
                            <h3 className="vertical-timeline-element-title">Skills</h3>
                            <p>Have good skills in ReactJS, JavaScript, SCSS, HTML, NodeJS</p>
                            <p>Also have good skills in many softwares like, Photoshop, Dreamviewer, VS Code, Adobe Lightroom</p>
                            </VerticalTimelineElement>

                            <VerticalTimelineElement 
                            className='vertical-timeline-element--education' 
                            date='2016 - 2022'
                            iconStyle={{background: "#6E4FEB", color:"fff"}}
                            icon={<HiOutlineDesktopComputer className='icon-computer'/>}
                            > 
                            <h3 className="vertical-timeline-element-title">Online eCommerce Store Manager</h3>
                            <p>eBay, Etsy, Amazon</p>
                            </VerticalTimelineElement>
                            
                    </VerticalTimeline>
                </div>
        </div>
    )
}