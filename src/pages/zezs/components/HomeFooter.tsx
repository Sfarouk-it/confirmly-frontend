const HomeFooter = () => {
    return (
        <div id="contact">
            <div className="grid md:grid-cols-3 sm:grid-cols-1 mx-auto gap-8 px-8 py-20 bg-gray-800 text-white">
                <div>
                    <h3 className="text-xl font-bold mb-4">Confirmly</h3>
                    <p className="text-gray-400">Simplifying your confirmation process with ease and efficiency.</p>
                    <p className="text-gray-400"></p>
                </div>
                <div>
                    <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                    <ul>
                        <li className="mb-2 hover:text-blue-400 cursor-pointer">Home</li>
                        <li className="mb-2 hover:text-blue-400 cursor-pointer">About</li>
                        <li className="mb-2 hover:text-blue-400 cursor-pointer">Services</li>
                        <li className="mb-2 hover:text-blue-400 cursor-pointer">Pricing</li>
                        <li className="mb-2 hover:text-blue-400 cursor-pointer">Contact</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                    <input type="email" placeholder="Your email" className="p-2 rounded-md w-full text-gray-800"/>
                    <textarea placeholder="type your question here" className="p-2 mt-2 w-full rounded-md text-gray-800"></textarea>
                    <button className="mt-4 bg-blue-600 text-white w-full rounded-md font-medium py-2 hover:bg-blue-700">send</button>
                    
                </div>
                
            </div>
        </div>
    );
}

export default HomeFooter;