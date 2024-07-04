"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

type profileDataType = {
  name: String;
  age: String;
};

function ProfilePage() {
  const [profileData, setProfileData] = useState<profileDataType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("/profile/api");
        setProfileData(response.data);
        console.log("Response", response.data);
      } catch (err: any) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Profile Page</h1>
      <p>Name: {profileData?.name}</p>
      <p>Age: {profileData?.age}</p>
    </div>
  );
}

export default ProfilePage;
