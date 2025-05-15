import ChannelsPanelScroll from "./components/ChannelsPanelScroll";
import ServerPanelScroll from "./components/ServerPanelScroll";

function App() {
    return (
        <div className="root">
            <div className="h-12 bg-gray-800"></div>
            <div className="flex">
                <div className="h-screen w-20 bg-gray-800">
                    <ServerPanelScroll />
                </div>
                <div className="h-screen w-64 bg-gray-800">
                    <ChannelsPanelScroll />
                </div>
                <div className="flex-1 bg-red-200"></div>
            </div>
        </div>
    );
}

export default App;
