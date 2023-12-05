import React, { useEffect, useState } from "react";
import DataCard from "./DataCard";
import Stack from "@mui/material/Stack";

function Fetching() {
  const [userData, setUserData] = useState([]);
  const url = "https://api.github.com/users";
  async function fetchingData() {
    const result = await fetch(url);
    const data = await result.json();
    setUserData(data);
  }
  console.log(userData);
  useEffect(() => {
    fetchingData();
  }, []);
  return (
    <div style={{ backgroundColor: "antiquewhite", height: "100vh" }}>
      <label class="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" class="hidden" />
        <div class="w-16 h-8 bg-gray-300 rounded-full shadow-inner transform transition-transform ease-in-out duration-300">
          <div class="absolute inset-0 bg-white rounded-full shadow-md"></div>
          <div class="absolute inset-y-0 left-0 w-8 bg-blue-500 rounded-full"></div>
          <div class="absolute inset-y-0 right-0 w-8 bg-gray-300 rounded-full"></div>
          <div class="absolute inset-0 flex items-center justify-center text-gray-700 dark:text-gray-300 font-medium text-sm">
            <span class="transform transition-transform ease-in-out duration-300">
              Off
            </span>
            <span class="transform transition-transform ease-in-out duration-300">
              On
            </span>
          </div>
        </div>
      </label>

      <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
        {userData.map((d) => {
          return <DataCard d={d} />;
        })}
      </Stack>
    </div>
  );
}

export default Fetching;
