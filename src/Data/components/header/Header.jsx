import React, { useEffect, useState } from 'react'
import '../../styles/Style.css'
import { Link, useLocation } from 'react-router-dom'
import { AiOutlineMenu } from 'react-icons/ai'


export const Header = () => {
    const [expanndBar, setExpanndBar] = useState(false)
    const locatrion = useLocation()
    useEffect(() => {
            setExpanndBar(false)
    },[locatrion])
    return(
        <div className="header-div">
                        <div className="dropdown-bt">
                            <AiOutlineMenu className='menu-image' onClick={() => {setExpanndBar((prev) => !prev)}}/>
                        </div>
                <div className="container"  id={expanndBar ? "open" : "close"}>
                        <div className="portfolio-links">
                                <ul>
                                    <li><Link to='/'>Home</Link></li>
                                    <li><Link to='/projects'>Projects</Link></li>
                                    <li><Link to='/exprences'>Expriences</Link></li>
                                </ul>
                        </div>
                </div>
        </div>
    )
}