import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpenText, faGlobeAmericas, } from '@fortawesome/free-solid-svg-icons'

const School = (props) => {

    const element = <FontAwesomeIcon icon={faGlobeAmericas} />
    const elementTwo = <FontAwesomeIcon icon={faEnvelopeOpenText} />

    const { shoolName, location, totalStudent, eventStudent, img, schoolNumber } = props.school;

    return (
        <div className="col-lg-4 gy-3">
            <div className="card border border-success ">
                <img src={img} className="card-img-top img-fluid p-3 " alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title text-success">স্কুলের নামঃ <small className="text-dark">{shoolName}</small></h5>

                    <h5 className="card-text pt-2 text-success">লোকেশনঃ <small className="text-dark">{location}</small ></h5>
                    <h5 className="card-text pt-2 text-success">মোট শিক্ষার্থীঃ <small className="text-dark">{totalStudent} জন</small> </h5>
                    <h5 className="card-text pt-2 text-success">অংশগ্রহণকারী শিক্ষার্থীঃ <small className="text-dark">{eventStudent} জন</small></h5>
                    <h5 className="card-text pt-2 text-success">মোবাইলঃ <small className="text-dark">{schoolNumber}</small></h5>

                    <div className="d-flex justify-content-between">
                        <button className="btn btn-outline-danger mt-3" onClick={() => props.handleParticipant(props.school)}>অনুষ্ঠানে অংশগ্রহণ</button>
                        <a className="fs-2 pt-3 ps-3 text-success" href="##">{element}</a>
                        <a className="text-danger fs-2 pt-3" href="##">{elementTwo}</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default School;