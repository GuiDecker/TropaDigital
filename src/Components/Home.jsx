import logo from "../../assets/logo.png"
import { Link } from "react-router-dom"
import styled from "styled-components"
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import DataThresholdingOutlinedIcon from '@mui/icons-material/DataThresholdingOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';

const HomePage = styled.main`
  .home{
  background-color: #eeeded;
  width: 100%;
  height: 1200px;
  }

  .side-bar {
    position: absolute;
    top: 0px;
    background-color: #ffff;
    width: 240px;
    height: 1800px;
    padding-left: 20px;
  }
  .logo img {
    margin-top: 40px;
    width: 200px;
    height: 80px;
  }

  ul {
    margin: 50px 0;
  }

  li:first-child {
    background-color: #eeeded;
    width: 100%;
    color: black;
  }

  li {
    width: 88%;
    height: 50px;
    margin-left: 15px;
    margin-bottom: 10px;
    border-radius: 10px;
    background-color: #18b9b1;
    color: white;

    list-style: none;
    padding: 10px;
  }

/* //////////////////////////////////// */

  .welcome{
  margin-left: 280px;
  background-color: #eeeded;
  
}

.welcome h2{
  
padding: 40px 0;
font-weight: 400;
color: #a5a2a2;
border-bottom: 1px solid #c4c3c3;
max-width: 90%;

}
.welcome h2 span{
  color: #909696;
  font-weight: bold;
}

.box{
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  /* width: 100%; */
  height: 100%;
  /* background-color: red; */
  margin-top: 40px;
  border-radius: 8px;
}

.content-boxes{
  width: 550px;
  height: 270px;
  margin: 20px;
  background-color: white;
  border-radius: 8px;
}

.content-boxes img{
  padding: 15px;
  width: 550px;
  height: 200px;
  border-radius: 25px;
}

.content-boxes article{
  width: 120%;
  padding:0 20px;
}

.content-boxes h3{
  color: black;
  font-size: 14px;
}

.content-boxes p{
  font-size: 13px;
}

`

function Home() {
  return (
    <HomePage>
      <div className="home">
 <div className="welcome">
            <h2>Olá <span>Usuário</span></h2>
            
            <div className="box">
                  <div className="content-boxes">
                    <img src="../../assets/post.jpg" alt="woman in beach" />
                    <article >
                    <h3>Lorem Ipsum is simply dummy text of the printing and typeseltin...</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typeseltin.</p>
                    </article>
                  </div>
                  <div className="content-boxes">
                    <img src="../../assets/post.jpg" alt="woman in beach" />
                    <article >
                    <h3>Lorem Ipsum is simply dummy text of the printing and typeseltin...</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typeseltin.</p>
                    </article>
                  </div>
                  <div className="content-boxes">
                    <img src="../../assets/post.jpg" alt="woman in beach" />
                    <article >
                    <h3>Lorem Ipsum is simply dummy text of the printing and typeseltin...</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typeseltin.</p>
                    </article>
                  </div>
                  <div className="content-boxes">
                    <img src="../../assets/post.jpg" alt="woman in beach" />
                    <article >
                    <h3>Lorem Ipsum is simply dummy text of the printing and typeseltin...</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typeseltin.</p>
                    </article>
                  </div>
                  <div className="content-boxes">
                    <img src="../../assets/post.jpg" alt="woman in beach" />
                    <article >
                    <h3>Lorem Ipsum is simply dummy text of the printing and typeseltin...</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typeseltin.</p>
                    </article>
                  </div>
                  <div className="content-boxes">
                    <img src="../../assets/post.jpg" alt="woman in beach" />
                    <article >
                    <h3>Lorem Ipsum is simply dummy text of the printing and typeseltin...</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typeseltin.</p>
                    </article>
                  </div>
            </div>
          </div>

        <section className="side-bar">
          <div className="logo">
            <Link to="/"><img src={logo} alt="" /></Link>
          </div>
          <div className="sidebar-selection">
            <ul>
              <li> <SignalCellularAltIcon color="warning" fontSize="small" /> Início</li>
              <li><DataThresholdingOutlinedIcon fontSize="small"/> Contatos</li>
              <li> <TrendingUpOutlinedIcon fontSize="small"/> Relatorios</li>
              <li><DataThresholdingOutlinedIcon fontSize="small"/> Contatos</li>
              <li><DataThresholdingOutlinedIcon fontSize="small"/> Contatos</li>
              <li><DataThresholdingOutlinedIcon fontSize="small"/> Contatos</li>
            </ul>
          </div>
        </section>

        
         
      </div>
    </HomePage>
  )
}

export default Home
