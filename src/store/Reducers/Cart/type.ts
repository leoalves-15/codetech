export type Product = {
    id: number;
    qtd: number;
}

export type AddCart = {
    type: string;
    product: Product;
}