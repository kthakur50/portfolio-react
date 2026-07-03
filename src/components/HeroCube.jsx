const HeroCube = () => (
  <div className="hero-right">
    <div className="win3d-scene" id="win3dScene">
      <div className="win3d-perspective">
        <div className="win3d-cube" id="win3dCube">
          <div className="win3d-face win3d-front"  id="wFront"></div>
          <div className="win3d-face win3d-back"   id="wBack"></div>
          <div className="win3d-face win3d-right"  id="wRight"></div>
          <div className="win3d-face win3d-left"   id="wLeft"></div>
          <div className="win3d-face win3d-top"    id="wTop"></div>
          <div className="win3d-face win3d-bottom" id="wBottom"></div>
        </div>
      </div>
    </div>
  </div>
);

export default HeroCube;
