import Image from "next/image";
import landingPageImg from '../../../public/images/landingpage.gif'
import { GrSecure } from "react-icons/gr";

const LandingUI = () => {
    return (
        <>
            <section className="min-h-screen flex flex-col items-center justify-center">
                <div className="container mx-auto p-4 flex flex-col md:flex-row items-center justify-between">
                    <div className="text-center md:text-left md:w-1/2">
                        <h4 className="text-4xl font-bold mb-4">Ready to grow</h4>
                        <h4 className="text-5xl uppercase font-bold mb-4">your prortfolio</h4>
                        <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                            Get Started
                        </button>
                    </div>
                    <div className="md:w-1/2 mt-6 md:mt-0">
                        <Image src={landingPageImg} height={200} width={400} alt="landing page" className="mx-auto" />
                    </div>
                </div>
                <div className="w-full mt-12">
                    <h5 className='text-center mb-8 text-3xl font-semibold'>We've got your back</h5>
                    <div className='flex flex-col md:flex-row justify-around'>
                        <div className="text-center md:w-1/4 p-4">
                            <GrSecure className='text-2xl mx-auto mb-2' />
                            <h6 className="font-bold mb-2">Secure</h6>
                            <p>One of our missions is to provide services securely so that our customers can use it without second thoughts.</p>
                        </div>
                        <div className="text-center md:w-1/4 p-4">
                            <GrSecure className='text-2xl mx-auto mb-2' />
                            <h6 className="font-bold mb-2">Real Time Data</h6>
                            <p>One of our missions is to provide services securely so that our customers can use it without second thoughts.</p>
                        </div>
                        <div className="text-center md:w-1/4 p-4">
                            <GrSecure className='text-2xl mx-auto mb-2' />
                            <h6 className="font-bold mb-2">Responsive</h6>
                            <p>One of our missions is to provide services securely so that our customers can use it without second thoughts.</p>
                        </div>
                        <div className="text-center md:w-1/4 p-4">
                            <GrSecure className='text-2xl mx-auto mb-2' />
                            <h6 className="font-bold mb-2">Blazing Fast</h6>
                            <p>One of our missions is to provide services securely so that our customers can use it without second thoughts.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default LandingUI;
