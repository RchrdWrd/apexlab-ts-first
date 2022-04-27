declare module 'jsonSchema' {

    export interface Genre {
        name: string;
    }

    export interface ImgBackdrop {
        original: string;
    }

    export interface ImgPoster {
        url: string;
    }

    export interface SearchMovy {
        name: string;
        genres: Genre[];
        score: number;
        imgBackdrop: ImgBackdrop;
        imgPoster: ImgPoster;
    }

    export interface Data {
        searchMovies: SearchMovy[];
    }

    export interface Hint {
        path: any[];
        maxAge: number;
    }

    export interface CacheControl {
        version: number;
        hints: Hint[];
    }

    export interface Extensions {
        cacheControl: CacheControl;
    }

    export interface RootObject {
        data: Data;
        extensions: Extensions;
    }

}

