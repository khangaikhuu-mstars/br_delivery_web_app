import React from "react";
import Buttons from './Button'
import '../css/addfood.css'

const AddFood = () => {

    return (
        <div className="add-food">
            <div>
                <h5 className='modalHeader'>Хэмжээ</h5>
                <div className='modalSizeButtons'>
                    <button className='sizeButton  activeButton '>1 хүн</button>
                    <button className='sizeButton '>2 хүн</button>
                </div>
            </div>

            <h5 className='modalHeader'>Тоо</h5>
            <div className='modalCounterButtons'>
                <button className='counterButton '>-</button>
                <p className='counterNumber '>10</p>
                <button className='counterButton '>+</button>
            </div>
            
            <Buttons class={'orderTabletView'} type={'Захиалах'}/>
            {/* <Buttons class={'orderTabletView orderButton'} type={'Захиалах'}/> */}
            {/* <button className='orderButton'>Захиалах</button> */}
        </div>
    );
}

export default AddFood;