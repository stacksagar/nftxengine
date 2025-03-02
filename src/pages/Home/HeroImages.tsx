export default function HeroImages() {
  return (
    <div className="w-full grid grid-cols-5 lg:flex items-center justify-center gap-1 sm:gap-2 lg:gap-3 px-2">
      <img
        className="lg:w-[150px] lg:h-[150px] bg-primary-fitness p-[1px] lg:p-1 rounded-lg transform hover:scale-105 transition-all"
        src="./nfts/1.png"
        title="nft"
      />
      <img
        className="lg:w-[150px] lg:h-[150px] bg-primary-fitness p-[1px] lg:p-1 rounded-lg transform hover:scale-105 transition-all"
        src="./nfts/2.png"
        title="nft"
      />
      <img
        className="lg:w-[170px] lg:h-[170px] bg-primary-fitness p-[1px] lg:p-1 rounded-lg transform scale-105 lg:scale-100 hover:scale-105 transition-all"
        src="./nfts/3.png"
        title="nft"
      />
      <img
        className="lg:w-[150px] lg:h-[150px] bg-primary-fitness p-[1px] lg:p-1 rounded-lg transform hover:scale-105 transition-all"
        src="./nfts/4.png"
        title="nft"
      />

      <img
        className="lg:w-[150px] lg:h-[150px] bg-primary-fitness p-[1px] lg:p-1 rounded-lg transform hover:scale-105 transition-all"
        src="./nfts/5.png"
        title="nft"
      />
    </div>
  );
}
