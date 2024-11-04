import GameLinkList from "../Components/GameLinkList";



function Mainpage() {
    return(
        <>
            <div className="w-full row-content-box-2">
                <div id="left-side">

                    <div className="my-6 w-full h-px col-content-box-2">
                        <div className="w-full h-full bg-black"></div>
                    </div>

                    <div className="ml-4">
                        {<GameLinkList/>}
                    </div>
                </div>
            </div>
        </>
    );
}



export default Mainpage;