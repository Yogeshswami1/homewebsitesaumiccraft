import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, Form, Input, DatePicker, message, Card } from 'antd';
import axios from 'axios';
import moment from 'moment';

const { TextArea } = Input;
const apiUrl = process.env.REACT_APP_BACKEND_URL;

const AdminPage = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [form] = Form.useForm();

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${apiUrl}/events`);
      const sortedEvents = response.data.sort((a, b) => new Date(b.date) - new Date(a.date)); // Sort by date (descending)
      setEvents(sortedEvents);
      setFilteredEvents(sortedEvents); // Set filtered events to the sorted list by default
      setLoading(false);
    } catch (error) {
      message.error('Failed to fetch events.');
      setLoading(false);
    }
  };

  const handleAddEvent = () => {
    form.validateFields().then(async (values) => {
      try {
        const response = await axios.post(`${apiUrl}/events`, {
          ...values,
          date: values.date.format('YYYY-MM-DD'),
          time: values.time.format('HH:mm'),
        });
        const updatedEvents = [...events, response.data].sort((a, b) => new Date(b.date) - new Date(a.date)); // Add and sort
        setEvents(updatedEvents);
        setFilteredEvents(updatedEvents);
        message.success('Event added successfully!');
        form.resetFields();
        setIsModalVisible(false);
      } catch (error) {
        message.error('Failed to add event.');
      }
    });
  };

  const handleDeleteEvent = async (id) => {
    try {
      await axios.delete(`${apiUrl}/events/${id}`);
      const updatedEvents = events.filter(event => event._id !== id);
      setEvents(updatedEvents);
      setFilteredEvents(updatedEvents);
      message.success('Event deleted successfully!');
    } catch (error) {
      message.error('Failed to delete event.');
    }
  };

  // Filter events by date
  const handleDateSearch = (date) => {
    if (!date) {
      setFilteredEvents(events);
    } else {
      const filtered = events.filter(event =>
        moment(event.date).isSame(date, 'day')
      );
      setFilteredEvents(filtered);
    }
  };

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Subtitle',
      dataIndex: 'subtitle',
      key: 'subtitle',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      render: (text) => moment(text).format('YYYY-MM-DD'),
    },
    {
      title: 'Time',
      dataIndex: 'time',
      key: 'time',
    },
    {
      title: 'Venue',
      dataIndex: 'venue',
      key: 'venue',
    },
    {
      title: 'Link',
      dataIndex: 'link',
      key: 'link',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (text, record) => (
        <Button type="link" onClick={() => handleDeleteEvent(record._id)}>
          Delete
        </Button>
      ),
    },
  ];

  return (
    <Card title="Event Schedule" bordered={false} style={{ width: '100%', marginTop: 20 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20 }}>
        <Button type="primary" onClick={() => setIsModalVisible(true)}>
          Add Event
        </Button>
        <DatePicker
          onChange={handleDateSearch}
          placeholder="Search by Date"
        />
      </div>
      <Table
        columns={columns}
        dataSource={filteredEvents}
        rowKey="_id"
        loading={loading}
        style={{ marginTop: 20 }}
      />
      <Modal
        title="Add Event"
        open={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        onOk={handleAddEvent}
        okText="Add"
      >
        <Form form={form} layout="vertical">
          <Form.Item name="title" label="Title" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="subtitle" label="Subtitle">
            <Input />
          </Form.Item>
          <Form.Item name="date" label="Date" rules={[{ required: true }]}>
            <DatePicker />
          </Form.Item>
          <Form.Item name="time" label="Time" rules={[{ required: true }]}>
          <DatePicker picker="time" />
          </Form.Item>
          <Form.Item name="venue" label="Venue" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="link" label="Link">
            <TextArea />
          </Form.Item>
        </Form>
      </Modal>
    </Card>
  );
};

export default AdminPage;
