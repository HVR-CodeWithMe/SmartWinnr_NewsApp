import React, { useEffect, useState } from "react";
import { Card, List } from "antd";
import axios from "axios";
import "./App.scss";
const { Meta } = Card;

const App = () => {
  const url =
    "https://newsapi.org/v2/top-headlines?country=in&apiKey=7ba7597317a54b9586aead5578edce53";
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(url);
      const articles = res.data.articles;
      setData(articles);
    };
    fetchData();
  }, []);
  return (
    <>
      <h1
        style={{
          textAlign: "center",
          width: "100%",
          color: "#f06e38",
          margin: "2rem 0",
        }}
      >
        {" "}
       SMART WINNR News App
      </h1>
      <div
        style={{
          width: "80%",
          margin: "0 auto",
        }}
      >
        <List
          size="large"
          bordered
          pagination={{
            pageSize: 6,
          }}
          dataSource={data}
          renderItem={(item) => {
            const { urlToImage, title, description, publishedAt, author } =
              item;
            return (
              <Card
                hoverable
                style={{
                  width: 240,
                }}
                cover={<img alt="example"  style={{ height:500}} src={urlToImage} />}
              >
                {/* <Meta title={title} description={description} /> */}
                <h1>{title}</h1>
                <h2>{description}</h2>
                <h3>{publishedAt}</h3>
                <h5>{author}</h5>
              </Card>
            );
          }}
        />
      </div>
    </>
  );
};
export default App;
