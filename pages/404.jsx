import Head from 'next/head';

const NotFound = () => {
    return (
        <div className='flex flex-col w-screen h-screen'>
            <Head>
                <title>Page Not Found</title>
            </Head>
            <div className="flex bg-banner bg-cover w-full h-6 bg-top" />
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <h1 className='uppercase animate-fadeslow'>Whoops, Page Not Found</h1>
                <p className='uppercase tracking-widest text-[9px] animate-fadeslow'>I am probably not done with this project. Come back later!</p>
            </div>
        </div>
    );
};

export default NotFound;