import Image from "next/image";
import { Breadcrumb } from 'antd';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';


export default function Home() {
  return (
    <>
     <Breadcrumb
    items={[
      {
        href: '/',
        title: <HomeOutlined />,
      },
      {
        href: '/about',
        title: (
          <>
            <UserOutlined />
            <span>Details</span>
          </>
        ),
      },
      {
        title: 'Application',
      },
    ]}
  />
    </>
  );
}
