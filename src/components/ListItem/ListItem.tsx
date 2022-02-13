import { Dispatch, SetStateAction, useMemo } from 'react';
import StyledListItem from './ListItem.styles';

const ListItem = ({
  index,
  setSelected,
  data,
}: {
  [data: string]: any;
  index: number;
  setSelected: Dispatch<SetStateAction<never[]>>;
}) => {
  const spanRender = useMemo(
    () => Object.keys(data).map((key) => <span>{data[key]}</span>),
    [data],
  );

  const handleChange = ({
    target: { value },
  }: {
    target: { value: string };
  }) => {
    setSelected((prevState: any) => {
      if (prevState.includes(value))
        return prevState.filter((el: any) => el !== value);

      return [...prevState, value];
    });
  };

  return (
    <StyledListItem>
      <input
        type='checkbox'
        name={`${index}`}
        value={index}
        onChange={handleChange}
      />
      <div>{spanRender}</div>
    </StyledListItem>
  );
};

export default ListItem;
