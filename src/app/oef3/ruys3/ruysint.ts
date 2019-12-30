export interface MonstersInfo {
    id: number;
    name: string;
    type: string;
    challenge_rating: number;

}
export interface Monster{
    count: number;
    results: MonstersInfo[];
}