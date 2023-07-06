import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { fetchCoins } from '../api';
import { Helmet } from 'react-helmet';
import { useSetRecoilState } from 'recoil';
import { isDarkAtom } from '../atom';

const Container = styled.div`
  padding: 0px 20px;
  max-width: 400px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CoinsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  column-gap: 13px;
  row-gap: 13px;
`;

const Coin = styled.li`
  width: 100px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  transition: color 0.3s ease-in;
  border-radius: 15px;
  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    transition: color 0.2s ease-in;
    text-align: center;
    color: #2f3640;
  }
  &:hover {
    a {
      color: ${(props) => props.theme.textColor};
      font-weight: 600;
    }
    background-color: ${(props) => props.theme.accentColor};
  }
`;

const Btn = styled.button`
  width: 20px;
  height: 20px;
  font-size: 20px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 1.5rem;
  right: 1.5rem;
  padding: 1rem;
  border-radius: 50%;
  border: none;
  background-color: ${(props) => props.theme.textColor};
`;

const Title = styled.h1`
  font-size: 36px;
  color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.span`
  text-align: center;
  display: block;
`;

const Img = styled.img`
  width: 35px;
  height: 35px;
  margin-bottom: 1rem;
`;

interface ICoin {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

function Coins() {
  const isDark = useSetRecoilState(isDarkAtom);
  const toggleDark = () => isDark((prev) => !prev);
  const { isLoading, data } = useQuery<ICoin[]>('allCoins', fetchCoins);
  return (
    <>
      <Container>
        <Helmet>
          <title>Coin</title>
        </Helmet>

        <Btn onClick={toggleDark}>🌙</Btn>
        <Header>
          <Title>Coin</Title>
        </Header>
        {isLoading ? (
          <Loader>'Loading...'</Loader>
        ) : (
          <CoinsList>
            {data?.slice(0, 100).map((coin) => (
              <Coin key={coin.id}>
                <Link
                  to={{
                    pathname: `/${coin.id}`,
                    state: { name: coin.name },
                  }}>
                  <Img
                    src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}
                  />
                  {coin.name}
                </Link>
              </Coin>
            ))}
          </CoinsList>
        )}
      </Container>
    </>
  );
}
export default Coins;
