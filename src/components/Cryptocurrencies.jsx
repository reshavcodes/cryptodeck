import React, { useState, useEffect } from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { Row, Col, Card, Input } from "antd";

import { useGetCryptosQuery } from "../services/cryptoApi";

import Loader from "../components/Loader";





//Main function
const Cryptocurrencies = ({simplified}) => {

    const count = simplified ? 10 : 100;

  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);

  const [cryptos, setCryptos] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {

    const filteredCryptos = cryptosList?.data?.coins.filter(crypto => 
crypto?.name?.toLowerCase().includes(searchTerm.toLowerCase())
    )

    setCryptos(filteredCryptos);

},[cryptosList,searchTerm]);




//During initial load, we want to show the loading indicator
if(isFetching) return <Loader></Loader>;
  // console.log(cryptos);


//If we have data, we want to show the list of cryptos
  return (
    <>
    {!simplified && <div className="search-crypto">
        <Input placeholder='Search Cryptocurrency' onChange={(e)=> setSearchTerm(e.target.value) } /></div>
    }
    

    
      <Row gutter ={[32, 32]} className="crypto-card-container">
        {cryptos?.map((crypto) => (
          <Col xs={24} sm={12} lg={6} className="crypto-card" key={crypto.id}>
            <Link to={`/crypto/${crypto.id}`}>
              <Card
                title={`${crypto.rank}.  ${crypto.name}`}
                extra={
                  <img className="crypto-image" src={crypto.iconUrl} alt="" />
                }
                hoverable
              >
                <p>Price: $ {millify(crypto.price)}</p>
                <p>Market Cap: {millify(crypto.marketCap)}</p>
                <p>Daily Change: {millify(crypto.change)}%</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Cryptocurrencies;
