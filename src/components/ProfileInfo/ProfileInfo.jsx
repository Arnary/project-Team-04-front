import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { toast } from "react-hot-toast";

import {
  fetchProfile,
  updateAvatar,
  fetchUserFollowing,
  followProfile,
  unfollowProfile,
} from "../../redux/profile/operations";
import { isFollowingProfile } from "../../redux/profile/profileSlice";
import LogOutModal from "../../components/LogOutModal/LogOutModal";

import style from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  const [isLogOutOpen, setLogOutOpen] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();
  const status = useSelector((state) => state.profile.status);
  const profile = useSelector((state) => state.profile.selectedProfile);
  const isCurrentUser = profile?.favoriteRecipesCount !== undefined;
  const isFollowing = useSelector(isFollowingProfile(id));

  useEffect(() => {
    if (id) {
      dispatch(fetchProfile(id));
    }

    if (!isCurrentUser) {
      dispatch(fetchUserFollowing());
    }
  }, [id, dispatch, isCurrentUser]);

  const handleAvatarChange = (event) => {
    const avatarFile = event.target.files[0];

    if (!avatarFile) {
      toast.error("Please select an image to upload.");
      return;
    }
    const formData = new FormData();
    formData.append("avatar", avatarFile);

    dispatch(updateAvatar(formData));
  };

  const handleFollowClick = () => {
    dispatch(followProfile(id));
  };

  const handleUnfollowClick = () => {
    dispatch(unfollowProfile(id));
  };

  return (
    <div className={style.container}>
      <div className={style.profileCard}>
        {status === "loading" && (
          <div className={style.loaderContainer}>
            <div className={style.loader}></div>
          </div>
        )}
        {profile && (
          <>
            <div className={style.profileImage}>
              <img
                src={profile?.avatar}
                alt="profile"
                className={style.avatar}
              />

              {isCurrentUser && (
                <label className={style.addAvatarButton}>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleAvatarChange}
                    className={style.fileInput}
                  />
                  <div className={style.addAvatarIcon}>+</div>
                </label>
              )}
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

              {isCurrentUser && (
                <div className={style.detail}>
                  <span className={style.label}>Favorites:</span>
                  <span className={style.value}>
                    {profile.favoriteRecipesCount}
                  </span>
                </div>
              )}

              <div className={style.detail}>
                <span className={style.label}>Followers:</span>
                <span className={style.value}>{profile.followersCount}</span>
              </div>

              {isCurrentUser && (
                <div className={style.detail}>
                  <span className={style.label}>Following:</span>
                  <span className={style.value}>{profile.followingCount}</span>
                </div>
              )}
            </div>
          </>
        )}
      </div>

      <div className={style.actions}>
        {isCurrentUser && (
          <button className={style.button} onClick={() => setLogOutOpen(true)}>
            Log Out
          </button>
        )}

        {!isCurrentUser && isFollowing && (
          <button className={style.button} onClick={handleUnfollowClick}>
            Following
          </button>
        )}

        {!isCurrentUser && !isFollowing && (
          <button className={style.button} onClick={handleFollowClick}>
            Follow
          </button>
        )}
      </div>

      <LogOutModal isOpen={isLogOutOpen} onClose={() => setLogOutOpen(false)} />
    </div>
  );
};

export default ProfileInfo;
