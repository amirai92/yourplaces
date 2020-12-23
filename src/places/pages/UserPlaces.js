import React from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Western Wall",
    description: "Holy place,people from all over the world come to visit",
    imageUrl:
      "https://www.itraveljerusalem.com/wp-content/uploads/2016/07/atr-western-wall-2.jpg",
    address: "Jerusalem",
    location: {
      lat: 31.7767189,
      lng: 35.2366972,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Western ",
    description: "Holy place,people from all over the world come to visit",
    imageUrl:
      "https://www.itraveljerusalem.com/wp-content/uploads/2016/07/atr-western-wall-2.jpg",
    address: "Jerusalem",
    location: {
      lat: 31.7767189,
      lng: 35.2366972,
    },
    creator: "u2",
  },
];

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
