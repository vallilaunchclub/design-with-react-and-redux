import "../styles/work.scss";

const Work = () => {
  return (
    <div className="sidebar-work">
      <div className="title">WORK</div>
      <div className="address">
          <div className="heading">
            <div className="address-title">Spotify New York</div>
            <div className="address-tags">Primary</div>
          </div>
          <div className="address-line">170 William Street</div>
          <div className="address-line">New York, NY 10038-78-212-312-51</div>
      </div>
      <div className="address">
          <div className="heading">
            <div className="address-title">Metropolitan Museum</div>
            <div className="address-tags">Secondary</div>
          </div>
          <div className="address-line">525 E 68th street</div>
          <div className="address-line">New York, NY 10051-78-156-187-60</div>
      </div>
    </div>
  );
};

export default Work;
