import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

const nfts1 = [
  { picture: "./nfts/6.png" },
  { picture: "./nfts/7.png" },
  { picture: "./nfts/8.png" },
  { picture: "./nfts/9.png" },
  { picture: "./nfts/10.png" },
  { picture: "./nfts/11.png" },
  { picture: "./nfts/12.png" },
  { picture: "./nfts/13.png" },
  { picture: "./nfts/14.png" },
  { picture: "./nfts/15.png" },
  { picture: "./nfts/16.png" },
  { picture: "./nfts/17.png" },
  { picture: "./nfts/18.png" },
  { picture: "./nfts/19.png" },
  { picture: "./nfts/20.png" },
  { picture: "./nfts/21.png" },
  { picture: "./nfts/22.png" },
  { picture: "./nfts/23.png" },
  { picture: "./nfts/24.png" },
  { picture: "./nfts/25.png" },
  { picture: "./nfts/26.png" },
  { picture: "./nfts/27.png" },
  { picture: "./nfts/28.png" },
  { picture: "./nfts/29.png" },
  { picture: "./nfts/30.png" },
  { picture: "./nfts/31.png" },
  { picture: "./nfts/32.png" },
  { picture: "./nfts/33.png" },
  { picture: "./nfts/34.png" },
  { picture: "./nfts/35.png" },
  { picture: "./nfts/36.png" },
  { picture: "./nfts/37.png" },
  { picture: "./nfts/38.png" },
  { picture: "./nfts/39.png" },
  { picture: "./nfts/40.png" },
  { picture: "./nfts/41.png" },
  { picture: "./nfts/42.png" },
  { picture: "./nfts/43.png" },
  { picture: "./nfts/44.png" },
  { picture: "./nfts/45.png" },
  { picture: "./nfts/46.png" },
  { picture: "./nfts/47.png" },
  { picture: "./nfts/48.png" },
  { picture: "./nfts/49.png" },
  { picture: "./nfts/50.png" },
  { picture: "./nfts/51.png" },
  { picture: "./nfts/52.png" },
  { picture: "./nfts/53.png" },
  { picture: "./nfts/54.png" },
  { picture: "./nfts/55.png" },
  { picture: "./nfts/56.png" },
  { picture: "./nfts/57.png" },
  { picture: "./nfts/58.png" },
  { picture: "./nfts/59.png" },
  { picture: "./nfts/60.png" },
];

export default function SmallAutoScrollNFTs() {
  return (
    <div className="w-full">
      <Splide
        options={{
          type: "loop",
          gap: "8px",
          drag: "free",
          arrows: false,
          pagination: false,
          perPage: 3,
          direction: "rtl",
          autoScroll: {
            pauseOnHover: true,
            pauseOnFocus: true,
            rewind: false,
            speed: 0.2,
          },
        }}
        extensions={{ AutoScroll }}
        className="flex items-center gap-12 space-x-24"
      >
        {nfts1.map((item, i) => (
          <SplideSlide key={i} className="max-w-[90px] lg:max-w-[100px]">
            <img
              title="nft"
              className="rounded w-[90px] h-[90px] xl:w-[100px] xl:h-[100px]"
              src={item?.picture}
            />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}
