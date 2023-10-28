import styled from 'styled-components';

export const StatisticsWrapper = styled.section`
  width: 450px;
  border: 1px solid black;
  margin: 30px auto;
  text-align: center;
`;

export const StatisticsList = styled.ul`
  display: flex;
  margin-top: 50px;
`;

export const StatisticsItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  flex-basis: ${props => {
    return `${100 / props.$lengthList}%`;
  }};
  border: 1px solid black;
`;
