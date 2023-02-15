import React from 'react'

interface IBoundingBoxProps{
    idx:number,
    top_row: number,
    left_col: number,
    right_col: number,
    bottom_row: number
}

export const BoundingBox: React.FC<IBoundingBoxProps> = ({idx, top_row, left_col, right_col, bottom_row}) => {
    return (
        <div
            key={idx}
            style = {{
                // backgroundColor:'#2076c6',
                border: '4px solid #00c3ff',
                boxShadow: '0px 0px 20px #00c3ff',
                borderRadius: '20px',
                position:'absolute',
                top: `${top_row}%`,
                left:`${left_col}%`,
                right:`${right_col}%`, 
                bottom: `${bottom_row}%`
            }}>
            <div style = {{
                    position:'relative',
                    width:'24px',
                    height:'24px',
                    backgroundColor:'#00c3ff',
                    left:'calc(50% - 12px)',
                    top:'-12px',
                    color:'white',
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center',
                    border:'1px solid rgba(255,255,255,.5)'
                }}
                className ='rounded-pill'>
                {idx + 1}
            </div>
        </div>
    )
}