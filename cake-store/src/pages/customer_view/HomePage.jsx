import React from 'react'
import BannerImage from '../../assets/images/image_banner1.jpg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Cake from '../../components/customer_view/Cake';
import { IoHeartCircleOutline } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";
import {IntroductionProduct, Categories, products} from '../../assets/data/ProductData'

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
      <div className='flex px-[7%]'>
        <nav className='w-[20%] bg-pink-100'>
          {
            Categories.map((item, index) => (
              <div className='flex items-center justify-between px-4 py-2 cursor-pointer border-b border-b-gray-400'>
                <p className='text-black text-[16px]'>{item.title}</p>
                <span><MdKeyboardArrowRight /></span>
              </div>
            ))
          }
        </nav>
        {/* Banner */}
        <Slider {...settings} className='w-[80%]'>
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
      </div>

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

      <div className='mt-10 px-[7%]'>
        <div className='text-center'>
          <h3 className='text-3xl text-pink-600'>Cái tên Mona Cake chúng tôi đặt hết tấm lòng mình vào đấy</h3>
          <p className='text-black text-xl my-5 italic'>Thiên là trời, lương trong lương thiện, thiên lương nhằm hướng đến giá trị cao nhất trong cuộc sống</p>
          <h4 className='text-pink-600 text-3xl'>CHÂN - THIỆN - MỸ</h4>
          <div className='relative w-40 mx-auto mt-3'>
            <div className='absolute top-[50%] left-0 l translate-y-[-50%] w-16 h-[3px] bg-pink-600'></div>
            <IoHeartCircleOutline className='mx-auto text-pink-600' size={24}/>
            <div className='absolute top-[50%] right-0 translate-y-[-50%] w-16 h-[3px] bg-pink-600'></div>
          </div>
        </div>
        <div className='mt-10 px-20'>
          {
            IntroductionProduct.map((item, index)=>(
              <div className={`flex items-center ${index%2==1?"flex-row-reverse": ""}`}>
                <div className='w-[50%]'>
                  <img src={item.imageUrl} alt="" className='object-cover h-[300px] w-full'/>
                </div>
                <div className='flex flex-col w-[50%] gap-3 items-start px-10'>
                  <h3 className='text-2xl text-pink-600'>{item.title}</h3>
                  <p className='text-[16px]'>{item.description}</p>
                  <a className='text-white text-[16px] bg-pink-500 px-4 py-2 rounded'>Đọc thêm</a>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Home
