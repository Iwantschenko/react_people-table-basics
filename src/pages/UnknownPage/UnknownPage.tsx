import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const UnknowPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('..');
    }, 1000);
  });

  return (
    <div className="container">
      <h1 className="title">Page not found</h1>
    </div>
  );
};
