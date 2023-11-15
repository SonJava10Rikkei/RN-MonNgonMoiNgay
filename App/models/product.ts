export interface Product {
    id?: number;
    categoryId: number;
    name: string;
    color: string;
    price: number;
    description: string;
    createAt?: string;
    updateAt?: string;
    thumbnailUrl: string;
}
