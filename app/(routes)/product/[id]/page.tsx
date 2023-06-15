
import { lists, product } from '@/constants';
import ProductList from '@/components/product-list'
;
import Gallery from '../../../../components/gallery';
import Info from '../../../../components/info';
import Form from '../../../../components/form';
import Reviews from './components/reviews';


const Product = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto px-4 py-10 sm:px-6 max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
          {/* Gallery*/}
          <Gallery images={product.images} />

          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            {/* Product Information */}
            <Info price={product.price} name={product.name} />

            <hr className="my-4" />

            {/* Product Form */}
            <Form product={product} />
          </div>
        </div>
        <hr className="my-10" />
        <Reviews />
        <hr className="my-10" />
        <ProductList title="Related Items" items={lists[0].items} />
      </div>
    </div>  
  )
}

export default Product;