import Link from "next/link"
import "./footer.css"

const Footer = () => {
    return(
    <footer className="footer">
    <div className="container">
    Made with ❤️ by&nbsp;
    <Link href="https://aslantasezgin.netlify.app/" target="_blank">
        Sezgin Aslantaş
      </Link>
    </div>
    </footer>
    )
}

export default Footer