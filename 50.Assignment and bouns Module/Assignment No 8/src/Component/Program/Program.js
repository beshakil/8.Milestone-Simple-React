import React, { useEffect, useState } from 'react';
import Participant from '../Participant/Participant';
import School from '../School/School';

const Program = () => {

    const [schools, setSchools] = useState([]);
    const [participant, setParticipant] = useState([])

    useEffect(() => {
        fetch('./schooldata.JSON')
            .then(res => res.json())
            .then(data => setSchools(data))
    }, [])

    const handleParticipant = (school) => {
        const newSchool = [...participant, school];
        setParticipant(newSchool);
    }

    return (
        <div className="border p-3 bg-light">
            <div className="row">
                <div className="col-lg-9">
                    <h5 className="pt-2"> স্কুলের নামের তালিকাঃ</h5>
                    <div className="row">
                        {
                            schools.map(school => <School
                                key={school.key}
                                school={school}
                                handleParticipant={handleParticipant}
                            ></School>)
                        }
                    </div>
                </div>
                <div className="col-lg-3 pt-2 pb-2">
                    <h5 className="pb-3"> অনুষ্ঠানে অংশগ্রহণকারীঃ </h5>
                    <Participant participant={participant}></Participant>
                </div>
            </div>
        </div>
    );
};

export default Program;