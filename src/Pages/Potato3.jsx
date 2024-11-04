import React, { useState, useEffect } from "react";

import Potato from "../img/Potato.webp";
import { uploadJson } from "../Tools/FileTransfer";
import { UploadButton } from "../Components/Button";



function Potato1() {

    const [havePhoto, setHavePhote] = useState(false)
    const [textCount, setTextCount] = useState(0)
    const [inputStr, setInputStr] = useState("")
    const [sprout, setSprout] = useState(false)
    const [stolon, setStolon] = useState(false)

	// input box event
	const handleInputChange = e => {

		const content = e.target.value
		setInputStr(content)
	}

    // upload event
	const handleUpload = e => {

		uploadJson(e, () => {})
        setHavePhote(true)
	}
    const sleep = async ms => await new Promise(r => setTimeout(r, ms))
    const handleClick = async e => {

        if(inputStr == "sprout" || inputStr == "sprouts") setSprout(true)
        if(inputStr == "stolon" || inputStr == "stolons") setStolon(true)
	}

    // 如果 originalData 有變化就執行
	useEffect(() => {

        const asyncfunc = async () => {

            // You can await here
            await sleep(1000)
            setTextCount(preState => {console.log(preState); return preState+1})
        }

		if(havePhoto) {
            asyncfunc()
		}

	}, [havePhoto])

    return(
        <div className="relative w-full h-full col-content-box-2">

            {(!havePhoto && <div className="row-content-box-5 w-full pt-3">
				{<UploadButton
					displayText="上傳"
					accept=".json"
					onChange={handleUpload}
				/>}
			</div>) ||
            <>
            <img src={Potato} alt="" className="h-[25%] pt-3"/>
			

            <div className="mt-4 w-full h-full col-content-box-2">
                {(textCount >= 0) && <div className="relative w-full h-full"><div className="absolute right-2 left-2 px-2 bg-slate-200 border-slate-600 border-2 rounded-lg overflow-auto max-h-[80%]">
                    Potato growth can be divided into five phases. During the first phase, {(sprout && <span>sprouts</span>) || <span>███████</span>} emerge from the seed potatoes and root growth begins. During the second, {(false && <span>photosynthesis</span>) || <span>██████████████</span>} begins as the plant develops leaves and branches above-ground and {(stolon && <span>stolons</span>) || <span>███████</span>} develop from lower leaf axils on the below-ground stem. In the third phase the tips of the {(false && <span>stolons</span>) || <span>███████</span>} swell, forming new tubers, and the shoots continue to grow, with flowers typically developing soon after. Tuber {(false && <span>bulking</span>) || <span>███████</span>} occurs during the fourth phase, when the plant begins investing the majority of its resources in its newly formed tubers. At this phase, several factors are critical to a good yield: optimal soil {(false && <span>moisture</span>) || <span>████████</span>} and temperature, soil nutrient availability and balance, and resistance to pest attacks. The fifth phase is the maturation of the tubers: the leaves and stems senesce and the tuber skins harden.
                </div></div>}
            </div>

            
            <div className="row-content-box-5 w-full relative">
                <textarea
                    className="block p-2.5 absolute w-[80%] flex-auto left-0 bottom-0 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Chatting..."
                    rows="1"
                    value={inputStr}
                    onChange={handleInputChange}
                ></textarea>


                <button className="button absolute right-0 bottom-0" onClick={handleClick}>
                    <span>GUESS</span>
                </button>
            </div>
            </>
            }
        </div>
    );
}



export default Potato1;