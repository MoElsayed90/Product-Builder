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
export interface IFormInput{
    id:string;
    name:string;
    label:string;
    type:string;
}