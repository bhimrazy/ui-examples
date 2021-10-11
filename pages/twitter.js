import React, { useState } from 'react'

export default function twitter() {
    const [active, setActive] = useState(null)
    const [follow, setFollow] = useState([])
    const data = [
        {
            "name": "Elon Musk",
            "username": "elonmusk",
            "profile-image": "https://pbs.twimg.com/profile_images/1442634650703237120/mXIcYtIs_400x400.jpg",
            "about": "Mad respect for the makers",
            "following": "106",
            "followers": "59.2M",
        },
        {
            "name": "Andrew Trask",
            "username": "iamtrask",
            "profile-image": "https://pbs.twimg.com/profile_images/1414522971037765636/889M9qeA_400x400.jpg",
            "about": "@OpenMinedOrg leader @DeepMind senior research scientist @UniofOxford phd student @UN privacy task team @Manning author @Udacity instructor",
            "following": "784",
            "followers": "61.8k",
        },
        {
            "name": "Andrew Ng",
            "username": "AndrewYNg",
            "profile-image": "https://pbs.twimg.com/profile_images/733174243714682880/oyG30NEH_400x400.jpg",
            "about": "Co-Founder of Coursera; Stanford CS adjunct faculty. Former head of Baidu AI Group/Google Brain. #ai #machinelearning, #deeplearning #MOOCs",
            "following": "579",
            "followers": "605.8k",
        },
    ]

    const handleButton = (id) => {
        if (follow.includes(id)) {
            setFollow(follow.filter(i => i != id))
        }
        else {
            setFollow([...follow, id])
        }
    }
    return (
        <div className="flex flex-col items-center justify-center w-full font-poppins pt-20">
            <h1 className="font-bold text-2xl py-8">Twitter Ui Example</h1>
            <div className="bg-gray-50 w-1/2 max-w-lg rounded-2xl shadow-sm">
                <h3 className="text-xl font-semibold px-10 py-6">Who to follow</h3>
                <div className="flex flex-col w-full" onMouseLeave={() => { setActive(null) }}>
                    {data && data.map((user, id) => (
                        <div key={id} className="flex flex-row space-x-4 items-center justify-between cursor-pointer hover:bg-gray-100 w-full px-10 py-4 relative">
                            <div className="flex flex-row space-x-2 items-center">
                                <img className="h-12 w-12 rounded-full object-center " loading="eager" src={user['profile-image']} />
                                <div className="flex flex-col">
                                    <div className="flex flex-row items-center space-x-1">
                                        <span onMouseOver={() => { setActive(id) }} className="text-gray-800 text-lg font-medium whitespace-nowrap hover:underline">
                                            {user.name}
                                        </span>
                                        <img className="h-4 w-4" loading="eager" src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Twitter_Verified_Badge.svg" />
                                    </div>
                                    <small className="text-gray-600">
                                        @{user.username}
                                    </small>
                                </div>
                            </div>
                            <button onClick={() => { handleButton(id) }} className={`${follow.includes(id) ? 'bg-gray-50 border hover:bg-red-300 hover:text-red-500' : 'bg-gray-900 hover:bg-gray-900/90 transition-all text-white'} focus:outline-none rounded-full px-5 py-2 font-medium text-sm`}>
                                {follow.includes(id) ? "Following" : "Follow"}
                            </button>
                            {/* On MouseHover Display */}
                            {active === id &&
                                <div onMouseLeave={() => { setActive(null) }} className="absolute w-96 top-10 z-50 flex bg-white rounded-2xl shadow-md p-4">
                                    <div className="flex flex-col space-y-1 w-full">
                                        <div className="flex flex-row justify-between">
                                            <img className="h-14 w-14 rounded-full object-center " loading="eager" src={user['profile-image']} />
                                            <div><button onClick={() => { handleButton(id) }} className={`${follow.includes(id) ? 'bg-gray-50 border hover:bg-red-300 hover:text-red-500' : 'bg-gray-900 hover:bg-gray-900/90 transition-all text-white'} focus:outline-none rounded-full px-5 py-2 font-medium text-sm`}>
                                                {follow.includes(id) ? "Following" : "Follow"}
                                            </button></div>
                                        </div>
                                        <div className="flex flex-col">
                                            <div className="flex flex-row items-center space-x-1">
                                                <span className="text-gray-800 text-normal font-semibold whitespace-nowrap hover:underline">
                                                    {user.name}
                                                </span>
                                                <img className="h-4 w-4" loading="eager" src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Twitter_Verified_Badge.svg" />
                                            </div>
                                            <small className="text-gray-600">
                                                @{user.username}
                                            </small>
                                            <div className="space-y-1 pt-4">
                                                <p className="text-sm" >
                                                <span>{user.about.includes("#") && user.about.split("#")[0] }</span>
                                                {
                                                    user.about.includes("@") && 
                                                    user.about.split("@")
                                                    .slice(1)
                                                    .map(d => { 
                                                        const first = "@ " + d.split(' ')[0];
                                                        const second = d.replace(first,'');
                                                        return <span><span className="text-[#1DA1F2] px-1 hover:underline">{first}</span>{second} <br/></span>; 
                                                    })
                                                }{
                                                    user.about.includes("#") && 
                                                    user.about.split("#")
                                                    .slice(1)
                                                    .map(d => { 
                                                        return <span className="text-[#1DA1F2] break-normal hover:underline">{"# "+ d}</span>; 
                                                    })
                                                }
                                                </p>
                                                <div className="flex flex-row space-x-4 text-sm">
                                                    <span className="text-gray-600"><span className="font-semibold text-gray-800 pr-1">{user.following}</span>Following</span>
                                                    <span className="text-gray-600"><span className="font-semibold text-gray-800 pr-1">{user.followers}</span>Followers</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            }
                        </div>
                    ))}
                </div>
                <div className="cursor-pointer hover:bg-gray-100 w-full px-10 py-4">
                    <span className="text-[#1DA1F2]">Show more</span>
                </div>
            </div>
        </div>
    )
}
