import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './HeaderLink.module.scss'

export default function HeaderLink({to, children}) {
  return (
      <NavLink
        className={
          ({ isActive }) => {
            return isActive ? `${styles.linkDestacado} ${styles.link}` : `${styles.link}`
          }
        }
        to={to}
        end
      >
        {children}
      </NavLink>
    )
}
