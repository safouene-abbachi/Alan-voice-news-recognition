import React, { useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
const alanKey =
  "0500f8d797f4ab7c54502fa4225813752e956eca572e1d8b807a3e2338fdd0dc/stage";
export default function App() {
  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles }) => {
        if (command === "newHeadLines") {
          console.log(articles);
        }
      },
    });
  }, []);

  return (
    <div>
      <h1>Alan Ai News Application</h1>
    </div>
  );
}
