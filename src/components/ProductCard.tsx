import { FC } from "react"
import Image from "./Image"
import Button from "./ui/Button"
import { IProduct } from "./interfaces"
import { numberWithCommas, txtSlicer } from "../utils/function";
import CircleColor from "./CircleColor";


interface IProps {
    product: IProduct;
    setProductToEdit: (product: IProduct) => void;
    openEditModal: () => void;
    idx: number
    setProductToEditidx: (value: number) => void
    openConfirmModel: () => void;
}

const ProductCard: FC<IProps> = ({ product, setProductToEdit, openEditModal, idx, setProductToEditidx, openConfirmModel }) => {
    const { title, description, imageURL, category, price, colors } = product;

    /* ------- RENDER -------  */
    const renderProductColor = colors.map(color => <CircleColor key={color} color={color} />);
    /* ------- HANDLER -------  */
    const onEdit = () => {
        setProductToEdit(product)
        setProductToEditidx(idx)
        openEditModal()
    }
    const onRemove = () => {
        setProductToEdit(product)
        openConfirmModel()
    }
    return (
        <div className="max-w-sm md:max-w-lg mx-auto md:mx-0 border rounded-md p-2 flex flex-col space-y-3">
        <Image ImgUrl={imageURL} alt={"Product Name"} className="rounded-md h-52 w-full lg:object-cover" />
  
        <h3 className="text-lg font-semibold">{txtSlicer(title, 20)}</h3>
        <p className="text-sm text-gray-500 break-words">{txtSlicer(description,25)}</p>
  
        <div className="flex items-center flex-wrap space-x-1">
          {!colors.length ? <p className="min-h-[20px]">Not available colors!</p> : renderProductColor}
        </div>
  
        <div className="flex items-center justify-between">
          <span className="text-lg text-indigo-600 font-semibold">${numberWithCommas(price)}</span>
          <div className="flex items-center space-x-2">
            <span className="text-xs font-semibold">{category.name}</span>
            <Image ImgUrl={category.imageURL} alt={category.name} className="w-10 h-10 rounded-full object-bottom" />
          </div>
        </div>
  
        <div className="flex items-center justify-between space-x-2">
          <Button className="bg-indigo-700 hover:bg-indigo-800" onClick={onEdit}>
            Edit
          </Button>
          <Button className="bg-[#c2344d] hover:bg-red-800" onClick={onRemove}>
            Remove
          </Button>
        </div>
      </div>
    )
}

export default ProductCard