import { NativeBaseProvider } from "native-base";
import Navigation from "./src/navigation/Navigation";
import { RecoilRoot } from "recoil";

export default function App() {
  return (
    <RecoilRoot>
      <NativeBaseProvider>
        <Navigation />
      </NativeBaseProvider>
    </RecoilRoot>
  );
}
