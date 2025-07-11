import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface PaginationCompProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function PaginationComp({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationCompProps) {
  return (
    <Pagination>
      <PaginationContent className="w-full flex items-center justify-between">
        <PaginationPrevious
          href="#"
          onClick={(e) => {
            e.preventDefault();
            if (currentPage > 1) onPageChange(currentPage - 1);
          }}
          aria-disabled={currentPage === 1}
          className="justify-items-start"
        />
        <div className="flex items-center justify-center space-x-2">
          {[...Array(totalPages)].map((_, idx) => (
            <PaginationItem key={idx}>
              <PaginationLink
                isActive={currentPage === idx + 1}
                onClick={(e) => {
                  e.preventDefault();
                  onPageChange(idx + 1);
                }}
              >
                {idx + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
        </div>
        <PaginationNext
          href="#"
          onClick={(e) => {
            e.preventDefault();
            if (currentPage < totalPages) onPageChange(currentPage + 1);
          }}
          aria-disabled={currentPage === totalPages}
        />
      </PaginationContent>
    </Pagination>
  );
}