import { useForm } from "../hooks/useForm"

interface formData {
    email: string;
    name: string;
}

export const Form = () => {

    const {form, handleChange} = useForm<formData>({
        email: 'mark@gmail.com',
        name: 'mark pineda'
    });

    // const [form, setFrom] = useState({
    //     email: '',
    //     name: ''
    // })

    // const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    //     const { name, value } = target;
    //     setFrom({
    //         ...form,
    //         [ name ]: value
    //     })
    // }

  return (
    <form autoComplete="off">
        <div className="mb-3">
            <label htmlFor="email" className="form-label">Email:</label>
            <input type="email" 
                name="email" 
                id="email" 
                className="form-control"
                value={ form.email }
                onChange={handleChange}
            />
        </div>
        <div className="mb-3">
            <label htmlFor="name" className="form-label">Name:</label>
            <input 
                type="text" 
                name="name" 
                id="name" 
                className="form-control"
                value={ form.name }
                onChange={handleChange}
            />
        </div>
        <pre>{ JSON.stringify(form) }</pre>
    </form>
  )
}
