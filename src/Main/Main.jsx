import Header from "../Components/Header/Header";
import LeftSide from "../Components/LeftSide/LeftSide";
import Oncourse from "../Components/Oncourse/Oncourse";
import RightSide from "../Components/RightSide/RightSide";


const Main = () => {
    return (
        <div className="flex mt-5">
            <div className="w-1/4 ">
       <Oncourse></Oncourse>
            </div>
            <div className="w-3/4">
                <Header></Header>
                <div className="flex ">
                    <div>
                    <LeftSide></LeftSide>
                    </div>
                    <div>
                    <RightSide></RightSide>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;