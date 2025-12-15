import Link from 'next/link';
import React from 'react';

const NotFound404 = () => {
    return (
        <div className=' flex flex-col items-center justify-center min-h-screen'>
            <h1 className=' text-2xl font-bold text-center'>404 Not Foud This Pages</h1>
            <Link href={"/"} className=' underline  '>Go Home</Link>
        </div>
    );
};

export default NotFound404;