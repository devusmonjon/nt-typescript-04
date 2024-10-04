import { Component } from "react";
interface CountrState {
  counter: number;
  text: string;
}
export default class Counter extends Component<{}, CountrState> {
  constructor(props: any) {
    super(props);
    this.state = {
      counter: 9,
      text: "Hello Ustoz",
    };
  }

  render() {
    return (
      <div>
        <h2 className="text-center text-[24px] mb-[20px]">
          {this.state.text}
          {this.state.counter}
        </h2>
        <div className="flex gap-5 w-[250px] m-auto">
          <button
            onClick={() => this.setState({ counter: this.state.counter - 1 })}
            className="px-4 border-spacing-1 bg-indigo-400 p-2  flex m-auto text-[#fff] rounded-lg  items-center justify-center"
          >
            Decrement
          </button>
          <button
            onClick={() => this.setState({ counter: this.state.counter + 1 })}
            className="px-4 border-spacing-1 bg-indigo-400 p-2  flex m-auto text-[#fff] rounded-lg items-center justify-center"
          >
            Increment
          </button>
        </div>
      </div>
    );
  }
}
