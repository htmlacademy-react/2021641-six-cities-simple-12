import SixCities from '../../pages/six-cities/six-cities';

type AppSitiesProps = {
  offerCount: number;
}

function App({offerCount}: AppSitiesProps): JSX.Element {
  return (
    <SixCities offerCount={offerCount} />
  );
}

export default App;
