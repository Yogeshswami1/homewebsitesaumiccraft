import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Layout, Menu } from 'antd'; // Ant Design components
import { LogoutOutlined } from '@ant-design/icons'; // Ant Design Icons

// Import your tab components
import TabOne from './TabOne/TabOne';
import TabTwo from './TabTwo/TabTwo';
import TabThree from './TabThree/TabThree';
import TabFour from './TabFour/TabFour';

const { Header, Content } = Layout;

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('TabOne'); // Set default tab
  const navigate = useNavigate();

  // Handle logout
  const handleLogout = () => {
    localStorage.clear(); // Clear all localStorage
    navigate('/');
  };

  // Tab Components
  const renderTabContent = () => {
    switch (activeTab) {
      case 'TabOne':
        return <TabOne />;
      case 'TabTwo':
        return <TabTwo />;
      case 'TabThree':
        return <TabThree />;
      case 'TabFour':
        return <TabFour />;
      default:
        return <TabOne />;
    }
  };

  return (
    <Layout style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #f0f4fd 0%, #c2d1e0 100%)' }}>

      {/* Header with Logout button */}
      <Header style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: 'linear-gradient(to right, #4a90e2, #0078d4)',
        padding: '0 50px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      }}>
        <h1 style={{ color: 'white', fontSize: '24px', fontWeight: 'bold', letterSpacing: '1px' }}>Dashboard</h1>
        <Button
          type="primary"
          danger
          icon={<LogoutOutlined />}
          style={{ fontSize: '16px', padding: '8px 20px', borderRadius: '8px' }}
          onClick={handleLogout}
        >
          Logout
        </Button>
      </Header>

      {/* Tab Menu */}
      <Menu
        mode="horizontal"
        selectedKeys={[activeTab]}
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '20px',
          backgroundColor: 'transparent',
          borderBottom: 'none',
          fontWeight: 'bold',
          letterSpacing: '0.5px',
        }}
        onClick={(e) => setActiveTab(e.key)}
      >
        <Menu.Item
          key="TabOne"
          style={{
            fontSize: '18px',
            padding: '10px 30px',
            borderRadius: '8px',
            transition: 'all 0.3s ease',
            background: activeTab === 'TabOne' ? '#4a90e2' : 'transparent',
            color: activeTab === 'TabOne' ? 'white' : '#333',
            boxShadow: activeTab === 'TabOne' ? '0px 4px 12px rgba(0, 120, 212, 0.3)' : 'none',
          }}
        >
          Webinar
        </Menu.Item>
        <Menu.Item
          key="TabTwo"
          style={{
            fontSize: '18px',
            padding: '10px 30px',
            borderRadius: '8px',
            transition: 'all 0.3s ease',
            background: activeTab === 'TabTwo' ? '#4a90e2' : 'transparent',
            color: activeTab === 'TabTwo' ? 'white' : '#333',
            boxShadow: activeTab === 'TabTwo' ? '0px 4px 12px rgba(0, 120, 212, 0.3)' : 'none',
          }}
        >
          Blogs
        </Menu.Item>
        <Menu.Item
          key="TabThree"
          style={{
            fontSize: '18px',
            padding: '10px 30px',
            borderRadius: '8px',
            transition: 'all 0.3s ease',
            background: activeTab === 'TabThree' ? '#4a90e2' : 'transparent',
            color: activeTab === 'TabThree' ? 'white' : '#333',
            boxShadow: activeTab === 'TabThree' ? '0px 4px 12px rgba(0, 120, 212, 0.3)' : 'none',
          }}
        >
          Newsletter
        </Menu.Item>
        <Menu.Item
          key="TabFour"
          style={{
            fontSize: '18px',
            padding: '10px 30px',
            borderRadius: '8px',
            transition: 'all 0.3s ease',
            background: activeTab === 'TabFour' ? '#4a90e2' : 'transparent',
            color: activeTab === 'TabFour' ? 'white' : '#333',
            boxShadow: activeTab === 'TabFour' ? '0px 4px 12px rgba(0, 120, 212, 0.3)' : 'none',
          }}
        >
          Contact Us
        </Menu.Item>
      </Menu>

      {/* Tab Content */}
      <Content style={{ backgroundColor: 'white', marginTop: '20px', borderRadius: '10px', boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.1)' }}>
        {renderTabContent()}
      </Content>
    </Layout>
  );
};

export default Dashboard;
