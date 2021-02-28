import React from "react";

import { Radio } from "../elements/Radio";
import { Button } from "../elements/Button";

const ListItem = ({ onChangeRadio, onDeleteCity, city }) => (
    <li className={"weather__city-list-item"}>
        <div>
        <Radio
            onChange={onChangeRadio(city)}
        />
        {city.name}
        </div>
        <Button onClick={onDeleteCity(city)}>Delete</Button>
    </li>
);

export default ListItem;