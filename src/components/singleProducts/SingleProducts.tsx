import axios from 'axios';
import { Component } from 'react';
import { AiOutlineShareAlt, AiOutlineShoppingCart } from 'react-icons/ai';
import { FaRegHeart, FaStar } from 'react-icons/fa';
import { HiOutlineChevronDown, HiOutlineChevronUp } from 'react-icons/hi';

interface Product {
  id: number;
  title: string;
  images: string[];
  rating: number;
  brand: number;
  price: number;
  percentageCount: any;
  car: string;
  category: string;
  description: string;
}

interface SingleProductsState {
  data: null | Product;
}

export default class SingleProducts extends Component<any, SingleProductsState> {
  constructor(props: any) {
    super(props);
    this.state = {
      data: null,
    };
  }

  componentDidMount(): void {
    const pathParts = window.location.pathname.split('/'); // URLni bo'laklarga ajratish
    const id = pathParts[pathParts.length - 1]; // URLdan oxirgi bo'lakni olamiz

    axios
      .get(`https://dummyjson.com/products/${id}`) // id'ni API so'rovida ishlatamiz
      .then((res) => this.setState({ data: res.data }))
      .catch((error) => console.error('Error fetching product:', error));
  }

  render() {
    const { data } = this.state;

    return (
      <div className="container mt-[60px]">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 mb-10 px-1">
          <div className="">
            <img
              className="w-[350px] h-[350px] mb-4 object-contain border"
              src={data?.images[0]}
              alt=""
            />
            <div className="flex">
              {data?.images?.map((item, inx) => (
                <img
                  className="w-[80px] h-[80px] object-contain m-auto"
                  src={item}
                  key={inx}
                  alt=""
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <button className="py-[6px] rounded-[5px] border bg-[#FDE0E9] text-[#F74B81] text-[14px] font-quicksand font-[700] w-[79px]">
              Sale Off
            </button>
            <h2 className="text-[28px] md:text-[34px] lg:text-[38px] lg:w-[444px] text-start font-quicksand font-[700]">
              {data?.title}
            </h2>
            <div className="flex gap-6 items-baseline">
              <FaStar className="text-yellow-400" />
              <p className="text-[#B6B6B6] text-[14px] font-[400]">
                ({data?.rating} reviews)
              </p>
            </div>
            <div className="flex gap-2 mt-2 items-baseline">
              <strong className="text-[26px] sm:text-[38px] md:text-[44px] lg:text-[48px] text-[#3BB77E] font-[700]">
                ${data?.price}
              </strong>
            </div>
            <p className="text-start text-[#7E7E7E] text-[17px]">
              {data?.description}
            </p>
            <div className="flex gap-5">
              <div className="flex gap-3 border w-[90px] py-[3px] rounded-[5px] items-center justify-center">
                <button>1</button>
                <div className="flex flex-col">
                  <button>
                    <HiOutlineChevronUp className="text-[#3BB77E]" />
                  </button>
                  <button>
                    <HiOutlineChevronDown className="text-[#3BB77E]" />
                  </button>
                </div>
              </div>
              <div>
                <button className="flex gap-1 items-center border w-[120px] lg:w-[159px] bg-[#3BB77E] py-[12px] justify-center font-[600] rounded-[5px]">
                  <AiOutlineShoppingCart className="text-[#fff]" />
                  <p className="text-[#fff]">Add to cart</p>
                </button>
              </div>
              <button className="w-[50px] border rounded-[5px] h-[50px] flex justify-center items-center">
                <FaRegHeart className="text-[20px] flex justify-center" />
              </button>
              <button className="w-[50px] border rounded-[5px] h-[50px] flex justify-center items-center">

                <AiOutlineShareAlt className="text-[20px] flex justify-center" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
