import React from "react";
import { Col, Row } from "react-bootstrap";

const Category = ({ filterCategory, categories }) => {
  // to filter by category
  const onFilter = (cat) => {
    filterCategory(cat);
  };
  return (
    <Row className="my-2 mb-5">
      <Col sm="12" className="d-flex justify-content-center">
        <div>
          {categories.length >= 1 ? (
            categories.map((cat) => (
              <button onClick={() => onFilter(cat)} className="btn-index mx-2">
                {cat}
              </button>
            ))
          ) : (
            <h4>لا يوجد تصنيفات</h4>
          )}
        </div>
      </Col>
    </Row>
  );
};

export default Category;
