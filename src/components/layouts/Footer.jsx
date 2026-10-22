import { Heart } from "lucide-react";


function Footer(){
    return(
        <footer className="w-full">
            <div className="flex item-center justify-between flex-row">
                <p className="text-xs text-gray-500 gap-1 inline-flex item-center justify-center  p-5">
                    &copy; {2026} Made with <Heart className="w-3.5 h-3.5 fill-gray-600 " />by <span className=" text-sm text-[#344767] font-bold">MyPiHub</span>  for a better web.
                </p>
           
            <div> 
                <p className="text-xs text-gray-500 gap-5 inline-flex item-center justify-center  p-5"> 
                   <span> MyPatientHub</span>  <span> About Us </span>     <span> Blog </span>  
                </p>
            </div>
        </div>
        </footer>
    )
}
export default Footer;