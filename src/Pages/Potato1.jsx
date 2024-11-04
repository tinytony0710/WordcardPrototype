import React, { useState, useEffect } from "react";

import Potato from "../img/Potato.webp";
import { uploadJson } from "../Tools/FileTransfer";
import { UploadButton } from "../Components/Button";



function Potato1() {

    const [havePhoto, setHavePhote] = useState(false)
    const [textCount, setTextCount] = useState(0)
    const [inputStr, setInputStr] = useState("")

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

        setTextCount(preState => {console.log(preState); return preState+1})
        await sleep(1000)
        setTextCount(preState => {console.log(preState); return preState+1})
	}

    // 如果 originalData 有變化就執行
	useEffect(() => {

        const asyncfunc = async () => {

            // You can await here
            await sleep(1000)
            setTextCount(preState => {console.log(preState); return preState+1})
            // await sleep(2000)
            // setTextCount(preState => {console.log(preState); return preState+1})
            // await sleep(2000)
            // setTextCount(preState => {console.log(preState); return preState+1})
            // ...
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
                {(textCount >= 1) && <div className="relative w-full h-[55px]"><div className="absolute right-12 left-2 px-2 bg-slate-200 border-slate-600 border-2 rounded-lg">
                    Did you know that potatoes are one of the most <b className="text-red-600">versatile</b> <b className="text-red-600">tubers</b>?
                </div></div>}
                {(textCount >= 2) && <div className="relative w-full h-8"><div className="absolute right-2 left-12 px-2 col-content-box-6 bg-slate-200 border-slate-600 border-2 rounded-lg">{inputStr}</div></div>}
                {(textCount >= 3) && <div className="relative w-full h-8"><div className="absolute right-12 left-2 px-2 col-content-box-4 bg-slate-200 border-slate-600 border-2 rounded-lg">......</div></div>}
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
                    <span>SEND</span>
                </button>
                {/* <label className="absolute right-0 bottom-0 button cursor-pointer">
                    SEND
                    <input
                        type="file"
                        // accept={accept}
                        // onChange={onChange}
                        style={{ display: "none" }}
                    />
                </label> */}
            </div>
            </>
            }
        </div>
    );
}



export default Potato1;