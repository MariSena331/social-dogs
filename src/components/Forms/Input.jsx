import styles from "./Input.module.css";

const Input = ({ label, type, name }) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        className={styles.input}
        onChange={({ target }) => setUsername(target.value)}
      />
      <p className={styles.error}>Error</p>
    </div>
  );
};

export default Input;
