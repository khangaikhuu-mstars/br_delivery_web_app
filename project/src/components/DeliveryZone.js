import React, { useEffect } from 'react';
import { useState } from 'react';
import '../css/delivery.css';

const DeliveryZone = () => {
    const [house, setData] = useState([])

    useEffect(() => {
        const houseData = async () => {
            await fetch("../data/delivery.json")
                .then(response => response.json())
                .then(data => {
                    setData(data)
                    console.log(house)
                })
        }
        houseData()
    }, [])
    let sliced8 = house.slice(0, 8)
    let sliced5 = house.slice(0, 5)


    return (

        <div className='container'>
            <h3 className='my-3'>"А" бүс</h3>
            <div id='sda' className='bg-white radius py-2 my-3 px-4'>
                {sliced5.map(data => {
                    return (
                        <div className='d-flex align-items-center' id='goySda'>
                            <div className='text-center my-3 py-3 me-4' id="sadSda">
                                <svg width="15" height="19" viewBox="0 0 15 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.5 3.47168C5.63672 3.47168 4.125 5.01855 4.125 6.84668C4.125 8.70996 5.63672 10.2217 7.5 10.2217C9.32812 10.2217 10.875 8.70996 10.875 6.84668C10.875 5.01855 9.32812 3.47168 7.5 3.47168ZM7.5 9.09668C6.23438 9.09668 5.25 8.1123 5.25 6.84668C5.25 5.61621 6.23438 4.59668 7.5 4.59668C8.73047 4.59668 9.75 5.61621 9.75 6.84668C9.75 8.1123 8.73047 9.09668 7.5 9.09668ZM7.5 0.0966797C3.73828 0.0966797 0.75 3.12012 0.75 6.84668C0.75 9.58887 1.66406 10.3623 6.79688 17.7451C7.11328 18.2373 7.85156 18.2373 8.16797 17.7451C13.3008 10.3623 14.25 9.58887 14.25 6.84668C14.25 3.12012 11.2266 0.0966797 7.5 0.0966797ZM7.5 16.7607C2.57812 9.69434 1.875 9.13184 1.875 6.84668C1.875 5.37012 2.4375 3.96387 3.49219 2.87402C4.58203 1.81934 5.98828 1.22168 7.5 1.22168C8.97656 1.22168 10.3828 1.81934 11.4727 2.87402C12.5273 3.96387 13.125 5.37012 13.125 6.84668C13.125 9.13184 12.3867 9.69434 7.5 16.7607Z" fill="#F17228" />
                                </svg>
                            </div>
                            <div id="text-sda">{data.house}</div>

                        </div>


                    )
                })}
            </div>
            <h3 className='my-3'>"Б" бүс</h3>
            <div id='sda' className='bg-white radius py-2 my-3 px-4'>
                {sliced5.map(data => {
                    return (
                        <div className='d-flex align-items-center' id='goySda'>
                            <div className='text-center my-3 py-3 me-4' id="sadSda">
                                <svg width="15" height="19" viewBox="0 0 15 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.5 3.47168C5.63672 3.47168 4.125 5.01855 4.125 6.84668C4.125 8.70996 5.63672 10.2217 7.5 10.2217C9.32812 10.2217 10.875 8.70996 10.875 6.84668C10.875 5.01855 9.32812 3.47168 7.5 3.47168ZM7.5 9.09668C6.23438 9.09668 5.25 8.1123 5.25 6.84668C5.25 5.61621 6.23438 4.59668 7.5 4.59668C8.73047 4.59668 9.75 5.61621 9.75 6.84668C9.75 8.1123 8.73047 9.09668 7.5 9.09668ZM7.5 0.0966797C3.73828 0.0966797 0.75 3.12012 0.75 6.84668C0.75 9.58887 1.66406 10.3623 6.79688 17.7451C7.11328 18.2373 7.85156 18.2373 8.16797 17.7451C13.3008 10.3623 14.25 9.58887 14.25 6.84668C14.25 3.12012 11.2266 0.0966797 7.5 0.0966797ZM7.5 16.7607C2.57812 9.69434 1.875 9.13184 1.875 6.84668C1.875 5.37012 2.4375 3.96387 3.49219 2.87402C4.58203 1.81934 5.98828 1.22168 7.5 1.22168C8.97656 1.22168 10.3828 1.81934 11.4727 2.87402C12.5273 3.96387 13.125 5.37012 13.125 6.84668C13.125 9.13184 12.3867 9.69434 7.5 16.7607Z" fill="#F17228" />
                                </svg>
                            </div>
                            <div id="text-sda">{data.house}</div>

                        </div>


                    )
                })}
            </div>
            <div id="map">
            
            </div>
        </div>

    )
}
export default DeliveryZone;