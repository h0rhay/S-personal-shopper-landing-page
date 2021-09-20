import React from 'react';
import styled from 'styled-components';

const CardRow = styled.section`
    display: grid;
    grid-gap: 2rem;
    justify-content: center;
    grid-template-columns: repeat(auto-fit, minmax(20ch, 1fr));
    a {
        text-decoration: none;
        color: inherit;
        cursor: pointer;
    }
`;

const Card = styled.section`
    border: 1px solid #eee;
    overflow: hidden;
`;

const CardContent = styled.div`
    padding: 20px;
`;

const CardImage = styled.div`
    background-size: cover;
    background-position: center;
    // 16:9 ratio
    padding-bottom: 62.5%;
`;

const ProductList = ({ products }) => (
    <CardRow className="card-row">
        {products &&
            products.map((product) => (
                <a href={product.link} rel="noopener noreferrer" target="_blank">
                    <Card className="card">
                        <CardImage
                            className="card__img"
                            aria-label="Preview of X"
                            style={{ backgroundImage: `url(${product.image})` }}
                        />
                        <CardContent className="card__content">
                            <h3>{product.item}</h3>
                            <p>
                                Liquorice candy macaroon soufflé jelly cake. Candy canes ice cream biscuit marzipan.
                                Macaroon pie sesame snaps jelly-o.
                            </p>
                            <a href="/" className="button">
                                Add to Cart
                            </a>
                        </CardContent>
                    </Card>
                </a>
            ))}
    </CardRow>
);

export default ProductList;
