import { TimerIcon } from 'lucide-react';
import styles from './styles.module.css';

export function Logo () {
    return <h1 className={`${styles.logo}`}>
        <a className={styles.logoLink} href="#" target="_blank" rel="noopener noreferrer">
            <TimerIcon />
            <span>Chronos</span>
        </a>
        </h1>
}