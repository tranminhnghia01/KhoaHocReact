import VideoHomePage from "../../assets/video-homepage.mp4";

const HomePage = () => {
  return (
    <div className="homepage-container">
      <video autoPlay muted loop>
        <source src={VideoHomePage} type="video/mp4" />
      </video>
      <div className="homepage-content">
        <div className="title-1">
          Get to know your customers with forms worth filling out
        </div>
        <div className="title-2">
          <p>
            Collect all the data you need to understand customers with forms
            designed to be refreshingly different.
          </p>
        </div>
        <div className="title-3">
          <button>Get's start, It's free</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
