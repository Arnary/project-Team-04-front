import TabList from "../TabList/TabList";
import UserRecipes from "../UserRecipes/UserRecipes";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import UserFavorites from "../UserFavorites/UserFavorites";
import UserFollowers from "../UserFollowers/UserFollowers";
import UserFollowing from "../UserFollowing/UserFollowing";
import { isCurrentAuthUser } from "../../redux/auth/authSlice";

const UserTabs = ({ userId }) => {
  const isOwnProfile = useSelector(isCurrentAuthUser(userId));

  const tabs = isOwnProfile
    ? ["My recipes", "My favorites", "Followers", "Following"]
    : ["Recipes", "Followers"];

  const [activeTab, setActiveTab] = useState(tabs[0]);

  const createComponent = () => {
    switch (activeTab) {
      case "My recipes":
      case "Recipes":
        return <UserRecipes userId={userId} isOwnProfile={isOwnProfile} />;
      case "My favorites":
        return <UserFavorites isOwnProfile={isOwnProfile} />;
      case "Followers":
        return <UserFollowers userId={userId} />;
      case "Following":
        return <UserFollowing />;
    }
  };

  useEffect(() => {
    setActiveTab(tabs[0]);
  }, [userId]);

  return (
    <>
      <TabList tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
      {createComponent()}
    </>
  );
};

export default UserTabs;
