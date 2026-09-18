import styles from './styles.module.css';

export function WhatsButton() {
    return <h1 className={`${styles.whatsapp}`}>
        <a href="http://www.archania.com.br" target="_blank" rel="noopener noreferrer">
            <img src="./src/assets/whatsapp.png" alt="Whatsapp" width="70" height="70" />
        </a>
    </h1>
}