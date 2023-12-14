/* eslint-disable no-unused-vars */
import React from 'react'
import HeaderKonselor from '../components/Header/headerKonselor'
import CardProfil from '../components/card/cardProfil'
import BannerKonselor from '../components/card/bannerKonselor'
import { TbMoodSmileBeam } from "react-icons/tb";
import vector1 from "../assets/Vector (6).png"
import gambar1 from '../../public/Ellipse 101.svg'
import gambar2 from '../../public/Ellipse 101 (1).svg'
import gambar3 from '../../public/Ellipse 101 (2).svg'
import gambar4 from '../../public/Ellipse 101 (3).svg'
import gambar5 from '../../public/Ellipse 101 (4).svg'
import gambar6 from '../../public/Ellipse 101 (5).svg'
import gambar7 from '../../public/Ellipse 101 (6).svg'
import gambar8 from '../../public/Ellipse 101 (7).svg'
import gambar9 from '../../public/Ellipse 101 (8).svg'


function Konselor() {
  return (
    <>
      <HeaderKonselor />

      <section>
        <div className='container-xxl'>
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


            <div className='d-flex justify-content-center'>
              <BannerKonselor 
                icon={<TbMoodSmileBeam size={30} />} 
                text={"Eksplorasi profil konselor kami yang penuh warna, dan temukan keunikan serta keahlian mereka dalam memberikan dukungan"}/>
            </div>
          </div>
        </div>
      </section>
      <img src={vector1} alt="vector1" className="vector-2-footer"/>
    </>
  )
}

export default Konselor