import React from 'react';
import SelectSchool from '../SelectSchool/SelectSchool';

const Participant = (props) => {
    const { participant } = props;
    let total = 0;
    //Total calculating
    for (const school of participant) {
        total = total + school.eventStudent;
    }
    return (
        <div>
            <div className="border border-danger ">
                <div className="p-3">
                    <h4>মোট স্কুলঃ {props.participant.length}</h4>
                    <h4 className="pt-3">মোট শিক্ষার্থীঃ {total}</h4>
                    <div>
                        {
                            participant.map(selectSchool => <SelectSchool
                                key={selectSchool.key}
                                selectSchool={selectSchool}
                            >
                            </SelectSchool>)
                        }
                    </div>
                </div>
            </div>

            <div className="border border-danger ">
                <div className="p-3">
                    <h5>
                        Note: স্কুলের নাম অনুযায়ী গুগলের তেমন কোন ছবি পাওয়া যায়নি, তাই রেনডম ছবি ব্যবহার করা হয়েছে
                    </h5>
                </div>
            </div>
        </div>
    );
};

export default Participant;