import { useEffect, useState } from 'react';

const useSupplierImage = (supplier: string) => {
  const [loading, setLoading] = useState(true);
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
        setLoading(false);
      }
    };

    void fetchImage();
  }, [supplier]);

  return {
    loading,
    error,
    image,
  };
};

export default useSupplierImage;
