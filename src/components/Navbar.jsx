export default function Navbar(){
    return <div className="fixed top-0 w-full z-50 transition-all duration-300 bg-red-950/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between item-center h-14 sm:h-16 md:h-20">
                <div className="flex items-center space-x-1 group cursor-pointer">
                    <div>
                        <img src="/logo.png" alt="codeFlow" className="w-6 h-6 sm:w-8 sm:h-8"/>
                    </div>
                    <span className="text-lg sm:text-xl md:text-2xl font-medium">
                        <span className="text-white">Code</span>
                        <span className="text-blue-400">Flow</span>
                    </span>
                </div>

                {/* Navlinks */}
                <div className="hidden"></div>
            </div>
        </div>
    </div>;
}