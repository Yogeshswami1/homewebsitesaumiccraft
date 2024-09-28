// import React, { useState, useEffect } from 'react';
// import { Button, Table, Form, Input, Upload, Modal, message } from 'antd';
// import ReactQuill from 'react-quill'; // React Quill as the editor
// import 'react-quill/dist/quill.snow.css'; // React Quill default styling
// import axios from 'axios';
// import { UploadOutlined, SearchOutlined } from '@ant-design/icons';

// const apiUrl = process.env.REACT_APP_BACKEND_URL;

// function BlogManager() {
//     const [blogs, setBlogs] = useState([]);
//     const [filteredBlogs, setFilteredBlogs] = useState([]); // State for filtered blogs
//     const [showModal, setShowModal] = useState(false); // Modal state
//     const [searchTitle, setSearchTitle] = useState(''); // State for search input
//     const [content, setContent] = useState(''); // For React Quill content
//     const [file, setFile] = useState(null);
//     const [loading, setLoading] = useState(false);

//     const [form] = Form.useForm();

//     // Fetch blogs on mount
//     useEffect(() => {
//         const fetchBlogs = async () => {
//             try {
//                 const { data } = await axios.get(`${apiUrl}/api/blogs`);
//                 const sortedBlogs = data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
//                 setBlogs(sortedBlogs);
//                 setFilteredBlogs(sortedBlogs); // Initially, show all blogs
//             } catch (error) {
//                 console.error('Error fetching blogs:', error);
//             }
//         };
//         fetchBlogs();
//     }, []);

//     const handleEditorChange = (value) => {
//         setContent(value);
//     };

//     // Handle form submission
//     const handleSubmit = async (values) => {
//         const formData = new FormData();
//         formData.append('title', values.title);
//         formData.append('content', content);
//         if (file) {
//             formData.append('media', file);
//         }

//         setLoading(true);
//         try {
//             const { data } = await axios.post(`${apiUrl}/api/blogs/add`, formData, {
//                 headers: { 'Content-Type': 'multipart/form-data' },
//             });

//             setBlogs([data, ...blogs]); // Add the new blog at the top
//             setFilteredBlogs([data, ...blogs]); // Update the filtered blogs as well
//             setShowModal(false); // Hide the modal after submission
//             form.resetFields(); // Reset the form
//             setContent(''); // Reset the editor
//             setFile(null);
//             message.success('Blog added successfully!');
//         } catch (error) {
//             message.error('Error adding blog');
//         } finally {
//             setLoading(false);
//         }
//     };

//     // Handle blog deletion
//     const handleDelete = async (id) => {
//         try {
//             await axios.delete(`${apiUrl}/api/blogs/${id}`);
//             const updatedBlogs = blogs.filter((blog) => blog._id !== id);
//             setBlogs(updatedBlogs);
//             setFilteredBlogs(updatedBlogs);
//             message.success('Blog deleted successfully!');
//         } catch (error) {
//             message.error('Error deleting blog');
//         }
//     };

//     // Handle search input change
//     const handleSearch = (e) => {
//         const searchValue = e.target.value.toLowerCase();
//         setSearchTitle(searchValue);

//         // Filter blogs based on partial matches in title (case-insensitive)
//         const filtered = blogs.filter((blog) =>
//             blog.title.toLowerCase().includes(searchValue)
//         );
//         setFilteredBlogs(filtered);
//     };

//     // Columns for the blog table
//     const columns = [
//         {
//             title: 'Serial No',
//             dataIndex: 'serial',
//             key: 'serial',
//             render: (text, record, index) => index + 1,
//         },
//         {
//             title: 'Title',
//             dataIndex: 'title',
//             key: 'title',
//         },
//         {
//             title: 'Content',
//             dataIndex: 'content',
//             key: 'content',
//             render: (content) => <div dangerouslySetInnerHTML={{ __html: content }} />,
//         },
//         {
//             title: 'Media',
//             dataIndex: 'media',
//             key: 'media',
//             render: (media) =>
//                 media ? (
//                     <a href={media} target="_blank" rel="noopener noreferrer">
//                         View Media
//                     </a>
//                 ) : (
//                     'No media'
//                 ),
//         },
//         {
//             title: 'Actions',
//             key: 'actions',
//             render: (text, record) => (
//                 <Button type="danger" onClick={() => handleDelete(record._id)}>
//                     Delete
//                 </Button>
//             ),
//         },
//     ];

