import React from "react";
import navlogo from '../icons/navlogo.svg';
import "../css/adress.css";


const AddressVertification = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div >
                        <form action="" className="forms">
                            <p>Хаягын мэдээлэл</p>

                            <select name="" id="" className="col-12">
                                
                                <option value="">Хан-Уул Дүүрэг </option>
                                <option value="">Баянзүрэх Дүүрэг</option>
                                <option value="">СүхБаатар Дүүрэг</option>
                                <option value="">Сонгинохайрхан Дүүрэг</option>
                            </select>
                            <select name="" placeholder="Хороо сонгоно уу" className="col-12" id="">
                                <option value="">Хороо сонгоно уу</option>
                                <option value="">1-р Хороо</option>
                                <option value="">2-р Хороо</option>
                            </select>
                            <select name="" className="col-12"  id="">
                                <option value="">Байр, гудамж сонгоно уу.</option>
                                <option value="">1-р байр</option>
                                <option value="">89-р байр</option>
                            </select>
                            <p > Хаягын дэлэгрэнгүй</p>
                            <textarea className="col-12 inputStyle" name="" id="" cols="20" rows="5" placeholder="Орц, даврах, орцны код... "></textarea>
                            <p>Утасны дугаар</p>
                            <input type="text" className="col-12 inputStyle" placeholder="Утасны дугаар оруулна уу."/>
                            <p>Төлбөр төлөх</p>
                            <p className="col-12 d-flex justify-content-between"><span> <input type="checkbox" />Бэлнээр</span>
                            <span><input type="checkbox"  /> Картаар</span>
                            
                            </p>
                            <img src={navlogo} alt="" className="uuu" />
                            <img src="/icons/navlogo.svg" className="uuu"/>
                            <input type="button" value="Захиалах" className="col-12 shargal11"/>
                           
                            
                        </form>
                       
                    </div>

                </div>
                <div className="col-lg-6">


                </div>
            </div>
        </div>
    )


}
export default AddressVertification