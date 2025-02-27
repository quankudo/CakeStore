import React from 'react'
import BannerImage from '../../assets/images/image_banner1.jpg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Cake from '../../components/customer_view/Cake';
import {products} from '../../assets/data/ProductData'

const Home = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Tự động chạy
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  return (
    <div className='mt-10'>
      {/* Banner */}
      <Slider {...settings}>
        <div>
          <img decoding="async" src={BannerImage} className='w-full h-[30rem]' alt="Slider Image 1" title="Thư viện carousel được sử dụng để tạo các slideshow (React ) 2 học lập trình frontend, fullstack hà nội"/>
        </div>
        <div>
          <img decoding="async" src={BannerImage} className='w-full h-[30rem]' alt="Slider Image 2" title="Thư viện carousel được sử dụng để tạo các slideshow (React ) 3 học lập trình frontend, fullstack hà nội"/>
        </div>
        <div>
          <img decoding="async" src={BannerImage} className='w-full h-[30rem]' alt="Slider Image 3" title="Thư viện carousel được sử dụng để tạo các slideshow (React ) 4 học lập trình frontend, fullstack hà nội"/>
        </div>
      </Slider>

      <div className='mt-10 px-[7%]'>
        <h2 className='text-2xl text-center italic my-6'>Sản phẩm nổi bật</h2>
        <div className='flex flex-wrap gap-5'>
        {
          products.map(product =>(
            <Cake key={product.id} id={product.id} name={product.name} 
              price={product.price} discountPrice={product.discountPrice} imageUrl={product.imageUrl} />
          ))
        }
        </div>
      </div>
    </div>
  )
}

export default Home
