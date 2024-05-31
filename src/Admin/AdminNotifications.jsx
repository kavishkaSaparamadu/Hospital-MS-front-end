import { Layout, Tabs } from 'antd';
import React, { useState } from 'react';
import MainLayout from '../components/layouts/MainLayout'; // Import MainLayout

const { TabPane } = Tabs;

const sideNavBarLinks = [
  { title: "Dashboard", path: "/Admin/dashboard" },
  { title: "Appointments", path: "/Admin/Appointment" },
  {title:"Notifications", path: "/Admin/Notifications" },
  { title: "Patients", path: "/Admin/RegisterPateion" },
];

const AdminNotifications = () => {
  const [notificationCount, setNotificationCount] = useState(3); // Example count of unseen notifications

  return (
    <MainLayout data={sideNavBarLinks}>
      <Layout>
        <div className="p-4">
          <h1 className="text-2xl font-bold">Notifications</h1>
          <Tabs defaultActiveKey="unseen" tabBarStyle={{ marginBottom: 0 }}>
            <TabPane tab={<span className="tab-text">Unseen{notificationCount > 0 ? <span className="badge">{notificationCount}</span> : null}</span>} key="unseen">
              <div className="p-4 bg-white rounded-md shadow-md">
                <p>Unseen notifications content</p>
                <div className='d-flex justify-end'>
                  <h1 className ='anchor'>Mark all As Seen</h1>
                </div>
              </div>
            </TabPane>
            <TabPane tab={<span className="tab-text">Seen</span>} key="seen">
              <div className="p-4 bg-white rounded-md shadow-md">
                <p>Seen notifications content</p>
                <div className='d-flex justify-end'>
                  <h1 className ='anchor'>Delete all</h1>
                </div>
              </div>
            </TabPane>
          </Tabs>
        </div>
      </Layout>
    </MainLayout>
  );
};

export default AdminNotifications;
