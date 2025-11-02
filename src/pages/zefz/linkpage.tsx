import { useState } from 'react';
import { Link , useNavigate } from 'react-router-dom';
import { setupBusiness } from '../../services/businessService';
import { getFacebookPermissions } from '../../services/SocialMediaPermissions';
import { FaTiktok , FaInstagram , FaFacebook , FaWhatsapp} from "react-icons/fa6";
import Background from '../../components/BackGround';


const LinkPage = () => {

    const navigate = useNavigate();
    const [brandName, setBrandName] = useState('');
    const [businessType, setBusinessType] = useState('');
    const [businessField, setBusinessField] = useState('');
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [businessID, setBusinessID] = useState(null);

    const handleSubmit = async () => {
        try {
            const response = await setupBusiness(brandName, businessType, businessField); 
            setBusinessID(response.id); // Assuming the response contains the business ID
            console.log(response);
            setFormSubmitted(true);
        } catch (error) {
            console.error('Error setting up business:', error);
            alert('Error setting up business. Please try again.');
        }
    };

    const handleFacebookPermissions = async () => {
        try {
            if (businessID) {
                const response = await getFacebookPermissions(businessID);

                const width = 600, height = 600;
                const left = window.innerWidth / 2 - width / 2;
                const top = window.innerHeight / 2 - height / 2;

                window.open(
                    response.authUrl,
                    "Facebook Login",
                    `width=${width},height=${height},top=${top},left=${left}`
                );

                // 3. انتظر النتيجة (عن طريق message event)
                window.addEventListener("message", (event) => {
                    if (event.origin !== "https://confirmly.onrender.com") return; // أمان
                    if (event.data.type === "FB_LOGIN_SUCCESS") {
                    console.log("تم تسجيل الدخول:", event.data.user);
                    }
                });
            }
            navigate('/dashboard');
        } catch (error) {
            console.error('Error getting Facebook permissions:', error);
            alert('Error getting Facebook permissions. Please try again.');
        }
    };

    return (
        <div>
            <Background />
            <div className="flex justify-between items-center h-24 w-full mx-auto px-4 text-blue-600 "><h1 className='w-full font-bold text-3xl'>Confirmly</h1></div>
            <div className="md:w-[500px] w-[400px] h-auto mx-auto mb-6 bg-white border-2 rounded-2xl ">
                <div className="px-8 pt-10 pb-8">
                    <div className="text-center mb-8">
                        <h2 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent mb-2">
                            Set Up Your Store
                        </h2>
                        <p className="text-gray-600 text-sm">Tell us about your business</p>
                    </div>

                    {!formSubmitted && (
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label 
                                    htmlFor="storeName" 
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                >
                                    brand Name
                                </label>
                                <input
                                    type="text"
                                    id="brandName"
                                    value={brandName}
                                    onChange={(e) => setBrandName(e.target.value)}
                                    placeholder="e.g., My Awesome Shop"
                                    required
                                    className="w-full px-4 py-3 text-gray-900 bg-white/50 border border-gray-300 rounded-xl outline-none transition-all duration-300 focus:border-green-500 focus:ring-4 focus:ring-green-100 focus:bg-white placeholder:text-gray-400"
                                />
                            </div>

                            <div>
                                <label 
                                    htmlFor="storeName" 
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                >
                                    business type
                                </label>
                                <select
                                    id="businessType"
                                    value={businessType}
                                    onChange={(e) => setBusinessType(e.target.value)}
                                    required
                                    className="w-full px-4 py-3 text-gray-900 bg-white/50 border border-gray-300 rounded-xl outline-none transition-all duration-300 focus:border-green-500 focus:ring-4 focus:ring-green-100 focus:bg-white placeholder:text-gray-400"
                                >
                                    <option value="" disabled>
                                        Select your business type
                                    </option>
                                    <option value="soleProprietorship">Sole Proprietorship</option>
                                    <option value="partnership">Partnership</option>
                                    <option value="corporation">Corporation</option>
                                    <option value="llc">Limited Liability Company (LLC)</option>
                                    <option value="nonProfit">Non-Profit Organization</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div>
                                <label
                                    htmlFor="businessField"
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                >
                                    Business Field
                                </label>
                                <select
                                    id="businessField"
                                    value={businessField}
                                    onChange={(e) => setBusinessField(e.target.value)}
                                    required
                                    className="w-full px-4 py-3 text-gray-900 bg-white/50 border border-gray-300 rounded-xl outline-none transition-all duration-300 focus:border-green-500 focus:ring-4 focus:ring-green-100 focus:bg-white placeholder:text-gray-400"
                                >
                                    <option value="" disabled>
                                        Select your business field
                                    </option>
                                    <option value="retail">Retail</option>
                                    <option value="food">Food & Beverage</option>
                                    <option value="services">Services</option>
                                    <option value="technology">Technology</option>
                                    <option value="education">Education</option>
                                    <option value="other">Other</option>
                                </select>

                            </div>

                            <button
                                type="submit"
                                className="w-full mt-6 px-6 py-3.5 bg-gradient-to-r from-green-600 to-teal-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                            >
                                next
                            </button>
                        </form>
                    )}

                    {formSubmitted && (
                        <div className="text-center mb-8">
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <button 
                                    className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-white text-gray-700 font-medium border border-gray-300 rounded-xl shadow-sm hover:bg-gray-50 hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                                    onClick={handleFacebookPermissions}
                                > 
                                    <FaFacebook className="w-5 h-5 text-blue-600"/>
                                    <span className="text-sm">Link Facebook page</span>
                                </button>
                                <button 
                                    className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-white text-gray-700 font-medium border border-gray-300 rounded-xl shadow-sm hover:bg-gray-50 hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                                >
                                    <FaInstagram className="w-5 h-5 text-pink-500"/>
                                    <span className="text-sm">link instagram account</span>
                                </button>
                                <button 
                                    className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-white text-gray-700 font-medium border border-gray-300 rounded-xl shadow-sm hover:bg-gray-50 hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                                >
                                    <FaWhatsapp className="w-5 h-5 text-green-500"/>
                                    <span className="text-sm">link whatsup account</span>
                                </button>
                                <button 
                                    className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-white text-gray-700 font-medium border border-gray-300 rounded-xl shadow-sm hover:bg-gray-50 hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                                >
                                    <FaTiktok className="w-5 h-5 text-black"/>
                                    <span className="text-sm">link tik tok account</span>
                                </button>
                            </form>

                            <div className="px-8 py-6 bg-white border-t border-gray-200">
                                <p className="text-sm text-gray-600 text-center">
                                    Or{' '}
                                    <Link 
                                        to="/dashboard" 
                                        className="text-indigo-600 font-semibold hover:text-indigo-700 hover:underline transition-colors duration-200"
                                    >
                                        Skip
                                    </Link>
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default LinkPage;
