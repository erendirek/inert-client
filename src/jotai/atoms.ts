import { atom } from "jotai";
import type { TypeServer } from "../types/TypeServer";
import type { TypeChannel } from "../types/TypeChannel";

const serversAtom = atom<TypeServer[] | null>(null);
const selectedServerAtom = atom<string | null>(null);

const channelsAtom = atom<TypeChannel[] | null>(null);
const selectedChannelAtom = atom<string | null>(null);

export { serversAtom, selectedServerAtom, channelsAtom, selectedChannelAtom };
