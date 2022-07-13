import { useAppDispatch, useAppSelector } from "../../store/store";
import { Button } from "../button/Button";

interface PagianationItemProps {
  isCurrent?: boolean;
  numberPage: number;
  onChangePage: (page: number) => void;
}
export function PaginationItem({
  isCurrent,
  numberPage,
  onChangePage,
}: PagianationItemProps) {
  const dispatch = useAppDispatch();
  if (isCurrent) {
    return <Button  current="#f28f16">{numberPage}</Button>;
  }

  return (
    <Button onClick={() => dispatch(onChangePage(numberPage))}>
      {numberPage}
    </Button>
  );
}
