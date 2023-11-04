"use client";
import { useState } from "react";
import Image from "next/image";
import FlipCard from "../components/flipcard";

const page = () => {
  const [isFlipped, setIsFlipped] = useState({
    oat: false,
    guy: false,
    jedi: false,
    kao: false,
    pung: false,
    men: false,
  });

  const flipCard = (card) => {
    setIsFlipped({
      ...isFlipped,
      [card]: !isFlipped[card],
    });
  };

  const [show, setShow] = useState(false);

  return (
    <>
      <button className="bg-[#FFBB54] rounded-[50px] flex grow-0 py-4 px-3 w-[250px] text-center justify-center ml-auto m-5">
        <div className="text-[#FFFFFF]" onClick={() => setShow(!show)}>
          Support Developer
        </div>
      </button>

      {show && (
        <div className="flex flex-col bg-[#F7EFE5] px-10 text-center">
          <h1 className="mt-10 text-2xl font-bold">Buy us coffee!!</h1>
          <div className=" flex justify-center flex-row gap-5 flex-1 items-center py-28">
            <FlipCard
              isFlipped={isFlipped.oat}
              flipCard={() => flipCard("oat")}
              frontImage="/images/oat.png"
              backImage="/images/oatpay.jpg"
            />
            <FlipCard
              isFlipped={isFlipped.guy}
              flipCard={() => flipCard("guy")}
              frontImage="/images/guy.jpg"
              backImage="/images/oatpay.jpg"
            />
            <FlipCard
              isFlipped={isFlipped.jedi}
              flipCard={() => flipCard("jedi")}
              frontImage="/images/jedi.jpg"
              backImage="/images/oatpay.jpg"
            />
            <FlipCard
              isFlipped={isFlipped.kao}
              flipCard={() => flipCard("kao")}
              frontImage="/images/kao.png"
              backImage="/images/oatpay.jpg"
            />
            <FlipCard
              isFlipped={isFlipped.pung}
              flipCard={() => flipCard("pung")}
              frontImage="/images/pung.png"
              backImage="/images/oatpay.jpg"
            />
            <FlipCard
              isFlipped={isFlipped.men}
              flipCard={() => flipCard("men")}
              frontImage="/images/men.jpg"
              backImage="/images/oatpay.jpg"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default page;
