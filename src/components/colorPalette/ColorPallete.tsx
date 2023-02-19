import React from 'react'
import { IColors } from '../../features/buttonForm/button.interface'
import { AiFillCopy } from "react-icons/ai";

interface IColorPalleteProps{
    colors: IColors[]
}

export const ColorPallete: React.FC<IColorPalleteProps> = ({colors})=>{
    const getColors = colors.map((color:IColors, idx:number) => {
        return (
            <div key = {idx} className = 'd-flex align-items-center justify-content-between'>
                <div 
                    className=' bg-light p-2 rounded-3 border border-secondary border-opacity-10 d-flex align-items-center w-100'>
                    <div 
                        style = {{
                            backgroundColor:`${color.raw_hex}`,
                            height: '30px',
                            width: '30px',

                        }}
                        className='text-light rounded-2 border'
                        ></div>
                        <div
                            style={{fontSize:'.8rem'}}
                            className='ms-4 fw-bold'>{color.w3c.name} <span className = 'text-secondary'>({color.raw_hex})</span>
                        </div>
                </div>
                <div className=''>

                    <AiFillCopy
                        className='btn btn-outline-light ms-3 border p-3 rounded-3' size = {48} color={"#777"}/>
                </div>
            </div>
        )
    })

    return (
        <div
        style = {{
            // position:'absolute',
            // top:'0px',
            height:'100%',
            width:'100%',
            display:'flex',
            flexDirection:'row',
            justifyContent:'center',
            alignItems: 'center',
            // backgroundColor:'rgba(255,255,255,.7)'
        }}
        className=''>
            <div style = {{
                backgroundColor:'white',
            }}
            className= 'mt-4 p-2 p-sm-3 rounded-2 border w-100 shadow-sm'
            >
                <div style = {{
                    display:'flex',
                    gap:'10px',
                    flexDirection:'column',
                    // gridTemplateColumns:`repeat(${colors.length}, 1fr)`
                }}
                className="gap-2 gap-sm-3"
                >
                    {getColors}
                </div>
            </div>

        </div>
    )
}