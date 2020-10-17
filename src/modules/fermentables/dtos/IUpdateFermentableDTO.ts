export default interface IUpdateFermentableDTO {
    id: string;
    name: string;
    color: number;
    potential: number;
    manufacture?: string;
    origin?: string;
    water_percentage?: number;
    protein_percentage?: number;
    diastatic_potential?: number;
    short_description: string;
    description: string;
}
