import React from 'react';

const Banner = () => {
    return (
        <div className="border bg-light">
            <div className="text-center">
                <h1 className="pt-4"> <span className="text-success">বিজয়</span>  <span className="text-danger">আমার</span> <span className="text-success">অহংকার</span></h1>
                <h5><span className="text-success"> ১৬-ডিসেম্বর </span> মহান বিজয় দিবস <span className="text-danger"> ২০২১ </span> উপলক্ষে কুচকাওয়াজ ও প্যারেড</h5>
                <h5>অনুষ্ঠানে অংশগ্রহণকারী স্কুলের লিস্ট</h5>
                <h3 className="pb-3">অনুষ্ঠানে অংশগ্রহণকারী শিক্ষার্থী সংখ্যাঃ <span className="text-success">২,৫০০ জন</span></h3>
            </div>
        </div>
    );
};

export default Banner;