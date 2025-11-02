import { useNavigate } from "react-router-dom";

const HomeHero = () => {
    const navigate = useNavigate();

    return (
        <div id="home">
            <div className="max-w-[800px] w-full h-screen mx-auto text-center flex flex-col justify-center">
                <p className="text-blue-600 font-bold p-2">WELCOME TO CONFIRMLY</p>
                <h1 className="md:text-5xl sm:text-3xl text-2xl font-bold md:py-6">Simplify Your Confirmation Process</h1>
                <p className="md:text-1xl text-xl font-bold text-gray-500">Effortlessly manage and send confirmations with our user-friendly platform.</p>
                <button className="bg-blue-600 text-white w-[200px] rounded-md font-medium my-6 mx-auto py-3 hover:bg-blue-700" onClick={() => navigate('/login')}>Get Started</button>
            </div>
        </div>
    );
}

export default HomeHero;
        