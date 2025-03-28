import EmptyList from "../EmptyList/EmptyList";
import UserCardList from "../UserCardList/UserCardList";

const following = [
  {
    id: 3,
    email: "larry@gmail.com",
    name: "Larry Pageim",
    avatar: null,
    recipes: [
      {
        id: 5,
        title: "Honey Teriyaki Salmon",
        thumb:
          "https://ftp.goit.study/img/so-yummy/preview/Honey%20Teriyaki%20Salmon.jpg",
      },
      {
        id: 6,
        title: "Poutine",
        thumb: "https://ftp.goit.study/img/so-yummy/preview/Poutine.jpg",
      },
      {
        id: 13,
        title: "Chicken Parmentier",
        thumb:
          "https://ftp.goit.study/img/so-yummy/preview/Chicken%20Parmentier.jpg",
      },
      {
        id: 7,
        title: "Bakewell tart",
        thumb:
          "https://ftp.goit.study/img/so-yummy/preview/Bakewell%20tart.jpg",
      },
    ],
  },
  {
    id: 2,
    email: "user@gmail.com",
    name: "Foodies user",
    avatar: null,
    recipes: [
      {
        id: 1,
        title: "Battenberg Cake",
        thumb:
          "https://ftp.goit.study/img/so-yummy/preview/Battenberg%20Cake.jpg",
      },
      {
        id: 2,
        title: "Irish stew",
        thumb: "https://ftp.goit.study/img/so-yummy/preview/Irish%20stew.jpg",
      },
      {
        id: 3,
        title: "Lancashire hotpot",
        thumb:
          "https://ftp.goit.study/img/so-yummy/preview/Lancashire%20hotpot.jpg",
      },
      {
        id: 4,
        title: "Teriyaki Chicken Casserole",
        thumb:
          "https://ftp.goit.study/img/so-yummy/preview/Teriyaki%20Chicken%20Casserole.jpg",
      },
    ],
  },
];

const UserFollowing = () => {
  return (
    <div>
      {following.length > 0 ? (
        <UserCardList items={following} />
      ) : (
        <EmptyList>
          Your account currently has no subscriptions to other users. Learn more
          about our users and select those whose content interests you.
        </EmptyList>
      )}
    </div>
  );
};

export default UserFollowing;
