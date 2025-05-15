import React from "react";
import { IoIosArrowDown } from "react-icons/io";

export default function ChannelsPanelScroll() {
    return (
        <div className="h-full overflow-hidden rounded-tl-xl bg-gray-700">
            <div className="flex h-12 cursor-pointer items-center justify-between border-b border-b-gray-500 px-4 transition-all hover:bg-gray-600">
                <p className="font-semibold text-white/90">Server Name</p>
                <IoIosArrowDown className="text-white/90" size={16} />
            </div>
            <div>
                <div className="px-4 py-2">
                    <div className="flex cursor-pointer items-center gap-x-2 text-white/75 transition-all hover:text-white/90">
                        <p className="text-xs text-inherit">Text Channels</p>
                        <IoIosArrowDown className="text-inherit" size={12} />
                    </div>
                </div>
            </div>
        </div>
    );
}
