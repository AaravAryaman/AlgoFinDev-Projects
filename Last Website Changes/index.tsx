import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Home from '../layouts/home';
import { useSelector } from 'react-redux';
import { RootState } from '../stores/reducers';
import { useTranslation } from 'react-i18next';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import FormHelperText from '@mui/joy/FormHelperText';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import LoginIcon from '@mui/icons-material/Login';
import Typography from '@mui/joy/Typography';
import { app } from '../firebase-config';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";


export default function HomePage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [entryType, setEntryType] = useState(['Login', 'SignUp']);
    const navigate = useNavigate();
    const handleSubmit = (event:any) => {
        event.preventDefault();
        const authentication = getAuth(app);
        if (entryType[0] === 'Login') {
            signInWithEmailAndPassword(authentication, email, password).then((response:any) => {
                console.log(response)
                navigate('/dashboard')
                localStorage.setItem('AuthToken', response._tokenResponse.refreshToken)
            })
        } else if (entryType[0] === 'SignUp') {
            createUserWithEmailAndPassword(authentication, email, password).then((response:any) => {
                console.log(response)
                localStorage.setItem('AuthToken', response._tokenResponse.refreshToken)
                setEntryType([entryType[1], entryType[0]])
            })
        }
    }

    return (
    <Home>
        <div className="flex justify-center w-full h-full text-slate-600 dark:text-slate-50">
            <div className="flex flex-col items-center py-16" >
                <form type="submit"  onSubmit={handleSubmit}>
                    <FormControl
                    size="lg"
                    color="neutral">
                        <FormLabel>
                            Email
                        </FormLabel>
                        <Input
                            placeholder="example@domain.com"
                            type="email"
                            fullWidth
                            variant="outlined" 
                            onChange={(event) => setEmail(event.target.value)}
                            />
                    </FormControl>
                    <FormControl
                    size="lg"
                    color="neutral">
                        <FormLabel sx={{marginTop: '0.5rem'}}>
                            Password
                        </FormLabel>
                        <Input 
                                placeholder="********"
                                type="password"
                                fullWidth
                                variant="outlined"
                                onChange={(event) => setPassword(event.target.value)}
                            />
                        <Button
                        type="submit"
                        sx={{marginTop: '1rem'}}
                        >
                            <LoginIcon sx={{marginRight: '1rem'}}/>
                            <Typography 
                            level="h5" 
                            fontWeight="bold"
                            color="white"
                            > 
                                {entryType[0]} 
                            </Typography>
                        </Button>
                        <Button
                        sx={{marginTop: '1rem'}}
                        variant = "outlined"
                        onClick={() => setEntryType([entryType[1], entryType[0]])}
                        >
                            click here to {entryType[1]}.
                        </Button>
                    </FormControl>

                </form>
            </div>

        </div>
    </Home>
    );
}

