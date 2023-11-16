export interface Product {
    id?: number;
    categoryId: number;
    nameProduct: string;
    price: number;
    quantity: number;
    imageProduct: Image[];
    description: Description[];
    createAt?: string;
    updateAt?: string;
}

export interface Image {
    idIMG: number;
    urlImage: string;
}

export interface Description {
    name: string;
    ingredient: Ingredient;
    makeFood: MakeFood;
}

export interface Ingredient {
    name: string;
    detail: IngredientDetail[];
}

export interface IngredientDetail {
    [key: number]: string;
}

export interface MakeFood {
    name: string;
    detail: MakeFoodDetail[];
}

export interface MakeFoodDetail {
    name: string;
    content: string;
    image?: string;
}
