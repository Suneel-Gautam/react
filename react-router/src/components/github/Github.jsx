// import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
const Github = () => {
//   const [data, setData] = useState();
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/suneel-gautam")
  //       .then((res) => res.json())
  //       .then((res) => setData(res));
  //   });
  const data = useLoaderData()

  return (
    <>
      <div className="h-50 bg-amber-100 w-full flex justify-center">
        <img src={data?.avatar_url} alt="" />
        <div>
          <span>Followers : </span>
          <span>{data?.followers}</span>
        </div>
      </div>
    </>
  );
};

export default Github;
