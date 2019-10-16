import React, { useState } from 'react'
import { useUpload } from '../../graphql/handlers/fileHandling';

export default function IndivPrositForm(props) {

    const Upload = useUpload();
    // eslint-disable-next-line
    const [form, setValues] = useState({
        file: '',
        nomProsit: props.nomProsit,
        unite: props.unite,
        prositId: props.prositId
    });

    const updateFile = e => (e.target.validity.valid) && setValues({ ...form, file: e.target.files[0] });

    return (
        <div>
            <form action="">
                <input
                    type="file"
                    required
                    onChange={event => updateFile(event)} />

                <input onClick={event => { event.preventDefault(event); Upload({ file: form.file, title: form.file.name, nomProsit: form.nomProsit, unite: form.unite, prositId: form.prositId }) }} type="submit" value={`${form.file.name}`} />

            </form>
        </div>
    )
}
