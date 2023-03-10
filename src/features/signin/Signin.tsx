import React from 'react'
import { InputGroup } from 'react-bootstrap'
import { MdEmail } from 'react-icons/md'
import { RiLockPasswordFill } from 'react-icons/ri'
import { FaSignInAlt } from 'react-icons/fa'
import { useAppDispatch } from '../../redux/hooks'
import { changeRoute } from '../routes/routes.slice'
import  {useNavigate}  from 'react-router-dom'

export const Signin: React.FC = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const onSubmitClick = (e: React.MouseEvent<HTMLButtonElement | HTMLSpanElement, MouseEvent>, route: string) =>{
        e.preventDefault()
        // dispatch(changeRoute(route))
        navigate(route)
    }

    return (
        <>
            <div style = {{maxWidth:'600px'}} className = "container">
                <form className = " border mx-3 my-5 p-4 rounded-3 shadow">
                    <div className = "mb-4 text-primary display-5">Sign in</div>
                    <div className="form-group">
                        
                        <label style = {{fontSize:'.8rem'}}>Email address</label>
                        <InputGroup>
                            <InputGroup.Text className = 'p-3 p-sm-3' id="basic-addon1"><MdEmail /></InputGroup.Text>
                            <input type="email" className="form-control p-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                        </InputGroup>
                    </div>
                    <div className="form-group mt-4">
                        <label style = {{fontSize:'.8rem'}}>Password</label>
                        <InputGroup>
                            <InputGroup.Text className = 'p-3 p-sm-3' id="basic-addon1"><RiLockPasswordFill /></InputGroup.Text>
                            <input type="password" className="form-control p-2" id="exampleInputPassword1" placeholder="Password"/>
                        </InputGroup>
                    </div>
                    
                    <button type="submit" onClick={(e)=>onSubmitClick(e, "/home")} style = {{padding:'13px'}} className="btn btn-primary mt-5 w-100 d-flex align-items-center justify-content-center"><FaSignInAlt className = 'me-2' color='#fff'/>Sign in</button>
                    <div style = {{fontSize:'.8rem'}} className='mt-3 text-center'>Don't have an account? <span onClick={(e)=>onSubmitClick(e, "/registration")} className = "text-primary fw-bold" role="button">Register now</span></div>
                </form>
            </div>
        </>
    )
}