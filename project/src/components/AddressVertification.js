import React from "react";
import navlogo from '../icons/navlogo.svg';
import "../css/adress.css";


const AddressVertification = () => {
    function onlyOne(checkbox) {
        var checkboxes = document.getElementsByName('check')
        checkboxes.forEach((item) => {
            if (item !== checkbox) item.checked = false
        })
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-12  col-lg-6">
                    <div className="gadna " >
                        <form action="" className="forms m-auto">
                            <p className="p-2 m-2 d-md-none text-shargal">Хаягын мэдээлэл</p>
                            <p className="d-none p-2 col-12 col-md-8 m-2 d-md-block align-items-start turshilt text-shargal"> Хаягаа оруулна уу</p>
                            <select name="" id="" className="col-12 col-md-8 m-2 p-2 inputStyle selectbox">

                                <option value="">Хан-Уул Дүүрэг </option>
                                <option value="">Баянзүрэх Дүүрэг</option>
                                <option value="">СүхБаатар Дүүрэг</option>
                                <option value="">Сонгинохайрхан Дүүрэг</option>
                            </select>
                            <select name="" placeholder="Хороо сонгоно уу" className="inputStyle col-md-8 col-12 p-2 m-2" id="">
                                <option value=""> Хороо сонгоно уу</option>
                                <option value="">1-р Хороо</option>
                                <option value="">2-р Хороо</option>
                            </select>
                            <select name="" className="col-12 col-md-8 p-2 m-2 inputStyle" id="">
                                <option value="">Байр, гудамж сонгоно уу.</option>
                                <option value="">1-р байр</option>
                                <option value="">89-р байр</option>
                            </select>
                            <p className="p-2 col-12 col-md-8 m-2 d-md-none text-shargal" > Хаягын дэлэгрэнгүй</p>
                            <p className="d-none col-12 col-md-8 p-2 m-2 d-md-block text-shargal">Нэмэлт мэдээлэл</p>
                            <textarea className="col-12 p-2 m-2 col-md-8 inputStyle" name="" id="" cols="20" rows="5" placeholder="Орц, даврах, орцны код... "></textarea>
                            <p className="p-2 col-12 col-md-8 m-2 text-shargal">Утасны дугаар</p>
                            <input type="text" className="col-12 col-md-8 p-2 m-2 inputStyle" placeholder="Утасны дугаар оруулна уу." />
                            <p className="p-2 m-2 col-12 col-md-8 text-shargal">Төлбөр төлөх <span className="d-none d-md-inline-block">сонголт</span></p>
                            <p className="col-12 p-2 m-2 d-flex justify-content-center">
                                <span className="col-4"> <input className="checkbox" type="checkbox" name="check" onclick={onlyOne(this)} />Бэлнээр</span>
                                <span className="col-4"><input className="checkbox" type="checkbox" name="check" onclick={onlyOne(this)} /> Картаар</span>

                            </p>
                            <img src={navlogo} alt="" className="uuu" />

                            <input type="button" value="Захиалах" className="col-12 p-2 m-2 `                                                                                                                                           shargal11" />


                        </form>

                    </div>

                </div>
                <div className="col-12 d-none d-md-block col-lg-6">


                </div>
            </div>
        </div>
    )


}
export default AddressVertification