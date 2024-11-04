import React, { useState, useEffect } from "react";

import Potato from "../img/Potato.webp";
import { uploadJson } from "../Tools/FileTransfer";
import { UploadButton } from "../Components/Button";

const cardboxData = [
	{
		id: 0, title: "test",
	},
	{
		id: 1, title: "測試",
	},
	{
		id: 2, title: "測測試",
	},
	{
		id: 3, title: "aaaaaaaaaaaaaaaaa",
	},
	{
		id: 4, title: "ok",
	},
];

function WouldCard() {

    const [havePhoto, setHavePhote] = useState(false)
    const [textCount, setTextCount] = useState(0)
    const [inputStr, setInputStr] = useState("")
    // const [sprout, setSprout] = useState(false)
    // const [stolon, setStolon] = useState(false)

    const [page, setPage] = useState(1)
    const [vocabulary, setVocabulary] = useState(1)
    const [sentence, setSentence] = useState(1)
    const [boxCount, setBoxCount] = useState(4)

    const mainpage = 1;
    const mainpageAddbox = 11;
    const cardboxpage = 12;
    const cardboxpageAddcard = 121;
    const cardboxpageConfirm = 1211;
    const cardboxpageStart = 122;
    const vocabularypage = 1221;
    const vocabularypageEnd = 12211;
    const sentencepage = 1222;
    const sentencepageEnd = 12221;
    const morepage = 2;
    const morepageGame1 = 21;
    const morepageGame2 = 22;
    const morepageGame3 = 23;
    const optionpage = 3;
    const optionpageStatics = 31;
    const optionpageSetting = 32;

    const vocabulary1 = 1;
    const vocabulary2 = 2;

    const sentence1 = 1;
    const sentence2 = 2;

	// input box event
	const handleInputChange = e => {

		const content = e.target.value
		setInputStr(content)
	}

    // upload event
	const handleUpload = e => {

		// uploadJson(e, () => {})
        // setHavePhote(true)
        setPage(cardboxpageConfirm)
	}
    const sleep = async ms => await new Promise(r => setTimeout(r, ms))
    // const handleClick = async e => {

    //     if(inputStr == "sprout" || inputStr == "sprouts") setSprout(true)
    //     if(inputStr == "stolon" || inputStr == "stolons") setStolon(true)
	// }

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

    useEffect(() => {

        const asyncfunc = async () => {

            // You can await here
            await sleep(1000)
            setTextCount(preState => {console.log(preState); return preState+1})
        }

		if(vocabulary > vocabulary2) {
            setPage(vocabularypageEnd)
            setVocabulary(0)
		}

	}, [vocabulary])

    const CardboxItem = ({title="unknown"}) => {
	
        return(
            <div className="mx-2 mt-4 text-2xl text-white bg-gray-600 border-2 border-blue-200 px-4 py-2 rounded-lg hover:bg-gray-700" onClick={e=>setPage(cardboxpage)}>
                {title}
            </div>
        )
    }

    const cardboxList = cardboxData.map((game, index) => {
        // console.log(index, " and ", boxCount)
		if(index >= boxCount) return
		return (
			<CardboxItem
				key={game.id}
				title={game.title}
			/>
		)
	}).reverse()

    return(
        <div className="relative w-full h-full col-content-box-2">

            {(page==mainpageAddbox &&
            <header id="header_" className="absolute top-0 px-4 py-1 flex w-full bg-gradient-to-b from-cyan-900 to-gray-900 text-white justify-end">
                <button className="text-lg text-white" onClick={e=>setPage(mainpage)}>X</button>
            </header>) ||
            (page==cardboxpage &&
            <header id="header_" className="absolute top-0 px-4 py-1 flex w-full bg-gradient-to-b from-cyan-900 to-gray-900 text-white">
                <button className="text-lg text-white" onClick={e=>setPage(mainpage)}>&lt;</button>
            </header>) ||
            ((page==cardboxpageAddcard||page==cardboxpageConfirm) &&
            <header id="header_" className="absolute top-0 px-4 py-1 flex w-full bg-gradient-to-b from-cyan-900 to-gray-900 text-white justify-end">
                <button className="text-lg text-white" onClick={e=>setPage(cardboxpage)}>X</button>
            </header>) ||
            (page==cardboxpageStart &&
            <header id="header_" className="absolute top-0 px-4 py-1 flex w-full bg-gradient-to-b from-cyan-900 to-gray-900 text-white">
                <button className="text-lg text-white" onClick={e=>setPage(cardboxpage)}>&lt;</button>
            </header>) ||
            (page==vocabularypage &&
            <header id="header_" className="absolute top-0 px-4 py-1 flex w-full bg-gradient-to-b from-cyan-900 to-gray-900 text-white justify-between">
                <button className="text-lg text-white" onClick={e=>setVocabulary(vocabulary-1)}>&lt;</button>
                <button className="text-lg text-white" onClick={e=>setPage(cardboxpageStart)}>X</button>
            </header>) ||
            (page==vocabularypageEnd &&
            <header id="header_" className="absolute top-0 px-4 py-1 flex w-full bg-gradient-to-b from-cyan-900 to-gray-900 text-white justify-end">
                <button className="text-lg text-white" onClick={e=>setPage(cardboxpageStart)}>X</button>
            </header>) ||
            (page==sentencepage &&
            <header id="header_" className="absolute top-0 px-4 py-1 flex w-full bg-gradient-to-b from-cyan-900 to-gray-900 text-white justify-between">
                <button className="text-lg text-white" onClick={e=>setVocabulary(vocabulary-1)}>&lt;</button>
                <button className="text-lg text-white" onClick={e=>setPage(cardboxpageStart)}>X</button>
            </header>) ||
            (page==sentencepageEnd &&
            <header id="header_" className="absolute top-0 px-4 py-1 flex w-full bg-gradient-to-b from-cyan-900 to-gray-900 text-white justify-end">
                <button className="text-lg text-white" onClick={e=>setPage(cardboxpageStart)}>X</button>
            </header>)
            }

            {page==mainpage &&
            <div className="w-full h-full bg-indigo-200 overflow-auto pb-16">
                
                <div className="w-full col-content-box-2">
                <div className="col-content-box-2 w-16 mt-4 text-2xl text-white bg-blue-600 border-2 border-blue-200 px-4 py-2 rounded-lg hover:bg-gray-700" onClick={e=>setPage(mainpageAddbox)}>
                    +
                </div>
                </div>

                <div className="my-6 w-full h-px col-content-box-2">
                        <div className="w-[90%] h-full bg-black"></div>
                </div>
                <div className="mt-8">{cardboxList}</div>
            </div>
            }
            {page==mainpageAddbox &&
            <div className="w-full h-full bg-indigo-400 overflow-auto col-content-box-2 pt-16">
                <div className="text-2xl text-black font-bold">新增單字庫</div>

                <div className="row-content-box-5 w-full px-6">
                    <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold rounded-full inline-flex items-center right-0 bottom-0 h-10 p-0">
                        <svg className="w-full h-full" width="8px" height="8px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 14.2857C13.4229 14.2857 14.5714 13.1371 14.5714 11.7143V6.57143C14.5714 5.14857 13.4229 4 12 4C10.5771 4 9.42857 5.14857 9.42857 6.57143V11.7143C9.42857 13.1371 10.5771 14.2857 12 14.2857ZM11.1429 6.57143C11.1429 6.1 11.5286 5.71429 12 5.71429C12.4714 5.71429 12.8571 6.1 12.8571 6.57143V11.7143C12.8571 12.1943 12.48 12.5714 12 12.5714C11.5286 12.5714 11.1429 12.1857 11.1429 11.7143V6.57143ZM16.5429 11.7143H18C18 14.6371 15.6686 17.0543 12.8571 17.4743V20.2857H11.1429V17.4743C8.33143 17.0543 6 14.6371 6 11.7143H7.45714C7.45714 14.2857 9.63429 16.0857 12 16.0857C14.3657 16.0857 16.5429 14.2857 16.5429 11.7143Z" fill="#000000"/>
                        </svg>
                    </button>
                    <textarea
                        className="block p-2.5 w-[60%] flex-auto left-0 bottom-0 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Enter the name"
                        rows="1"
                        value={inputStr}
                        onChange={handleInputChange}
                    ></textarea>


                    <button className="button right-0 bottom-0" onClick={e=>(setPage(mainpage),setBoxCount(boxCount+1))}>
                        <span>確認</span>
                    </button>
                </div>
                
                <div className="my-6 w-full h-px col-content-box-2">
                        <div className="w-[90%] h-full bg-black"></div>
                </div>
                <div className="text-2xl text-black font-bold py-4">或</div>


                <div className="row-content-box-5">
                    <div className="text-2xl text-black font-bold">匯入單字庫</div>
                    <label className="block ml-4">
                        {<UploadButton
                            displayText="上傳"
                            accept=".json"
                            onChange={handleUpload}
                        />}
                    </label>
                </div>
            </div>
            }
            {page==cardboxpage &&
            <div className="w-full h-full bg-indigo-300 overflow-auto col-content-box-5 pt-6">
                
                <div className="text-2xl text-black font-bold">aaaaaaaaaaaaaaaaa</div>
                <div className="text-sm text-black">單字數：2</div>
                
                <div className="my-6 w-full h-px col-content-box-2">
                        <div className="w-[90%] h-full bg-black"></div>
                </div>

                <div className="w-full col-content-box-2">
                <div className="col-content-box-2 mt-4 text-2xl text-white bg-blue-600 border-2 border-blue-200 px-4 py-2 rounded-lg hover:bg-gray-700" onClick={e=>setPage(cardboxpageAddcard)}>
                    新增單字
                </div>
                </div>
                <div className="w-full col-content-box-2">
                <div className="col-content-box-2 mt-4 text-2xl text-white bg-blue-600 border-2 border-blue-200 px-4 py-2 rounded-lg hover:bg-gray-700" onClick={e=>setPage(cardboxpageStart)}>
                    開始練習
                </div>
                </div>
            </div>
            }
            
            {page==cardboxpageAddcard &&
            <div className="w-full h-full bg-indigo-400 overflow-auto col-content-box-2 pt-16">
                <div className="text-2xl text-black font-bold">輸入單字</div>

                <div className="row-content-box-5 w-full px-6">
                    <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold rounded-full inline-flex items-center right-0 bottom-0 h-10 p-0">
                        <svg className="w-full h-full" width="8px" height="8px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 14.2857C13.4229 14.2857 14.5714 13.1371 14.5714 11.7143V6.57143C14.5714 5.14857 13.4229 4 12 4C10.5771 4 9.42857 5.14857 9.42857 6.57143V11.7143C9.42857 13.1371 10.5771 14.2857 12 14.2857ZM11.1429 6.57143C11.1429 6.1 11.5286 5.71429 12 5.71429C12.4714 5.71429 12.8571 6.1 12.8571 6.57143V11.7143C12.8571 12.1943 12.48 12.5714 12 12.5714C11.5286 12.5714 11.1429 12.1857 11.1429 11.7143V6.57143ZM16.5429 11.7143H18C18 14.6371 15.6686 17.0543 12.8571 17.4743V20.2857H11.1429V17.4743C8.33143 17.0543 6 14.6371 6 11.7143H7.45714C7.45714 14.2857 9.63429 16.0857 12 16.0857C14.3657 16.0857 16.5429 14.2857 16.5429 11.7143Z" fill="#000000"/>
                        </svg>
                    </button>
                    <textarea
                        className="block p-2.5 w-[60%] flex-auto left-0 bottom-0 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Enter the name"
                        rows="1"
                        value={inputStr}
                        onChange={handleInputChange}
                    ></textarea>


                    <button className="button right-0 bottom-0" onClick={e=>setPage(cardboxpageConfirm)}>
                        <span>確認</span>
                    </button>
                </div>
                
                <div className="my-6 w-full h-px col-content-box-2">
                        <div className="w-[90%] h-full bg-black"></div>
                </div>
                <div className="text-2xl text-black font-bold py-4">或</div>


                <div className="row-content-box-5">
                    <div className="text-2xl text-black font-bold">上傳含文字影像</div>
                    <label className="block ml-4">
                        {<UploadButton
                            displayText="上傳"
                            accept="image/*"
                            onChange={handleUpload}
                        />}
                    </label>
                </div>
            </div>
            }
            {page==cardboxpageConfirm &&
            <div className="w-full h-full bg-indigo-400 overflow-auto col-content-box-2 pt-16">
                <div className="text-2xl text-black font-bold">輸入單字</div>

                <div className="col-content-box-4 w-full px-6 my-6">

                    英文
                    <input
                        className="text-black w-[30%] rounded-md mb-2 overflow-auto"
                        type="text"
                        value={"hello"}
                        onChange={(e) => "handleTranslationEdit(index, e.target.value)"}
                    />
                    中文
                    <input
                        className="text-black w-[30%] rounded-md mb-2 overflow-auto"
                        type="text"
                        value={"你好"}
                        onChange={(e) => "handleTranslationEdit(index, e.target.value)"}
                    />
                    例句(僅供參考)
                    <input
                        className="text-black w-[80%] rounded-md mb-2 overflow-x-auto"
                        type="text"
                        value={"hello, how are you?"}
                        readOnly="true"
                    />


                    <button className="button right-0 bottom-0" onClick={e=>(setPage(cardboxpage))}>
                        <span>確認</span>
                    </button>
                </div>
            </div>
            }
            {page==cardboxpageStart &&
            <div className="w-full h-full bg-indigo-400 overflow-auto col-content-box-5 pt-6">
                
                <div className="text-2xl text-black font-bold">選擇模式</div>
                
                <div className="my-6 w-full h-px col-content-box-2">
                        <div className="w-[90%] h-full bg-black"></div>
                </div>

                <div className="row-content-box-2 w-[80%]">
                    <div className="w-full col-content-box-2">
                    <div className="col-content-box-2 mt-4 text-2xl text-white bg-blue-600 border-2 border-blue-200 px-4 py-2 rounded-lg hover:bg-gray-700" onClick={e=>(setPage(vocabularypage),setVocabulary(vocabulary1))}>
                        單字練習
                    </div>
                    </div>
                    <div className="w-full col-content-box-2">
                    <div className="col-content-box-2 mt-4 text-2xl text-white bg-blue-600 border-2 border-blue-200 px-4 py-2 rounded-lg hover:bg-gray-700" onClick={e=>{setPage(sentencepage);setSentence(sentence1)}}>
                        文句練習
                    </div>
                    </div>
                </div>
            </div>
            }
            {page==vocabularypage &&
            <div className="w-full h-full bg-indigo-400 overflow-auto col-content-box-5 pt-6">
                {vocabulary==vocabulary1&&<div className="text-2xl text-black font-bold">你好</div>}
                {vocabulary==vocabulary2&&<div className="text-2xl text-black font-bold">世界</div>}
                
                <div className="my-6 w-full h-px col-content-box-2">
                        <div className="w-[90%] h-full bg-black"></div>
                </div>

                <div className="row-content-box-5 w-full px-6">
                    <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold rounded-full inline-flex items-center right-0 bottom-0 h-10 p-0">
                        <svg className="w-full h-full" width="8px" height="8px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 14.2857C13.4229 14.2857 14.5714 13.1371 14.5714 11.7143V6.57143C14.5714 5.14857 13.4229 4 12 4C10.5771 4 9.42857 5.14857 9.42857 6.57143V11.7143C9.42857 13.1371 10.5771 14.2857 12 14.2857ZM11.1429 6.57143C11.1429 6.1 11.5286 5.71429 12 5.71429C12.4714 5.71429 12.8571 6.1 12.8571 6.57143V11.7143C12.8571 12.1943 12.48 12.5714 12 12.5714C11.5286 12.5714 11.1429 12.1857 11.1429 11.7143V6.57143ZM16.5429 11.7143H18C18 14.6371 15.6686 17.0543 12.8571 17.4743V20.2857H11.1429V17.4743C8.33143 17.0543 6 14.6371 6 11.7143H7.45714C7.45714 14.2857 9.63429 16.0857 12 16.0857C14.3657 16.0857 16.5429 14.2857 16.5429 11.7143Z" fill="#000000"/>
                        </svg>
                    </button>
                    <textarea
                        className="block p-2.5 w-[60%] flex-auto left-0 bottom-0 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Enter the English"
                        rows="1"
                        value={inputStr}
                        onChange={handleInputChange}
                    ></textarea>


                    <button className="button right-0 bottom-0" onClick={e=>setVocabulary(vocabulary+1)}>
                        <span>確認</span>
                    </button>
                </div>

                <div className="row-content-box-5 w-full px-6">
                <button className="bg-teal-400 hover:bg-teal-600 text-gray-800 font-bold mt-10 py-2 px-4 rounded inline-flex items-center right-0 bottom-0" onClick={e=>e}>
                    <span>提示</span>
                </button>
                <div className="mt-10 py-2 px-4 rounded inline-flex items-center right-0 bottom-0">
                </div>
                <button className="bg-red-600 hover:bg-red-900 text-gray-800 font-bold mt-10 py-2 px-4 rounded inline-flex items-center right-0 bottom-0" onClick={e=>setPage(vocabularypageEnd)}>
                    <span>中止</span>
                </button>
                </div>
            </div>
            }
            {page==vocabularypageEnd &&
            <div className="w-full h-full bg-indigo-400 overflow-auto col-content-box-5 pt-6">
                <div className="text-2xl text-black font-bold">確認結果</div>
                
                <div className="my-6 w-full h-px col-content-box-2">
                        <div className="w-[90%] h-full bg-black"></div>
                </div>

                <div className="row-content-box-5 w-full px-6">
                    <button className="button right-0 bottom-0" onClick={e=>setPage(cardboxpageStart)}>
                        <span>OK</span>
                    </button>
                </div>
            </div>
            }
            {page==sentencepage &&
            <div className="w-full h-full bg-indigo-400 overflow-auto col-content-box-5 pt-6">
                {vocabulary==sentence1&&<div className="text-2xl text-black font-bold">你好</div>}
                {vocabulary==sentence2&&<div className="text-2xl text-black font-bold">世界</div>}
                
                <div className="my-6 w-full h-px col-content-box-2">
                        <div className="w-[90%] h-full bg-black"></div>
                </div>

                <div className="row-content-box-5 w-full px-6">
                    <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold rounded-full inline-flex items-center right-0 bottom-0 h-10 p-0">
                        <svg className="w-full h-full" width="8px" height="8px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 14.2857C13.4229 14.2857 14.5714 13.1371 14.5714 11.7143V6.57143C14.5714 5.14857 13.4229 4 12 4C10.5771 4 9.42857 5.14857 9.42857 6.57143V11.7143C9.42857 13.1371 10.5771 14.2857 12 14.2857ZM11.1429 6.57143C11.1429 6.1 11.5286 5.71429 12 5.71429C12.4714 5.71429 12.8571 6.1 12.8571 6.57143V11.7143C12.8571 12.1943 12.48 12.5714 12 12.5714C11.5286 12.5714 11.1429 12.1857 11.1429 11.7143V6.57143ZM16.5429 11.7143H18C18 14.6371 15.6686 17.0543 12.8571 17.4743V20.2857H11.1429V17.4743C8.33143 17.0543 6 14.6371 6 11.7143H7.45714C7.45714 14.2857 9.63429 16.0857 12 16.0857C14.3657 16.0857 16.5429 14.2857 16.5429 11.7143Z" fill="#000000"/>
                        </svg>
                    </button>
                    <textarea
                        className="block p-2.5 w-[60%] flex-auto left-0 bottom-0 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Enter the English"
                        rows="1"
                        value={inputStr}
                        onChange={handleInputChange}
                    ></textarea>


                    <button className="button right-0 bottom-0" onClick={e=>setSentence(sentence+1)}>
                        <span>確認</span>
                    </button>
                </div>

                <div className="row-content-box-5 w-full px-6">
                <button className="bg-teal-400 hover:bg-teal-600 text-gray-800 font-bold mt-10 py-2 px-4 rounded inline-flex items-center right-0 bottom-0" onClick={e=>e}>
                    <span>提示</span>
                </button>
                <div className="mt-10 py-2 px-4 rounded inline-flex items-center right-0 bottom-0">
                </div>
                <button className="bg-red-600 hover:bg-red-900 text-gray-800 font-bold mt-10 py-2 px-4 rounded inline-flex items-center right-0 bottom-0" onClick={e=>setPage(sentencepageEnd)}>
                    <span>中止</span>
                </button>
                </div>
            </div>
            }
            {page==sentencepageEnd &&
            <div className="w-full h-full bg-indigo-400 overflow-auto col-content-box-5 pt-6">
                <div className="text-2xl text-black font-bold">確認結果</div>
                
                <div className="my-6 w-full h-px col-content-box-2">
                        <div className="w-[90%] h-full bg-black"></div>
                </div>

                <div className="row-content-box-5 w-full px-6">
                    <button className="button right-0 bottom-0" onClick={e=>setPage(cardboxpageStart)}>
                        <span>OK</span>
                    </button>
                </div>
            </div>
            }

            {(page==morepage||page==mainpage||page==optionpage) &&
            <footer id="footer" className="absolute bottom-0">
                <div className="flex items-center w-[60%] h-8 justify-between">
                    {(page==morepage&&<button className="w-8 h-6 bg-slate-400" onClick={e=>setPage(morepage)}></button>)||<button className="w-8 h-6 bg-slate-200" onClick={e=>setPage(morepage)}></button>}
                    <div className="w-[2.5px] h-8 bg-slate-900"></div>
                    {(page==mainpage&&<button className="w-8 h-6 bg-slate-400" onClick={e=>setPage(mainpage)}></button>)||<button className="w-8 h-6 bg-slate-200" onClick={e=>setPage(mainpage)}></button>}
                    <div className="w-[2.5px] h-8 bg-slate-900"></div>
                    {(page==optionpage&&<button className="w-8 h-6 bg-slate-400" onClick={e=>setPage(optionpage)}></button>)||<button className="w-8 h-6 bg-slate-200" onClick={e=>setPage(optionpage)}></button>}
                </div>
            </footer>
            }
        </div>
    );
}



export default WouldCard;