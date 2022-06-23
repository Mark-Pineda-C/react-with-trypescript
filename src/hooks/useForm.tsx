import { ChangeEvent, useState } from "react";

//export function useForm<T>(initState: T) {
export const useForm = <T extends Object>(initState: T) => {
    const [form, setFrom] = useState(initState)

    const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = target;
        setFrom({
            ...form,
            [ name ]: value
        })
    }

    return{
        form,
        handleChange
    }
}