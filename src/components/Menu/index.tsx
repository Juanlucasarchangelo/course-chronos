import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './styles.module.css';

export function Menu () {
    return <h1 className={`${styles.menu}`}>
        <a className={styles.menuLink} href="#" target="_blank" rel="noopener noreferrer">
            <HouseIcon />
        </a>
        <a className={styles.menuLink} href="#" target="_blank" rel="noopener noreferrer">
            <HistoryIcon />
        </a>        <a className={styles.menuLink} href="#" target="_blank" rel="noopener noreferrer">
            <SettingsIcon />
        </a>        <a className={styles.menuLink} href="#" target="_blank" rel="noopener noreferrer">
            <SunIcon />
        </a>
        </h1>
}