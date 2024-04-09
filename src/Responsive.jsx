import { useEffect, useState } from 'react';
import { Layout, Menu, Card, Dropdown, Button } from 'antd';
import './Responsive.css';
const { Sider } = Layout;

const Responsive = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleSize = () => {
      const width = window.outerWidth;
      console.log(width);
      //mobilesize : iphone 12pro
      setIsMobile(width <= 390);
    };

    window.addEventListener('resize', handleSize);
    handleSize();
    return () => window.removeEventListener('resize', handleSize);
  }, []);

  return (
    <>
      <div className='app'>
        <>
          {isMobile ? (
            <Dropdown
              overlay={
                <Menu
                  items={[
                    { key: '1', label: 'Home' },
                    { key: '2', label: 'About' },
                    { key: '3', label: 'Product' },
                    { key: '4', label: 'Solutions' },
                    { key: '5', label: 'Contact' }
                  ]}
                  selectable
                  defaultSelectedKeys={['1']}
                />
              }
            >
              <Button className='btn'>Menu </Button>
            </Dropdown>
          ) : (
            <Sider >
              <Menu
                defaultSelectedKeys={['1']}
                mode="inline"
                items={[
                  {
                    key: '1',
                    label: 'Home',
                  },
                  {
                    key: '2',
                    label: 'About',
                  },
                  {
                    key: '3',
                    label: 'Product',
                  },
                  {
                    key: '4',
                    label: 'Solutions',
                  },
                  {
                    key: '5',
                    label: 'Contact',
                  }
                ]}
              />
            </Sider>
          )}
        </>
        <div className='content'>
          <Card
            className='card'
            title="Card Title"
            extra={<a href="#">More</a>}
          >
            <h3>Europe Street beat</h3>
            <p>www.instagram.com</p>
          </Card>
          <Card
            className='card'
            title="Card Title"
            extra={<a href="#">More</a>}
          >
            <h3>Europe Street beat</h3>
            <p>www.instagram.com</p>
          </Card>
          <Card
            className='card'
            title="Card Title"
            extra={<a href="#">More</a>}
          >
            <h3>Europe Street beat</h3>
            <p>www.instagram.com</p>
          </Card>
          <Card
            className='card'
            title="Card Title"
            extra={<a href="#">More</a>}
          >
            <h3>Europe Street beat</h3>
            <p>www.instagram.com</p>
          </Card>
          <Card
            className='card'
            title="Card Title"
            extra={<a href="#">More</a>}
          >
            <h3>Europe Street beat</h3>
            <p>www.instagram.com</p>
          </Card>
          <Card
            className='card'
            title="Card Title"
            extra={<a href="#">More</a>}
          >
            <h3>Europe Street beat</h3>
            <p>www.instagram.com</p>
          </Card>
        </div>
      </div>
    </>

  );
};
export default Responsive;