import Title from '@/components/Title';
import Link from 'next/link';
import React from 'react';

const About = () => {
    return (
        <div>
            <Title>
                This is About Sectios
            </Title>
            <nav className=' space-x-5 bg-red-400'>
                  <Link href={"/about/teams"}>Teams</Link>
                <Link href={"/about/contact"}>Contact</Link>
            </nav>
        </div>
    );
};

export default About;