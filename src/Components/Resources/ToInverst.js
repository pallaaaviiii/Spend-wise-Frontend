import React from "react";
export default function ToInverst() {
  return (
    <div className="p-5 overflow-y-scroll h-screen">
      <h1 className="text-4xl mb-5 font-bold">Resources to Invest</h1>
      <div className="w-full flex flex-col items-center gap-5 mt-10">
        <div className="w-full">
          <h2 className="mb-2 text-2xl font-bold">
            How does the stock market work? - Oliver Elfenbaum
          </h2>
        </div>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/p7HKvqRI_Bo?si=LeVIH96F1ToMX2f_"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
          className="w-[80%]"
        ></iframe>
      </div>
      <div className="w-full flex flex-col items-center gap-5 mt-10">
        <div className="w-full">
          <h2 className="mb-2 text-2xl font-bold">
            How Does the Stock Market Work? (Stocks, Exchanges, IPOs, and More)
          </h2>
        </div>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/A7fZp9dwELo?si=2jPCqWtEUIuSZp-w"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
          className="w-[80%]"
        ></iframe>
      </div>
      <div className="w-full flex flex-col items-center gap-5 mt-10">
        <div className="w-full">
          <h2 className="mb-2 text-2xl font-bold">
          How To Start Trading Stocks As A Complete Beginner
          </h2>
        </div>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/i5OZQQWj5-I?si=kLlHxVKdzKDe1Pmr"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}
