import { ChangeEvent, useState } from "react";
import ProductCard from "./components/ProductCard"
import { FormInputsList, productList } from "./components/data"
import { Modal } from "./components/ui/Modal";
import Button from "./components/ui/Button";
import Input from "./components/ui/Input";
import { IProduct } from "./components/interfaces";

const App = () => {
  /* ------- STATE -------  */
  const [product,setProduct] = useState<IProduct>({
    title:"",
    description:"",
    imageURL:"",
    price:"",
    colors:[],
    category:{name: "", imageURL: ""}
    


  })
  const [isOpen, setIsOpen] = useState(false)

  /* ------- HANDLER -------  */

const closeModal =()=> setIsOpen(false)
const openModal=()=> setIsOpen(true)
const onChangeHandler = (e:ChangeEvent<HTMLInputElement> )=>{
  const {name,value}=e.target;
  setProduct({
    ...product,
    [name]:value,
  })
}

  /* ------- RENDER -------  */
  const renderProductList = productList.map(product => { return <ProductCard key={product.id} product={product} /> });
  const renderFormInputList = FormInputsList.map(input => (
    <div className="flex flex-col">
      <label htmlFor={input.id} className="mb-[2px] text-sm font-medium text-gray-700">{input.label}</label>
      <Input type={input.type} id={input.id} name={input.name} value={product[input.name]} onChange={onChangeHandler}/>
    </div>
  )
  )




  return (
    <main className="container">
      <Button className="bg-indigo-600" onClick={openModal}>Add</Button>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 m-5 gap-2 md:gap-4  ">
        {renderProductList}
      </div>
      <Modal isOpen={isOpen} closeModal={closeModal} title="Add a new product">
        <form className="space-y-3">
          {renderFormInputList}
          <div className="flex items-center space-x-3" >
            <Button className="bg-indigo-600 hover:bg-indigo-800 capitalize">submit</Button>
            <Button className="bg-gray-400 hover:bg-gray-600 capitalize ">close</Button>
          </div>
        </form>
      </Modal>

    </main>
  )
}

export default App