//     return (
//         <div style={{ padding: '40px', maxWidth: '1200px', margin: '0 auto' }}>
//             {/* Search Field */}
//             <Input
//                 placeholder="Search by title"
//                 prefix={<SearchOutlined />}
//                 value={searchTitle}
//                 onChange={handleSearch}
//                 style={{ marginBottom: '20px', width: '300px' }}
//             />

//             {/* Button to show the modal */}
//             <Button
//                 type="primary"
//                 onClick={() => setShowModal(true)}
//                 style={{ marginBottom: '20px' }}
//             >
//                 Add Blog
//             </Button>

//             {/* Blog List Table */}
//             <Table
//                 dataSource={filteredBlogs} // Use filtered blogs for the table
//                 columns={columns}
//                 rowKey="_id"
//                 pagination={{ pageSize: 5 }}
//                 style={{ marginTop: '20px' }}
//             />

//             {/* Add Blog Modal */}
//             <Modal
//                 title="Add Blog"
//                 open={showModal}
//                 onCancel={() => setShowModal(false)}
//                 footer={null} // Custom footer to only include form buttons
//                 destroyOnClose
//             >
//                 <Form form={form} onFinish={handleSubmit} layout="vertical">
//                     <Form.Item
//                         name="title"
//                         label="Blog Title"
//                         rules={[{ required: true, message: 'Please input the blog title!' }]}
//                     >
//                         <Input placeholder="Enter blog title" />
//                     </Form.Item>

//                     <Form.Item label="Content">
//                         <ReactQuill value={content} onChange={handleEditorChange} />
//                     </Form.Item>

//                     <Form.Item label="Upload Media">
//                         <Upload
//                             beforeUpload={(file) => {
//                                 setFile(file);
//                                 return false;
//                             }}
//                             onRemove={() => setFile(null)}
//                         >
//                             <Button icon={<UploadOutlined />}>Click to Upload</Button>
//                         </Upload>
//                     </Form.Item>

//                     <Form.Item>
//                         <Button type="primary" htmlType="submit" loading={loading} block>
//                             Submit Blog
//                         </Button>
//                     </Form.Item>
//                 </Form>
//             </Modal>
//         </div>
//     );
// }

// export default BlogManager;



import React, { useState, useEffect } from 'react';
import { Button, Table, Form, Input, Upload, Modal, message } from 'antd';
import axios from 'axios';
import { UploadOutlined, SearchOutlined } from '@ant-design/icons';

const apiUrl = process.env.REACT_APP_BACKEND_URL;

