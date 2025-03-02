import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

const nfts1 = [
  { picture: "./nfts/1.png" },
  { picture: "./nfts/2.png" },
  { picture: "./nfts/3.png" },
  { picture: "./nfts/4.png" },
  { picture: "./nfts/5.png" },
];

export default function AutoScrollNFTs() {
  return (
    <div className="w-full">
      <Splide
        options={{
          type: "loop",
          gap: "4px",
          drag: "free",
          arrows: false,
          pagination: false,
          perPage: 3,
          direction: "ltr",
          autoScroll: {
            pauseOnHover: true,
            pauseOnFocus: true,
            rewind: false,
            speed: 0.4,
          },
        }}
        extensions={{ AutoScroll }}
        className="flex items-center gap-12 space-x-24"
      >
        {nfts1.map((item, i) => (
          <SplideSlide key={i} className="max-w-[100px] lg:max-w-[200px]">
            <img
              title="nft"
              className="rounded w-[110px] h-[110px] xl:w-[200px] xl:h-[200px]"
              src={item?.picture}
            />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}
