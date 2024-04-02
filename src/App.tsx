import { ChangeEvent, FormEvent, useState } from "react";
import ProductCard from "./components/ProductCard"
import { FormInputsList, productList } from "./components/data"
import { Modal } from "./components/ui/Modal";
import Button from "./components/ui/Button";
import Input from "./components/ui/Input";
import { IProduct } from "./components/interfaces";
import { productValidation } from "./components/validation";
import ErrorMsg from "./components/ErrorMsg";

const App = () => {
  /* ------- STATE -------  */
  const [product, setProduct] = useState<IProduct>({
    title: "",
    description: "",
    imageURL: "",
    price: "",
    colors: [],
    category: { name: "", imageURL: "" }



  })
  const [isOpen, setIsOpen] = useState(false)
  const [error, setError] = useState({
    title: "",
    description:"",
    imageURL:"",
    price:"",
  })
  console.log("errors", error)

  /* ------- HANDLER -------  */

  const closeModal = () => setIsOpen(false)
  const openModal = () => setIsOpen(true)
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    })
    setError({
      ...error,
      [name]:""
    })
  }

  const onCancel = () => {
    closeModal();
  }
  const onSubmitHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const { title, description, imageURL, price } = product;
    const errors = productValidation(
      {
        title,
        description,
        imageURL,
        price,
      });
    const hasMsgError = Object.values(errors).some(value => value === "") && Object.values(errors).every(value => value === "");
    if (!hasMsgError) {
      setError(errors);
      return;
    }
    console.log("Done")
  }

  /* ------- RENDER -------  */
  const renderProductList = productList.map(product => { return <ProductCard key={product.id} product={product} /> });
  const renderFormInputList = FormInputsList.map(input => (
    <div className="flex flex-col" key={input.id}>
      <label htmlFor={input.id} className="mb-[2px] text-sm font-medium text-gray-700">{input.label}</label>
      <Input type={input.type} id={input.id} name={input.name} value={product[input.name]} onChange={onChangeHandler} />
      <ErrorMsg msg={error[input.name]} />

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
        <form className="space-y-3" onSubmit={onSubmitHandler}>
          {renderFormInputList}
          <div className="flex items-center space-x-3" >
            <Button className="bg-indigo-600 hover:bg-indigo-800 capitalize">submit</Button>
            <Button className="bg-gray-400 hover:bg-gray-600 capitalize" onClick={onCancel}>close</Button>
          </div>
        </form>
      </Modal>
    </main>
  )
}

export default App
