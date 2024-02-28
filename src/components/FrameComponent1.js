import "./FrameComponent1.css";

const FrameComponent1 = () => {
  return (
    <header className="frame-parent">
      <div className="vector-parent">
        <img className="vector-icon1" alt="" src="/vector.svg" />
        <img className="vector-icon2" alt="" src="/vector.svg" />
        <img className="vector-icon3" alt="" src="/vector-1.svg" />
        <img
          className="vector-icon4"
          loading="eager"
          alt=""
          src="/vector-2.svg"
        />
        <div className="vector-group">
          <img className="vector-icon5" alt="" src="/vector-3.svg" />
          <img
            className="vector-icon6"
            loading="eager"
            alt=""
            src="/vector-4.svg"
          />
        </div>
      </div>
      <img
        className="vector-icon7"
        loading="eager"
        alt=""
        src="/vector-5.svg"
      />
      <img
        className="vector-icon8"
        loading="eager"
        alt=""
        src="/vector-6.svg"
      />
      <img
        className="vector-icon9"
        loading="eager"
        alt=""
        src="/vector-7.svg"
      />
      <img
        className="rectangle-icon3"
        loading="eager"
        alt=""
        src="/rectangle-2@2x.png"
      />
    </header>
  );
};

export default FrameComponent1;
