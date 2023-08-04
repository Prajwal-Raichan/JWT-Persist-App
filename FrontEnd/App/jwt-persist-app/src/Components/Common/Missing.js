import { Link } from "react-router-dom"

const Missing = () => {
    return (
        <div className="flex justify-center bg-white">
        <article style={{ padding: "100px" }}>
            <h1 className='text-9xl font-bold text-red-600 '>Oops!</h1><br/>
            <br></br>
            <p className='text-black font-bold text-2xl'>Page Not Found</p>
            <div className="flexGrow">
                <Link className=' text-2xl font-bold text-blue-600 ' to="/">Visit Our Homepage</Link>
            </div>
        </article>
        </div>
    )
}

export default Missing
