import React from "react";
import { BiChevronsRight } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { AnimationPage } from "../../components/animation/AnimationPage";
import { MythsAll } from "../../components/mythsAll/MythsAll";
import "./myths.scss";
export const Myths = () => {
  let navigate = useNavigate();
  return (
    <AnimationPage>
      <div className="container-myth" id="myths">
        <section className="sub-container-myth">
          <article className="container-card-myth">
            <div className="sub-container-card-myth">
              <div className="container-image-myth">
                <img src="https://th.bing.com/th/id/OIP.kpDdsGw5uwcJFOh6en0QHgHaE8?pid=ImgDet&rs=1"></img>
                <figcaption>Just Filters</figcaption>
              </div>
              <div className="container-info-myth">
                <div className="sub-container-info-myth">
                  <div className="header">
                    <span className="title">Myth</span>
                    <h2>
                      Archimedes’s Weapons of War: Embellished Stories or Deadly
                      Devices?
                    </h2>
                    <div className="info-data">
                      <span>by Sergio Cano</span>
                      <span className="space"> | </span>
                      <span>julio 24 2016</span>
                    </div>
                    <div></div>
                  </div>
                  <div className="description">
                    <p>
                      The name Archimedes is well known to anyone who has
                      learned about classical antiquity during…
                    </p>
                  </div>
                  <div className="container-bottom-reader">
                    <button
                      className="btn-read"
                      onClick={() => {
                        navigate("/mythsView", { replace: true });
                      }}
                    >
                      {" "}
                      Read More{" "}
                      <i className="icon">
                        <BiChevronsRight />
                      </i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </section>
        <div className="container-aside">
          <MythsAll />
        </div>
      </div>
    </AnimationPage>
  );
};
