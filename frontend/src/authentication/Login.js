import { useState, useEffect, useRef } from 'react';

const Login = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('')
    }, [user, pwd])


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user, pwd);
        setUser('');
        setPwd('');
        setSuccess(true);
    }

    return (
        <>
            {success ? (<section>
                <h1>You are logged in</h1>
                <br />
                <p>
                    <a href='/home'>
                        <button>Home</button>
                    </a>
                </p>
            </section>) : (<section>
                <p ref={errRef} className={errMsg ? "errMsg" :
                    "offscreen"} aria-live="assertive">{errMsg}</p>
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">Username:</label>
                    <input
                        type='text'
                        id='username'
                        ref={userRef}
                        autoComplete='off'
                        onChange={(event) => setUser(event.target.value)}
                        value={user}
                        required
                    />
                    <label htmlFor="password">Password:</label>
                    <input
                        type='password'
                        id='password'
                        onChange={(event) => setPwd(event.target.value)}
                        value={pwd}
                        required
                    />

                    <button>Sign in</button>
                </form>


            </section>
            )}
        </>
    )
}


export default Login