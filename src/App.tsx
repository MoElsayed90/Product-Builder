import ProductCard from "./components/ProductCard"
import { productList } from "./components/data"


// ** Render
const renderProductList = productList.map(product => { return <ProductCard key={product.id} product={product}/>});
  const App = () => {
    return (
      <main className="container">

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 m-5 gap-2 md:gap-4  ">
        {renderProductList}
      </div>
      </main>
    )
  }

  export default App
