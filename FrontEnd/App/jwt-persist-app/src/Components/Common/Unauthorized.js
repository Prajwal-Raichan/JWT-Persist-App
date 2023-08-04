import { useNavigate } from "react-router-dom"

const Unauthorized = () => {
    const navigate = useNavigate();

    const goBack = () => navigate(-1);

    return (
        <div className="flex justify-center bg-white">
        <section>
            <h1 className="text-9xl text-red-600 ">UNAUTHORIZED</h1>
            <br />
            <p className="font-bold text-2xl">You do not have access to the requested page.</p>
            <div className="flexGrow">
                <button className='text-1xl font-medium text-blue-600 underline' onClick={goBack}>Go Back</button>
            </div>
        </section>
        </div>
    )
}

export default Unauthorized
