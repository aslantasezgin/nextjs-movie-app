import Link from "next/link"
import "./categories.css"

const Categories = ({categories}) => {
    return(
        <div className="categories">
        
        {categories.map((category) => {
         return  <Link
           key={category.id}
           className="category"
           href={`/${category.id}`}
           >
           <div className="name">{category.name}</div> 
           </Link> 
        })}

        </div>
    )
}

export default Categories