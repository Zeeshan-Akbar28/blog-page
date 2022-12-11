import React from "react";
import BloogHome from "./pages/BloogHome";
import SingleBlog from "./pages/SingleBlog";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";

function App() {

  const dispatch = useDispatch();

  const [data, setData] = useState([]);

  const baseUrl = "https://61791a83aa7f3400174047a6.mockapi.io/v1/GetBLogs/";

  async function getBlogs() {
    const res = await axios.get(baseUrl);
    const reduxInitialtate = res?.data?.map((item) => {
      return { id: item.id, count: 0 };
    });
    
    setData(res.data);
    dispatch({ type: "iniState", iniState: reduxInitialtate });
  }
  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<BloogHome blogs={data} />} />
        <Route path="/blog/:blog_id" element={<SingleBlog blogs={data} />} />
      </Routes>
    </div>
  );
}

export default App;
