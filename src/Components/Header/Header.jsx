import { IoNotificationsOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
const Header = () => {
    return (
        <div className="flex justify-between  ">
            <div className="mt-4">
                <h3 className="text-3xl font-bold text-blue-400">Overview</h3>
            </div>
            {/* serach */}
            <div className="flex justify-center items-center gap-6">
                <div >
                    <input type="text" placeholder="Search" className="input w-[400px] rounded-3xl input-bordered" />
                </div>
                <div>
                    <IoNotificationsOutline className="text-2xl text-blue-500" />
                    <div className="relative">
                        <div className="badge badge-primary absolute -top-8 left-4 ">9</div>
                    </div>  
                </div>
                <div>
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                </div>
                <div className="">
                    <h3 className="text-xl font-semibold">Yeasin Arafat</h3>
                    <p className="text-center">student</p>
                </div>
            </div>

        </div>
    );
};

export default Header;