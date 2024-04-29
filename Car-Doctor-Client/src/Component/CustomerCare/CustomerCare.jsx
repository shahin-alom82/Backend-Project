

const CustomerCare = () => {
    return (
        <div>

            <div>

                <div>
                    <h1 className="text-center text-4xl font-bold mt-20 text-black">What Customer Says</h1>
                    <p className="text-center mt-4 text-xl text-gray-700">the majority have suffered alteration in some form, by injected humour, or randomised
                        <br />words which dont look even slightly believable.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-6">


                    <div className="relative flex w-full max-w-[26rem] flex-col p-4 rounded-xl bg-transparent bg-clip-border shadow-none mx-auto">
                        <div className="relative mx-0 mt-4 flex items-center gap-4 overflow-hidden rounded-xl bg-transparent bg-clip-border pt-0 pb-8 text-gray-700 shadow-none">
                            <img
                                src="https://i.ibb.co/MMw8bPD/yyyyy.png"
                                className="relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center"
                            />
                            <div className="flex w-full flex-col gap-0.5">
                                <div className="flex items-center justify-between">
                                    <h5 className="block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                                        Yeasin Ahmed
                                    </h5>
                                    <div className="5 flex items-center gap-0">
                                        {[...Array(5)].map((_, index) => (
                                            <svg
                                                key={index}
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                                aria-hidden="true"
                                                className="h-5 w-5 text-[#FF912c]"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                                    clipRule="evenodd"
                                                ></path>
                                            </svg>
                                        ))}
                                    </div>
                                </div>
                                <p className="block font-sans text-base font-light leading-relaxed text-blue-gray-900 antialiased">
                                    Businessman
                                </p>
                            </div>
                        </div>
                        <div className="mb-6 p-0">
                            <p className="font-sans text-gray-700">
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.
                            </p>
                        </div>
                    </div>


                    <div className="relative flex w-full max-w-[26rem] flex-col  p-4   rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none mx-auto">
                        <div className="relative mx-0 mt-4 flex items-center gap-4 overflow-hidden rounded-xl bg-transparent bg-clip-border pt-0 pb-8 text-gray-700 shadow-none">
                            <img
                                src="https://i.ibb.co/2sZ00Jm/ssss.png"
                                alt="tania andrew"
                                className="relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center"
                            />
                            <div className="flex w-full flex-col gap-0.5">
                                <div className="flex items-center justify-between">
                                    <h5 className="block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                                        Shahin Alom
                                    </h5>
                                    <div className="5 flex items-center gap-0">
                                        {[...Array(5)].map((_, index) => (
                                            <svg
                                                key={index}
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                                aria-hidden="true"
                                                className="h-5 w-5 text-[#FF912c]"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                                    clipRule="evenodd"
                                                ></path>
                                            </svg>
                                        ))}
                                    </div>
                                </div>
                                <p className="block font-sans text-base font-light leading-relaxed text-blue-gray-900 antialiased">
                                    Businessman
                                </p>
                            </div>
                        </div>
                        <div className="mb-6 p-0">
                            <p className="font-sans text-gray-700">
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};



export default CustomerCare;