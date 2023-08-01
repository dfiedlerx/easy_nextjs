import React, { FC, ReactElement } from 'react'

import styles from './Lazy.module.css'

// eslint-disable-next-line prettier/prettier
interface LazyProps { }

const Lazy: FC<LazyProps> = (): ReactElement => (
  <div className={styles.Lazy} data-testid="Lazy">
    Lazy Component
  </div>
)

export default Lazy
