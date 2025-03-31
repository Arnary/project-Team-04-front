import { Link } from "react-router-dom";
import css from "./NotFoundPage.module.css"


const NotFoundPage = () => {
    return (
        <div className={css.notFound}>
            <Link to='/'>Page not found, please return to the home page.</Link>
        </div>
        
    )
}

export default NotFoundPage;
