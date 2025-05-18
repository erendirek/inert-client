import React, { useEffect, useState } from "react";
import { FaHashtag } from "react-icons/fa6";
import MemberCard from "./MemberCard";
import { useAtom } from "jotai";
import { channelsAtom, selectedChannelAtom } from "../../jotai/atoms";
import type { TypeChannel } from "../../types/TypeChannel";
import axiosInstance from "../../api/axiosInstance";
import type { TypeChat, TypeChatReponse } from "../../types/TypeChat";
import ChatMessage from "./ChatMessage";

export default function ChatPanelScroll() {
    const [selectedChannel] = useAtom(selectedChannelAtom);
    const [channels] = useAtom(channelsAtom);
    const [currentChannel, setCurrentChannel] = useState<TypeChannel | null>(
        null,
    );
    const [messages, setMessages] = useState<TypeChat[] | null>(null);

    const setupChatAsync = async (chan_id: string) => {
        const response = await axiosInstance.get<TypeChatReponse>(
            `/rest/channels/${chan_id}/messages`,
        );

        setMessages([...response.data.messages]);
    };

    useEffect(() => {
        if (!channels || !selectedChannel) {
            setCurrentChannel(null);
            setMessages(null);
            return;
        }

        const currChannel = channels.find((elem) => elem.id == selectedChannel);

        if (!currChannel) {
            setCurrentChannel(null);
            setMessages(null);
            return;
        }

        setCurrentChannel(currChannel);
        setupChatAsync(currChannel.id);
    }, [channels, selectedChannel]);

    return (
        <div className="flex h-full">
            <div id="chat" className="flex h-full flex-1 flex-col">
                <div
                    id="chat-header"
                    className="text-white-2 flex h-12 items-center gap-x-1 pl-4"
                >
                    <FaHashtag />
                    <p className="font-bold">
                        {currentChannel ? currentChannel.name : "NA"}
                    </p>
                </div>
                <div id="chat-inner" className="flex h-full flex-1 flex-col">
                    <div className="flex flex-1 flex-col justify-end px-2">
                        {messages?.map((elem, index) => {
                            return (
                                <ChatMessage
                                    key={index}
                                    message={elem.content}
                                    author_name={elem.author_id}
                                    created_at={elem.created_at}
                                />
                            );
                        })}
                    </div>
                    <div className="h-24 w-full p-2">
                        <div className="bg-palette-3 h-full w-full rounded-md">
                            asdfdsa
                        </div>
                    </div>
                </div>
            </div>
            <div id="members" className="border-l-palette-3 w-1/4 border-l-2">
                <div className="p-2">
                    <div className="mb-2">
                        <p className="text-white-2">online - x</p>
                        <div>
                            <MemberCard />
                        </div>
                    </div>
                    <div>
                        <p className="text-white-2">offline - y</p>
                        <div>
                            <MemberCard />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
