import React, { useEffect, useState } from "react";
import { selectedServerAtom } from "../../jotai/atoms";
import { useAtom } from "jotai";

interface ServerButtonStates {
    server_id: string;
    logo: string;
}

export default function ServerButton(states: ServerButtonStates) {
    const [selectedServer, setSelectedServer] = useAtom(selectedServerAtom);
    const [selected, setSelected] = useState(false);

    const handleServerButtonOnClick = () => {
        setSelectedServer(states.server_id);
    };

    useEffect(() => {
        if (!selectedServer) {
            setSelected(false);
            return;
        }

        setSelected(selectedServer == states.server_id);
    }, [selectedServer, states.server_id]);

    useEffect(() => {
        console.log(states.server_id);
    }, []);

    return (
        <div className="h-full w-full p-2">
            <div
                className={`aspect-square h-full w-full cursor-pointer rounded-xl bg-gray-600 transition-all hover:rounded-4xl ${selected ? "!rounded-4xl" : ""}`}
                onMouseDown={() => handleServerButtonOnClick()}
            >
                <div className="text-white-2 flex h-full w-full items-center justify-center font-semibold">
                    <p className="">{states.logo.toUpperCase()}</p>
                </div>
            </div>
        </div>
    );
}
