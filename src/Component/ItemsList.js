import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const ItemsLest = ({ itemsData }) => {
  return (
    <Row>
      {itemsData.length >= 1 ? (
        itemsData.map((item) => (
          <Col key={item.id} lg="6" className="col-sm-12 mb-2">
            <Card className="d-flex flex-row ">
              <Card.Img className="img" variant="top" src={item.img} />
              <Card.Body>
                <Card.Title>
                  <div className="d-flex justify-content-between">
                    <div className="item-title">{item.title}</div>
                    <div className="item-price">{item.price}</div>
                  </div>
                </Card.Title>
                <Card.Text className="py-2">
                  <div className="item-description ">
                  {item.description}
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))
      ) : (
        <h3 className="text-center">لا يوجد أصناف</h3>
      )}
      
    </Row>
  );
};

export default ItemsLest;
