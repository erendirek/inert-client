import React, { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import TextChannel from "./TextChannel";
import {
    channelsAtom,
    selectedChannelAtom,
    selectedServerAtom,
    serversAtom,
} from "../../jotai/atoms";
import { useAtom } from "jotai";
import axiosInstance from "../../api/axiosInstance";
import type { TypeChannelReponse } from "../../types/TypeChannel";

export default function ChannelsPanelScroll() {
    const [serverName, setServerName] = useState("name");

    const [selectedServer] = useAtom(selectedServerAtom);
    const [servers] = useAtom(serversAtom);
    const [channels, setChannels] = useAtom(channelsAtom);
    const [_, setSelectedChannel] = useAtom(selectedChannelAtom);

    const setupChannelsAsync = async (selectedServerID: string) => {
        const resonse = await axiosInstance.get<TypeChannelReponse>(
            `/rest/servers/${selectedServerID}/channels`,
        );

        const chans = [];
        chans.push(...resonse.data.channels);
        setChannels(chans);
    };

    useEffect(() => {
        if (!channels || channels.length <= 0) return;

        setSelectedChannel(channels[0].id);
    }, [channels]);

    useEffect(() => {
        if (!servers || !selectedServer) {
            setSelectedChannel(null);
            return;
        }

        // let selectedSV: TypeServer | undefined;
        // for (let i = 0; i < servers.length; i++) {
        //     if (servers[i].server_id == selectedServer) selectedSV = servers[i];
        // }
        const selectedSV = servers.find(
            (elem) => elem.server_id == selectedServer,
        );

        if (!selectedSV) return;

        setServerName(selectedSV.server_name);
        setupChannelsAsync(selectedSV.server_id);
    }, [servers, selectedServer]);

    return (
        <div className="border-palette-2 h-full overflow-hidden rounded-tl-xl border-t-2 border-l-2">
            <div className="hover:bg-palette-2 border-b-palette-2 flex h-12 cursor-pointer items-center justify-between border-b-2 px-4 transition-all">
                <p className="font-semibold text-white/90">{serverName}</p>
                <IoIosArrowDown className="text-white/90" size={16} />
            </div>
            <div>
                <div className="px-1.5 py-2">
                    <div
                        id="text-channels-header"
                        className="ml-2.5 flex cursor-pointer items-center gap-x-2 text-white/75 transition-all hover:text-white/90"
                    >
                        <p className="text-xs text-inherit">Text Channels</p>
                        <IoIosArrowDown className="text-inherit" size={12} />
                    </div>
                    <div className="mt-2 flex flex-col gap-y-1">
                        {channels?.map((elem, index) => {
                            return (
                                <TextChannel
                                    channel_id={elem.id}
                                    channel_name={elem.name}
                                    key={index}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
