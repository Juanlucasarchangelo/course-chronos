import styles from './Heading.module.css';

// Tipagem dos danos a serem recebidos
type headingProps = {
    children: React.ReactNode;
}

export function Heading ({ children }: headingProps) {
    return <h1 className={`${styles.heading}`}>{children}</h1>
}