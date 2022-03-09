import { useRouter } from "next/router";
import { Card, Row, Col, Typography } from "antd";
import Node from "../models/Node";
import { getNodeDetailsPresentation } from "../presentation/nodeDetails";
import NodeDetailViewModel from "../../models/NodeDetailViewModel";
import styles from "../../styles/Card.module.scss";

interface NodeProps {
  nodeDetails: Node;
  index: number;
}

const NodeCardComponent = (props: NodeProps) => {
  const { nodeDetails, index } = props;
  const { Text } = Typography;

  const viewModel: NodeDetailViewModel =
    getNodeDetailsPresentation(nodeDetails);

  const router = useRouter();
  const nodeUrl = `/${nodeDetails.gatewayUID}/node/${nodeDetails.nodeId}/details`;
  const handleCardClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    router.push(nodeUrl);
  };

  return (
    <Card
      headStyle={{ padding: "0" }}
      bodyStyle={{ padding: "0" }}
      className={styles.cardStyle}
      onClick={handleCardClick}
      hoverable
      title={
        <>
          <Text
            ellipsis={{
              // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
              tooltip: `${viewModel?.node?.name}`,
            }}
            data-testid={`node[${index}]-summary`}
          >
            {viewModel?.node?.name}
          </Text>
          <span data-testid="node-timestamp" className={styles.timestamp}>
            Last updated{` `}
            {viewModel?.node?.lastActivity}
          </span>
          <div data-testid="node-location" className={styles.locationWrapper}>
            <span className={styles.locationTitle}>Location{` `}</span>
            <span className={styles.location}>{viewModel?.node?.location}</span>
          </div>
        </>
      }
    >
      <Row
        justify="start"
        gutter={[16, 16]}
        className={styles.cardContentsSensor}
      >
        <Col xs={8} sm={5} md={5} lg={8}>
          Humidity
          <br />
          <span className="dataNumber">{viewModel?.node?.humidity}</span>
        </Col>
        <Col xs={8} sm={5} md={5} lg={8}>
          Pressure
          <br />
          <span className="dataNumber">{viewModel?.node?.pressure}</span>
        </Col>
        <Col xs={8} sm={5} md={5} lg={8}>
          Temperature
          <br />
          <span className="dataNumber">{viewModel?.node?.temperature}</span>
        </Col>
        <Col xs={8} sm={5} md={5} lg={8}>
          Voltage
          <br />
          <span className="dataNumber">{viewModel?.node?.voltage}</span>
        </Col>
        <Col xs={8} sm={4} md={4} lg={8}>
          Motion
          <br />
          <span className="dataNumber">{viewModel?.node?.count}</span>
        </Col>
      </Row>
    </Card>
  );
};

export default NodeCardComponent;