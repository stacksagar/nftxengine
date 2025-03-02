import { Link } from "react-router-dom";
import Button from "../../Components/Common/Button";

export default function About() {
  return (
    <div id="about" className="section_border_t bg-[#0a0a0a]">
      <div className="content py-20 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        <div className="relative">
          <div className="grid grid-cols-3 gap-2 max-w-[95%] md:max-w-[450px] md:mx-0 mx-auto transition-all slow-spin">
            <img className="rounded-full !opacity-0" src="/nfts/1.png" alt="" />
            <img className="rounded-full" src="/nfts/2.png" alt="" />
            <img className="rounded-full !opacity-0" src="/nfts/3.png" alt="" />
            <img className="rounded-full" src="/nfts/4.png" alt="" />
            <img className="rounded-full" src="/nfts/5.png" alt="" />
            <img className="rounded-full" src="/nfts/6.png" alt="" />
            <img className="rounded-full !opacity-0" src="/nfts/7.png" alt="" />
            <img className="rounded-full" src="/nfts/8.png" alt="" />
            <img className="rounded-full !opacity-0" src="/nfts/9.png" alt="" />
          </div>
          <div className="grid grid-cols-3 gap-2 max-w-[95%] md:max-w-[450px] md:mx-0 mx-auto absolute inset-0 m-auto slow-spin-reverse">
            <img className="rounded-full !opacity-0" src="/nfts/1.png" alt="" />
            <img className="rounded-full !opacity-0" src="/nfts/2.png" alt="" />
            <img className="rounded-full !opacity-0" src="/nfts/3.png" alt="" />
            <img className="rounded-full !opacity-0" src="/nfts/4.png" alt="" />
            <img className="rounded-full" src="/nfts/5.png" alt="" />
            <img className="rounded-full !opacity-0" src="/nfts/6.png" alt="" />
            <img className="rounded-full !opacity-0" src="/nfts/7.png" alt="" />
            <img className="rounded-full !opacity-0" src="/nfts/8.png" alt="" />
            <img className="rounded-full !opacity-0" src="/nfts/9.png" alt="" />
          </div>
        </div>

        <div className="space-y-6 text-center md:text-left">
          <h2 className="section_title title-font tracking-wider text-primary-fitness">
            About
          </h2>

          <p className="text-lg">
            At NFT xEngine, we believe NFTs should be accessible to everyone.
            Our platform is built on the Polygon network, offering a smooth and
            affordable experience for artists and collectors alike. We aim to
            create a welcoming space where creators can showcase their work, and
            collectors can find hidden gems — all without worrying about high
            fees or complicated processes.
          </p>
          <Link to="/mint" className="block">
            <Button className="!bg-primary-red !rounded-xl">Get Started</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
