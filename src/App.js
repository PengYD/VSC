import React from 'react';
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';
import Hello from './page/Hello.js';
import './css/App.css';

function App() {
  return (
    <div className="gutter-example">
    <Row gutter={16}>
      <Col className="gutter-row" span={12}>
        <div className="gutter-box"><Hello></Hello></div>
      </Col>
    </Row>
    <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 20]}>
      <Col className="gutter-row" span={24}>
        <div className="gutter-box">col-6</div>
      </Col>
    </Row>
  </div>
  );
}

export default App;
