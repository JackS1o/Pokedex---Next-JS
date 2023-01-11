import { useEffect, useState } from "react";
import requestToApi from "./api/pokeApi";

export default function HomePage() {
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
