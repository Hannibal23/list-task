import React, { Dispatch, SetStateAction, useState } from 'react';
import StyledList from './List.styles';
import ListBody from './ListBody/ListBody';

export type RenderItem = {
  (
    val: object,
    index: number,
    setSelected: Dispatch<SetStateAction<never[]>>,
  ): JSX.Element;
};

const ListHeader = ({ selected }: { selected: string[] | undefined }) => {
  return <div>Selected: {selected?.join(',')}</div>;
};

const List = ({ renderItem }: { renderItem: RenderItem }) => {
  const [selected, setSelected] = useState([]);

  return (
    <StyledList>
      <ListHeader selected={selected} />
      <ListBody setSelected={setSelected} renderItem={renderItem} />
    </StyledList>
  );
};

export default List;
