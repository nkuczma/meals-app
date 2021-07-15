import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { Button, Card, Form, Alert } from 'react-bootstrap';
import { signup } from '../api/userApi';

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if(email && password && passwordConfirm) {
      if(password !== passwordConfirm) {
        return setError("Passwords do not match")
      }
      try {
        setError("");
        setLoading(true);
        await signup(email, password);
        history.push("/");
      }
      catch {
        console.log('errr');
        setError("Failed to create an account")
      }
      setLoading(false);
    }
  }

  return (
    <div className="d-flex align-items-center justify-content-center" style={{ paddingTop: "50px" }}>
      <Card className="p-5" style={{ minWidth: "350px" }}>
        <div>
          <h2 className="text-center">Sign up</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Label htmlFor="email">Email</Form.Label>
            <Form.Control id="email" type="email" required onChange={e => setEmail(e.target.value)}></Form.Control>

            <Form.Label htmlFor="password">Password</Form.Label>
            <Form.Control id="password" type="password" required onChange={e => setPassword(e.target.value)}></Form.Control>

            <Form.Label htmlFor="passwordConfirm">Password confirm</Form.Label>
            <Form.Control id="passwordConfirm" type="password" required onChange={e => setPasswordConfirm(e.target.value)}></Form.Control>

            <Button disabled={loading} type="submit" className="mt-3">Sign Up</Button>
          </Form>
        </div>

        <div className="mt-3">
          Already have account? <Link to="/login">Login</Link>
        </div>
      </Card>
    </div>
  )
}
