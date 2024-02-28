import "./FrameComponent.css";

const FrameComponent = () => {
  return (
    <div className="frame-group">
      <div className="image-frame-wrapper">
        <img
          className="image-frame-icon"
          loading="eager"
          alt=""
          src="/rectangle-3@2x.png"
        />
      </div>
      <div className="frame-container">
        <div className="frame-wrapper">
          <div className="vector-container">
            <img className="vector-icon11" alt="" src="/vector-11.svg" />
            <img
              className="vector-icon12"
              loading="eager"
              alt=""
              src="/vector-12.svg"
            />
          </div>
        </div>
        <div className="frame-div">
          <div className="frame-parent1">
            <div className="frame-wrapper1">
              <div className="frame-wrapper2">
                <div className="vector-parent1">
                  <img className="vector-icon13" alt="" src="/vector-13.svg" />
                  <img
                    className="vector-icon14"
                    loading="eager"
                    alt=""
                    src="/vector-14.svg"
                  />
                </div>
              </div>
            </div>
            <img
              className="vector-icon15"
              loading="eager"
              alt=""
              src="/vector-15.svg"
            />
          </div>
        </div>
        <div className="parentframevectors-wrapper">
          <div className="parentframevectors">
            <img className="vector-icon16" alt="" src="/vector-16.svg" />
            <img
              className="vector-icon17"
              loading="eager"
              alt=""
              src="/vector-17.svg"
            />
          </div>
        </div>
      </div>
      <div className="frame-wrapper3">
        <div className="vector-parent2">
          <img className="vector-icon18" alt="" src="/vector-18.svg" />
          <img
            className="vector-icon19"
            loading="eager"
            alt=""
            src="/vector-19.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
