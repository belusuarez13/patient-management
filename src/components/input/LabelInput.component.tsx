import styles from './label-input.module.scss';

export const TEXTAREA_TYPE = "textarea";

interface LabelInputProps {
  label: string;
  value: string;
  name: string;
  type: string;
  onValueChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export const LabelInput = ({ label, value, type, name, onValueChange }: LabelInputProps) => {
  return (
    <label className={styles['input-label']}>
      {label}
      {type === TEXTAREA_TYPE ? (
        <textarea
          name={name}
          className={styles['input']}
          value={value}
          rows={10}
          onChange={onValueChange}
          required
          /> 
      ) : (
        <input
          type={type}
          className={styles['input']}
          name={name}
          value={value}
          onChange={onValueChange}
          required
        />
      )}           
    </label>
);
};
