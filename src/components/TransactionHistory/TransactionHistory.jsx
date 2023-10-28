import { Headers, Table } from './TransactionHistory.styled';

const TransactionHistory = ({ transactions }) => {
  return (
    <Table>
      <thead>
        <tr>
          <Headers>Type</Headers>
          <Headers>Amount</Headers>
          <Headers>Currency</Headers>
        </tr>
      </thead>
      <tbody>
        {transactions.map(item => {
          return (
            <tr key={item.id}>
              <td>{item.type}</td>
              <td>{item.amount}</td>
              <td>{item.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default TransactionHistory;
