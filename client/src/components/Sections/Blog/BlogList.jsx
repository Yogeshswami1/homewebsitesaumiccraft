// import React, { useState } from 'react';
// import styled from 'styled-components';
// import BlogCard from './BlogCard'; // Import the BlogCard component
// import { Pagination } from 'antd';
// import Footer from '../Footer';

// const BlogList = ({ blogs }) => {
//     const [currentPage, setCurrentPage] = useState(1);
//     const pageSize = 5;

//     // Calculate the displayed blogs based on the current page
//     const startIndex = (currentPage - 1) * pageSize;
//     const currentBlogs = blogs.slice(startIndex, startIndex + pageSize);

//     const handlePageChange = (page) => {
//         setCurrentPage(page);
//     };

//     return (
//         <>
       
//         <Wrapper style={{marginTop: '5rem'}}>
//             {currentBlogs.map((blog) => (
//                 <BlogCard key={blog._id} blog={blog} />
//             ))}

//             {/* Pagination */}
//             <PaginationContainer>
//                 <CustomPagination
//                     current={currentPage}
//                     pageSize={pageSize}
//                     total={blogs.length}
//                     onChange={handlePageChange}
//                     showSizeChanger={false} // Hide page size selector
//                 />
//             </PaginationContainer>
//         </Wrapper>
//         <Footer/>
//         </>
//     );
// };

// export default BlogList;

// // Styled Components
// const Wrapper = styled.div`
//     padding: 40px 20px;
//     max-width: 1200px;
//     margin: 0 auto;
//     background-color: #f9f9f9;
//     border-radius: 10px;
//     box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
// `;

// const PaginationContainer = styled.div`
//     display: flex;
//     justify-content: center;
//     margin-top: 30px;
// `;

// const CustomPagination = styled(Pagination)`
//     .ant-pagination-item {
//         border: none;
//         background-color: #ffffff;
//         color: #ff4d4f;
//         font-weight: bold;
//         border-radius: 50%;
//         transition: all 0.3s;
//     }

//     .ant-pagination-item-active {
//         background-color: #ff4d4f;
//         color: #ffffff;
//         border: none;
//     }

//     .ant-pagination-item:hover {
//         border-color: #ff4d4f;
//         background-color: rgba(255, 77, 79, 0.1);
//         color: #ff4d4f;
//     }

//     .ant-pagination-next .ant-pagination-item-link,
//     .ant-pagination-prev .ant-pagination-item-link {
//         color: #ff4d4f;
//     }
// `;



import React, { useState } from 'react';
import styled from 'styled-components';
import BlogCard from './BlogCard'; // Import the BlogCard component
import BlogDetail from './BlogDetails'; // Import the BlogDetail component
import { Pagination } from 'antd';
import Footer from '../Footer';

const BlogList = ({ blogs }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedBlog, setSelectedBlog] = useState(null);
    const pageSize = 5;

    // Calculate the displayed blogs based on the current page
    const startIndex = (currentPage - 1) * pageSize;
    const currentBlogs = blogs.slice(startIndex, startIndex + pageSize);

    const handlePageChange = (page) => {
        setCurrentPage(page);
        setSelectedBlog(null); // Reset the selected blog when changing pages
    };

    const handleReadMore = (blog) => {
        setSelectedBlog(blog); // Set the selected blog
    };

    const handleBackToList = () => {
        setSelectedBlog(null); // Clear the selected blog to go back to the list
    };

    return (
        <>
            <Wrapper style={{ marginTop: '5rem' }}>
                {selectedBlog ? (
                    <>
                        <BlogDetail blog={selectedBlog} />
                        <BackButton onClick={handleBackToList}>&larr; Back to List</BackButton>
                    </>
                ) : (
                    currentBlogs.map((blog) => (
                        <BlogCard key={blog._id} blog={blog} onReadMore={handleReadMore} />
                    ))
                )}

                {/* Pagination */}
                {!selectedBlog && (
                    <PaginationContainer>
                        <CustomPagination
                            current={currentPage}
                            pageSize={pageSize}
                            total={blogs.length}
                            onChange={handlePageChange}
                            showSizeChanger={false} // Hide page size selector
                        />
                    </PaginationContainer>
                )}
            </Wrapper>
            <Footer />
        </>
    );
};

export default BlogList;

// Styled Components
const Wrapper = styled.div`
    padding: 40px 20px;
    max-width: 1200px;
    margin: 0 auto;
    background-color: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
`;

const PaginationContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 30px;
`;

const CustomPagination = styled(Pagination)`
    .ant-pagination-item {
        border: none;
        background-color: #ffffff;
        color: #ff4d4f;
        font-weight: bold;
        border-radius: 50%;
        transition: all 0.3s;
    }

    .ant-pagination-item-active {
        background-color: #ff4d4f;
        color: #ffffff;
        border: none;
    }

    .ant-pagination-item:hover {
        border-color: #ff4d4f;
        background-color: rgba(255, 77, 79, 0.1);
        color: #ff4d4f;
    }

    .ant-pagination-next .ant-pagination-item-link,
    .ant-pagination-prev .ant-pagination-item-link {
        color: #ff4d4f;
    }
`;

const BackButton = styled.button`
    display: block;
    margin: 20px auto;
    padding: 10px 20px;
    font-size: 16px;
    color: #ffffff;
    background-color: #ff4d4f;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #d43f3a;
    }
`;
