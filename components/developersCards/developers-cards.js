import React from 'react'
import Link from 'next/link'
import { Row, Col, Card, Button } from 'antd';
import { developersData } from '../constants';
import stylesheet from './developers-cards.scss'

export class DevelopersCards extends React.Component {
  render() {
    return (
      <div className="mainContainer">
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        <Row type="flex" className="developersCards">
          <Col xs={24} md={12}>
            <Card bordered={false} className="textCard textCard-text--left">
              <h2 className="textCard-header">{developersData.title}</h2>
              <p className="textCard-content">{developersData.content}
              </p>
              {
                developersData.button &&
                <Button
                  type="primary"
                  className="developersCard-btn"
                  href={developersData.button.url}
                  rel={developersData.button.external ? "noopener noreferrer" : null}
                  target={developersData.button.external ? "_blank" : null}
                >
                  {developersData.button.text}
                </Button>
              }
            </Card>
          </Col>
          <Col xs={0} md={12}>
            <Card bordered={false} className="imageCard">
              <div className="imageCard-imageContainer">
                <p><span className="lighterGrey">// TODO: fix</span></p>
                <p><span className="grey">me</span>{' '}<span className="darkerGrey">=</span>{' '}<span className="blue">Person()</span></p>
                <p><span className="darkerBlue">while</span><span className="grey">(me</span><span className="blue">.</span><span className="blue">awake()</span><span className="grey">)</span></p>
                <p><span className="grey">me</span><span className="blue">.</span><span className="blue">code()</span></p>
              </div>
            </Card>
          </Col>
      </Row>
    </div>
    );
  }
}
