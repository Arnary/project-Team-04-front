import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import {
  fetchCurrentProfile,
  fetchProfile,
} from "../../redux/profile/operations";
import LogOutModal from "../../components/LogOutModal/LogOutModal";

import style from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  const [isLogOutOpen, setLogOutOpen] = useState(false);
  const dispatch = useDispatch();
  const currentProfile = useSelector((state) => state.profile.currentProfile);
  const profile = useSelector((state) => state.profile.selectedProfile);

  useEffect(() => {
    dispatch(fetchCurrentProfile());
  }, [dispatch]);

  useEffect(() => {
    if (currentProfile) {
      dispatch(fetchProfile(currentProfile.id));
    }
  }, [currentProfile, dispatch]);

  return (
    <div className={style.container}>
      <div className={style.profileCard}>
        {profile && (
          <>
            <div className={style.profileImage}>
              <img
                src={profile?.avatar}
                alt="profile"
                className={style.avatar}
              />
            </div>

            <div className={style.name}>{profile.name}</div>
            <div className={style.details}>
              <div className={style.detail}>
                <span className={style.label}>Email:</span>
                <span className={style.value}>{profile.email}</span>
              </div>

              <div className={style.detail}>
                <span className={style.label}>Added recipes:</span>
                <span className={style.value}>{profile.recipesCount}</span>
              </div>

              <div className={style.detail}>
                <span className={style.label}>Favorites:</span>
                <span className={style.value}>
                  {profile.favoriteRecipesCount}
                </span>
              </div>

              <div className={style.detail}>
                <span className={style.label}>Followers:</span>
                <span className={style.value}>{profile.followersCount}</span>
              </div>

              <div className={style.detail}>
                <span className={style.label}>Following:</span>
                <span className={style.value}>{profile.followingCount}</span>
              </div>
            </div>
          </>
        )}
      </div>

      <div className={style.actions}>
        <button className={style.button} onClick={() => setLogOutOpen(true)}>
          Log Out
        </button>
      </div>

      <LogOutModal isOpen={isLogOutOpen} onClose={() => setLogOutOpen(false)} />
    </div>
  );
};

export default ProfileInfo;
