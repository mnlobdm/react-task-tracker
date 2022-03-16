import { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault()

    if (!text) {
      alert("Voeg een taak toe")
      return
    }

    onAdd({ text, day, reminder })

    setText("")
    setDay("")
    setReminder(false)
  }

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Taak</label>
        <input
          type="text"
          placeholder="Taak toevoegen"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Datum en tijd</label>
        <input
          type="text"
          placeholder="Datum en tijd"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className="form-control form-control-check">
        <label>Herinnering?</label>
        <input
          type="checkbox"
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>

      <input type="submit" value="Taak opslaan" className="btn btn-block" />
    </form>
  );
};

export default AddTask;
