// import React from 'react';
// import styled from 'styled-components';

// const BlogCard = ({ blog }) => {
//     return (
//         <Card>
//             <ImageContainer>
//                 <img src={blog.media} alt={blog.title} />
//             </ImageContainer>
//             <Content>
//                 <Title>{blog.title}</Title>
//                 <Description>{blog.content.substring(0, 120)}...</Description>
//                 <ReadMore href={`/blog/${blog._id}`}>Read More</ReadMore>
//             </Content>
//         </Card>
//     );
// };

// export default BlogCard;

// // Styled Components
// const Card = styled.div`
//     display: flex;
//     margin-bottom: 30px;
//     border: 1px solid #e0e0e0;
//     border-radius: 8px;
//     overflow: hidden;
//     background-color: #ffffff;
//     box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.05);
//     transition: transform 0.3s, box-shadow 0.3s;

//     &:hover {
//         transform: translateY(-5px);
//         box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.1);
//     }
// `;

// const ImageContainer = styled.div`
//     width: 35%;
//     img {
//         width: 100%;
//         height: auto;
//         object-fit: cover;
//     }
// `;

// const Content = styled.div`
//     padding: 20px;
//     flex: 1;
// `;

// const Title = styled.h2`
//     font-size: 22px;
//     margin-bottom: 10px;
//     color: #333333;
// `;

// const Description = styled.p`
//     font-size: 16px;
//     color: #555555;
//     margin-bottom: 20px;
//     line-height: 1.6;
// `;

// const ReadMore = styled.a`
//     font-size: 16px;
//     color: #ff4d4f;
//     text-decoration: none;
//     font-weight: bold;
//     display: inline-block;
//     margin-top: auto;
//     transition: color 0.3s;

//     &:hover {
//         color: #d43f3a;
//         text-decoration: underline;
//     }
// `;



import React from 'react';
import styled from 'styled-components';

const BlogCard = ({ blog, onReadMore }) => {
    const handleReadMoreClick = (e) => {
        e.preventDefault();
        onReadMore(blog);
    };

    return (
        <Card>
            <ImageContainer>
                <img src={blog.media} alt={blog.title} />
            </ImageContainer>
            <Content>
                <Title>{blog.title}</Title>
                <Description>{blog.content.substring(0, 120)}...</Description>
                <ReadMore href="#" onClick={handleReadMoreClick}>
                    Read More
                </ReadMore>
            </Content>
        </Card>
    );
};

export default BlogCard;

// Styled Components
const Card = styled.div`
    display: flex;
    margin-bottom: 30px;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    overflow: hidden;
    background-color: #ffffff;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s, box-shadow 0.3s;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.1);
    }
`;

const ImageContainer = styled.div`
    width: 35%;
    img {
        width: 100%;
        height: auto;
        object-fit: cover;
    }
`;

const Content = styled.div`
    padding: 20px;
    flex: 1;
`;

const Title = styled.h2`
    font-size: 22px;
    margin-bottom: 10px;
    color: #333333;
`;

const Description = styled.p`
    font-size: 16px;
    color: #555555;
    margin-bottom: 20px;
    line-height: 1.6;
`;

const ReadMore = styled.a`
    font-size: 16px;
    color: #ff4d4f;
    text-decoration: none;
    font-weight: bold;
    display: inline-block;
    margin-top: auto;
    transition: color 0.3s;

    &:hover {
        color: #d43f3a;
        text-decoration: underline;
    }
`;
