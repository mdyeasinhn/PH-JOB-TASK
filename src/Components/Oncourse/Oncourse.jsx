import { IoSettingsOutline, IoSunnySharp } from "react-icons/io5";
import { IoBookOutline } from "react-icons/io5";
import { FaGraduationCap } from "react-icons/fa6";
import { BsCurrencyDollar } from "react-icons/bs";
import { BsArrowBarRight } from "react-icons/bs";
import { FiBarChart } from "react-icons/fi";
import { SiWindows11 } from "react-icons/si";
const Oncourse = () => {
    return (
        <div>
            <header className="flex items-center justify-center">
                <IoSunnySharp className="text-4xl text-blue-400" />
                <h2 className="text-4xl font-bold text-center ">
                    <span className='text-blue-500'>ON</span>Course</h2>
            </header>

            <main className="ml-20 mt-5 space-y-5">
                <div className="flex items-center  gap-2">
                    <SiWindows11 className="text-blue-400" />
                    <h2 className=" text-blue-400 text-xl">Overview</h2>
                </div>
                <div className="flex items-center  gap-2">
                    <IoBookOutline />
                    <h2>My Course</h2>
                </div>
                <div className="flex items-center  gap-2">
                    <FaGraduationCap />
                    <h2>Completed</h2>
                </div>
                <div className="flex items-center  gap-2">

                    <h2>Finacial Aid</h2>
                </div>
                <div className="flex items-center  gap-2">
                    <BsCurrencyDollar></BsCurrencyDollar>
                    <h2>Transations</h2>
                </div>
                <div className="flex items-center  gap-2">
                    <FiBarChart />
                    <h2>Reports</h2>
                </div>
                <div className="flex items-center  gap-2">
                    <h2>Statistics</h2>
                </div>
            </main>

            <footer className="space-y-2 ml-20 mt-40">
                <div className="flex items-center  gap-2">
                    <BsArrowBarRight></BsArrowBarRight>
                    <h2>Support</h2>
                </div>
                <div className="flex items-center  gap-4">
                    <IoSettingsOutline />
                    <h2>Settings</h2>
                </div>
            </footer>
        </div>
    );
};

export default Oncourse;