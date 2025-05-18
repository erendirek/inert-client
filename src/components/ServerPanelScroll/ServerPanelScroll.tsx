import React, { useEffect } from "react";
import ServerButton from "./ServerButton";
import axiosInstance from "../../api/axiosInstance";
import { selectedServerAtom, serversAtom } from "../../jotai/atoms";
import { useAtom } from "jotai";
import type { TypeServer, TypeServerReponse } from "../../types/TypeServer";

export default function ServersScroll() {
    const [, setSelectedServer] = useAtom(selectedServerAtom);
    const [servers, setServers] = useAtom(serversAtom);

    const parseFirstLetters = (name: string): string => {
        let parsed_string = "";
        name.split(" ").forEach((elem) => (parsed_string += elem[0]));
        return parsed_string;
    };

    useEffect(() => {
        (async () => {
            const response =
                await axiosInstance.get<TypeServerReponse>("/rest/servers");

            const servers: TypeServer[] = [];
            servers.push(...response.data.servers);
            setServers(servers);
        })();
    }, []);

    useEffect(() => {
        if (servers && servers.length > 0) {
            setSelectedServer(servers[0].server_id);
        }
    }, [servers]);

    return (
        <div className="px-1">
            <div>
                {servers ? (
                    servers.map((elem, index) => {
                        return (
                            <ServerButton
                                server_id={elem.server_id}
                                logo={parseFirstLetters(elem.server_name)}
                                key={index}
                            />
                        );
                    })
                ) : (
                    <div>server yok</div>
                )}
            </div>
        </div>
    );
}
