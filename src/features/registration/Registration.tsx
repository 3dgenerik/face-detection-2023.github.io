import React from 'react'
import { InputGroup } from 'react-bootstrap'
import { MdEmail } from 'react-icons/md'
import { RiLockPasswordFill } from 'react-icons/ri'
import { FaUserPlus } from 'react-icons/fa'
import { FaUser } from 'react-icons/fa'
import { useAppDispatch } from '../../redux/hooks'
import { changeRoute } from '../routes/routes.slice'
import { useNavigate } from 'react-router-dom'

export const Registration: React.FC = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const onSubmitClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, route:string) =>{
        e.preventDefault()
        // dispatch(changeRoute("signin"))
        navigate(route)
    }

    return (
        <>
            <div style = {{maxWidth:'600px'}} className = "container">
                <form className = " border m-5 p-4 rounded-3 shadow">
                    <div className = "mb-4 text-primary display-5">Registration</div>

                    <div className="form-group">         
                        <label style = {{fontSize:'.8rem'}}>Username</label>
                        <InputGroup>
                            <InputGroup.Text className = 'p-3 p-sm-3' id="basic-addon2"><FaUser /></InputGroup.Text>
                            <input type="text" className="form-control p-2" id="exampleInputUsername2" placeholder="Enter username"/>
                        </InputGroup>
                    </div>

                    <div className="form-group mt-4">         
                        <label style = {{fontSize:'.8rem'}}>Email address</label>
                        <InputGroup>
                            <InputGroup.Text className = 'p-3 p-sm-3' id="basic-addon2"><MdEmail /></InputGroup.Text>
                            <input type="email" className="form-control p-2" id="exampleInputEmail2" aria-describedby="emailHelp" placeholder="Enter email"/>
                        </InputGroup>
                    </div>

                    <div className="form-group mt-4">
                        <label style = {{fontSize:'.8rem'}}>Password</label>
                        <InputGroup>
                            <InputGroup.Text className = 'p-3 p-sm-3' id="basic-addon2"><RiLockPasswordFill /></InputGroup.Text>
                            <input type="password" className="form-control p-2" id="exampleInputPassword2" placeholder="Password"/>
                        </InputGroup>
                    </div>
                    
                    <button type="submit" onClick={(e)=>{onSubmitClick(e, '/home')}} style = {{padding:'13px'}} className="btn btn-primary mt-5 w-100 d-flex align-items-center justify-content-center"><FaUserPlus className = 'me-2' color='#fff'/>Registration</button>
                </form>
            </div>
        </>
    )
}