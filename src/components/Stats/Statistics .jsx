import {
  StatisticsItem,
  StatisticsList,
  StatisticsWrapper,
} from './Statistics .styled';

const Statistics = ({ title = 'Upload stats', data }) => {
  return (
    <StatisticsWrapper>
      <h2>{title}</h2>
      <StatisticsList>
        {data.map(item => {
          return (
            <StatisticsItem $lengthList={data.length} key={item.id}>
              <span>{item.label}</span>
              <span>{item.percentage}%</span>
            </StatisticsItem>
          );
        })}
      </StatisticsList>
    </StatisticsWrapper>
  );
};

export default Statistics;
