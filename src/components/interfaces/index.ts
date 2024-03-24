export interface IProduct {
    id?: string;
    title:string;
    description:string;
    price:string;
    imageURL:string;
    colors:string[];
    category:{
        name: string,
        imageURL:string
    };
}