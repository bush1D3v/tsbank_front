import {
  type ReactElement,
  useState,
  useEffect
} from "react";
import { Skeleton } from "./components";

interface ImageSkeletonLoaderProps {
  src: string;
  alt: string;
  loading: "lazy" | "eager";
  sessionStorageItem: string;
}

export default function ImageSkeletonLoader({
  src,
  alt,
  loading,
  sessionStorageItem
}: ImageSkeletonLoaderProps): ReactElement {
  const [ isSkeletonNotLoading, setIsSkeletonNotLoading ] = useState(false);
  const [ isImageLoading, setIsImageLoading ] = useState(false);

  const handleImageLoad = () => {
    setIsImageLoading(true);
  };

  useEffect(() => {
    const loading = sessionStorage.getItem(sessionStorageItem);

    if (loading !== null) {
      setIsSkeletonNotLoading(true);
    } else {
      const timeout = setTimeout(() => {
        setIsSkeletonNotLoading(true);
        sessionStorage.setItem(sessionStorageItem, "true");
      }, 500);

      return () => clearTimeout(timeout);
    }
  }, [ sessionStorageItem ]);

  return (
    <>
      {isSkeletonNotLoading ? (
        <>
          <img src={src} alt={alt} loading={loading} onLoad={handleImageLoad} data-testid="Image" />
          {isImageLoading ? null : <Skeleton />}
        </>
      ) : (
        <Skeleton />
      )}
    </>
  );
}
