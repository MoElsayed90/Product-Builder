import { FC } from "react"
import Image from "./Image"
import Button from "./ui/Button"
import { IProduct } from "./interfaces"


interface IProps {
product:IProduct;
}

const ProductCard: FC<IProps> = ({product}) => {
    const {title,description,imageURL} = product;
    return (
        <div className="border border-gray-400 p-2 m-2 rounded-md">
            <Image ImgUrl={imageURL} alt={"Product Name"} className={"rounded-md mb-2"} />
            <h2>{title}</h2>
            <p>{description}</p>
            <div className="flex items-center my-4 space-x-2 ">
                <span className="w-5 h-5 bg-red-700 rounded-full cursor-pointer" />
                <span className="w-5 h-5 bg-amber-300 rounded-full cursor-pointer" />
                <span className="w-5 h-5 bg-green-600 rounded-full cursor-pointer" />
            </div>
            <div className="flex items-center justify-between">
                <span>500.00$</span>
                <Image ImgUrl={"https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"} alt={"Product Name"} className={"w-10 h-10 rounded-full"} />
            </div>
            <div className="flex items-center justify-between mt-2 space-x-2">
                <Button className="bg-indigo-600" onClick={()=>{
                    console.log('hello')
                }}>Edit</Button>
                <Button className="bg-red-500">delete</Button>
            </div>
        </div>
    )
}

export default ProductCard