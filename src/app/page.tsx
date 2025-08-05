import ToDoList from "./components/templates/to-do-list";
import styles from "./page.module.css";

export default function Home() {
    
    return (
        <div className={styles.page}>
            <ToDoList />
        </div>
    );
}
