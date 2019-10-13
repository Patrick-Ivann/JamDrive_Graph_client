import React, { useState } from 'react'
import { useUpload } from '../../graphql/handlers/fileHandling';

export default function PrositFormIndex(props) {

    const Upload = useUpload();
    // eslint-disable-next-line
    const [form, setValues] = useState({
        file: '',
        nomProsit: "",
        unite: "",
        motsClef: ""
    });

    const updateField = e => {
        setValues({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleChangeFile = (event) => {
        const {
            target: {
                validity,
                files: [file],
            }
        } = event;

        if (validity.valid) {
            return {
                file: file
            }
        }
    };
    const updateFile = e => (e.target.validity.valid) && setValues({ ...form, file: e.target.files[0] });

    return (
        <div>
            <form action="">


                <input type="text" required onChange={updateField} placeholder="nom du Prosit" name='nomProsit' value={form.nomProsit} />
                <input type="text" required onChange={updateField} placeholder="unite du prosit" name='unite' value={form.unite} />
                <input type="text" required onChange={updateField} placeholder="liste des mots clef à separer par des virgules" name='motsClef' value={form.motsClef} />
                <input
                    type="file"
                    required
                    onChange={event => updateFile(event)} />

                <input onClick={event => { event.preventDefault(event); Upload({ file: form.file, title: form.file.name, nomProsit: form.nomProsit, unite: form.unite, motsClef: form.motsClef }) }} type="submit" value={`${form.file.name}`} />

            </form>
        </div>
    )
}
