import React from 'react';
import { useState } from 'react';
import Loading from "../../Loading/Loading";

export default function WithdrawCheckModal({ onclose }) {
    // const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(false);


    //const [input, setInput] = useState({ adminDescription: admin.adminDescription || "" });

    const handleSubmitForm = async (e) => {
        try {
            e.preventDefault();
            await axios.patch('admin/withdrawconfirmtransaction')
        } catch (error) {
            console.log(error);
        }
    }
    const handleChangeInput = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    const [input, setInput] = useState({

    });

    const reject = () => {
        console.log("Reject");
        setIsOpen(false);
    }


    return (
        <>
            {loading && <Loading />}
            {/* <div onClick={() => setIsOpen(true)}>BBB</div> */}

            {/* {isOpen && */}
            <>
                < div className="fixed inset-0 bg-black/70 z-[30]" ></ div>
                <div className="fixed z-[30] min-h-full inset-0 flex justify-center items-center">
                    <form
                        className="px-16 py-5 rounded-3xl bg-background relative w-[800px] flex flex-col justify-center items-center gap-5"
                        onSubmit={handleSubmitForm}
                    >

                        <div
                            onClick={() => onclose(false)}
                            className="absolute top-3 right-3"
                        >
                            <img
                                src="/icons/closeIcon.svg"
                                className="w-[30px] aspect-square object-cover place-content-center hover:bg-textGrayLight bg-textGrayLight/50 rounded-full cursor-pointer"
                            />
                        </div>
                        <div className="text-primary text-3xl font-semibold w-full text-center py-2">
                            Withdraw
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
                                className="w-[300px] h-[400px] aspect-square rounded-md overflow-hidden border-2 border-textGrayDark cursor-pointer content-center relative whiteDivShadow"
                            >
                                {false && (
                                    <div className="absolute w-full">

                                        <div>
                                            <img src="" alt="" />
                                        </div>

                                    </div>
                                )}
                            </div>
                            <div className='w-full '>
                                <div className='flex flex-col'>
                                    <div className='flex gap-20 font-bold'>
                                        <p className=''>Bank Name :</p>
                                        <p className='text-primary text-xl'>John Doe</p>
                                    </div>
                                    <div className='flex gap-10 font-bold mt-5'>
                                        <p className=''>Book Account Number :</p>
                                        <p className='text-primary text-xl'>001234567890099</p>
                                    </div>

                                </div>
                                <div className='flex gap-5 reletive mt-5'>
                                    <div className='flex gap-10 font-bold w-full'>
                                        <p>Amount :</p>
                                        {/* 
                                    <input
                                        type="text"
                                        // value={input.address}
                                        className=" border-2 p-2 border-primary w-[600px] outline-none rounded-md"
                                    /> */}
                                        <p className='text-primary text-xl'> 1000 </p>
                                    </div>
                                    <div className='absolute right-5'>THB</div>
                                </div>
                                <div className='flex gap-5 font-bold mt-5'>
                                    <p>Comment</p>
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
                            <button className="text-textWhite font-semibold bg-gradient-to-r from-gradiantPrimaryDark  to-gradiantPrimaryLight hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-gradiantPrimaryLight shadow-md shadow-primaryDark font-md rounded-lg text-2xl w-[80%] py-1.5 text-center place-content-center-center" >
                                Confirm
                            </button>
                            <button className="text-primary font-semibold border-color-primary bg-white  focus:ring-2 focus:outline-none focus:ring-gradiantPrimaryLight shadow-md shadow-primaryDark font-md rounded-lg text-2xl w-[80%] py-1.5 text-center place-content-center-center"
                            //  onClick={reject}
                            >
                                Reject
                            </button>
                        </div>
                    </form>
                </div>
            </>
            {/* } */}

        </>
    )
}
