export class Present {
    nom !: string;
    description !: string;
    imageUrl ?: Promise<string | undefined>;
    prix !: number;
    id ?: number;
}