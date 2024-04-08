import { FC } from "react"
import Image from "./Image"
import Button from "./ui/Button"
import { IProduct } from "./interfaces"
import { txtslicer } from "../utils/function";
import CircleColor from "./CircleColor";


interface IProps {
    product: IProduct;
}

const ProductCard: FC<IProps> = ({ product }) => {
    const { title, description, imageURL, category, price , colors } = product;


    const renderProductColor = colors.map(color => <CircleColor key={color} color={color} />);
    return (
        <div className="max-w-sm md:max-w-lg mx-auto border border-gray-200 p-2 m-2 rounded-md">
            <Image ImgUrl={imageURL} alt={"Product Name"} className={"rounded-md mb-2 h-52 w-full lg:object-cover"} />
            <h2>{title}</h2>
            <p>{txtslicer(description)}</p>
            <div className="flex items-center flex-wrap my-4 space-x-1 ">
                {renderProductColor}
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