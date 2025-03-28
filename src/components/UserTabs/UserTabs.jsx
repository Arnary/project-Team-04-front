import appStyle from "../App.module.css";
import TabList from "../TabList/TabList";
import UserRecipes from "../UserRecipes/UserRecipes";
import { useState } from "react";
import UserFavorites from "../UserFavorites/UserFavorites";
import UserFollowers from "../UserFollowers/UserFollowers";
import UserFollowing from "../UserFollowing/UserFollowing";

const UserTabs = ({ userId }) => {
  const tabs = ["My recipes", "My favorites", "Followers", "Following"];
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const createComponent = () => {
    switch (activeTab) {
      case "My recipes":
      case "Recipes":
        return <UserRecipes userId={userId} />;
      case "My favorites":
        return <UserFavorites />;
      case "Followers":
        return <UserFollowers />;
      case "Following":
        return <UserFollowing />;
    }
  };

  return (
    <>
      <TabList tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
      {createComponent()}
    </>
  );
};

export default UserTabs;
