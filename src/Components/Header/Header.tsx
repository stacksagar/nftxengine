import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import hide_watermark from "../../libs/hide_watermark";
import { Link } from "react-router-dom";
import useSticky from "../../hooks/useSticky";
import Icon from "../Common/FontAwesomeIcons";

export const ConnectBtn = () => {
  const address = useAddress();

  return (
    <div className="py-2 pl-5 azo-mono-regular" onClick={hide_watermark}>
      {address ? (
        <ConnectWallet
          className="!text-sm !rounded !tracking-wider !p-3 !font-plus"
          btnTitle="Connect Wallet"
          modalSize="compact"
          modalTitleIconUrl="./nfts/1.png"
          modalTitle="CoralApp"
          switchToActiveChain
        />
      ) : (
        <ConnectWallet
          className="!text-sm !bg-primary-red !text-white !px-2 !sm:px-4 !sm:p-3 !rounded"
          btnTitle="Connect Wallet"
          modalSize="compact"
          modalTitleIconUrl="./nfts/1.png"
          modalTitle="CoralApp"
          switchToActiveChain
        />
      )}
    </div>
  );
};

const Header = () => {
  const { sticky, isGone } = useSticky();

  return (
    <div>
      {isGone ? <div style={{ height: `${100}px` }}></div> : null}

      <header
        className={`header ${isGone ? "gone" : ""} ${
          sticky ? "sticky" : ""
        } text-white w-full border-b border-b-[#141d31] rounded z-[99]`}
      >
        <div className="content h-full flex items-center justify-between">
          <div className="flex items-center gap-x-4">
            <Link to="/">
              <img
                title="logo"
                src="./logo.png"
                className="max-w-32 xl:max-w-max xl:h-12 -mt-3 xl:-mt-0"
              />
            </Link>

            <div className="hidden sm:flex items-center">
              <a className="py-2 pl-5" href="/#faq">
                FAQ
              </a>
              <a className="py-2 pl-5" href="/#about">
                About
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center gap-x-2">
            <div className="hidden sm:flex flex-wrap gap-4 justify-center items-center">
              <a
                rel="noopener"
                title="social"
                className="text-xl text-white hover:text-primary-red"
                target="_blank"
                href="https://t.me/coralapp"
              >
                <Icon icon="telegram" />
              </a>
              <a
                rel="noopener"
                title="social"
                className="text-xl text-white hover:text-primary-red"
                target="_blank"
                href="https://www.x.com/mycoralapp"
              >
                <img
                  className="w-6 h-6 object-cover mb-1 rounded-full"
                  src="https://cdn.prod.website-files.com/5d66bdc65e51a0d114d15891/64cebc6c19c2fe31de94c78e_X-vector-logo-download.png"
                  alt=""
                />
              </a>
            </div>
            <ConnectBtn />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
