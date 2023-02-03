import styled from "styled-components"

function Painel() {
  return (
    <PainelFather>
      {/* <h1>Hello Word</h1> */}
      <section className="painel">
        <div className="partOne">
          <div className="logo">
            <img src="../../assets/logo.png" alt="logo tropa digital" />
          </div>

          <h1>
            Bem Vindo ao <span> Painel </span>
          </h1>
          <form className="form">
            <input type="email" placeholder="Digite seu e-mail" />
            <input type="password" placeholder="Digite sua senha" />
            <button>Acessar</button>
          </form>
        </div>

        <div className="partTwo">
          <div className="code-img">
            <img src="../../assets/code-img.png" alt="" />
          </div>
        </div>
      </section>
    </PainelFather>
  )
}

const PainelFather = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  min-height: 1000px;
  padding-bottom: 200px;
  background-color: #e66820;

  .painel {
    display: flex;

    /* min-width: 100px; */
    /* width: 100%; */

    width: 900px;
    height: 550px;
    margin-top: 200px;
    background-color: white;
    border-radius: 5px;
  }

  .logo img {
    display: flex;
    margin: 50px 100px;
    width: 60%;
    height: 30%;
  }

  .partOne {
    background-color: white;
    width: 500px;
  }

  .partOne h1 {
    margin-left: 50px;
    color: #838383;
  }

  .partOne h1 span {
    color: #ff6600;
    font-weight: bold;
  }

  form {
    display: flex;
    flex-direction: column;
    margin: 28px 50px;
  }

  form input {
    margin-bottom: 15px;
    padding: 8px;
    width: 90%;
    height: 50px;
    border-radius: 8px;
    cursor: pointer;
    border: 1px solid #dbdbdb;
  }

  form button {
    width: 50%;
    height: 50px;
    border-radius: 8px;
    cursor: pointer;
    color: white;
    background-color: #12a78e;
    border-style: none;
  }

  .partTwo {
    width: 400px;
    height: 550px;
    background-image: url("../../assets/sky-bg.jfif");
  }

  .partTwo .code-img {
    position: relative;
    top: 150px;
    right: 100px;
  }

  .partTwo img {
    width: 400px;
    height: 400px;
  }
`

export default Painel
