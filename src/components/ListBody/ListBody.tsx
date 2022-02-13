import { Dispatch, SetStateAction } from "react";
import data from "../data/data";
import { RenderItem } from "../List";
import StyledListBody from "./ListBody.styles";

const ListBody = ({
    setSelected,
    renderItem,
  }: {
    renderItem: RenderItem;
    setSelected: Dispatch<SetStateAction<never[]>>;
  }) => {
    return (
      <StyledListBody>
        {JSON.parse(data).map((val: object, index: number) => renderItem(val, index, setSelected))}
      </StyledListBody>
    );
  };

  export default ListBody;