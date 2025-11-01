import { IoIosPerson } from "react-icons/io";
import { MdBusinessCenter } from "react-icons/md";
import { IoBusiness } from "react-icons/io5";



const HomePricing = () => {

  return (
    <div>
        <div className="max-w-[1240px] w-full h-screen mx-auto grid md:grid-cols-3 grid-cols-1 gap-8">
            <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                <IoIosPerson className="mx-auto mt-[-3rem] bg-white text-blue-600" size={50}/>
                <h2 className="text-2xl font-bold text-center py-8">Basic Plan</h2>
                <p className="text-center text-4xl font-bold">$9.99/month</p>
                <div className="text-center font-medium">
                    <p className="py-2 border-b mx-8 mt-8">Up to 100 confirmations</p>
                    <p className="py-2 border-b mx-8">Email support</p>
                    <p className="py-2 border-b mx-8">Basic analytics</p>
                </div>
                <button className="bg-blue-600 text-white w-[200px] rounded-md font-medium my-6 mx-auto py-3 hover:bg-blue-700">Choose Plan</button>
            </div>

            <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                <MdBusinessCenter className="mx-auto mt-[-3rem] bg-white text-blue-600" size={50}/>
                <h2 className="text-2xl font-bold text-center py-8">Basic Plan</h2>
                <p className="text-center text-4xl font-bold">$9.99/month</p>
                <div className="text-center font-medium">
                    <p className="py-2 border-b mx-8 mt-8">Up to 100 confirmations</p>
                    <p className="py-2 border-b mx-8">Email support</p>
                    <p className="py-2 border-b mx-8">Basic analytics</p>
                </div>
                <button className="bg-blue-600 text-white w-[200px] rounded-md font-medium my-6 mx-auto py-3 hover:bg-blue-700">Choose Plan</button>
            </div>

            <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                <IoBusiness className="mx-auto mt-[-3rem] bg-white text-blue-600" size={50}/>
                <h2 className="text-2xl font-bold text-center py-8">Basic Plan</h2>
                <p className="text-center text-4xl font-bold">$9.99/month</p>
                <div className="text-center font-medium">
                    <p className="py-2 border-b mx-8 mt-8">Up to 100 confirmations</p>
                    <p className="py-2 border-b mx-8">Email support</p>
                    <p className="py-2 border-b mx-8">Basic analytics</p>
                </div>
                <button className="bg-blue-600 text-white w-[200px] rounded-md font-medium my-6 mx-auto py-3 hover:bg-blue-700">Choose Plan</button>
            </div>
        </div>
    </div>
    );
}

export default HomePricing;