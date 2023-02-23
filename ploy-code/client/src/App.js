import { useEffect } from "react";
import Router from "./router";
import ThemeConfig from "theme";
import { switchNetwork } from "utils/wallet";
import useEagerConnect from "hooks/useEagerConnect";

export default function App() {
  // switchNetwork();
  useEagerConnect();

  return (
    <ThemeConfig>
      <Router />
    </ThemeConfig>
  );
}
