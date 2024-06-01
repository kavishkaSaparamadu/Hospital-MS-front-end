import React, { useState } from 'react'; // Import useState from React
import MainLayout from "../components/layouts/MainLayout";
import { Layout, Tabs } from 'antd';

const { TabPane } = Tabs;

const sideNavBarLinks = [
    { title: "Dashboard", path: "/pharmacist/Dashboard" },
];
const PharmacyNotifications = () => {
      const [notificationCount, setNotificationCount] = useState(3); // Example count of unseen notifications
  

  return (
    <div>
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
        

    </div>
  )
}

export default PharmacyNotifications;
