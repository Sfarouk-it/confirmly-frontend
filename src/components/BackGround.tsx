import './background.css';

const Background = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden ">
      <div className="absolute w-[480px] h-[480px] bg-purple-500 rounded-full top-[40%] left-[25%] blur-[90px] animate-bubble1 opacity-60"></div>
      <div className="absolute w-[480px] h-[480px] bg-green-400 rounded-full top-[55%] left-[70%] blur-[90px] animate-bubble2 opacity-60"></div>
      <div className="absolute w-[480px] h-[480px] bg-blue-400 rounded-full top-[50%] left-[45%] blur-[90px] animate-bubble3 opacity-60"></div>
    </div>
  );
};

export default Background;
