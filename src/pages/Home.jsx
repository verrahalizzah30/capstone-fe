/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../components/Header/header.jsx";
import Fitur from "../components/Fitur/fitur.jsx";
import Fiturdata from "../components/Fitur/fiturdata.jsx";
import Konselinglangsung from "../components/Konseling/konselinglangsung.jsx";
import Konselorhome from "../components/Konseling/konseling.jsx";
import { Container, Row, Col,} from "reactstrap";
import "../styles/home.css";
import ReviewSlider from "../components/Review/Review.jsx";
import Karir from "../assets/karir.png"
import artikel01 from "../assets/image 2.png"
import artikel02 from "../assets/image 3.png"
import artikel03 from "../assets/image 4.png"
import vector from "../assets/Vector (1).png"
import vector2 from "../assets/Ellipse 24.png"
import vector3 from "../assets/Vector (2).png"
import vector4 from "../assets/Vector (3).png"


const Home = () => {
  return (
      <section>
        <img src={vector2} alt="vector2" className="vector-2"/>
        <Header />
        <img src={vector3} alt="vector2" className="vector-3"/>
        <Fitur />
        <img src={vector4} alt="vector2" className="vector-4"/>
        <Fiturdata />
        <Konselinglangsung />
        <Konselorhome />
        <img src={vector3} alt="vector2" className="vector-5"/>
        <Container>
          <Row>
          <div id="artikel" className="artikel">
          <Col lg='12'>
            <div className="head-artikel">
            <h6 className="ttl-artikel">Artikel terkini</h6>
            <h1 className="title-art">Temukan Artikel Terkini</h1>
            <p className="subt-art">Jelajahi beragam artikel informatif dan inspiratif yang membantu Anda mendapatkan wawasan baru <br />
             dan solusi praktis untuk berbagai topik.</p>
            </div>          
          </Col>

            <div className="container">
              <div className="row">
                <div className="col-lg-4">
                  <div className="card shadow border-0">
                    <img
                      src={artikel01} // Ganti dengan URL gambar artikel Anda
                      alt="Gambar Artikel"
                      className="card-img-top"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Judul artikel panjang font 20 raleway yang bisa sampek </h5> {/* Ganti dengan judul artikel Anda */}
                      <p className="card-text">
                      Temukan berbagai artikel informatif yang mendukung dan memberikan wawasan untuk kehidupan wanita.
                      </p> {/* Ganti dengan deskripsi artikel Anda */}
                      <a href="/artikel" className="btn-readmore">
                        Read more <i className="ri-arrow-right-line"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="card shadow border-0">
                    <img
                      src={artikel02} // Ganti dengan URL gambar artikel Anda
                      alt="Gambar Artikel"
                      className="card-img-top"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Judul artikel panjang font 20 raleway yang bisa sampek </h5> {/* Ganti dengan judul artikel Anda */}
                      <p className="card-text">
                      Temukan berbagai artikel informatif yang mendukung dan memberikan wawasan untuk kehidupan wanita.
                      </p> {/* Ganti dengan deskripsi artikel Anda */}
                      <a href="/artikel" className="btn-readmore">
                        Read more <i className="ri-arrow-right-line"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="card shadow border-0">
                    <img
                      src={artikel03} // Ganti dengan URL gambar artikel Anda
                      alt="Gambar Artikel"
                      className="card-img-top"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Judul artikel panjang font 20 raleway yang bisa sampek </h5> {/* Ganti dengan judul artikel Anda */}
                      <p className="card-text">
                      Temukan berbagai artikel informatif yang mendukung dan memberikan wawasan untuk kehidupan wanita.
                      </p> {/* Ganti dengan deskripsi artikel Anda */}
                      <a href="/artikel" className="btn-readmore"> 
                        Read more <i className="ri-arrow-right-line"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a href="/artikel" className="learnmore-btn justify-content-center">Learn more </a>
          </div>

          
          <Col lg='6' style={{ justifyContent: 'center', alignItems: 'center' }}>
            <div className="img-karir">
            <img src={Karir} alt="img-karir" style={{ width: '50%', height: 'auto' }} />
            </div>
          </Col>  

            <Col lg='6'>
              <div id="karier" className="karir">
              <h6 className="title-karir">Karier</h6>
              <h1 className="subt-karir">Rekomendasi Karir  <br /> Khusus untuk Anda</h1>
              <p className="txt-karir">Jelajahi masa depan karier Anda dengan bantuan AI kami. Fitur Karier kami memungkinkan Anda untuk berbicara dengan AI yang cerdas, yang akan memberikan rekomendasi berharga terkait rencana karir bagi wanita. Temukan peluang, identifikasi potensi, dan rancang perjalanan karier Anda dengan percaya diri!</p>
              <a href="/karier"><button className="karir-btn">Learn more</button></a>
              </div>
            </Col>
             <div>
                <img src={vector3} alt="vector2" className="vector-3"/>
             </div>

            <Col lg="12" md="6">
              <ReviewSlider />
            </Col>
          </Row>
          <div className="vector-1">
            <img src={vector} alt="vector-1" />
          </div>
        </Container>
      </section>
  );
};

export default Home;