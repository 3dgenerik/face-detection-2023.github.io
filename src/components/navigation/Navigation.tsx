import React from "react";
import { useAppDispatch } from "../../redux/hooks";
import { changeRoute } from "../../features/routes/routes.slice";
import { useNavigate } from "react-router-dom";

export const Navigation: React.FC = () => {
    const navigate = useNavigate()
    // const dispatch = useAppDispatch()

    const onButtonClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, route:string) => {
        e.preventDefault()
        // dispatch(changeRoute("signin"))
        navigate(route)
    }

    return(
        <nav>
            <button onClick={(e) => onButtonClick(e, "/signin")} className="btn btn-outline-light shadow-sm px-1 px-sm-4 py-1 py-sm-2 me-2 me-sm-3">Sign out</button>
        </nav>
    )
}