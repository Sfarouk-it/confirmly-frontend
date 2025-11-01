const Background = () => {
  return (
    <div className="absolute z-[-1] w-full h-full overflow-hidden">
        <div className="circelPosition w-[480px] h-[480px] bg-purple-500 rounded-full top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] blur-[90px]"></div>
        <div className="circelPosition w-[480px] h-[480px] bg-green-400 rounded-full top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] blur-[90px]"></div>
        <div className="circelPosition w-[480px] h-[480px] bg-blue-300 rounded-full top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] blur-[90px]"></div>
    </div>
  );
};

export default Background;