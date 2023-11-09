"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import AnswerSubmitModal from "../components/partial/answer-submit-modal";
export default function Page() {
  return (
    <>
      <Image
        fill={true}
        src="/background-city-pink.svg"
        alt="background image"
        className="z-[-1]"
      />
      <AnswerSubmitModal text="1" />
    </>
  );
}
