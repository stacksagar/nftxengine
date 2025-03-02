import FAQ from "react-faq-component";

const data = {
  rows: [
    {
      title: "What is NFT xEngine?",
      content:
        "NFT xEngine is a platform where you can create, buy, and sell NFT collections on the Polygon blockchain. It’s designed to be easy to use and perfect for anyone interested in digital art and collectibles.",
    },
    {
      title: "Why use Polygon for NFTs?",
      content:
        "Polygon offers low fees and quick transactions, making it a great choice for NFTs. It also uses less energy, making it a more sustainable option.",
    },
    {
      title: "How can I mint an NFT?",
      content:
        "Just connect your wallet, upload your artwork, add details like a name and description, and mint your NFT with a few clicks. It’s fast and straightforward!",
    },
    {
      title: "Do I need a wallet to browse NFTs?",
      content:
        "No, you can explore collections and view NFTs without a wallet. But if you want to buy, sell, or create NFTs, you’ll need to connect a Polygon-compatible wallet.",
    },
    {
      title: "Is NFT xEngine beginner-friendly?",
      content:
        "Yes! We’ve designed NFT xEngine to be simple and welcoming. Whether you’re an artist just starting out or a collector curious about NFTs, we’re here to support you every step of the way.",
    },
  ],
};

export default function Faq() {
  return (
    <div id="faq" className="py-20 section_border_t">
      <div className="content">
        <div className="space-y-6 mb-8 title-font tracking-wider">
          <h2 className="section_title text-center">
            Frequently Asked <br />
            <span className="text-primary-wellness"> Questions </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img src="./question.png" alt="" />
          </div>
          <div className="p-5">
            <FAQ data={data} styles={{ color: "#555555" }} />
          </div>
        </div>
      </div>
    </div>
  );
}
