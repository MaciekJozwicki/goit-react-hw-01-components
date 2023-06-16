import React from 'react';
import PropTypes from 'prop-types';
import styles from './Transactions.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.transactionHistory}>
      <thead>
        <tr className={styles.tableHead}>
          <th className={styles.tableHeadItem}>Type</th>
          <th className={styles.tableHeadItem}>Amount</th>
          <th className={styles.tableHeadItem}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <Transaction key={item.id} item={item} />
        ))}
      </tbody>
    </table>
  );
};

const Transaction = ({ item }) => {
  return (
    <tr className={styles.tableRow}>
      <td className={styles.tableItem}>{item.type}</td>
      <td className={styles.tableItem}>{item.amount}</td>
      <td className={styles.tableItem}>{item.currency}</td>
    </tr>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
