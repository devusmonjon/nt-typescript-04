import axios from "axios";
import { Component } from "react";
import { FaStar } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
interface Product {
  data: null;
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
interface ProductsState {
  counter: number;
  text: string;
  data: null | Product[];
}

export default class Products extends Component<{}, ProductsState> {
  constructor(props: any) {
    super(props);
    this.state = {
      counter: 9,
      text: "Hello Ustoz",
      data: null,
    };
  }
  componentDidMount(): void {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => this.setState({ data: res.data.products }));
  }
  render() {
    return (
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
          {this.state.data?.map(
            (item: Product): JSX.Element => (
              <div className="border mb-7 relative" key={item.id}>
                <div className="w-full h-60  rounded-lg">
                  <Link to={`/products/${item.id}`}>
                    <img
                      className="w-full h-full object-contain duration-300 hover:scale-105"
                      src={item.images[0]}
                      alt="Photo"
                    />
                  </Link>
                </div>
                <div className="flex flex-col gap-2 p-[5px_16px_25px_16px] items-start justify-end">
                  <p className="text-start text-[12px] text-[#ADADAD]">
                    {item.category}
                  </p>
                  <p className="text-[16px] font-[700] text-[#253D4E] text-start">
                    {item.title.slice(0, 20)}...
                  </p>
                  <div className="flex gap-6 items-baseline">
                    <FaStar className="text-yellow-400" />
                    <p className="text-[#B6B6B6] text-[14px] font-[400]">
                      ({item.rating})
                    </p>
                  </div>
                  <div className="w-full">
                    <div className="flex">
                      <p className="text-[#B6B6B6] text-[14px]">By</p>
                      <p className="text-[#3BB77E] text-[14px] font-[400]">
                        {" "}
                        {item.brand}
                      </p>
                    </div>
                    <div className="flex  gap-[20px] flex-col w-full">
                      <div className="flex gap-2 mt-2 items-center">
                        <strong className="text-[18px] text-[#3BB77E] font-[700]">
                          ${item.price}
                        </strong>
                      </div>
                      <button className="w-full py-2 border bg-[#DEF9EC] px-[10px] text-[#fff] flex items-center rounded-[4px]">
                        <IoCartOutline className="text-[#3BB77E]" />{" "}
                        <p className="text-[13px] text-[#3BB77E] font-[500] text-xl">
                          Add
                        </p>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    );
  }
}
