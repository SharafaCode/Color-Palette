import React, { useState, useEffect } from 'react'
import './Color.css'
import Alert from './Alert.jsx';

const SingleColorPalette = ({weight, hex, rgb, index}) => {


    const [alert, setAlert] = useState(false);

    const rgbValue = rgb.join(',');
    const hexValue = `#${hex}`;



    useEffect(() => {
      let TimeOut = setTimeout(() => {
        setAlert(false)
      }, 1000);
    
      return () => {
        clearTimeout(TimeOut)
      }
    }, [alert])
    

  return (


  

        <article>


            <div className={`data-container  ${index > 11 && "light-color"}`} style={{backgroundColor: `rgb(${rgbValue})`}}>

                <div>
                    <h1> {weight}% </h1>
                    <h1> {hexValue} </h1>
                </div>

                <div className='clipboard'>
                    <p onClick={()=>{

                        setAlert((prev)=> !prev);
                        navigator.clipboard.writeText(hexValue)
                    }} 
                    >Copy to clipboard</p>
                </div>

            </div>

            <div>
                {
                    alert && <Alert/>
                
                }
            </div>
        
        </article>


  )
}

export default SingleColorPalette