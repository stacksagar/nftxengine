import { Route, Routes } from "react-router-dom";
import { Suspense, useEffect } from "react";
import public_pages from "./routes/public.routes";
import ScreenLoader from "./Components/Loaders/ScreenLoader";

export default function App() {
  useEffect(() => {
    const div = document.querySelectorAll("div");

    div.forEach((d) => {
      if (d.className.includes("css-")) {
        d.style.display = "none";
      }
    });

    setTimeout(() => {
      document.querySelectorAll("a").forEach((a) => {
        // @ts-ignore
        if (a.attributes.color) {
          a.style.display = "none";
        }
      });
    }, 2000);
  }, []);

  return (
    <div className="flex flex-col justify-between max-w-full mx-auto overflow-hidden font-just">
      <Routes>
        {Object.entries(public_pages).map(([key, Element]) => (
          <Route
            key={key}
            path={key}
            element={
              <Suspense fallback={<ScreenLoader />}>
                <Element />
              </Suspense>
            }
          />
        ))}
      </Routes>
    </div>
  );
}
