import React from "react";
import navlogo from '../icons/navlogo.svg';
import "../css/adress.css";


const AddressVertification = () => {

    return (
        <div className="container">
            <div className="row">
                <div className="col-12  col-lg-6">
                    <div >
                        <form action="" className="forms">
                            <p className="p-2 m-2 text-shargal">Хаягын мэдээлэл</p>

                            <select name="" id="" className="col-12 m-2 p-2 inputStyle selectbox">

                                <option value="">Хан-Уул Дүүрэг </option>
                                <option value="">Баянзүрэх Дүүрэг</option>
                                <option value="">СүхБаатар Дүүрэг</option>
                                <option value="">Сонгинохайрхан Дүүрэг</option>
                            </select>
                            <select name="" placeholder="Хороо сонгоно уу" className="inputStyle col-12 p-2 m-2" id="">
                                <option value=""> Хороо сонгоно уу</option>
                                <option value="">1-р Хороо</option>
                                <option value="">2-р Хороо</option>
                            </select>
                            <select name="" className="col-12 p-2 m-2 inputStyle" id="">
                                <option value="">Байр, гудамж сонгоно уу.</option>
                                <option value="">1-р байр</option>
                                <option value="">89-р байр</option>
                            </select>
                            <p className="p-2 m-2 text-shargal" > Хаягын дэлэгрэнгүй</p>
                            <textarea className="col-12 p-2 m-2 inputStyle" name="" id="" cols="20" rows="5" placeholder="Орц, даврах, орцны код... "></textarea>
                            <p className="p-2 m-2text-shargal">Утасны дугаар</p>
                            <input type="text" className="col-12 p-2 m-2 inputStyle" placeholder="Утасны дугаар оруулна уу." />
                            <p className="p-2 m-2 text-shargal">Төлбөр төлөх</p>
                            <p className="col-12 p-2 m-2 d-flex justify-content-start">
                                <span className="col-6"> <input className="checkbox" type="checkbox" />Бэлнээр</span>
                                <span className="col-6"><input className="checkbox" type="checkbox" /> Картаар</span>

                            </p>
                            <img src={navlogo} alt="" className="uuu" />

                            <input type="button" value="Захиалах" className="col-12 p-2 m-2 `                                                                                                                                           shargal11" />


                        </form>

                    </div>

                </div>
                <div className="col-12 col-lg-6">


                </div>
            </div>
        </div>
    )


}
export default AddressVertification