import { FC } from "react"
import Image from "./Image"

interface IProps {

}
const ProductCard: FC<IProps> = () => {
    return (
        <div className="border border-gray-400 p-2 m-2 rounded-md">
            <Image ImgUrl={"https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"} alt={"Product Name"} classname={"rounded-md mb-2"} />
            <h2>Lorem ipsum dolor sit amet</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, molestias.</p>
            <div className="flex items-center my-4 space-x-2 ">
                <span className="w-5 h-5 bg-red-700 rounded-full cursor-pointer" />
                <span className="w-5 h-5 bg-amber-300 rounded-full cursor-pointer" />
                <span className="w-5 h-5 bg-green-600 rounded-full cursor-pointer" />
            </div>
            <div className="flex items-center justify-between">
                <span>500.00$</span>
                <Image ImgUrl={"https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"} alt={"Product Name"} classname={"w-10 h-10 rounded-full"} />
            </div>
            <div className="flex items-center justify-between mt-2 space-x-2">
                <button className="bg-indigo-600 p-2 w-full rounded-md">Edit</button>
                <button className="bg-red-500 p-2 w-full rounded-md">delete</button>
            </div>
        </div>
    )
}

export default ProductCard