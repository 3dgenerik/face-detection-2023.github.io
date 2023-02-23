import React from 'react'
import { IColors } from '../../features/buttonForm/button.interface'
import { AiFillCopy } from "react-icons/ai";
import { SlArrowDown } from "react-icons/sl";
import { HashLink } from 'react-router-hash-link';
import {motion} from 'framer-motion'


const variants = {
    initial: {
        opacity: 0,
        scale: .3
    },
    
    animate: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: .6,
            type:"spring",
            stiffness:200,
        }
    }
}

const copyVariant = {
    initial: {
    },
    
    animate: {

        transition: {
            duration: .6,
            type:"spring",
            stiffness:200,
        }
    }
    
}

interface IColorPalleteProps{
    colors: IColors[]
}

export const ColorPallete: React.FC<IColorPalleteProps> = ({colors})=>{
    const getColors = colors.map((color:IColors, idx:number) => {
        return (
            <li key = {idx} className = 'bg-light d-flex align-items-center justify-content-between list-group-item'>


                <div 
                    className='d-flex align-items-center w-100'>
                    <div 
                        style = {{
                            backgroundColor:`${color.raw_hex}`,
                            height: '30px',
                            width: '30px',

                        }}
                        className='text-light rounded-1'
                        ></div>
                        <div
                            style={{fontSize:'.8rem'}}
                            className='ms-4 fw-bold'>{color.w3c.name} <span className = 'text-secondary'>({color.raw_hex})</span>
                        </div>
                </div>



                <motion.div
                    variants={copyVariant}
                    initial='initial'
                    animate='animate'
                    whileHover={{scale:1.1}}
                    whileTap={{scale:0.75}}
                    className=''>
                    
                    <AiFillCopy
                        style={{backgroundColor:'#fff'}}
                        className='btn ms-3 p-3 rounded-3' size = {48} color={"#777"}/>
                </motion.div>
            </li>
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

            <motion.div
                style={{top:'20px'}}
                className='position-absolute'
                variants={variants}
                initial="initial"
                animate="animate"
                whileHover={{scale:1.2}}
                whileTap={{scale:.8}}
            >
                <HashLink
                    to="#palette"
                    style={{backgroundColor:'#fff'}}

                    className =' text-decoration-none text-dark gap-3 display-6 border p-2 rounded-3 shadow d-flex flex-column justify-content-center align-items-center'>
                        <motion.div
                            className='bg-light p-2 border rounded-2'
                            
                            >Get your color palette
                        </motion.div>
                        <SlArrowDown size={20} color='#2266ff'/>
                </HashLink>
            </motion.div>

            <div style = {{
                backgroundColor:'white',
            }}
            id='palette'
            className= 'mt-4 w-100 shadow-sm'
            >
                <div style = {{
                    // gridTemplateColumns:`repeat(${colors.length}, 1fr)`
                }}
                className="list-group"
                >
                    {getColors}
                </div>
            </div>

        </div>
    )
}