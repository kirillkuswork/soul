import { IBulks, IFlat } from './interfaces';

export interface IMetroStations {
    name: string;
    timeOnFoot: string;
    timeOnTransport: string;
}

interface IBulk extends IBulks {
    number: number;
}

export interface IFetchCatalog {
    area: {
        max: number;
        min: number;
    };
    block: {
        address: string;
        id: number;
        latitude: number;
        longitude: number;
        metroStations: IMetroStations[];
        name: string;
        sub_locality_name: string;
    };
    bulks: IBulk[];
    flats: IFlat[];
    price: {
        max: number;
        min: number;
    };
}
