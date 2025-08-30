import { Link } from 'react-router'
function PageNotFound() {
    return (
        <div className="PageNotFound">
            <h1>Looks like you're lost.</h1>
            <p>We couldn't find the page you were looking for.</p>
            <button><Link to="/">Go home</Link></button>
        </div>
    )
}
export default PageNotFound