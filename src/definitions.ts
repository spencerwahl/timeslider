import type { Options as nouiOptions } from 'nouislider';

export interface TimeSliderConfig {
    range: number[];
    start: number[];
    attribute: string;
    arcgisDate?: boolean;
    layers?: string[];
    animation: {
        playMode?: TimeSliderPlayMode;
        interval?: number;
    };
    sliderConfig?: nouiOptions;
    formatters: TimeSliderFormatter[];
}

export interface TimeSliderFormatter {
    mode: TimeSliderFormat;
    internal?: boolean;
    pips?: boolean;
    aria?: boolean;
    display?: boolean;
}

export interface ValueFormatter extends TimeSliderFormatter {
    mode: TimeSliderFormat.Values;
    values: string[];
}

export interface RangeFormatter extends TimeSliderFormatter {
    mode: TimeSliderFormat.Ranges;
    ranges: string[][];
    separator?: string;
}

export interface DateFormatter extends TimeSliderFormatter {
    mode: TimeSliderFormat.Date;
    format: string;
}

export enum TimeSliderFormat {
    None = 'none',
    Date = 'date',
    Ranges = 'ranges',
    Values = 'values'
}

export enum TimeSliderPlayMode {
    Append = 'append',
    Distinct = 'distinct'
}
