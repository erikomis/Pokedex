import { getPokedex } from "../../store/modules/pokedex";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { Button } from "../button/Button";

interface PagianationItemProps {
  isCurrent?: boolean;
  numberPage: number;
}
export function PaginationItem({
  isCurrent,
  numberPage,
 
}: PagianationItemProps) {

  function Page() {
    dispatch(getPokedex(numberPage));
  ;
}
  const dispatch = useAppDispatch();
  if (isCurrent) {
    return <Button  current="#f28f16">{numberPage}</Button>;
  }

  return (
    <Button onClick={() => Page()}>
      {numberPage}
    </Button>
  );
}
