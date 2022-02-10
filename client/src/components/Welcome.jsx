import React from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import { Loader } from ".";

const commonStyles =
  "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Input = ({ placeHolder, name, type, value, handleChange }) => {
  return (
    <input
      placeholder={placeHolder}
      step="0.0001"
      type={type}
      value={value}
      className="my-2 w-full rounded-full px-5 p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
      onChange={() => {
        (e) => handleChange(e, name);
      }}
    />
  );
};

const Welcome = () => {
  const connectWallet = () => {};
  const handleSubmit = () => {

  }
  return (
    <div>
      <div className="flex w-full sm:flex-row flex-col  px-16 justify-center items-center">
        <div className="flex mf:flex-row flex-col items-start justify-between md:py-20 py-12 px-">
          <div className="flex flex-1 justify-start flex-col mf:mr-10">
            <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
              Send Crypto <br /> across the world
            </h1>
            <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
              Explore the crypto world. buy and sell cryptocurrencies
            </p>
            <button
              type="button"
              className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
              onClick={connectWallet}
            >
              <p className="text-white text-base text-semibold">
                Connect Wallet
              </p>
            </button>
            <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
              <div className={`rounded-tl-2xl ${commonStyles}`}>Relability</div>
              <div className={commonStyles}>Security</div>
              <div className={`rounded-tr-2xl ${commonStyles}`}>Ethereum</div>
              <div className={`rounded-bl-2xl ${commonStyles}`}>Web 3.0</div>
              <div className={commonStyles}>Low fees</div>
              <div className={`rounded-br-2xl ${commonStyles}`}>Blockchain</div>
              
            </div>
          </div>
        </div>
        

        <div className="flex flex-1 flex-col items-center justify-start w-full md:mt-0 mt-10">
          <div className="p-3 justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card white-glassmorpism">
            <div className="flex justify-between flex-col w-full h-full">
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                  <SiEthereum fontSize={21} color="#fff" />
                </div>
                <BsInfoCircle fontSize={17} color="#fff" />
              </div>
              <div>
                <p className="text-white font-light text-sm -mb-10">
                  0xsdrtf....6tr86cs
                </p>
              </div>
              <div className="">
                <p className="text-white font-semibold text-lg">Ethereum</p>
              </div>
            </div>
          </div>
          <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
            <Input
              placeHolder="Address To"
              name="addressTo"
              type="text"
              handleChange={() => {}}
            />
            <Input
              placeHolder="Amount (ETH)"
              name="amount"
              type="number"
              handleChange={() => {}}
            />
            <Input
              placeHolder="Keyword (Gif)"
              name="keyword"
              type="text"
              handleChange={() => {}}
            />
            <Input
              placeHolder="Message"
              name="message"
              type="text"
              handleChange={() => {}}
            />
            <div className="h-[1px] rounded-full w-full bg-gray-400 my-2"/>

            {true ? (<Loader/>) : (<button type="button" className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] rounded-full cursor-pointer" onClick={handleSubmit}>Send Now</button>)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
