import React from 'react'

function P404() {
    return (
        <section className="bg-primary py-[120px] relative z-10">
            <div className="container">
                <div className="flex justify-center">
                    <div className="w-full">
                        <div className="mx-auto w-full text-center">
                            <h2 className=" font-bold  text-[#271646] mb-2 text-[50px] sm:text-[80px] md:text-[100px] leading-none " >404</h2>
                            <h4 className="text-[#271646] font-semibold text-[22px] leading-tight mb-3" > Oops! That page can’t be found </h4>
                            <p className="text-lg text-[#271646] mb-8"> The page you are looking for it maybe deleted </p>
                            <a href="/dashboard" className="text-base font-semibold text-[#271646] inline-block text-center  border border-[#271646] rounded-lg px-8 py-3 hover:bg-purple-200 hover:text-primary transition " >
                                Go To Home
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default P404