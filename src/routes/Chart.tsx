import { useQuery } from 'react-query';
import { fetchCoinHistory } from '../api';
import ApexChart from 'react-apexcharts';
import styled from 'styled-components';
import CandleStick from './CandleStick';

const ChartWrapper = styled.div``;

interface ChartProps {
  coinId: string;
}

interface IHistorical {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}

function Chart({ coinId }: ChartProps) {
  const { isLoading, data } = useQuery<IHistorical[]>(['ohlcv', coinId], () =>
    fetchCoinHistory(coinId)
  );
  return (
    <div>
      {isLoading ? (
        'Loading chart...'
      ) : (
        <ChartWrapper>
          <CandleStick coinId={coinId} />
          <ApexChart
            type='line'
            series={[
              {
                name: 'Price',
                data: data?.map((price) => Number(price.close)) as number[],
              },
            ]}
            options={{
              theme: {
                mode: 'dark',
              },
              chart: {
                height: 500,
                width: 500,
                background: 'transparent',
                toolbar: {
                  show: false,
                },
              },
              grid: {
                show: false,
              },
              stroke: {
                curve: 'smooth',
                width: 4,
              },
              yaxis: {
                show: false,
              },
              xaxis: {
                type: 'datetime',
                labels: {
                  show: false,
                  datetimeFormatter: { month: "MMM 'yy", day: 'dd MMM' },
                },
                axisTicks: { show: false },
                axisBorder: { show: false },
                categories: data?.map((price) =>
                  new Date(price.time_close).toUTCString()
                ),
              },
              fill: {
                type: 'gradient',
                gradient: { gradientToColors: ['#FF9EAA'], stops: [0, 100] },
              },
              colors: ['#4FC0D0'],
              tooltip: {
                y: {
                  formatter: (value) => `${value.toFixed(3)}`,
                },
              },
            }}
          />
        </ChartWrapper>
      )}
    </div>
  );
}
export default Chart;
