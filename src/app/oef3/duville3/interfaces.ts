export interface IRates {
    super_reduced: number;
    reduced: number;
    standard: number;
    reduced1?: number;
    reduced2?: number;
    parking?: number;
}

export interface IPeriod {
    effective_from: string;
    rates: IRates;
}

export interface IDetails {
    name: string;
    code: string;
    country_code: string;
    periods: IPeriod[];
}

export interface RootObject {
    details: string;
    version?: any;
    rates: IDetails[];
}