import { useState } from "react";
import ProductCard from "./components/ProductCard"
import { productList } from "./components/data"
import { Modal } from "./components/ui/Modal";
import Button from "./components/ui/Button";

const App = () => {

  const [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  // ** Render
  const renderProductList = productList.map(product => { return <ProductCard key={product.id} product={product} /> });
  return (
    <main className="container">
      <Button className="bg-indigo-600" onClick={openModal}>add</Button>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 m-5 gap-2 md:gap-4  ">
        {renderProductList}
      </div>
      <Modal isOpen={isOpen} closeModal={closeModal} title="Add a new product">

        <div className="flex items-center space-x-2" >
          <Button className="bg-indigo-600 hover:bg-indigo-800 capitalize">submit</Button>
          <Button className="bg-gray-400 hover:bg-gray-600 capitalize ">close</Button>
        </div>
      </Modal>

    </main>
  )
}

export default App
