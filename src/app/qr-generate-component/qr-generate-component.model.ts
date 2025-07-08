export interface Defect {
    id: string;
    type: string;
    percentage: number;
    location: string;
    section: string;
}

export const defectList: any[] = [
    {
        type: 'Rust',
        percentage: 60,
        location: 'Antenna One',
        section: 'Top Section'
    },
    {
        type: 'Rust',
        percentage: 60,
        location: 'Antenna One',
        section: 'Middle Section'
    },
    {
        type: 'Crack',
        percentage: 20,
        location: 'Antenna Two',
        section: 'Top Section'
    },
    {
        type: 'Corrosion',
        percentage: 35,
        location: 'Base Plate',
        section: 'Bottom Section'
    },
    {
        type: 'Bent Rod',
        percentage: 15,
        location: 'Cross Bar',
        section: 'Middle Section'
    }
];