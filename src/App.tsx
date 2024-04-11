import { ChangeEvent, FormEvent, useState } from "react";
import ProductCard from "./components/ProductCard"
import { Categories, Color, FormInputsList, productList } from "./components/data"
import { Modal } from "./components/ui/Modal";
import Button from "./components/ui/Button";
import Input from "./components/ui/Input";
import { IProduct } from "./components/interfaces";
import { productValidation } from "./components/validation";
import ErrorMsg from "./components/ErrorMsg";
import CircleColor from "./components/CircleColor";
import { v4 as uuid } from "uuid";
import Select from "./components/ui/Select";
import { TProductName } from "./types";
import toast, { Toaster } from 'react-hot-toast';

const App = () => {
  const defaultProductObj = {
    title: "",
    description: "",
    imageURL: "",
    price: "",
    colors: [],
    category: {
      name: "",
      imageURL: ""
    }
  }
  /* ------- STATE -------  */
  const [products, setProducts] = useState<IProduct[]>(productList)
  const [product, setProduct] = useState<IProduct>({
    title: "",
    description: "",
    imageURL: "",
    price: "",
    colors: [],
    category: { name: "", imageURL: "" }



  })
  const [productToEdit, setProductToEdit] = useState<IProduct>(defaultProductObj);
  const [productToEditidx, setProductToEditidx] = useState<number>(0);
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenModel, setIsOpenModel] = useState(false)
  const [isOpenConfirmModal, setIsOpenConfirmModel] = useState(false)
  const [error, setError] = useState({
    title: "",
    description: "",
    imageURL: "",
    price: "",
  })
  const [tempColors, setTempColors] = useState<string[]>([])
  const [selectedCategoy, setSelectedCategoy] = useState(Categories[0])
  /* ------- HANDLER -------  */

  const closeModal = () => setIsOpen(false)
  const openModal = () => setIsOpen(true)
  const closeEditModal = () => setIsOpenModel(false)
  const openEditModal = () => setIsOpenModel(true)
  const closeConfirmModal = () => setIsOpenConfirmModel(false)
  const openConfirmModal = () => setIsOpenConfirmModel(true)
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    })
    setError({
      ...error,
      [name]: ""
    })
  }
  const onChangeEditHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProductToEdit({
      ...productToEdit,
      [name]: value,
    })
    setError({
      ...error,
      [name]: ""
    })
  }

  const onCancel = () => {
    closeModal();
  }
  const removeProductHandler = () => {
    const filterd = products.filter(product => product.id !== productToEdit.id);
    setProducts(filterd)
    closeConfirmModal();
    toast('Successfully deleted!',  {style:{backgroundColor:'black',color:'white'},  icon: '👏'});

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
    setProducts(prev => [{ ...product, id: uuid(), colors: tempColors, category: selectedCategoy }, ...prev]);
    setProduct(defaultProductObj);
    setTempColors([])
    closeModal()
  }
  const onSubmitEditHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const { title, description, imageURL, price } = productToEdit;
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
    const updateProduct = [...products]
    updateProduct[productToEditidx] = { ...productToEdit, colors: tempColors.concat(productToEdit.colors) }
    setProductToEdit(defaultProductObj);
    setProducts(updateProduct)
    setTempColors([])
    closeEditModal()
  }

  /* ------- RENDER -------  */
  const renderProductList = products.map((product, idx) => {
    return (

      <>
        <ProductCard key={product.id} product={product} setProductToEdit={setProductToEdit} openEditModal={openEditModal} idx={idx} setProductToEditidx={setProductToEditidx} openConfirmModel={openConfirmModal} />
      </>
    )

  });
  const renderFormInputList = FormInputsList.map(input => (
    <div className="flex flex-col" key={"title"}>
      <label htmlFor={"title"} className="mb-[2px] text-sm font-medium text-gray-700">{input.label}</label>
      <Input type={input.type} id={"title"} name={input.name} value={product[input.name]} onChange={onChangeHandler} />
      <ErrorMsg msg={error[input.name]} />
    </div>
  )
  )
  const renderProductColor = Color.map(color => <CircleColor key={color} color={color}
    onClick={() => {
      if (tempColors.includes(color)) {
        setTempColors(prev => prev.filter(item => item !== color))
        return;
      }
      if (productToEdit.colors.includes(color)) {
        setTempColors(prev => prev.filter(item => item !== color))
        return;
      }
      setTempColors((prev) => [...prev, color])
    }} />);

  const renderEditProductList = (name: TProductName, label: string, id: string) => {
    return (
      <div className="flex flex-col">
        <label htmlFor={id} className="mb-[2px] text-sm font-medium text-gray-700">{label}</label>
        <Input type="text" id={id} name={name} value={productToEdit[name]} onChange={onChangeEditHandler} />
        <ErrorMsg msg={error[name]} />
      </div>
    )
  }



  return (
    <main className="container" >
      <Button className="block bg-indigo-700 hover:bg-indigo-800 mx-auto my-10 px-10 font-medium" onClick={openModal} width="w-fit">Build a Product</Button>
      <div className="m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 p-2 rounded-md">
        {renderProductList}
      </div>

      {/*  ------- Modal Add Product -------   */}

      <Modal isOpen={isOpen} closeModal={closeModal} title="Add a new product">
        <form className="space-y-3" onSubmit={onSubmitHandler}>
          {renderFormInputList}
          <Select selected={selectedCategoy} setSelected={setSelectedCategoy} />
          <div className="flex items-center flex-wrap my-4 space-x-1 ">
            {renderProductColor}
          </div>

          <div className="flex items-center flex-wrap  my-4 space-x-1 ">

            {tempColors.map(color => (
              <span key={color} style={{ backgroundColor: color }} className="p-1 mr-1 mb-1 rounded-md text-sm text-white ">{color}</span>
            ))}
          </div>
          <div className="flex items-center space-x-3" >
            <Button className="bg-indigo-600 hover:bg-indigo-800 capitalize">submit</Button>
            <Button className="bg-gray-400 hover:bg-gray-600 capitalize" onClick={onCancel}>close</Button>
          </div>
        </form>
      </Modal>
      {/* /* ------- Modal Edit Product -------  */}
      <Modal isOpen={isOpenModel} closeModal={closeEditModal} title="EDIT THIS PRODUCT">
        <form className="space-y-3" onSubmit={onSubmitEditHandler}>
          {renderEditProductList("title", "Product title", "title")}
          {renderEditProductList("description", "Product description", "description")}
          {renderEditProductList("imageURL", "Product imageURL", "imageURL")}
          {renderEditProductList("price", "Product price", "price")}
          <Select selected={productToEdit.category} setSelected={value => setProductToEdit({ ...productToEdit, category: value })} />
          <div className="flex items-center flex-wrap my-4 space-x-1 ">
            {renderProductColor}
          </div>

          <div className="flex items-center flex-wrap  my-4 space-x-1 ">

            {tempColors.concat(productToEdit.colors).map(color => (
              <span key={color} style={{ backgroundColor: color }} className="p-1 mr-1 mb-1 rounded-md text-sm text-white ">{color}</span>
            ))}
          </div>
          <div className="flex items-center space-x-3" >
            <Button className="bg-indigo-600 hover:bg-indigo-800 capitalize">submit</Button>
            <Button className="bg-gray-400 hover:bg-gray-600 capitalize" onClick={onCancel}>close</Button>
          </div>
        </form>
      </Modal>
      {/* DELETE PRODUCT CONFIRM - MODAL · */}
      <Modal
        isOpen={isOpenConfirmModal}
        closeModal={closeConfirmModal}
        title="Are you sure you want to remove this Product from your Store?"
        description="Deleting this product will remove it permanently from your inventory. Any associated data,
      sales history, and other related information will also be deleted. Please make sure this is the intended
      action.">
        <div className="flex items-center space-x-3">
          <Button className="bg-[#c2344d] ☐hover:bg-red-800" onClick={removeProductHandler}>Yes, remove </Button>
          <Button className="■bg_[#f5f5fa] hover:bg-gray-300 text-black" onClick={closeConfirmModal}>
            Cancel
          </Button>
        </div>
      </Modal>
            <Toaster/>
    </main >
  )
}

export default App
