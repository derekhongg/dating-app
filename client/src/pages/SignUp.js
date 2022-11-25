import {React, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie'

function SignUp() {
    const [cookies, setCookies, removeCookies] = useCookies(null);
    const [form, setForm] = useState({
        user_id: cookies.UserId,
        first_name: "",
        dob_day: "",
        dob_month: "",
        dob_year: "",
        show_gender: false,
        gender_identity: "man",
        gender_interest: "woman",
        url: "",
        about: "",
        matches: []
    })

    const navigate = useNavigate();
    return (
        <div>Home</div>
    )
}

export default SignUp