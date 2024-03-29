
export interface PlaylistDataDTO {
    collaborative: boolean
    description: string
    external_urls: ExternalUrls
    followers: Followers
    href: string
    id: string
    images: Image[]
    name: string
    owner: Owner
    primary_color: null
    public: boolean
    snapshot_id: string
    tracks: Tracks
    type: string
    uri: string
}

export interface ExternalUrls {
    spotify: string
}

export interface Followers {
    href: null | string,
    total: number
}

export interface Image {
    height: null
    url: string
    width: null
}

export interface Owner {
    display_name: string
    external_urls: ExternalUrls2
    href: string
    id: string
    type: string
    uri: string
}

export interface ExternalUrls2 {
    spotify: string
}

export interface Tracks {
    href: string
    items: TrackItem[]
    limit: number
    next: null
    offset: number
    previous: null
    total: number
}

export interface TrackItem {
    added_at: string
    added_by: AddedBy
    is_local: boolean
    primary_color: null
    track: PlaylistTrackItems
    video_thumbnail: VideoThumbnail
}

export interface AddedBy {
    external_urls: ExternalUrls3
    href: string
    id: string
    type: string
    uri: string
}

export interface ExternalUrls3 {
    spotify: string
}

export interface PlaylistTrackItems {
    album: Album
    artists: Artist2[]
    available_markets: string[]
    disc_number: number
    duration_ms: number
    episode: boolean
    explicit: boolean
    external_ids: ExternalIds
    external_urls: ExternalUrls7
    href: string
    id: string
    is_local: boolean
    name: string
    popularity: number
    preview_url?: string
    track: boolean
    track_number: number
    type: string
    uri: string
}

export interface Album {
    album_type: string
    artists: PlaylistArtist[]
    available_markets: string[]
    external_urls: ExternalUrls5
    href: string
    id: string
    images: Image2[]
    name: string
    release_date: string
    release_date_precision: string
    total_tracks: number
    type: string
    uri: string
}

export interface PlaylistArtist {
    external_urls: ExternalUrls4
    href: string
    id: string
    name: string
    type: string
    uri: string
}

export interface ExternalUrls4 {
    spotify: string
}

export interface ExternalUrls5 {
    spotify: string
}

export interface Image2 {
    height: number
    url: string
    width: number
}

export interface Artist2 {
    external_urls: ExternalUrls6
    href: string
    id: string
    name: string
    type: string
    uri: string
}

export interface ExternalUrls6 {
    spotify: string
}

export interface ExternalIds {
    isrc: string
}

export interface ExternalUrls7 {
    spotify: string
}

export interface VideoThumbnail {
    url: null
}
