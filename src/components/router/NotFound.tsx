import React from 'react'
import { HiHome } from 'react-icons/hi';
import { NavLink } from 'react-router-dom';
import BrokenLink from '../../assets/broken-link-svgrepo-com.svg'

export const NotFound:React.FC = () => {
    return (
        <div style = {{height:'100vh'}} className='bg-light d-flex justify-content-center align-items-center'>
            <div className='m-3 d-flex flex-column justify-content-center align-items-strech'>
                <div style={{maxWidth:'100px'}}>
                    <img className = "w-100 mb-4" src={BrokenLink} alt='broken link'/>
                </div>
                <div className='d-flex flex-column justify-content-start align-items-start'>
                    <div className="display-2 text-secondary mb-2">PAGE NOT FOUND</div>
                    <div className='ps-1'>You don't need to be here. </div>
                    <div className='ps-1 mb-3'>Use this link below and go where you belong. </div>
                </div>
                <NavLink to='/home'><button className='btn btn-primary d-flex align-items-center'><HiHome/><div className= 'ps-2'>Go home</div></button></NavLink>
            </div>
        </div>
    )
}