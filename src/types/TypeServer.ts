export interface TypeServer {
    server_id: string;
    server_name: string;
    server_create_at: string;
}

export interface TypeServerReponse {
    servers: TypeServer[];
}
