import {FaPlayCircle} from "react-icons/fa"
import Link from "next/link"
import styles from "../header/header.css"

const Header = () => {
    return(
        <div className="header">
        <div className="container flex">
        <div className="logoBox">
        <Link href="/"><FaPlayCircle></FaPlayCircle> NETFILMS </Link>    
        </div>

        <div className="navList">
         <nav>
         <ul>
         <li><Link href="/">Movies</Link></li>
         <li><Link href="/">Series</Link></li>    
         <li><Link href="/">Kids</Link></li>        
        </ul>   
        </nav>   
        </div>

        </div>
        </div>
    )
}

export default Header