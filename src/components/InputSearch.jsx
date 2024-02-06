import React from 'react'
import styles from "../assets/styles/input.module.css"
export default function InputSearch() {
  return (
    <div>
        <input className={styles} type="text" placeholder='input currency here'  />
    </div>
  )
}
