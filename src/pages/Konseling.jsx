// eslint-disable-next-line no-unused-vars
import React from "react";
import { Container, Row, Col } from "reactstrap";
import imgkonseling from '../assets/Group 27173.png'
import '../styles/konselingpage.css'
import imgkonseling2 from '../assets/masalah.png'
import imgkonseling3 from '../assets/img-konseling4.png'
import imgkonseling4 from '../assets/hal.png'
import { FaCheck } from "react-icons/fa6";
import CardProfil from "../components/card/cardProfil";
import vector3 from "../assets/Vector (2).png"
import vector from "../assets/Vector (1).png"
import vector2 from "../assets/Ellipse 24.png"
import gambar1 from '../../public/Ellipse 101.svg'
import gambar2 from '../../public/Ellipse 101 (1).svg'
import gambar3 from '../../public/Ellipse 101 (2).svg'
import gambar4 from '../../public/Ellipse 101 (3).svg'
import gambar5 from '../../public/Ellipse 101 (4).svg'
import gambar6 from '../../public/Ellipse 101 (5).svg'
import gambar7 from '../../public/Ellipse 101 (6).svg'
import gambar8 from '../../public/Ellipse 101 (7).svg'
import gambar9 from '../../public/Ellipse 101 (8).svg'
const KonselingPage = () => {
    return (
    <>
        <div className="Hero-konseling">
            <Container>
                <Row>
                        <Col lg="6">
                            <div className="konseling">
                                <h1 className="title-konseling">Bicarakan Masalah Anda dengan Para Profesional</h1>
                                <p className="txt-konseling">Punya Masalah Kesehatan Mental? Hubungan? Krisis Pribadi? dan Masalah Pengembangan Karier? Konsultasikan Bersama Women Center!</p>
                            </div>
                        </Col>

                        <Col lg='6' style={{ position: 'center' }}>
                            <div className="img-konseling">
                            <img src={imgkonseling} alt="img-karir" />
                            
                            </div>
                        </Col>
                </Row>
            </Container>
                </div>
                <div className="button-konseling">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4">
                                <a href="#" className="btn-ksl">Apa itu Konseling?</a>
                            </div>
                            <div className="col-lg-4">
                                <a href="#" className="btn-ksl">Paket Konseling</a>
                            </div>
                            <div className="col-lg-4">
                                <a href="#" className="btn-ksl">Konselor Women Center</a>
                            </div>
                        </div>
                    </div>
                </div>
        <section>        
                <div className="abt-konseling">
                    <h1 className="txt-abt-ksl">Konseling itu ngapain sih?</h1>
                    <div className='img-ksl' >
                        <img src={imgkonseling2} alt="img-ksl" style={{ boxShadow: '0px 4px 24px 0px rgba(33, 33, 33, 0.10)', borderRadius: '20px'}}/>
                    </div>

                    <img src={vector3} alt="vector2" className="vector-3"/>

                    <div className="col-md-6">
          <div className="text-container" id="text1">
            <p>Kecemasan dan Kecenderungan Depresi</p>
          </div>

          <div className="text-container" id="text2">
            <p>Sering Overthinking</p>
          </div>

          <div className="text-container" id="text3">
            <p>Kesulitan dalam Hubungan</p>
          </div>

          <div className="text-container" id="text4">
            <p>Krisis Identitas dan Diri</p>
          </div>

          <div className="text-container" id="text5">
            <p>Gangguan Kesehatan Mental</p>
          </div>
        </div>

        {/* Right side text container */}
        <div className="col-md-6">
          <div className="text-container" id="text6">
            <p>Kesehatan Tubuh dan Gaya Hidup</p>
          </div>

          <div className="text-container" id="text7">
            <p>Kecenderungan Merasa Terisolasi</p>
          </div>

          <div className="text-container" id="text8">
            <p>Pertimbangan Pilihan Masa Depan</p>
          </div>

          <div className="text-container" id="text9">
            <p>Masalah Kecanduan</p>
          </div>
        </div>

                    <div className="img-ksl2"> 
                        <img src={imgkonseling3} alt="img-ksl" style={{ width: '38%', height: 'auto'}}/>
                    </div>
                </div>

        
                <div className='container-xxl ' style={{ marginTop: '-50px' }}>
                    <div className='masalah-konseling row position-relative'>
                        <div className='d-flex flex-column '>
                             <div className='masalah-konseling-content'>
                                <h3 className='title-hal'>Kamu bisa konsultasiin <br />masalah ini dan lainnya bersama konselor kami</h3>
                                <p className='txt-hal'>Kamu juga bisa lakuin hal lain seperti : </p>
                            <div className='img-hal'>
                    <img src={imgkonseling4} alt='img-ksl' style={{ width: '100%', height: 'auto' }} />
        </div>
      </div>
    </div>
  </div>
</div>

                <div className="paket">
                    <h3 className="title-paket">Temukan Paket yang Sesuai!</h3>
                    <p className="txt-paket">Kamu bisa membeli paket konseling sesuai dengan keinginanmu. <br />
                    Kemudian, pilihlah paket yang sesuai dengan kebutuhanmu untuk mendapatkan dukungan yang tepat dan personal. </p>
    
                    <div className="container pilih-paket">
                        <div className="row">
                            <div className="col-lg-6 paket-container">
                                <div className="box-paket">
                                    <div className="txt-box">
                                        <div className="d-flex align-items-center">
                                        <h6 className="title-pkt">Paket Voice Call</h6>
                                        <p className="rekomendasi">1x Sesi</p></div>
                                        <hr />
                                        <div className="row gx-3">
                                            <div className="col-lg-6">
                                                <p className="benefit">
                                                <FaCheck className="check-icon"/>  Durasi Konsultasi 1 Jam/Sesi <br />
                                                <FaCheck className="check-icon"/>  1on1 Dengan Konselor <br />
                                                <FaCheck className="check-icon"/>  Privasi Dijamin 100% Aman <br />
                                                <FaCheck className="check-icon"/>  Tes Kesehatan Mental <br />
                                                </p>
                                            </div>
                                            <div className="col-lg-6">
                                                <p className="benefit">
                                                <FaCheck className="check-icon"/>  Tes Kepribadian <br />
                                                <FaCheck className="check-icon"/>  Tes Minat Karir <br />
                                                <FaCheck className="check-icon"/> Masa Aktif Paket Selama 1 Minggu
                                                </p>
                                            </div>
                                        </div>
                                        <hr />
                                        <Row className="d-flex align-items-center">
                                        <Col lg={3}>
                                        <p className="discount-price">
                                        <del>Rp 350.000</del>
                                        </p>
                                        <p className="original-price">Rp 250.000</p>
                                        </Col>
                                        
                                        <Col lg={9} className="d-flex ">
                                        <button className="button-paket">Pilih Paket</button>
                                        </Col>
                                        </Row>
                                 </div>
                             </div>
                         </div>
                         <div className="col-lg-6 paket-container">
                                <div className="box-paket">
                                    <div className="txt-box">
                                    <div className="d-flex align-items-center">
                                        <h6 className="title-pkt">Paket Video Call</h6>
                                        <p className="rekomendasi">2x Sesi</p></div>
                                        
                                        <hr />
                                        <div className="row">
                                            <div className="col-lg-6">
                                            <p className="benefit">
                                                <FaCheck className="check-icon"/>  Durasi Konsultasi 1 Jam/Sesi <br />
                                                <FaCheck className="check-icon"/>  1on1 Dengan Konselor <br />
                                                <FaCheck className="check-icon"/>  Privasi Dijamin 100% Aman <br />
                                                <FaCheck className="check-icon"/>  Tes Kesehatan Mental <br />
                                                </p>
                                            </div>
                                            <div className="col-lg-6">
                                                <p className="benefit">
                                                <FaCheck className="check-icon"/>  Tes Kepribadian <br />
                                                <FaCheck className="check-icon"/>  Tes Minat Karir <br />
                                                <FaCheck className="check-icon"/> Masa Aktif Paket Selama 2 Minggu
                                                </p>
                                            </div>
                                        </div>
                                        <hr />
                                        <Row className="d-flex align-items-center">
                                        <Col lg={3}>
                                        <p className="discount-price">
                                        <del>Rp 650.000</del>
                                        </p>
                                        <p className="original-price">Rp 550.000</p>
                                        </Col>
                                        
                                        <Col lg={9} className="d-flex ">
                                        <button className="button-paket">Pilih Paket</button>
                                        </Col>
                                        </Row>
                                 </div>
                             </div>
                         </div>
                         <div className="col-lg-6">
                                <div className="box-paket">
                                    <div className="txt-box">
                                    <div className="d-flex align-items-center">
                                        <h6 className="title-pkt">Paket All in One</h6>
                                        <p className="rekomendasi">2x Sesi</p></div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-lg-6">
                                            <p className="benefit mb-4">
                                                <FaCheck className="check-icon"/>  Durasi Konsultasi 1 Jam/Sesi <br />
                                                <FaCheck className="check-icon"/>  1on1 Dengan Konselor <br />
                                                <FaCheck className="check-icon"/>  Privasi Dijamin 100% Aman <br />
                                                <FaCheck className="check-icon"/>  Tes Kesehatan Mental <br />
                                                </p>
                                            </div>
                                            <div className="col-lg-6">
                                                <p className="benefit ">
                                                <FaCheck className="check-icon"/>  Tes Kepribadian <br />
                                                <FaCheck className="check-icon"/>  Tes Minat Karir <br />
                                                <FaCheck className="check-icon"/> Masa Aktif Paket Selama 3 Minggu
                                                </p>
                                            </div>
                                        </div>
                                        <hr />
                                        <Row className="d-flex align-items-center">
                                        <Col lg={3}>
                                        <p className="discount-price">
                                        <del>Rp 850.000</del>
                                        </p>
                                        <p className="original-price">Rp 750.000</p>
                                        </Col>
                                        
                                        <Col lg={9} className="d-flex ">
                                        <button className="button-paket">Pilih Paket</button>
                                        </Col>
                                        </Row>
                                 </div>
                             </div>
                         </div>
                         <div className="col-lg-6">
                                <div className="box-paket">
                                    <div className="txt-box">
                                    <div className="d-flex align-items-center">
                                        <h6 className="title-pkt">Paket Offline</h6>
                                        <p className="rekomendasi">1x Sesi</p></div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-lg-6">
                                            <p className="benefit mb-0">
                                                <FaCheck className="check-icon"/>  Ruang Konseling Yang Nyaman <br />
                                                <FaCheck className="check-icon"/>  Konseling Tatap Muka <br />
                                                <FaCheck className="check-icon"/>  Durasi Konsultasi 2 Jam/Sesi <br />
                                                <FaCheck className="check-icon"/>  1on1 Dengan Konselor <br />
                                                <FaCheck className="check-icon"/>  Privasi Dijamin 100% Aman<br />
                                                </p>
                                            </div>
                                            <div className="col-lg-6">
                                                <p className="benefit mb-0">
                                                <FaCheck className="check-icon"/>  Tes Kesehatan Mental <br />
                                                <FaCheck className="check-icon"/>  Tes Kepribadian <br />
                                                <FaCheck className="check-icon"/>  Tes Minat Karir <br />
                                                <FaCheck className="check-icon"/> Masa Aktif Paket Selama 1 Minggu
                                                </p>
                                            </div>
                                        </div>
                                        <hr className="hr-offline" />
                                        <Row className="d-flex align-items-center">
                                        <Col lg={3}>
                                        <p className="discount-price">
                                        <del>Rp 1.050.000</del>
                                        </p>
                                        <p className="original-price">Rp 950.000</p>
                                        </Col>
                                        
                                        <Col lg={9} className="d-flex ">
                                        <button className="button-paket">Pilih Paket</button>
                                        </Col>
                                        </Row>
                                 </div>
                             </div>
                         </div>
                     </div>
                </div>
       
            <Col>
            <button className="button-info">Pesan Sekarang</button>
            </Col>
       
            <h3 className="title-paket">Konselor Professional</h3>
                    <p className="txt-paket">Bertemu dengan konselor-konselor kami yang berpengalaman,  <br />
                    serta siap memberikan dukungan dan panduan untuk setiap perjalanan kehidupan Anda. </p>

            <img src={vector3} alt="vector2" className="vector-7"/>
            <img src={vector2} alt="vector2" className="vector-9"/>
            
            <div className='row gap-5'>
            <div className='d-flex justify-content-center'>
                <div className='d-flex flex-column gap-4'>
                  <div className='d-flex align-items-center gap-3'>
                  <CardProfil 
                      src={gambar1} 
                      names={"Maron Mango S.Psi"} 
                      session={"432+ Sesi"}/>
                    <CardProfil 
                      src={gambar2} 
                      names={"Madelyn Calzoni S.Psi"} 
                      session={"234+ Sesi"}/>
                    <CardProfil 
                      src={gambar3} 
                      names={"Jocelyn Westervelt S.Psi"} 
                      session={"221+ Sesi"}/>
                  </div>
                  <div className='d-flex align-items-center gap-3'>
                    <CardProfil 
                      src={gambar4} 
                      names={"Mira Bergson S.Psi"} 
                      session={"209+ Sesi"}/>
                    <CardProfil 
                      src={gambar5} 
                      names={"Livia Saris S.Psi"} 
                      session={"178+ Sesi"}/>
                    <CardProfil 
                      src={gambar6} 
                      names={"Carla Vaccaro S.Psi"} 
                      session={"166+ Sesi"}/>
                  </div>
                  <div className='d-flex align-items-center gap-3'>
                    <CardProfil 
                      src={gambar7} 
                      names={"Jordyn Geidt S.Psi"} 
                      session={"129+ Sesi"}/>
                    <CardProfil 
                      src={gambar8} 
                      names={"Maria Bergson S.Psi"} 
                      session={"97+ Sesi"}/>
                    <CardProfil 
                      src={gambar9} 
                      names={"Ashlynn Culhane S.Psi"} 
                      session={"Baru!"}/>
                  </div>
                </div>
            </div>
            </div>

            <Col>
            <button className="more-button">Lebih Banyak</button>
            </Col>
        </div>
        
          <img src={vector} alt="vector-1" className="vector-8" />
    </section>
    </>    
    )
}

export default KonselingPage;
