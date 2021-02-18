import { useEffect } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

const Scroll: React.FC<RouteComponentProps> = ({ location }) => {
  useEffect(() => {
    const element = document.getElementById(location.hash.replace('#', ''));
    setTimeout(() => {
      window.scrollTo({
        behavior: element ? 'smooth' : 'auto',
        top: element ? element.offsetTop : 0,
      });
    }, 100);
  }, [location]);

  return null;
};

export default withRouter(Scroll);
