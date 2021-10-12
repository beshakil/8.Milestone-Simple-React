import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import './Header.css';


const Header = () => {
    const element = <FontAwesomeIcon icon={faGraduationCap} />
    return (
        <div className="border">
            <div className="d-flex justify-content-between bg-light">
                <div className="p-4">
                    <a className="navbar-brand bg-success rounded text-light ps-2 pe-2" href="##">{element} আমাদের স্কুল</a>

                    <a className="navbar-brand ps-2 pe-2 text-danger" href="##">স্কুল লিস্ট</a>
                    <a className="navbar-brand ps-2 text-danger" href="##">স্মৃতির পাতা</a>
                </div>
                <div className="pt-3">
                    <div className="d-flex">

                        <div className="input-group mb-3 pe-2">
                            <input type="text" className="form-control" placeholder="স্কুলের নাম লিখুন !"></input>
                            <button className="rounded btn btn-outline-danger me-2" type="button" id="button-addon2">স্কুল খুজুন</button>
                            <a className="navbar-brand bg-success rounded text-light ps-2 pe-2" href="##">স্কুল রেজিস্ট্রেশন</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;