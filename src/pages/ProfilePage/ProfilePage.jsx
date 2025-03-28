import MainTitle from "../../components/MainTitle/MainTitle";
import ProfileData from "../../components/ProfileData/ProfileData";
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo";
import Subtitle from "../../components/Subtitle/Subtitle";

import style from "./ProfilePage.module.css";

const ProfilePage = () => {
  return (
    <section className={style["profile-section"]}>
      <div className="container">
        <MainTitle>Profile</MainTitle>
        <Subtitle>
          Reveal your culinary art, share your favorite recipe and create <br />
          gastronomic masterpieces with us.
        </Subtitle>
        <div className={style.content}>
          <div className="profileInfo">
            <ProfileInfo />
          </div>
          <div className="profileData">
            <ProfileData />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
