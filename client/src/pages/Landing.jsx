import Wrapper from '../assets/wrappers/LandingPage';
import main from '../assets/images/main.svg';
import logo from '../assets/images/logo.svg';
import { Link } from 'react-router-dom';
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <img src={logo} alt="jobify" className="logo" />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Jobs <span>tracking</span>app
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            vel exercitationem fugiat hic blanditiis inventore sequi ad, quod
            velit quidem dignissimos voluptates ut sint eum ratione rem alias.
            Repellat, iure?
          </p>
          <Link to="/register" className="btn register-link">
            register
          </Link>
          <Link to="/login" className="btn">
            login / demo user
          </Link>
        </div>
        <img src={main} alt="job-hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
