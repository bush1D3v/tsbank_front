import { type ReactElement } from "react";

interface LoadMoreButtonProps {
  loading: boolean;
  onclick: () => void;
}

export default function LoadMoreButton({ loading, onclick: onClick }: LoadMoreButtonProps): ReactElement {
  return (
    <button className="bg-darkBlue hover:bg-saturatedBlue text-whiteBlue mt-4 rounded-xl p-2 md:p-3 lg:p-4
      md:text-xl lg:text-2xl cursor-pointer transition-all delay-75 ease-in-out border-2 border-saturatedBlue"
      data-testid="LoadMoreButton"
      onClick={onClick}
    >
      {loading ? "Loading..." : "Load More"}
    </button>
  );
}
