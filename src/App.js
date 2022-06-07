import React from "react";
import { MediaBox, Slide, Slider, Caption, Row, Col, Card, SideNav, SideNavItem, Button, Icon } from "react-materialize";

function App() {
  return (
    <>
      <Row>

        <Col>
          <SideNav
            id="SideNav-49"
            options={{
              draggable: true
            }}
            trigger={<Button node="button">MENU</Button>}>

            <SideNavItem
              user={{
                background: "https://images.pexels.com/photos/719396/pexels-photo-719396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                email: "test@gmail.com",
                image: "https://avatarfiles.alphacoders.com/125/thumb-125919.jpg",
                name: "Monkey D. Luffy",
              }}
              userView
            />
            <SideNavItem
              href="#!icon"
              icon={<Icon>account_circle</Icon>}
            >
              Profil Saya
            </SideNavItem>
            <SideNavItem
              href="#!icon"
              icon={<Icon>help</Icon>}>
              Hubungi Kami
            </SideNavItem>

            <SideNavItem divider />
            <SideNavItem subheader>
              Product
            </SideNavItem>
            <SideNavItem>Kesehatan</SideNavItem>
            <SideNavItem>Komputer & Aksesoris</SideNavItem>
            <SideNavItem>Gaming</SideNavItem>
            <SideNavItem>Kamera</SideNavItem>
            <SideNavItem>Olahraga</SideNavItem>
            <SideNavItem>Fashion Pria</SideNavItem>
            <SideNavItem>Fashion Wanita</SideNavItem>

          </SideNav>
        </Col>

        <Col s={12}>
          <Slider
            fullscreen={false}
            options={{
              duration: 500,
              height: 400,
              indicators: true,
              interval: 6000
            }}>
            <Slide image={<img src="https://s-ec.bstatic.com/images/hotel/max1024x768/106/106114417.jpg" alt="" />}>
              <Caption>
                <h3>Pantai</h3>
                <h6>Dapatkan Kesempatan Jalan - Jalan Ke Pantai Dengan Membeli Sebuah Product</h6>
              </Caption>
            </Slide>
            <Slide image={<img src="https://photos.mandarinoriental.com/is/image/MandarinOriental/paris-2017-home?wid=2880&hei=1280&fmt=jpeg&crop=9,336,2699,1200&anchor=1358,936&qlt=75,0&fit=wrap&op_sharpen=0&resMode=sharp2&op_usm=0,0,0,0&iccEmbed=0&printRes=72" alt=" " />}>
              <Caption placement="left">
                <h3>Paris</h3>
                <h6>Dapatkan Liburan Ke Paris Secara Gratis</h6>
              </Caption>
            </Slide>
          </Slider>
        </Col>

        <Col s={3}>
          <Card
            header={<MediaBox
              id="MediaBox_9"
              options={{
                inDuration: 275,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                outDuration: 200
              }}>
              <img
                src="https://ecs7.tokopedia.net/img/cache/300/attachment/2018/8/15/25749302/25749302_274a89a6-ea41-4a3a-ac6b-ce2881016369.jpg"
                alt="product1.jpg"
                width="100%"
                height="250"
              />
            </MediaBox>}>
            Audio Technica - Mulai Dari Rp 910 rb
          </Card>
        </Col>

        <Col s={3}>
          <Card
            header={<MediaBox
              id="MediaBox_9"
              options={{
                inDuration: 275,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                outDuration: 200
              }}>
              <img
                src="https://ecs7.tokopedia.net/img/cache/300/attachment/2019/1/16/25287362/25287362_a79f0aa6-cf1f-484f-b1a8-83993245cd6f.jpg"
                alt="product1.jpg"
                width="100%"
                height="250"
              />
            </MediaBox>}>
            Handphone Samsung - Mulai Dari Rp 200 rb
          </Card>
        </Col>

        <Col s={3}>
          <Card
            header={<MediaBox
              id="MediaBox_9"
              options={{
                inDuration: 275,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                outDuration: 200
              }}>
              <img
                src="https://ecs7.tokopedia.net/img/cache/300/attachment/2018/6/26/28201197/28201197_856195f2-b0ba-4711-8200-fd95beaf1df5.jpg"
                alt="product1.jpg"
                width="100%"
                height="250"
              />
            </MediaBox>}>
            Squishy - Mulai dari Rp 5,5 rb
          </Card>
        </Col>

        <Col s={3}>
          <Card
            header={<MediaBox
              id="MediaBox_9"
              options={{
                inDuration: 275,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                outDuration: 200
              }}>
              <img
                src="https://ecs7.tokopedia.net/img/cache/300/attachment/2018/4/23/28201197/28201197_0383072a-1766-453c-951a-8b53a719cff0.jpg"
                alt="product1.jpg"
                width="100%"
                height="250"
              />
            </MediaBox>}>
            Koleksi The Avenger - Mulai dari Rp 10 rb
          </Card>
        </Col>
      </Row>

    </>
  );
}

export default App;
