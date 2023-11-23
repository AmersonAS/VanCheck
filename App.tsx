import Routes from './src/routes';
import { TripProvider } from './src/config/Trip';

export default function App() {
  return (
    <TripProvider>
      <Routes />
    </TripProvider>
  );
}
