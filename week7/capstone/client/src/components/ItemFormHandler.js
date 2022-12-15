import {useState} from 'react'


function ItemFormHandler({ submit, btnText, name, gender,url}){
    const initialInputs = { "Name/Alias": name || '', gender: gender || ''};
    const [inputs, setInputs] = useState(initialInputs);

    const handleChange = (e) => {
        const {name, value } = e.target;
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        submit(inputs,url);
        setInputs(initialInputs);

        

        setInputs(initialInputs);
    }

    return(
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                name='Name/Alias'
                value={inputs["Name/Alias"]}
                onChange={handleChange}
                placeholder='Name' />
             <input
                type='text'
                name='gender'
                value={inputs.gender}
                onChange={handleChange}
                placeholder='gender' />
                <button>Add Avenger</button>

        </form>
    )
}
export default ItemFormHandler;