import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

import authReducer from "./auth/authSlice";
import categoryReducer from "./categories/categorySlice";
import areasReducer from "./areas/areaSlice";
import ingredientsReducer from "./ingredients/ingredientSlice";
import recipeReducer from "./recipes/recipesSlice";
import profileReducer from "./profile/profileSlice";

const recipeConfig = {
	key: "recipes",
	storage,
	whitelist: ["favoriteRecipes"],
};

const persistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
	reducer: {
		categories: categoryReducer,
		areas: areasReducer,
		ingredients: ingredientsReducer,
		recipes: persistReducer(recipeConfig, recipeReducer),
		auth: persistedAuthReducer,
    	profile: profileReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});

export const persistor = persistStore(store);
