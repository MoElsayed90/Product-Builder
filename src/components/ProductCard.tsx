import { FC } from "react"
import Image from "./Image"
import Button from "./ui/Button"
import { IProduct } from "./interfaces"
import { txtslicer } from "../utils/function";


interface IProps {
product:IProduct;
}

const ProductCard: FC<IProps> = ({product}) => {
    const {title,description,imageURL,category,price} = product;
    return (
        <div className="max-w-sm md:max-w-lg mx-auto border border-gray-200 p-2 m-2 rounded-md">
            <Image ImgUrl={imageURL} alt={"Product Name"} className={"rounded-md mb-2 h-52 w-full lg:object-cover"} />
            <h2>{title}</h2>
            <p>{txtslicer(description)}</p>
            <div className="flex items-center my-4 space-x-2 ">
                <span className="w-5 h-5 bg-red-700 rounded-full cursor-pointer" />
                <span className="w-5 h-5 bg-amber-300 rounded-full cursor-pointer" />
                <span className="w-5 h-5 bg-green-600 rounded-full cursor-pointer" />
            </div>
            <div className="flex items-center justify-between">
                <span>{price}$</span>
                <Image ImgUrl={category.imageURL} alt={category.name} className={"w-10 h-10 rounded-full"} />
            </div>
            <div className="flex items-center justify-between mt-2 space-x-2">
                <Button className="bg-indigo-600 hover:bg-indigo-800">Edit</Button>  
                <Button className="bg-red-500 hover:bg-red-800">delete</Button>
            </div>
        </div>
    )
}

export default ProductCard