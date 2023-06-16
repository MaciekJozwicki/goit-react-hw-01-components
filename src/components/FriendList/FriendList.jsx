import React from "react";
import PropTypes from "prop-types";
import styles from "./FriendList.module.css";

const FriendListItem = ({ friend }) => {
  return (
    <li key={friend.id} className={styles.item}>
      <span
        className={
          styles.status +
          " " +
          (friend.isOnline ? styles.online : styles.offline)
        }></span>
      <img
        className={styles.avatar}
        src={friend.avatar}
        alt={friend.name}
        width='48'
      />
      <p className={styles.name}>{friend.name}</p>
    </li>
  );
};

export const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friendList}>
      {friends.map(friend => (
        <FriendListItem key={friend.id} friend={friend} />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
