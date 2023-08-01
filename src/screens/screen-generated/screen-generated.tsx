import React, { FC } from 'react'

import styles from './screen-generated.module.css'

// eslint-disable-next-line prettier/prettier
interface ScreenGeneratedProps { }

const ScreenGenerated: FC<ScreenGeneratedProps> = () => (
  <div className={styles.ScreenGenerated} data-testid="ScreenGenerated">
    ScreenGenerated Component
  </div>
)

export default ScreenGenerated
