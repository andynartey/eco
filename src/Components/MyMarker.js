import React from "react";

import { Marker } from "google-maps-react";
import firebase from "../firebase";

const MyMarker = (props) => {
    return <Marker position={{ lat: 52.229676, lng: 21.012229 }}></Marker>;
};

export default MyMarker;
