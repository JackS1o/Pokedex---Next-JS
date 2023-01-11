import { useEffect, useState } from "react";
import requestToApi from "./api/pokeApi";

export default function Home() {
  const [data, setData] = useState("");

  useEffect(() => {
    requestToApi().then((res) => (setData(res)));
  }, [])

  console.log(data);

  return (
    <div>
      olá
    </div>
  )
}
