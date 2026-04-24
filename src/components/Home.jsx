import ProductCard from './ProductCard'
import products from '../data/products'

const Home = () => {
  return (
    <div className="page">
      <div className="home-hero"></div>
      <h1 className="home-title">
        Welcome to ShopHub
      </h1>
      <p className="home-subtitle">
        Discover amazing products at great prices
      </p>

      <div className="container">
        <h2 className="page-title">Our Products</h2>
        <div className="product-grid">
          {products.map((product)=>(
            <ProductCard product={product} key={product.id}/>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Home