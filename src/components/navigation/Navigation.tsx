import React from "react";
import { useAppDispatch } from "../../redux/hooks";
import { changeRoute } from "../../features/routes/routes.slice";

export const Navigation: React.FC = () => {
    const dispatch = useAppDispatch()

    const onButtonClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        dispatch(changeRoute("signin"))
    }

    return(
        <nav>
            <button onClick={onButtonClick} className="btn btn-outline-light shadow-sm px-1 px-sm-4 py-1 py-sm-2 me-2 me-sm-3">Sign out</button>
        </nav>
    )
}