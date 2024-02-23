import { Suspense } from "react";
import Loading from "./loading";
import List from "./components/list";



export default async function Home() {

  return (
    <>
      <h1>Hello Next JS!</h1>
      <Suspense fallback={ <Loading /> }>
        <List />
      </Suspense>
    </>
  );
}
