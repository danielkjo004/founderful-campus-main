import Image from "next/image";
import WhileInView from '../../components/WhileInView';
import logo_full from "@/public/images/logo-full.svg"
import family from "@/public/images/family.svg"
import { ArrowRight } from "../../components/Icons"
import Link from "next/link";
import vector from "../../../../public/images/vectors/grey-separator.svg";
import Animation from "../../components/Animation";
import campus_1 from "../../../../public/images/illustrations/campus.jpg";
import { useEffect, useState } from "react";

const isValidEmail = (email: string): boolean => {
    // Add your email validation logic here
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

export default function SignUp() {
    const [loading, setLoading] = useState<boolean>(false);
    const [success, setSuccess] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    const [email, setEmail] = useState('');

    const Submit = async (event: any) => {
        event.preventDefault();

        setLoading(true);

        try {
            setLoading(true); // Set loading state to true

            const response = await fetch('/api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: email, js: true }),
            });


            if (response.ok) {
                // Handle success
                setSuccess(true);
                setError(false);
            } else {
                // Handle error
                setSuccess(false);
                setError(true);
            }
        } catch (error: any) {
            setError(true);
        } finally {
            setLoading(false); // Set loading state back to false, whether success or error
        }
    }

    // useEffect(() => {
    //     const submit = document.getElementById('submit')! as HTMLButtonElement;
    //     const error = document.getElementById('error')! as HTMLParagraphElement;
    //     const success = document.getElementById('success')! as HTMLParagraphElement;
    //     const email = document.getElementById('email')! as HTMLInputElement;

    //     const handleSubmit = async (event: MouseEvent) => {
    //         event.preventDefault();

    //         if (!email.value || !isValidEmail(email.value)) {
    //             setError(true);
    //         } else {
    //             // Clear previous messages
    //             setError(false);
    //             setSuccess(false);

    //             try {
    //                 setLoading(true); // Set loading state to true

    //                 const response = await fetch('/api/signup', {
    //                     method: 'POST',
    //                     headers: {
    //                         'Content-Type': 'application/json',
    //                     },
    //                     body: JSON.stringify({ email: email.value, js: true }),
    //                 });


    //                 if (response.ok) {
    //                     // Handle success
    //                     setSuccess(true);
    //                     setError(false);
    //                 } else {
    //                     // Handle error
    //                     setSuccess(false);
    //                     setError(true);
    //                 }
    //             } catch (error: any) {
    //                 setError(true);
    //             } finally {
    //                 setLoading(false); // Set loading state back to false, whether success or error
    //             }
    //         }
    //     };

    //     if (submit && error && success && email) {
    //         submit.addEventListener('mouseup', handleSubmit);

    //         return () => {
    //             submit.removeEventListener('mouseup', handleSubmit);
    //         };
    //     }
    // }, []);

    return (
        <div className="bg-[#000000] flex md:flex-row flex-col text-[#F1F1F1]">

            <div className="md:w-[50%] w-full md:h-auto h-[15rem] overflow-hidden">
                <WhileInView animChild="initial-slide-x-minus-250 slide-x-0 delay-0.2" className="object-fill h-full">
                    <Image src={campus_1} alt={"campus"} className="h-full w-full object-cover"></Image>
                </WhileInView>
            </div>

            <div className="md:w-[50vw] flex flex-col justify-end lg:p-10 p-5 lg:pt-[14em] items-baseline text-white">
                <WhileInView animChild="-initial-slide-x-250 slide-x-0 delay-0.5">
                    <h4 className="sm:text-4xl mb-[0.8em] text-white">
                        <span className="handwritten text-xl align-[-4px] mr-2">SIGN UP</span> for the latest
                    </h4>
                </WhileInView>
                <WhileInView animChild="-initial-slide-x-250 slide-x-0 delay-0.5">
                    <p className="lg:max-w-[32em]">Our quarterly newsletter is your go-to source for updates, insights and activities on Swiss campuses.</p>
                </WhileInView>
                <WhileInView animChild="-initial-slide-x-250 slide-x-0 delay-0.5" className="w-full flex flex-col">
                    <div className="flex items-center">
                        <form onSubmit={Submit} className="flex flex-row custom-input">
                            <input type="email" placeholder="Your Email" id="email" className="text-white w-full" required value={email} onChange={(e) => setEmail(e.target.value)} />
                            <button type="submit" id="submit" className="flex justify-end">
                                <ArrowRight color={'#fff'} />
                            </button>
                        </form>
                        <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg" className={`loading-circle ${loading ? 'visible' : 'hidden'} items-center h-fit w-fit`} >
                            <circle cx="16" cy="16" r="10" stroke="white" strokeWidth="2" fill="none" offset={1} />
                        </svg>
                    </div>
                    <div>
                        <p id="error" className={`error ${error ? 'visible' : 'hidden'} text-red-500`}>An error has occurred</p>
                        <p id="success" className={`success ${success ? 'visible' : 'hidden'} text-green-500`}>SignUp successful</p>
                    </div>
                </WhileInView>
            </div >

        </div >
    );
}
