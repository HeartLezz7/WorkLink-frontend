import React from 'react';
import { useState } from 'react';
import Loading from "../../Loading/Loading";
import { useRef } from 'react';
import { useEffect } from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';

export default function DepositCheckModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    // const [input, setInput] = useState({ adminDescription: admin.adminDescription || "" });

    const handleChangeInput = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }
    const [input, setInput] = useState("");
    const reject = () => {
        console.log("Reject");
        setIsOpen(false);
    }

    return (

        <>
            {loading && <Loading />}
            <div onClick={() => setIsOpen(true)}>AAA</div>
            {isOpen &&
                <>
                    < div className="fixed inset-0 bg-black/70 z-[30]" ></ div>
                    <div className="fixed z-[30] min-h-full inset-0 flex justify-center items-center">
                        <form
                            className="px-16 py-5 rounded-3xl bg-background relative w-[800px] flex flex-col justify-center items-center gap-5"
                        // onSubmit={handleSubmitForm}
                        >

                            <div
                                onClick={() => setIsOpen(false)}
                                className="absolute top-3 right-3"
                            >
                                <img
                                    src="/icons/closeIcon.svg"
                                    className="w-[30px] aspect-square object-cover place-content-center hover:bg-textGrayLight bg-textGrayLight/50 rounded-full cursor-pointer"
                                />
                            </div>
                            <div className="text-primary text-3xl font-semibold w-full text-center py-2">
                                Deposit
                            </div>
                            <main className="w-full flex flex-col items-center gap-[15px]">
                                <div
                                    onMouseEnter={() => {
                                        setIsHover(true);
                                    }}
                                    onMouseLeave={() => {
                                        setIsHover(false);
                                    }}
                                    onClick={() => fileEl.current.click()}
                                    className="w-[300px] h-[350px] aspect-square rounded-md overflow-hidden border-2 border-textGrayDark cursor-pointer content-center relative whiteDivShadow"
                                >
                                    {false && (
                                        <div className="absolute w-full">

                                            <div>
                                                {/* <img src="" alt="" /> or <DepositUser/> */}
                                            </div>

                                        </div>
                                    )}
                                </div>
                                <div className='w-full '>
                                    <div className='flex gap-5 reletive'>
                                        <div className='flex gap-10 w-full'>
                                            <p className='font-bold'>Amount </p>

                                            <input
                                                type="text"
                                                // value={input.address}
                                                className=" border-2 p-2 border-primary w-[600px] outline-none rounded-md"
                                            />
                                        </div>
                                        <div className='absolute right-5'>THB</div>
                                    </div>
                                    <div className='flex gap-5 mt-5'>
                                        <p className='font-bold'>Comment</p>
                                        <textarea
                                            // name="adminDescription"
                                            // value={input.adminDescription}
                                            onChange={handleChangeInput}
                                            className="block w-[600px] outline-none resize-none border-2 border-primary p-2 rounded-md"
                                            rows="4"
                                            placeholder="Admin Description"
                                        />
                                    </div>
                                </div>
                            </main>

                            <div className="flex justify-center gap-5 w-full">
                                <button className="text-whitetext font-semibold bg-gradient-to-r from-gradiantPrimaryDark  to-gradiantPrimaryLight hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-gradiantPrimaryLight shadow-md shadow-primaryDark font-md rounded-lg text-2xl w-[80%] py-1.5 text-center place-content-center-center" onClick={() => setIsOpen(false)}>
                                    Confirm
                                </button>
                                <button className="text-primary font-semibold border-color-primary bg-white  focus:ring-2 focus:outline-none focus:ring-gradiantPrimaryLight shadow-md shadow-primaryDark font-md rounded-lg text-2xl w-[80%] py-1.5 text-center place-content-center-center" onClick={reject}>
                                    Reject
                                </button>
                            </div>
                        </form>
                    </div >
                </>

            }

        </>
    )
}
