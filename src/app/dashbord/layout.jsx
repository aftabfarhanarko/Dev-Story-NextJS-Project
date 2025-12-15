import Link from 'next/link';
import React from 'react';

const layout = ({children}) => {
    return (
        <div className=' grid grid-cols-12 gap-10 min-h-screen'>
            <div className=' col-span-3 border-r-2 border-amber-600 flex flex-col gap-10'>
                <Link className=' bg-gray-500 py-3 px-5 mx-auto w-full rounded-xl text-center' href={"/dashbord/add-story"}>Add Story</Link>
                <Link className=' bg-gray-500 py-3 px-5 mx-auto w-full rounded-xl text-center' href={"/dashbord/my-profile"}>My Profile</Link>
                <Link className=' bg-gray-500 py-3 px-5 mx-auto w-full rounded-xl text-center' href={"/dashbord/settings"}>Settings</Link>
            </div>
            <div className=' col-span-9 '>
                {children}
            </div>
        </div>
    );
};

export default layout;