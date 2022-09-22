import React from 'react';
import { useState } from 'react';
import './Color.css';
import Values from 'values.js';
import { IoSearchOutline } from "react-icons/io5";

import SingleColorPalette from './SingleColorPalette';

const ColorPalette = () => {

    const [color, setColor] = useState('');
    const [colorData, setColorData] = useState(new Values('#f15025').all(10));
   


    const HandleSubmit = (e) =>{

        e.preventDefault();

        try {

            let colors = new Values(color).all(10);
            setColorData(colors);
           
            
            
        } catch (error) {


           
          console.log(error);

        }

    }



  return (
    <>

    <header>

        <nav>
            <div className="logo-container">
                <div className="logo"></div>
                <div>
                    <h2 className='logo-text'>
                        Color Palette
                    </h2>
                </div>
            </div>

            <div className="form-area">
                <form className='form-field' onSubmit={HandleSubmit}>
                    <div className="form-input">

                        <input type="text" name='color' id='color' value={color} placeholder='#f15025' onChange={(e) => setColor(e.target.value)}/>
                     
                    </div>
                    <div className="btn">
                        <button type='submit'>
                            <span className='search'>
                               Search
                            </span>
                            <span className='search-icon'>
                            <IoSearchOutline/>
                            </span>
                        </button>
                    </div>
                </form>
            </div>
        </nav>
    </header>

    <main className='content'>


        <section className='content-container'>


            {

                colorData.map((colorItem, index)=>{

                    return(

                        < SingleColorPalette {...colorItem} key={index} index={index} hex={colorItem.hex} />
                    )
                })

            }


        </section>


    </main>

    </>
  )
}

export default ColorPalette