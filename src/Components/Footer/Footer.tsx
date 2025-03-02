import Icon from "../Common/FontAwesomeIcons";

export default function Footer() {
  return (
    <footer className="mt-auto bg-[#070c17] text-white">
      <div className="section_border_t">
        <div className="content py-10 flex flex-col sm:flex-row gap-2 items-center justify-center md:justify-between">
          <p className="text-center">© 2025 CoralApp. All Rights Reserved.</p>

          <div className="flex flex-wrap gap-4 justify-center items-center">
            <a
              rel="noopener"
              title="social"
              className="text-3xl text-white hover:text-blue-400"
              target="_blank"
              href="https://www.x.com/mycoralapp"
            >
              <img
                className="w-7 sm:w-12"
                src="https://cdn.prod.website-files.com/5d66bdc65e51a0d114d15891/64cebc6c19c2fe31de94c78e_X-vector-logo-download.png"
                alt=""
              />
            </a>
            <a
              rel="noopener"
              title="social"
              className="text-xl sm:text-3xl text-white hover:text-blue-400"
              target="_blank"
              href="https://t.me/coralapp"
            >
              <Icon icon="telegram" />
            </a>
            {/* <a
              rel="noopener"
              title="social"
              className="text-xl sm:text-3xl text-white hover:text-blue-400"
              target="_blank"
              href="https://discord.gg/chatid"
            >
              <Icon icon="discord" />
            </a> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
