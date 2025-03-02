export default function GridImages() {
  return (
    <div>
      <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] three_grid_animation mx-auto">
        <div className="three_grid_animation_1 p-1 absolute w-[150px] md:w-[200px] h-fit">
          <img className="w-full h-auto rounded" src="/nfts/1.png" alt="" />
        </div>

        <div className="three_grid_animation_2 p-1 absolute w-[150px] md:w-[200px] h-fit">
          <img className="w-full h-auto rounded" src="/nfts/2.png" alt="" />
        </div>

        <div className="three_grid_animation_3 p-1 absolute w-[150px] md:w-[200px] h-fit">
          <img className="w-full h-auto rounded" src="/nfts/3.png" alt="" />
        </div>
      </div>
    </div>
  );
}
