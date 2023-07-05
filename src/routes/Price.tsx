import { styled } from 'styled-components';

const PriceWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 2rem;
`;

const PriceDetail = styled.div`
  /* border-radius: 10px; */
  border-radius: 0.5rem;
  border: 2px solid #ff9eaa;
  padding: 0.25rem;
  width: 45%;
  display: flex;
  justify-content: center;
  text-align: center;
  line-height: 1.5rem;
`;

interface PriceData {
  percent30m: number | undefined;
  percent1h: number | undefined;
  percent12h: number | undefined;
  percent7d: number | undefined;
  percent30d: number | undefined;
  percent1y: number | undefined;
}

function Price({
  percent30m,
  percent1h,
  percent12h,
  percent7d,
  percent30d,
  percent1y,
}: PriceData) {
  return (
    <PriceWrapper>
      <PriceDetail>
        30 Minutes Ago
        <br />
        {percent30m}%
      </PriceDetail>
      <PriceDetail>
        1 Hours Ago
        <br />
        {percent1h}%
      </PriceDetail>
      <PriceDetail>
        12 Hours Ago
        <br />
        {percent12h}%
      </PriceDetail>
      <PriceDetail>
        7 Days Ago
        <br />
        {percent7d}%
      </PriceDetail>
      <PriceDetail>
        30 days Ago
        <br />
        {percent30d}%
      </PriceDetail>
      <PriceDetail>
        1 Years Ago
        <br />
        {percent1y}%
      </PriceDetail>
    </PriceWrapper>
  );
}
export default Price;
