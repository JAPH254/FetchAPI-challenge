import { Link } from "react-router-dom"
import{ FaHome,FaBlog,FaInternetExplorer,FaPeopleCarry,FaLaptopCode} from "react-icons/fa"

function Header(){
    return(
        <>
      
    <div style={{backgroundColor:"#f5d6db",display:"flex",gap:"7rem",height:"50px",justifyContent:"center",alignItems:"center",fontSize:"30px",textDecoration:"none"}}>
    <div style={{opacity:"100%",color:"#7ddecd",borderColor:"#7ddecd",display:"flex", flexDirection:"column",justifyContent:"center",alignItems:"center",border:"2px solid",borderRadius:"10%"}}>
            <FaLaptopCode/>
            WAPLINK
        </div>
       
        </div>
       </>
    )
}
export default Header