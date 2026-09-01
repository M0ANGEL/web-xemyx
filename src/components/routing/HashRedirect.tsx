import { Navigate } from 'react-router-dom';

type HashRedirectProps = {
  to: string;
};

export function HashRedirect({ to }: HashRedirectProps) {
  return <Navigate to={`/#${to}`} replace />;
}
