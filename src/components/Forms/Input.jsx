import styles from "./Input.module.css";

const Input = ({ label, type, name }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        className={styles.input}
        onChange={({ target }) => setUsername(target.value)}
      />
      {/* <input
        type="text"
        value={username}
         */}
      {/* /> */}
    </div>
  );
};

export default Input;
