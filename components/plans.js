import React from 'react';
import ServiceTabs from './servicetabs';
const Plans = () => {
    return (
        <div className=' w-full h-fit pb-20 mt-40'>
            <h1 className=' text-4xl text-[#081E29] font-bold text-center'>Health Check Up Plans</h1>
            <p className=' mt-10   font-semibold text-md  text-center'>They live in Bookmarksgrove right at  the coast of the
                Semantics, <br /> a large language ocean named flows.</p>
            <ServiceTabs />

        </div>
    );
}

export default Plans;
