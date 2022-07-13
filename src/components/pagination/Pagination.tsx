import { PaginationItem } from "./PagiantionItem";
import { Container } from "./styles";

interface PaginationProps {
  totalCount: number;
  registerPorPage?: number;
  currentPage?: number;
}

function generetedPageArray(from: number, to: number) {
  return [...new Array(to - from)]
    .map((_, index) => {
      return from + index + 1;
    })
    .filter((page) => page > 0);
}
const sibligsCount = 1;

export function Pagination({
  totalCount,
  currentPage = 1,
  registerPorPage = 10,
}: PaginationProps) {
  const lastPage = Math.ceil(totalCount / registerPorPage);

  const previousPage =
    currentPage > 1
      ? generetedPageArray(currentPage - 1 - sibligsCount, currentPage - 1)
      : [];

  const nextPage =
    currentPage < lastPage
      ? generetedPageArray(
          currentPage,
          Math.min(currentPage + sibligsCount, lastPage)
        )
      : [];

  return (
    <Container>
      {currentPage > 1 + sibligsCount && <PaginationItem numberPage={1} />}
      {previousPage.length > 0 &&
        previousPage.map((page) => {
          return <PaginationItem key={page} numberPage={page} />;
        })}
      <PaginationItem numberPage={currentPage} isCurrent />
      {nextPage.length > 0 &&
        nextPage.map((page) => {
          return <PaginationItem numberPage={page} key={page} />;
        })}
      {currentPage + sibligsCount < lastPage && (
        <PaginationItem numberPage={lastPage} />
      )}
    </Container>
  );
}
