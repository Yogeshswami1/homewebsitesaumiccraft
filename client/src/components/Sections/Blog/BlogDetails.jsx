import React from 'react';
import styled from 'styled-components';

const BlogDetail = ({ blog }) => {
    return (
        <DetailContainer>
            <ImageContainer>
                <img src={blog.media} alt={blog.title} />
            </ImageContainer>
            <Content>
                <Title>{blog.title}</Title>
                <Description>{blog.content}</Description>
            </Content>
        </DetailContainer>
    );
};

export default BlogDetail;

// Styled Components
const DetailContainer = styled.div`
    max-width: 900px;
    margin: 40px auto;
    padding: 30px;
    background-color: #f9f9f9;
    border-radius: 12px;
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease-in-out;

    &:hover {
        box-shadow: 0px 15px 40px rgba(0, 0, 0, 0.15);
    }
`;

const ImageContainer = styled.div`
    width: 100%;
    margin-bottom: 30px;

    img {
        width: 100%;
        height: auto;
        object-fit: cover;
        border-radius: 12px;
        transition: transform 0.3s ease-in-out, filter 0.3s ease-in-out;

        &:hover {
            transform: scale(1.02);
            filter: brightness(1.1);
        }
    }
`;

const Content = styled.div`
    padding: 0 20px;
`;

const Title = styled.h1`
    font-size: 32px;
    margin-bottom: 24px;
    color: #2c3e50;
    font-weight: bold;
    text-align: center;
    line-height: 1.4;
`;

const Description = styled.p`
    font-size: 18px;
    color: #34495e;
    line-height: 1.8;
    text-align: justify;
    letter-spacing: 0.5px;
`;
