import React from 'react';
import { Card, Row, Col, Icon, Button } from 'antd';
import upgradeSvg from '../../../assets/upgrade.svg';
import './upgrade.css';

const UpgradeCard = () => {

    return (
        <Card className="upgrade-card">
            <Row>
                <Col lg={{ span:6 }} style={{padding:"32px"}} md={{ span:12, offset:0 }}>
                    <img src={upgradeSvg} />
                </Col>
                <Col lg={{ span:17, offset:1 }} md={{ span: 12 }}>
                    <h2 className="upgrade-title" style={{ marginBottom:"0px" }}><b>Space Cloud Pro</b></h2>
                    <p className="upgrade-content" >Avail all the exclusive features of Space Cloud for as low as $199/month</p>
                    <div className="list-content"><Icon type="check" className="check-icon"/><span>2 clusters, 3 projects and 5 databases</span></div>
                    <div className="list-content"><Icon type="check" className="check-icon"/><span>Automated devops and canary deployments</span></div>
                    <div className="list-content"><Icon type="check" className="check-icon"/><span>Team access control and audit trails</span></div>
                    <div className="list-content"><Icon type="check" className="check-icon"/><span>2 days priority email support</span></div>
                    <Button type="primary" className="upgrade-btn">Start using Pro - $199/month </Button>
                </Col>
            </Row>
        </Card>
    );
}

export default UpgradeCard;