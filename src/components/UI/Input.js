import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} />
      {/* Con el spread operator configuro dinamicamente el input, por ejemplo si quiero incluir un id y un type */}
    </div>
  );
};

export default Input;
