import React from 'react'
import Head from 'next/head'

export default function sendstack() {
    return (
        <div className="flex flex-col items-center min-h-screen py-2 bg-[#0a191d] text-white">
            <Head>
                <title>Sendstack clone</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
            </Head>
            {/* BG Pattern Image */}
            <img className="h-auto w-full absolute opacity-60" src="/hero-pattern.png"/>
            {/* Header Section */}
            <header className="relative w-full mx-auto px-20 flex flex-row justify-between items-center py-4">
                <div>
                    {/* <span className="font-bold">SendStack</span> */}
                    {/* Logo SVG */}
                    <svg className="h-10 w-auto" viewBox="0 0 500 131" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M95.054 99.349L47.957 130.083L0.860001 99.349L47.957 68.614L95.054 99.349Z" fill="#2B7D6D" />
                        <path d="M0.860001 30.818V65.084L30.386 47.951L0.860001 30.818Z" fill="#86C6B6" />
                        <path d="M95.054 99.349V65.084L65.528 82.216L95.055 99.349H95.054Z" fill="#459480" />
                        <path d="M95.054 65.084L47.957 95.818L0.860001 65.084L47.957 34.349L95.054 65.084Z" fill="#55AA97" />
                        <path d="M95.054 30.818L47.957 61.553L0.860001 30.818L47.957 0.0830002L95.054 30.818V30.818Z" fill="#C3F0E8" />
                        <path d="M128.969 74.538H139.521C139.521 79.353 143.415 82.186 148.16 82.186C153.188 82.186 155.667 79.991 155.667 77.017C155.667 66.324 130.456 75.601 130.456 55.56C130.456 47.77 136.9 40.972 147.664 40.972C155.737 40.972 165.227 45.363 165.227 57.543H154.604C154.604 53.648 151.913 50.745 147.381 50.745C142.849 50.745 141.007 53.224 141.007 55.56C141.007 64.837 166.501 56.623 166.501 77.088C166.501 85.586 159.42 92.384 147.806 92.384C136.9 92.384 128.969 85.373 128.969 74.539V74.538ZM171.455 72.838C171.455 61.153 180.094 53.222 190.504 53.222C201.977 53.222 209.129 61.72 209.129 72.767V75.387H182.077C182.148 80.273 185.759 83.247 190.646 83.247C194.045 83.247 197.303 81.902 198.719 78.786L207.925 80.91C205.234 89.266 198.011 92.382 190.788 92.382C179.386 92.382 171.455 84.097 171.455 72.837V72.838ZM198.719 68.518C198.223 64.764 194.895 61.79 190.504 61.79C185.688 61.79 182.644 65.189 182.148 68.518H198.719ZM215.853 54.143H226.192V57.542H226.9C228.6 55.134 231.645 53.222 235.965 53.222C243.825 53.222 249.066 59.1 249.066 66.394V91.463H238.727V69.722C238.727 65.969 236.177 63.207 232.565 63.207C228.812 63.207 226.192 66.039 226.192 69.792V91.462H215.853V54.142V54.143ZM255.082 72.768C255.082 61.862 262.305 53.223 271.936 53.223C277.672 53.223 280.788 55.772 282.558 57.968H283.337V38.351H293.676V91.463H283.337V87.993H282.558C280.788 90.33 277.813 92.384 272.502 92.384C262.872 92.384 255.082 83.957 255.082 72.768ZM283.479 72.839C283.479 66.678 279.372 63.066 274.485 63.066C269.457 63.066 265.562 66.961 265.562 72.839C265.562 78.717 269.599 82.611 274.556 82.611C279.938 82.611 283.479 78.079 283.479 72.839V72.839ZM299.692 74.538H310.244C310.244 79.353 314.138 82.186 318.883 82.186C323.911 82.186 326.39 79.991 326.39 77.017C326.39 66.324 301.179 75.601 301.179 55.56C301.179 47.77 307.624 40.972 318.387 40.972C326.46 40.972 335.95 45.363 335.95 57.543H325.327C325.327 53.648 322.636 50.745 318.104 50.745C313.572 50.745 311.73 53.224 311.73 55.56C311.73 64.837 337.225 56.623 337.225 77.088C337.225 85.586 330.143 92.384 318.529 92.384C307.624 92.384 299.692 85.373 299.692 74.539V74.538ZM347.985 79.92V63.278H341.824V54.143H348.693V43.945H358.324V54.143H368.238V63.278H358.324V79.849C358.324 81.478 358.961 82.186 360.661 82.186H367.813V91.463H359.669C352.163 91.463 347.985 88.064 347.985 79.92V79.92ZM373.547 72.768C373.547 61.508 381.124 53.223 390.685 53.223C395.429 53.223 398.828 55.064 401.023 57.614H401.803V54.144H412.142V81.267C412.142 82.258 412.85 82.825 413.841 82.825H415.329V91.465H405.98C403.573 91.465 401.874 89.624 401.874 87.499H401.094C399.111 90.332 396.137 92.385 390.755 92.385C381.195 92.385 373.547 83.958 373.547 72.769V72.768ZM401.944 72.839C401.944 66.678 397.837 63.208 392.951 63.208C387.993 63.208 384.028 66.961 384.028 72.839C384.028 78.717 388.064 82.47 393.021 82.47C398.403 82.47 401.944 78.079 401.944 72.839ZM420.636 72.838C420.636 61.932 428.284 53.222 440.04 53.222C449.104 53.222 456.398 58.037 458.806 67.385L449.246 69.793C448.112 65.544 444.713 63.065 440.323 63.065C434.657 63.065 431.117 67.314 431.117 72.838C431.117 78.291 434.728 82.54 440.323 82.54C444.713 82.54 448.042 80.132 449.175 76.025L458.806 78.362C456.469 87.639 449.104 92.384 440.04 92.384C428.284 92.384 420.636 83.603 420.636 72.839V72.838ZM465.53 38.351H475.869V66.677H478.985L487.058 54.143H499.309L487.908 70.785V71.564L499.875 91.463H487.554L479.197 76.167H475.869V91.463H465.53V38.351V38.351Z" fill="white" />
                    </svg>
                </div>
                <nav>
                    <ul className="flex flex-row divide-x divide-gray-600 tracking-widest text-sm">
                        <li className="px-4">About</li>
                        <li className="px-4">Company</li>
                        <li className="px-4">FAQ</li>
                        <li className="px-4">Contact</li>
                    </ul>
                </nav>
                <button className="flex flex-shrink-0 items-center px-6 py-2 border border-gray-600 rounded-full space-x-4 text-sm">
                    <span>Explore</span>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                </button>
            </header>
            <main className="relative w-full mx-auto px-20 flex flex-col">
                {/* Hero Section */}
                <section className="flex flex-col h-[90vh] justify-center">
                    <div className="flex flex-col space-y-6">
                        <h1 className="text-8xl font-bold">
                            <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#4ec6d7] via-[#2acba3] to-[#33a0af]">Stop spying,</span><br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#4ec6d7] via-[#2acba3] to-[#33a0af]">start sending.</span>
                        </h1>
                        <p className="text-xl text-gray-400">
                            Respect your readers with the ethical email newsletter <br />
                            platform that puts people's privacy first.
                        </p>
                        <div className="flex flex-row space-x-4">
                            <button className="px-4 py-2 rounded-full bg-gradient-to-b from-[#a5ecff] via-[#67defd] to-[#54daff] text-gray-800 font-medium"> Start free trial</button>
                            <button className="flex flex-shrink-0 items-center px-6 py-2 border border-gray-600 rounded-full space-x-2 text-sm">
                                <span>Learn more</span>
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                            </button>
                        </div>
                    </div>
                </section>
                {/* Privacy Section */}
                <section className="flex flex-col space-y-5 min-h-screen">
                    <h2 className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-br from-[#4ec6d7] via-[#2acba3] to-[#33a0af]">Privacy first,at last</h2>
                    <p className="text-gray-300 max-w-lg">
                        For too long, companies and individuals have been
                        sending email newsletters that invade people's privacy
                    </p>
                    <p className="text-gray-500 max-w-lg">
                        Spy trackers,click tracking and targeted drip campaigns are
                        used and abused without your customer's consent.
                    </p>
                    <p className="text-gray-500 max-w-lg">
                        But times are changing. And your subscribers are tired of being
                        tracked and tricked.So join the SendStack movement - and start
                        sending ethical editorial emails today.
                    </p>
                </section>
            </main>
        </div>
    )
}
