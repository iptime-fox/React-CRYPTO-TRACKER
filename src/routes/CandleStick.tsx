import { useQuery } from 'react-query';
import { fetchCoinHistory } from '../api';
import ApexChart from 'react-apexcharts';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { isDarkAtom } from '../atom';

interface ChartProps {
  coinId: string;
}

interface IHistorical {
  time_open: number;
  time_close: number;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
  market_cap: number;
}

function CandleStick({ coinId }: ChartProps) {
  const isDark = useRecoilValue(isDarkAtom);
  const { isLoading, data } = useQuery<IHistorical[]>(['history', coinId], () =>
    fetchCoinHistory(coinId)
  );
  const exceptData = data ?? [];
  let chartData = exceptData?.map((i) => {
    return {
      x: i.time_close,
      y: [i.open, i.high, i.low, i.close],
    };
  });

  return (
    <div>
      {isLoading ? (
        'Loading Chart...'
      ) : chartData ? (
        <ApexChart
          type='candlestick'
          series={[{ data: chartData }]}
          options={{
            theme: {
              mode: isDark ? 'dark' : 'light',
            },
            chart: {
              height: 500,
              width: 500,
              background: 'transparent',
              toolbar: { show: false },
            },
            tooltip: {
              y: {
                formatter: (value) =>
                  `${Number(value.toFixed(2)).toLocaleString()}`,
              },
            },
            grid: {
              show: false,
            },
            xaxis: {
              labels: {
                show: false,
              },
              type: 'datetime',
              axisBorder: { show: false },
              axisTicks: { show: false },
            },
            yaxis: {
              labels: {
                show: false,
              },
              tooltip: {
                enabled: true,
              },
            },
          }}
        />
      ) : (
        'Price data not found'
      )}
    </div>
  );
}

export default CandleStick;
