import RecipePreviewList from "../RecipePreviewList/RecipePreviewList";
import EmptyList from "../EmptyList/EmptyList";

const recipes = [
  {
    id: 10,
    title: "Rogaliki (Polish Croissant Cookies)",
    categoryId: 6,
    ownerId: 1,
    areaId: 25,
    instructions:
      "In a medium bowl mix egg yolks, philly cheese and baking powder using a hand held mixer. Carefully start adding the flour. When the mixture will not be mixing well, and will look like wood chips, put away the blending mixer and using your hands knead the dough.\r\nCreate a roll and cover in foil and freeze for 15 minutes. At this time preheat the oven to 375.\r\nTake the dough out and separate into two. Roll and cut out 3 inch trangles.\r\nMake as many as you can and on centre of each put a small spoon of jam. Roll them into a croissant shape.\r\nPlace the croissants onto a greased cookie sheet, and bake for 10-12 minutes or until golden.\r\nRepeat with the rest of the dough.\r\nWhen you take them out, put aside and sprinkle with powdered sugar on top.\r\nThis makes about 3 batches of 20 cookies each.\r\nTotal count about 60 cookies.",
    description:
      "A popular Polish pastry, Rogaliki are crescent-shaped cookies made from a flaky, buttery dough and typically filled with jam, nuts, or poppy seeds.",
    thumb:
      "https://ftp.goit.study/img/so-yummy/preview/Rogaliki%20_Polish%20Croissant%20Cookies_.jpg",
    time: 35,
    favoriteCount: 0,
  },
  {
    id: 11,
    title: "Thai Green Curry",
    categoryId: 4,
    ownerId: 1,
    areaId: 5,
    instructions:
      "Put the potatoes in a pan of boiling water and cook for 5 minutes. Throw in the beans and cook for a further 3 minutes, by which time both should be just tender but not too soft. Drain and put to one side.\r\nIn a wok or large frying pan, heat the oil until very hot, then drop in the garlic and cook until golden, this should take only a few seconds. Don’t let it go very dark or it will spoil the taste. Spoon in the curry paste and stir it around for a few seconds to begin to cook the spices and release all the flavours. Next, pour in the coconut milk and let it come to a bubble.\r\nStir in the fish sauce and sugar, then the pieces of chicken. Turn the heat down to a simmer and cook, covered, for about 8 minutes until the chicken is cooked.\r\nTip in the potatoes and beans and let them warm through in the hot coconut milk, then add a lovely citrussy flavour by stirring in the shredded lime leaves (or lime zest). The basil leaves go in next, but only leave them briefly on the heat or they will quickly lose their brightness. Scatter with the lime garnish and serve immediately with boiled rice.",
    description:
      "A fragrant Thai dish made with coconut milk, green curry paste, and a mix of vegetables and meat or seafood.",
    thumb:
      "https://ftp.goit.study/img/so-yummy/preview/Thai%20Green%20Curry.jpg",
    time: 40,
    favoriteCount: 0,
  },
  {
    id: 12,
    title: "Traditional Croatian Goulash",
    categoryId: 5,
    ownerId: 1,
    areaId: 21,
    instructions:
      "Clean the meat from the veins if there are some and cut it into smaller pieces, 3 × 3 cm. Marinate the meat in the mustard and spices and let it sit in the refrigerator for one hour\r\nHeat one tablespoon of pork fat or vegetable oil in a pot and fry the meat on all sides until it gets browned. Once the meat is cooked, transfer it to a plate and add another tablespoon of fat to the pot\r\nCut the onions very fine, peel the carrots and shred it using a grater. Cook the onions and carrots over low heat for 15 minutes. You can salt the vegetables a little to make them soften faster\r\nOnce the vegetables have browned and become slightly mushy, add the meat and bay leaves and garlic. Pour over with wine and simmer for 10-15 minutes to allow the alcohol to evaporate. Now is the right time to add 2/3 the amount of liquid\r\nCover the pot and cook over low heat for an hour, stirring occasionally. After the first hour, pour over the rest of the water or stock and cook for another 30-45 minutes\r\nAllow the stew to cool slightly and serve it with a sprinkle of chopped parsley and few slices of fresh hot pepper if you like to spice it up a bit\r\nSlice ​​some fresh bread, season the salad and simply enjoying these wonderful flavors",
    description:
      "A hearty Croatian stew made with beef, potatoes, onions, and paprika, often served with a side of bread or pasta. The dish has a rich and savory flavor and is a popular comfort food in Croatia.",
    thumb:
      "https://ftp.goit.study/img/so-yummy/preview/Traditional%20Croatian%20Goulash.jpg",
    time: 135,
    favoriteCount: 0,
  },
  {
    id: 224,
    title: "Piri-piri chicken and slaw",
    categoryId: 4,
    ownerId: 1,
    areaId: 20,
    instructions:
      "STEP 1\r\n\r\nWhizz together all of the marinade ingredients in a small food processor. Rub the marinade onto the chicken and leave for 1 hour at room temperature.\r\n\r\nSTEP 2\r\n\r\nHeat the oven to 190C/fan 170C/gas 5. Put the chicken in a roasting tray and cook for 1 hour 20 minutes. Rest under loose foil for 20 minutes. While the chicken is resting, mix together the slaw ingredients and season. Serve the chicken with slaw, fries and condiments.",
    description:
      "Piri-piri chicken and slaw is a spicy and flavorful Portuguese dish of grilled chicken marinated in a spicy piri-piri sauce, served with a fresh slaw of cabbage, carrots, and onions.",
    thumb:
      "https://ftp.goit.study/img/so-yummy/preview/Piri-piri%20chicken%20and%20slaw.jpg",
    time: 80,
    favoriteCount: 0,
  },
  {
    id: 14,
    title: "Chinon Apple Tarts",
    categoryId: 6,
    ownerId: 1,
    areaId: 9,
    instructions:
      "To make the red wine jelly, put the red wine, jam sugar, star anise, clove, cinnamon stick, allspice, split vanilla pod and seeds in a medium saucepan. Stir together, then heat gently to dissolve the sugar. Turn up the heat and boil for 20 mins until reduced and syrupy. Strain into a small, sterilised jam jar and leave to cool completely. Will keep in the fridge for up to 1 month.\r\n\r\nTake the pastry out of the fridge and leave at room temperature for 10 mins, then unroll. Heat the grill to high and heat the oven to 180C/160C fan/gas 4. Cut out 2 x 13cm circles of pastry, using a plate as a guide, and place on a non-stick baking sheet. Sprinkle each circle with 1 tbsp sugar and grill for 5 mins to caramelise, watching carefully so that the sugar doesn’t burn. Remove from the grill. Can be done a few hours ahead, and left, covered, out of the fridge.\r\n\r\nPeel, quarter and core the apples, cut into 2mm-thin slices and arrange on top of the pastry. Sprinkle over the remaining sugar and pop in the oven for 20-25 mins until the pastry is cooked through and golden, and the apples are softened. Remove and allow to cool slightly. Warm 3 tbsp of the red wine jelly in a small pan over a low heat with 1 tsp water to make it a little more runny, then brush over the top of the tarts.\r\n\r\nTip the crème fraîche into a bowl, sift over the icing sugar and cardamom, and mix together. Carefully lift the warm tarts onto serving plates and serve with the cardamom crème fraîche.",
    description:
      "A delicious French pastry with caramelized apples and a flaky pastry crust.",
    thumb:
      "https://ftp.goit.study/img/so-yummy/preview/Chinon%20Apple%20Tarts.jpg",
    time: 70,
    favoriteCount: 0,
  },
  {
    id: 15,
    title: "Sticky Toffee Pudding",
    categoryId: 6,
    ownerId: 1,
    areaId: 7,
    instructions:
      "Preheat the oven to 180C/160C Fan/Gas 4. Butter a wide shallow 1.7-litre/3-pint ovenproof dish.\r\nPut the butter, sugar, eggs, flour, baking powder, bicarbonate of soda and treacle into a mixing bowl. Beat using an electric handheld whisk for about 30 seconds or until combined. Pour in the milk gradually and whisk again until smooth. Pour into the prepared dish. Bake for 35–40 minutes or until well risen and springy in the centre.\r\nTo make the sauce, put all the ingredients into a saucepan and stir over a low heat until the sugar has dissolved and the butter has melted. Bring to the boil, stirring for a minute.\r\nTo serve, pour half the sauce over the pudding in the baking dish. Serve with the cream or ice cream.",
    description:
      "A decadent dessert with moist sponge cake and a rich toffee sauce.",
    thumb:
      "https://ftp.goit.study/img/so-yummy/preview/Sticky%20Toffee%20Pudding.jpg",
    time: 50,
    favoriteCount: 0,
  },
  {
    id: 16,
    title: "Carrot Cake",
    categoryId: 6,
    ownerId: 1,
    areaId: 7,
    instructions:
      "For the carrot cake, preheat the oven to 160C/325F/Gas 3. Grease and line a 26cm/10in springform cake tin.\r\nMix all of the ingredients for the carrot cake, except the carrots and walnuts, together in a bowl until well combined. Stir in the carrots and walnuts.\r\nSpoon the mixture into the cake tin and bake for 1 hour 15 minutes, or until a skewer inserted into the middle comes out clean. Remove the cake from the oven and set aside to cool for 10 minutes, then carefully remove the cake from the tin and set aside to cool completely on a cooling rack.\r\nMeanwhile, for the icing, beat the cream cheese, caster sugar and butter together in a bowl until fluffy. Spread the icing over the top of the cake with a palette knife.",
    description:
      "A cake made with grated carrots, flour, eggs, sugar, and spices like cinnamon and nutmeg. It is often topped with cream cheese frosting and is a popular dessert in many countries.",
    thumb: "https://ftp.goit.study/img/so-yummy/preview/Carrot%20Cake.jpg",
    time: 75,
    favoriteCount: 0,
  },
  {
    id: 17,
    title: "English Breakfast",
    categoryId: 12,
    ownerId: 1,
    areaId: 7,
    instructions:
      "Heat the flat grill plate over a low heat, on top of 2 rings/flames if it fits, and brush sparingly with light olive oil.\r\nCook the sausages first. Add the sausages to the hot grill plate/the coolest part if there is one and allow to cook slowly for about 15-20 minutes, turning occasionally, until golden. After the first 10 minutes, increase the heat to medium before beginning to cook the other ingredients. If you are struggling for space, completely cook the sausages and keep hot on a plate in the oven.\r\nSnip a few small cuts into the fatty edge of the bacon. Place the bacon straight on to the grill plate and fry for 2-4 minutes each side or until your preferred crispiness is reached. Like the sausages, the cooked bacon can be kept hot on a plate in the oven.\r\nFor the mushrooms, brush away any dirt using a pastry brush and trim the stalk level with the mushroom top. Season with salt and pepper and drizzle over a little olive oil. Place stalk-side up on the grill plate and cook for 1-2 minutes before turning and cooking for a further 3-4 minutes. Avoid moving the mushrooms too much while cooking, as this releases the natural juices, making them soggy.\r\nFor the tomatoes, cut the tomatoes across the centre/or in half lengthways if using plum tomatoes , and with a small, sharp knife remove the green 'eye'. Season with salt and pepper and drizzle with a little olive oil. Place cut-side down on the grill plate and cook without moving for 2 minutes. Gently turn over and season again. Cook for a further 2-3 minutes until tender but still holding their shape.\r\nFor the black pudding, cut the black pudding into 3-4 slices and remove the skin. Place on the grill plate and cook for 1½-2 minutes each side until slightly crispy.\r\nFor 'proper' fried bread it's best to cook it in a separate pan. Ideally, use bread that is a couple of days old. Heat a frying pan to a medium heat and cover the base with oil. Add the bread and cook for 2-3 minutes each side until crispy and golden. If the pan becomes too dry, add a little more oil. For a richer flavour, add a knob of butter after you turn the slice.\r\nFor the fried eggs, break the egg straight into the pan with the fried bread and leave for 30 seconds. Add a good knob of butter and lightly splash/baste the egg with the butter when melted. Cook to your preferred stage, season and gently remove with a fish slice.\r\nOnce all the ingredients are cooked, serve on warm plates and enjoy straight away with a good squeeze of tomato ketchup or brown sauce.",
    description:
      "A hearty breakfast meal consisting of eggs, bacon, sausage, baked beans, grilled tomato, and toast. It is a popular breakfast in the United Kingdom.",
    thumb:
      "https://ftp.goit.study/img/so-yummy/preview/English%20Breakfast.jpg",
    time: 51,
    favoriteCount: 0,
  },
  {
    id: 18,
    title: "Tuna and Egg Briks",
    categoryId: 1,
    ownerId: 1,
    areaId: 18,
    instructions:
      "Heat 2 tsp of the oil in a large saucepan and cook the spring onions over a low heat for 3 minutes or until beginning to soften. Add the spinach, cover with a tight-fitting lid and cook for a further 2–3 minutes or until tender and wilted, stirring once or twice. Tip the mixture into a sieve or colander and leave to drain and cool.\r\nUsing a saucer as a guide, cut out 24 rounds about 12.5 cm (5 in) in diameter from the filo pastry, cutting 6 rounds from each sheet. Stack the filo rounds in a pile, then cover with cling film to prevent them from drying out.\r\nWhen the spinach mixture is cool, squeeze out as much excess liquid as possible, then transfer to a bowl. Add the tuna, eggs, hot pepper sauce, and salt and pepper to taste. Mix well.\r\nPreheat the oven to 200°C (400°F, gas mark 6). Take one filo round and very lightly brush with some of the remaining oil. Top with a second round and brush with a little oil, then place a third round on top and brush with oil.\r\nPlace a heaped tbsp of the filling in the middle of the round, then fold the pastry over to make a half-moon shape. Fold in the edges, twisting them to seal, and place on a non-stick baking sheet. Repeat with the remaining pastry and filling to make 8 briks in all.\r\nLightly brush the briks with the remaining oil. Bake for 12–15 minutes or until the pastry is crisp and golden brown.\r\nMeanwhile, combine the tomatoes and cucumber in a bowl and sprinkle with the lemon juice and seasoning to taste. Serve the briks hot with this salad and the chutney.",
    description:
      "A crispy Tunisian pastry filled with tuna, egg, onion, and parsley, spiced with cumin and harissa.",
    thumb:
      "https://ftp.goit.study/img/so-yummy/preview/Tuna%20and%20Egg%20Briks.jpg",
    time: 45,
    favoriteCount: 0,
  },
  {
    id: 260,
    title: "Fettuccine Alfredo",
    categoryId: 11,
    ownerId: 1,
    areaId: 2,
    instructions:
      "Cook pasta according to package instructions in a large pot of boiling water and salt. Add heavy cream and butter to a large skillet over medium heat until the cream bubbles and the butter melts. Whisk in parmesan and add seasoning (salt and black pepper). Let the sauce thicken slightly and then add the pasta and toss until coated in sauce. Garnish with parsley, and it's ready.",
    description:
      "Fettuccine Alfredo is a classic Italian pasta dish made with fettuccine pasta, butter, cream, and Parmesan cheese. It's a simple yet decadent dish that's perfect for a special occasion or a cozy dinner at home.",
    thumb:
      "https://ftp.goit.study/img/so-yummy/preview/Fettuccine%20Alfredo.jpg",
    time: 20,
    favoriteCount: 0,
  },
];

const UserFavorites = () => {
  return (
    <div>
      {recipes.length > 0 ? (
        <RecipePreviewList items={recipes} />
      ) : (
        <EmptyList>
          Nothing has been added to your favorite recipes list yet. Please
          browse our recipes and add your favorites for easy access in the
          future.
        </EmptyList>
      )}
    </div>
  );
};

export default UserFavorites;
