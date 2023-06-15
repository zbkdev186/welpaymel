import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row, Navbar } from "react-bootstrap";
import MockUp2 from "./assets/mockup2.png";
import BodyContent from "./assets/BodyContent.png";
import NavbarIcon from "./assets/NavbarIcon.png";

function App() {
  return (
    <>
      <Navbar
        fixed="top"
        style={{
          paddingTop: "0px",
          paddingBottom: "0px",
          backgroundColor: "white",
          boxShadow:"1px 3px 8px 0px rgba(0,0,0,0.2)"
        }}
      >
        <div style={{ padding: "0px" }}>
          <Row>
            <Col md={12}>
              <img
                src={NavbarIcon}
                alt="Asset Not Found"
                style={{
                  paddingLeft: "10%",
                  paddingRight: "20%",
                  height: "12vh",
                }}
              />
            </Col>
          </Row>
        </div>
      </Navbar>
      <div>
        <Row style={{ height: "12vh" }} />
        <div class="row">
          <div class="col-md-6">
            <img
              style={{
                width: "95%",
                paddingLeft: "10%",
                paddingRight: "0%",
                paddingBottom: "0%",
                paddingTop: "5%",
              }}
              src={BodyContent}
              alt="Asset Not Found"
            />
          </div>
          <div class="col-md-6">
            <img
              style={{
                width: "100%",
                paddingLeft: "10%",
                paddingRight: "10%",
                paddingBottom: "20%",
                paddingTop: "15%",
              }}
              src={MockUp2}
              alt="Asset Not Found"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