function BlogManager() {
    const [blogs, setBlogs] = useState([]);
    const [filteredBlogs, setFilteredBlogs] = useState([]); // State for filtered blogs
    const [showModal, setShowModal] = useState(false); // Modal state
    const [searchTitle, setSearchTitle] = useState(''); // State for search input
    const [content, setContent] = useState(''); // State for simple text content
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);

    const [form] = Form.useForm();

    // Fetch blogs on mount
    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const { data } = await axios.get(`${apiUrl}/api/blogs`);
                const sortedBlogs = data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
                setBlogs(sortedBlogs);
                setFilteredBlogs(sortedBlogs); // Initially, show all blogs
            } catch (error) {
                console.error('Error fetching blogs:', error);
            }
        };
        fetchBlogs();
    }, []);

    // Handle form submission
    const handleSubmit = async (values) => {
        const formData = new FormData();
        formData.append('title', values.title);
        formData.append('content', values.content); // Now content is a simple text field
        if (file) {
            formData.append('media', file);
        }

        setLoading(true);
        try {
            const { data } = await axios.post(`${apiUrl}/api/blogs/add`, formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });

            setBlogs([data, ...blogs]); // Add the new blog at the top
            setFilteredBlogs([data, ...blogs]); // Update the filtered blogs as well
            setShowModal(false); // Hide the modal after submission
            form.resetFields(); // Reset the form
            setFile(null);
            message.success('Blog added successfully!');
        } catch (error) {
            message.error('Error adding blog');
        } finally {
            setLoading(false);
        }
    };

    // Handle blog deletion
    const handleDelete = async (id) => {
        try {
            await axios.delete(`${apiUrl}/api/blogs/${id}`);
            const updatedBlogs = blogs.filter((blog) => blog._id !== id);
            setBlogs(updatedBlogs);
            setFilteredBlogs(updatedBlogs);
            message.success('Blog deleted successfully!');
        } catch (error) {
            message.error('Error deleting blog');
        }
    };

    // Handle search input change
    const handleSearch = (e) => {
        const searchValue = e.target.value.toLowerCase();
        setSearchTitle(searchValue);

        // Filter blogs based on partial matches in title (case-insensitive)
        const filtered = blogs.filter((blog) =>
            blog.title.toLowerCase().includes(searchValue)
        );
        setFilteredBlogs(filtered);
    };

    // Columns for the blog table
    const columns = [
        {
            title: 'Serial No',
            dataIndex: 'serial',
            key: 'serial',
            render: (text, record, index) => index + 1,
        },
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Content',
            dataIndex: 'content',
            key: 'content',
            render: (content) => <div>{content}</div>,
        },
        {
            title: 'Media',
            dataIndex: 'media',
            key: 'media',
            render: (media) =>
                media ? (
                    <a href={media} target="_blank" rel="noopener noreferrer">
                        View Media
                    </a>
                ) : (
                    'No media'
                ),
        },
        {
            title: 'Actions',
            key: 'actions',
            render: (text, record) => (
                <Button type="danger" onClick={() => handleDelete(record._id)}>
                    Delete
                </Button>
            ),
        },
    ];

    return (
        <div style={{ padding: '40px', maxWidth: '1200px', margin: '0 auto' }}>
            {/* Search Field */}
            <Input
                placeholder="Search by title"
                prefix={<SearchOutlined />}
                value={searchTitle}
                onChange={handleSearch}
                style={{ marginBottom: '20px', width: '300px' }}
            />

            {/* Button to show the modal */}
            <Button
                type="primary"
                onClick={() => setShowModal(true)}
                style={{ marginBottom: '20px' }}
            >
                Add Blog
            </Button>

            {/* Blog List Table */}
            <Table
                dataSource={filteredBlogs} // Use filtered blogs for the table
                columns={columns}
                rowKey="_id"
                pagination={{ pageSize: 5 }}
                style={{ marginTop: '20px' }}
            />

            {/* Add Blog Modal */}
            <Modal
                title="Add Blog"
                open={showModal}
                onCancel={() => setShowModal(false)}
                footer={null} // Custom footer to only include form buttons
                destroyOnClose
            >
                <Form form={form} onFinish={handleSubmit} layout="vertical">
                    <Form.Item
                        name="title"
                        label="Blog Title"
                        rules={[{ required: true, message: 'Please input the blog title!' }]}
                    >
                        <Input placeholder="Enter blog title" />
                    </Form.Item>

                    <Form.Item
                        name="content"
                        label="Content"
                        rules={[{ required: true, message: 'Please input the blog content!' }]}
                    >
                        <Input.TextArea
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            placeholder="Enter blog content"
                            autoSize={{ minRows: 4, maxRows: 10 }}
                        />
                    </Form.Item>

                    <Form.Item label="Upload Media">
                        <Upload
                            beforeUpload={(file) => {
                                setFile(file);
                                return false;
                            }}
                            onRemove={() => setFile(null)}
                        >
                            <Button icon={<UploadOutlined />}>Click to Upload</Button>
                        </Upload>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" loading={loading} block>
                            Submit Blog
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
}

export default BlogManager;
