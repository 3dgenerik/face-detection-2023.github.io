import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import './SigninAndRegistrationWrapper.scss'

export const SigninAndRegistrationWrapper: React.FC = () => {
    return(
        <>
            <nav className='d-flex gap-2 justify-content-end m-3'>
                <NavLink to='/signin'>Signin</NavLink>
                <NavLink to='/registration'>Registration</NavLink>
            </nav>

            <main>
                <Outlet/>
            </main>
        </>
    )
}