import React from 'react'

interface IBoundingBoxProps{
    regionsLength: number,
    idx:number,
    top_row: number,
    left_col: number,
    right_col: number,
    bottom_row: number
}

export const BoundingBox: React.FC<IBoundingBoxProps> = ({regionsLength, idx, top_row, left_col, right_col, bottom_row}) => {
    const circleSize = regionsLength > 10 ? 20 : 40
    return (
        <div
            key={idx}
            style = {{
                // backgroundColor:'#2076c6',
                border: `${regionsLength > 20 ? 2 : 5}px solid #00c3ff`,
                boxShadow: '0px 0px 20px #00c3ff',
                borderRadius: `${regionsLength > 20 ? 10 : 20}px`,
                position:'absolute',
                top: `${top_row}%`,
                left:`${left_col}%`,
                right:`${right_col}%`, 
                bottom: `${bottom_row}%`
            }}>
            <div style = {{
                    position:'relative',
                    width:`${circleSize}px`,
                    height:`${circleSize}px`,
                    backgroundColor:'#00c3ff',
                    left:`calc(50% - ${circleSize/2}px)`,
                    top:`${-circleSize/2}px`,
                    color:'white',
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center',
                    border:'1px solid rgba(255,255,255,.5)',
                    fontSize:`${regionsLength > 20 ? 10 : 16}px`
                }}
                className ='rounded-pill'>
                {idx + 1}
            </div>
        </div>
    )
}