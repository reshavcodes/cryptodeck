import React from "react";
import millify from "millify";
import { Collapse, Row, Col, Typography, Avatar } from "antd";
import HTMLReactParser from "html-react-parser";
import { useGetExchangesQuery } from "../services/cryptoApi";

import Loader from "../components/Loader";

const { Text } = Typography;
const { Panel } = Collapse;

const Exchanges = () => {
  const { data, isFetching } = useGetExchangesQuery();

  const exchangeList = data?.data?.exchanges;

  if (isFetching) return <Loader />;
  // console.log(data?.data?.exchanges)
  return (
    <>
      <Row >
        <Col span={6}>Exchanges</Col>
        <Col span={6}>24h Trade Volume</Col>
        <Col span={6}>Markets</Col>
        <Col span={6}>Change</Col>
      </Row>
      <Row>
        {exchangeList.map((exchange) => (
          <Col span={24}>
            <Collapse className='exchange-card'>
              <Panel
                key={exchange.id}
                showArrow={false}
                header={
                  <Row key={exchange.id} className='exchange-card-data'>
                    <Col span={6} >
                      <Text>
                        <strong>{exchange.rank}.</strong>
                      </Text>
                      <Avatar
                        className="exchange-image"
                        src={exchange.iconUrl}
                      />
                      <Text className="exchange-title">
                        <strong>{exchange.name}</strong>
                      </Text>
                    </Col>

                    <Col span={6}>${millify(exchange.volume)}</Col>
                    <Col span={6}>${millify(exchange.numberOfMarkets)}</Col>
                    <Col span={6}>${millify(exchange.marketShare)}</Col>
                  </Row>
                }
              >
                {HTMLReactParser(exchange.description || "Description Not Available")}
              </Panel>
            </Collapse>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Exchanges;
