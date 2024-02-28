import FrameComponent1 from "../components/FrameComponent1";
import EleventhVector from "../components/EleventhVector";
import FrameComponent from "../components/FrameComponent";
import Childimage from "../components/Childimage";
import "./HomePage1.css";

const HomePage1 = () => {
  return (
    <div className="home-page-1-1">
      <img className="rectangle-icon" alt="" src="/rectangle@2x.png" />
      <img className="rectangle-icon1" alt="" src="/rectangle@2x.png" />
      <img
        className="rectangle-icon2"
        loading="eager"
        alt=""
        src="/rectangle-1@2x.png"
      />
      <FrameComponent1 />
      <section className="image-wrapper">
        <EleventhVector />
      </section>
      <img className="vector-icon" alt="" src="/vector.svg" />
      <section className="welcome-frame">
        <div className="sub-header-frame">
          <div className="wrapper-button-group">
            <img
              className="button-group-icon"
              loading="eager"
              alt=""
              src="/vector-10.svg"
            />
          </div>
          <div className="welcome-allwelcome-to-container">
            <p className="welcome-allwelcome-to">
              Welcome all....Welcome to our Web3 Hub and the home of one of the
              freshest projects
            </p>
            <p className="of-2024-solana">
              {" "}
              of 2024. Solana Spray Club is not only bringing you some totally
              original artwork to
            </p>
            <p className="turn-the-nft">
              turn the NFT world on its head, we are also bringing some
              fantastic utility for holders
            </p>
            <p className="of-our-artwork"> of our artwork.</p>
            <p className="not-only-will">
              {" "}
              Not only will holders be able to access exclusive content through
              our revolutionary
            </p>
            <p className="streaming-platform-they">
              streaming platform, they will also be earning passive income day
              by day and week by
            </p>
            <p className="week"> week.</p>
            <p className="here-at-solana">
              Here at Solana Spray Club everybody gets a slice of the pie...as
              our project builds over
            </p>
            <p className="time-we-will">
              {" "}
              time we will be opening many business ventures under the Solana
              Spray Club brand
            </p>
            <p className="and-a-percentage">
              {" "}
              and a percentage of profits will be returned to SSC members
              through airdrops and
            </p>
            <p className="royalties"> royalties.</p>
            <p className="all-this-will">
              {" "}
              All this will be achievable whilst supporting charities that mean
              most to our team, our
            </p>
            <p className="community-and-our"> community and our partners.</p>
            <p className="whats-more-our">
              {" "}
              What's more, our commitment to honestly and sustainability is
              unwavering. No false
            </p>
            <p className="promises-no-smoke">
              {" "}
              promises, no smoke and mirrors - just a genuine and transparent
              journey.
            </p>
            <p className="get-ready-for">
              {" "}
              Get ready for Spray Season - the adventure awaits!
            </p>
          </div>
        </div>
        <FrameComponent />
        <div className="childvectorx">
          <div className="childrectanglecontainer-wrapper">
            <img
              className="childrectanglecontainer-icon"
              loading="eager"
              alt=""
              src="/rectangle-4@2x.png"
            />
          </div>
          <Childimage />
        </div>
      </section>
    </div>
  );
};

export default HomePage1;
