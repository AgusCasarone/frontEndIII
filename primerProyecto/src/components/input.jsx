export const Input = ({ forHtml, text, type, name, onChange }) => {
    return (
      <label htmlFor={ forHtml }>
        { text }
        <input
          type={ type }
          name={ name }
          id={ name }
          className="border-2"
          onChange={ onChange }
        />
      </label>
    );
  };