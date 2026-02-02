

import Carousel from '@/components/home/carousel';
import Hero from '@/components/home/hero';
import InfoSection from '@/components/home/info-section';
import FrontendLayout from '@/layouts/frontend-layout';

import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';

const carouselData = [
    {
        banner_image: '/img/banner/banner_1.webp',
        title: 'BFI',
        bottom_sub_title: 'EDUCATION SERVIES',
        top_sub_title: '9 Group of Schools',
    },
    {
        banner_image: '/img/banner/banner_2.webp',
        title: 'Inspiring Brilance',
        bottom_sub_title: 'Building Brighter Futures.',
        top_sub_title: '90% Foreign Teachers',
    },
    {
        banner_image: '/img/banner/banner_1.webp',
        title: 'WORLD-CLASS EDUCATION IN A',
        bottom_sub_title: 'SAFE AND FRIENDLY ENVIRONMENT',
        top_sub_title: 'The IB Diploma Programme',
    },
];
export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link
                    href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600"
                    rel="stylesheet"
                />
                <meta name="description" content="Welcome to Misa, the best education center in Mandalay offering global standards." />
                <meta name="keywords" content="Education, School, Mandalay, MISA" />
            </Head>

            <FrontendLayout>

                <Carousel />
                <Hero />
                <InfoSection />
                <div className="flex w-full h-screen flex-col items-center justify-center opacity-100 transition-opacity duration-750 lg:grow">
                </div>
            </FrontendLayout>
        </>
    );
}
