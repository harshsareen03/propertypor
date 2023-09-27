import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Pagination from "react-bootstrap/Pagination";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import { useState, useEffect } from "react";
import Properties from "./Properties";

export default function Propertylist({ itemsPerPage }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activePage, setActivePage] = useState(1);

  const totalItems = products.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const currentProperties = products.slice((activePage - 1) * itemsPerPage, activePage * itemsPerPage);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <>
      <div>
        <Container>
          <Row>
            <Row>
              {currentProperties.map((product) => (
                <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
                  <Properties product={product} />
                </Col>
              ))}
            </Row>
          </Row>
          <Pagination>
          {[...Array(totalPages).keys()].map(page => (
          <Pagination.Item key={page + 1} active={page + 1 === activePage} onClick={() => setActivePage(page + 1)}>
            {page + 1}
          </Pagination.Item>
        ))}
      </Pagination>
        </Container>
      </div>
    </>
  );
}
