import { useAtom } from "jotai";
import React, { useEffect, useState } from "react";
import { FaHashtag } from "react-icons/fa6";
import { selectedChannelAtom } from "../../jotai/atoms";

interface TextChannelState {
    channel_id: string;
    channel_name: string;
}

export default function TextChannel(states: TextChannelState) {
    const [selected, setSelected] = useState(false);
    const [selectedChannel, setSelectedChannel] = useAtom(selectedChannelAtom);

    const handleChannelOnClick = () => {
        setSelectedChannel(states.channel_id);
    };

    useEffect(() => {
        if (!selectedChannel) {
            setSelected(false);
            return;
        }

        setSelected(selectedChannel == states.channel_id);
    }, [selectedChannel, states.channel_id]);

    return (
        <div
            className={`hover:bg-palette-2 flex cursor-pointer flex-row items-center gap-x-2 rounded-md px-2 py-1 font-semibold text-white/75 transition-all ${selected ? "!bg-palette-2" : ""}`}
            onClick={() => handleChannelOnClick()}
        >
            <FaHashtag />
            <p className="text-s text-inherit">{states.channel_name}</p>
        </div>
    );
}
