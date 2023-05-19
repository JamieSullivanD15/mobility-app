import { useEffect, useState } from 'react';

const useSupplierImage = (supplier: string) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [image, setImage] = useState('');

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await import(`../assets/img/supplier-${supplier}.svg`);
        setImage(response.default);
      } catch (err: any) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    void fetchImage();
  }, [supplier]);

  return {
    isLoading,
    error,
    image,
  };
};

export default useSupplierImage;
