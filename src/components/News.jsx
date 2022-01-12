import React,{useState} from "react";
import { Select, Typography, Row, Col, Card, Avatar } from "antd";
import moment from "moment";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";
import { useGetCryptosQuery } from "../services/cryptoApi";

import Loader from "../components/Loader";


const { Title, Text } = Typography;
const { Option } = Select;




const demoImage="https://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg";



//Main Component
const News = ({ simplified }) => {

  const [newsCategory, setNewsCategory] = useState("Cryptocurrency");

  const { data, isFetching } = useGetCryptosQuery(100);



  const { data: cryptoNews, isFetching:isFetchingNews } = useGetCryptoNewsQuery({
    newsCategory,
    count: simplified ? 5 : 25,
  });

  if(isFetching || isFetchingNews) return <Loader />;
  // console.log(cryptoNews);
  if (!cryptoNews?.value) {
    return <div><h1>Sorry! We couldn't fetch the news from Bing Server...</h1></div>;
  }

  

  return (
    
    <Row gutter={[24, 24]}>

{!simplified && (
      <Col span={24}>
        <Select 
        showSearch
        className='select-news'
        placeholder="Select a Crypto"
        optionFilterProp="children"
        onChange={(value) => setNewsCategory(value)}
        filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
        >
          <Option value="Cryptocurrency">Cryptocurrency</Option>
          {data?.data?.coins.map((crypto) => 
          <Option value={crypto.name}>{crypto.name}</Option>
          )}

        </Select>
        </Col>
)}


      {cryptoNews.value.map((news, index) => (
        <Col xs={24} sm={12} lg={8} key={index}>
          <Card className="news-card">
            <a href={news.url} target="_blank" rel="noreferrer">
              <div className="news-image-container">
                <Title className="news-title" level={4}>
                  {news.name}
                </Title>
                <img style={{maxWidth:'200px', maxHeight:'100px'}} src={news?.image?.thumbnail?.contentUrl || demoImage} alt='news' />
              </div>
              <p>
                {news.description>80 ? news.description.substring(0, 100)+"..." : news.description}
              </p>

              <div className='provider-container'>
                <div>
                <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl} />
                <Text className='provider-name'>{news.provider[0]?.name}</Text>
                </div>
                <Text>{moment(news.datePublished).startOf('ss').fromNow()}</Text>

              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default News;
