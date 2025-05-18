import React from "react";
import ServerPanelScroll from "../components/ServerPanelScroll/ServerPanelScroll";
import ChatPanelScroll from "../components/ChatPanelScroll/ChatPanelScroll";
import ChannelsPanelScroll from "../components/ChannelsPanelScroll/ChannelsPanelScroll";

export default function MainPage() {
    return (
        <div className="root flex h-screen flex-col">
            <div className="bg-palette-1 h-12"></div>
            <div className="flex flex-1">
                <div className="relative flex">
                    <div className="bg-palette-1 h-full w-20">
                        <ServerPanelScroll />
                    </div>

                    <div className="bg-palette-1 h-full w-64">
                        <ChannelsPanelScroll />
                    </div>

                    <div className="absolute bottom-0 left-0 h-16 w-full p-2">
                        <div className="bg-palette-3 h-full w-full rounded-md">
                            selam
                        </div>
                    </div>
                </div>
                <div className="bg-palette-2 flex-1">
                    <ChatPanelScroll />
                </div>
            </div>
        </div>
    );
}
