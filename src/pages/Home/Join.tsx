import React from "react";
import Icon from "../../Components/Common/FontAwesomeIcons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { sitename } from "../../config/admin";

interface CardProps {
  title: string;
  description: string;
  step: string;
  icon: IconProp;
}

const Card = ({ title, description, step, icon }: CardProps) => (
  <div className="p-6 rounded bg-gray-900 flex items-start justify-start gap-6">
    <div className="w-12 sm:w-20">
      <div className="w-10 h-10 sm:w-16 sm:h-16 rounded-full ring-1 text-xl sm:text-4xl flex items-center justify-center bg-blue-600">
        <Icon icon={icon} />
      </div>
    </div>

    <div className="space-y-3">
      <p className="text-[16px] text-orange-500">Step {step} </p>
      <a className="text-2xl font-medium mb-[20px]" href="#">
        {title}
      </a>

      <p className="text-[18px] leading-[1.7] mb-[16px]">{description}</p>
    </div>
  </div>
);

export default function Join() {
  return (
    <div className="py-20 section_border_t space-y-12">
      <div className="text-center space-y-6 mb-8">
        <h6 className="title_border w-fit mx-auto">Join</h6>
        <h2 className="section_title">
          Become a<span className="text-blue-500"> {sitename} </span> <br />{" "}
          Player Now
        </h2>
      </div>
      <div className="content grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card
          title="Connect Your Wallet"
          description="Securely link your crypto wallet to get started with minting and managing your NFTs effortlessly."
          icon="wallet"
          step="01"
        />

        <Card
          title="Mint Your NFT"
          description="Bring your ideas to life! Mint your unique CoralApp NFT and own a piece of the collection."
          icon="shopping-bag"
          step="02"
        />

        <Card
          title="Create Collection"
          description="Showcase your creativity by curating your very own collection of NFTs with ease."
          icon="folder"
          step="03"
        />
        <Card
          title="Sell Your NFT"
          description="List your minted NFTs in the marketplace and share your creations with the world."
          icon="dollar"
          step="04"
        />
      </div>
    </div>
  );
}
