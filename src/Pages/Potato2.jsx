import React, { useState, useEffect } from "react";

import Potato from "../img/Potato.webp";
import Tuber from "../img/Tuber.jpg";
import { uploadJson } from "../Tools/FileTransfer";
import { UploadButton } from "../Components/Button";



function Potato2() {

    const [textState, setTextState] = useState(0)

    // upload event
	const handleUpload = e => {

        uploadJson(e, () => {})
        setTextState(1)
	}

    // upload event
	const handleClick = e => {

        setTextState(textState+1)
	}

    // upload event
	const handleBackClick = e => {

        setTextState((((textState+1)/2)-1)*2 - 1)
	}

    return(
        <div className="relative w-full h-full col-content-box-2">

            {(textState == 0 && 
                <div className="row-content-box-5 w-full pt-3">
                    {<UploadButton
                        displayText="上傳"
                        accept=".json"
                        onChange={handleUpload}
                    />}
                </div>) ||

                (<div className="relative w-full h-full col-content-box-2">
                    <div className="row-content-box-4 absolute left-0 right-0 top-0 min-h-[5%] bg-slate-300">
                        <div className="ml-4 text-2xl text-blue-600" onClick={handleBackClick}>&lt;</div>
                    </div>
                    {

                ((textState == 1 || textState == 2) && <div className="h-full w-full col-content-box-2">
                    <div className="h-[60%] w-full row-content-box-8">
                    <div className="mt-12w-full row-content-box-5">
                        <img src={Potato} alt="" className="w-[65%] flex-auto ml-4 mr-4" onClick={handleClick}/>
                        
                        {textState == 2 && <ol className="w-[30%] mr-2">
                            <li className="my-1 row-content-box-5 bg-slate-200 border-slate-600 border-2 rounded-lg" onClick={handleClick}>TUBER</li>
                            <li className="my-1 row-content-box-5 bg-slate-200 border-slate-600 border-2 rounded-lg">STARCH</li>
                            <li className="my-1 row-content-box-5 bg-slate-200 border-slate-600 border-2 rounded-lg">PEEKING</li>
                            <li className="my-1 row-content-box-5 bg-slate-200 border-slate-600 border-2 rounded-lg">MASHED</li>
                        </ol>}
                    </div>
                    </div>
                    <div className="mt-2">
                        <b>POTATO</b>&emsp;&emsp;&emsp;<b>馬鈴薯</b>
                    </div>
                    <div>
                        I baked a delicious <b>potato</b> casserole for dinner.
                    </div>
                </div>) || 

                
                ((textState == 3 || textState == 4) && <div className="h-full w-full col-content-box-2">
                <div className="h-[60%] w-full row-content-box-8">
                <div className="mt-12w-full row-content-box-5">
                    <img src={Tuber} alt="" className="w-[65%] flex-auto ml-4 mr-4" onClick={handleClick}/>
                    
                    {textState == 4 && <ol className="w-[30%] mr-2">
                        <li className="my-1 row-content-box-5 bg-slate-200 border-slate-600 border-2 rounded-lg">TUBER</li>
                        <li className="my-1 row-content-box-5 bg-slate-200 border-slate-600 border-2 rounded-lg">STARCH</li>
                        <li className="my-1 row-content-box-5 bg-slate-200 border-slate-600 border-2 rounded-lg">PEEKING</li>
                        <li className="my-1 row-content-box-5 bg-slate-200 border-slate-600 border-2 rounded-lg">MASHED</li>
                    </ol>}
                </div>
                </div>
                <div className="mt-2">
                    <b>TUBER</b>&emsp;&emsp;&emsp;<b>塊莖</b>
                </div>
                <div>
                    The sweet potato is a popular <b>tuber</b> known for its high nutritional value.
                </div>
                </div>)
                }</div>)
            }
        </div>
    );
}



export default Potato2;