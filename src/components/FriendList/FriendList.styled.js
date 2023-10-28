import styled from 'styled-components';

export const List = styled.ul`
  margin: 30px auto;
  width: 250px;
  border: 1px solid black;
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const ListItem = styled.li`
  display: flex;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  justify-content: center;
  align-items: center;
  padding: 5px;
  gap: 25px;
  border-radius: 15px;
  background-color: #f1f1f1;
`;

export const Avatar = styled.img`
  width: 50px;
  border-radius: 15px;
`;

export const Status = styled.span`
  width: 20px;
  height: 20px;
  background-color: ${props => {
    return props.$isOnline ? 'green' : 'red';
  }};
  border-radius: 100%;
`;
