import { useState } from "react";
import {
  Badge,
  Button,
  Col,
  Container,
  Image,
  Row,
  Stack,
} from "react-bootstrap";
import myProfileImage from "../assets/my-profile.jpg";

export default function Intro() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <main className="min-vh-100 d-flex align-items-center py-5">
      <Container>
        <Row className="align-items-center g-4 g-lg-5">
          <Col xs={12} lg={5} className="text-center text-lg-start">
            <div
              className="mx-auto mx-lg-0 position-relative overflow-hidden shadow"
              style={{
                width: "min(100%, 320px)",
                aspectRatio: "1 / 1",
                borderRadius: "30px",
                backgroundColor: "#dfe3e8",
              }}
            >
              {!imageLoaded && (
                <div className="position-absolute top-0 start-0 w-100 h-100" />
              )}
              <Image
                src={myProfileImage}
                alt="My profile"
                loading="eager"
                fetchPriority="high"
                onLoad={() => setImageLoaded(true)}
                className="w-100 h-100 d-block"
                style={{
                  objectFit: "cover",
                  objectPosition: "38% 50%",
                  opacity: imageLoaded ? 1 : 0,
                  transition: "opacity 160ms ease-out",
                }}
              />
            </div>
          </Col>

          <Col xs={12} lg={7}>
            <Stack gap={3}>
              <Badge
                bg="dark"
                className="align-self-center align-self-lg-start px-3 py-2"
              >
                Frontend Developer
              </Badge>

              <h1
                className="mb-0 fw-bold lh-sm text-center text-lg-start"
                style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)" }}
              >
                안녕하세요, 성장하는 개발자입니다.
              </h1>

              <p
                className="mb-0 text-center text-lg-start mx-auto mx-lg-0"
                style={{
                  fontSize: "clamp(1rem, 2vw, 1.12rem)",
                  lineHeight: 1.75,
                  color: "#444f65",
                  maxWidth: "56ch",
                }}
              >
                사용자 경험을 중심으로, 빠르게 동작하고 유지보수하기 쉬운
                웹서비스를 만드는 것을 좋아합니다. 작은 디테일까지 챙기며 팀과
                함께 더 나은 제품을 만듭니다.
              </p>

              <div className="d-flex flex-wrap gap-2 pt-1 justify-content-center justify-content-lg-start">
                <Button variant="dark" size="lg">
                  프로젝트 보기
                </Button>
                <Button variant="outline-dark" size="lg">
                  연락하기
                </Button>
              </div>
            </Stack>
          </Col>
        </Row>
      </Container>
    </main>
  );
}
