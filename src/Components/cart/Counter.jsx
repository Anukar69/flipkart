import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, selectCount } from "./counterSlice";
import styles from "./Counter.module.css";

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  const incrementdecrement = ({ action }) => {
    if (action == "increment") {
      dispatch(increment());
    }
    if (action == "decrement" && count >= 2) {
      dispatch(decrement());
    }
  };

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => incrementdecrement({ action: "decrement" })}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => incrementdecrement({ action: "increment" })}
        >
          +
        </button>
      </div>
    </div>
  );
}
