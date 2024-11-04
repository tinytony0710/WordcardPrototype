import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";



function Potatopage() {
    return(
        <>
            <div className="w-full col-content-box-2">
                {/* Main Game Area Potato-Sunlight.webp */}
                <main id="cellphone-like">
                    <div className="box-border w-[95%] h-[75%] mt-[20%] bg-slate-100 text-black col-content-box-2">
                        <Outlet/>
                    </div>
                    <div className="flex-auto w-full col-content-box-5 relative">
                        <div id="cellphone-button">
                            <div className="border-2 border-slate-100 w-[45%] h-[45%] rounded"/>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}



export default Potatopage;