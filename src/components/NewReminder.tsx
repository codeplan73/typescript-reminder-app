import React, {useState} from 'react';

interface NewReminderProps {
    onAddReminder: (title:string) => void;
}

function NewReminder({onAddReminder}: NewReminderProps): JSX.Element{
    const [title, setTitle] = useState('')

    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault();
        if(!title) return;
        onAddReminder(title)
        setTitle('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="title"></label>
            <input type="text" value={title} onChange={e => setTitle(e.target.value)} id="title" className="form-control"/>
            <button type='submit' className="btn btn-primary rounded-pill my-3">Add Reminder</button>
        </form>
    );
}

export default NewReminder;