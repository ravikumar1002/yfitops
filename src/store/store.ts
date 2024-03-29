import { ICommonPropsDataSharingDTO } from '@dto/commonDTO';
import { create } from 'zustand';

interface IStore {
    audioLevel: number
    isAudioMuted: boolean
    currentTrack: number
    playlistSongs: ICommonPropsDataSharingDTO[] | null
    playingsongId: string | null
    openPlaylist: ICommonPropsDataSharingDTO[] | null
    setAudioLevel: (audioLevel: number) => void
    setIsAudioMuted: (isAudioMuted: boolean) => void
    setCurrentTrack: (currentTrack: number) => void
    setPlaylistSongs: (playlistSongs: ICommonPropsDataSharingDTO[] | null) => void
    setPlayingSongId: (playingsongId: string | null) => void
    setOpenPlaylist: (openPlaylist: ICommonPropsDataSharingDTO[] | null) => void
}

export const useAppStore = create<IStore>()((set) => ({
    audioLevel: 40,
    isAudioMuted: false,
    currentTrack: 0,
    playlistSongs: null,
    playingsongId: null,
    openPlaylist: null,
    setAudioLevel: (audioLevel: number) => set({ audioLevel }),
    setIsAudioMuted: (isAudioMuted: boolean) => set({ isAudioMuted }),
    setCurrentTrack: (currentTrack: number) => set({ currentTrack }),
    setPlaylistSongs: (playlistSongs: ICommonPropsDataSharingDTO[] | null) => set({ playlistSongs }),
    setPlayingSongId: (playingsongId: string | null) => set({ playingsongId }),
    setOpenPlaylist: (openPlaylist: ICommonPropsDataSharingDTO[] | null) => set({ openPlaylist }),
}));