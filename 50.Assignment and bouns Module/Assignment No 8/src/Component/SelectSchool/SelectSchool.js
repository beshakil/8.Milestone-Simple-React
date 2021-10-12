import React from 'react';

const SelectSchool = (props) => {
    const { shoolName } = props.selectSchool

    return (
        <div className="border border-success pt-3 ps-2 mt-2">
            <h4><span className="text-success">স্কুলের নামঃ</span> <small>{shoolName}</small></h4>
        </div>
    );
};

export default SelectSchool;