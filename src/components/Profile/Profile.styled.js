import styled from 'styled-components';

export const UserProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  height: 370px;
  margin: 10px auto 0 auto;
  border: 1px solid black;
  border-radius: 10px;
`;

export const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 100%;
  margin-top: 15px;
`;

export const UserName = styled.p`
  margin-top: 30px;
  font-size: 24px;
  font-weight: 900;
`;

export const InfoList = styled.ul`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const InfoItem = styled.li`
  flex-basis: calc(100% / 3);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
  height: 45px;
  border: 1px solid black;
`;
