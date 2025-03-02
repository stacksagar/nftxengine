export default function HowToMint() {
  return (
    <div id="faq" className="py-20 section_border_t">
      <div className="content">
        <div className="space-y-6 mb-8 title-font tracking-wider">
          <h2 className="section_title text-center title-font">
            How to
            <span className="text-primary-fitness"> Mint? </span>
          </h2>
        </div>

        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-center justify-start bg-black bg-opacity-20 p-4 lg:p-6 rounded shadow gap-6">
            <img className="w-20" src="mint-01.png" alt="" />
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Connect your wallet</h2>
              <p className="text-gray-400">
                Use Trust Wallet, Metamask or any wallet to connect to the app.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-start bg-black bg-opacity-20 p-4 lg:p-6 rounded shadow gap-6">
            <img className="w-20" src="mint-02.png" alt="" />
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Select your quantity</h2>
              <p className="text-gray-400">
                Upload your NFTs and set a title, description and price.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-start bg-black bg-opacity-20 p-4 lg:p-6 rounded shadow gap-6">
            <img className="w-20" src="mint-03.png" alt="" />
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Confirm transaction</h2>
              <p className="text-gray-400">
                Earn ETH and BIT for all your NFTs that you sell on our
                marketplace.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-start bg-black bg-opacity-20 p-4 lg:p-6 rounded shadow gap-6">
            <img className="w-20" src="mint-04.png" alt="" />
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Receive your NFTs</h2>
              <p className="text-gray-400">
                Latin professor at Hampden-Sydney College in Virginia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
