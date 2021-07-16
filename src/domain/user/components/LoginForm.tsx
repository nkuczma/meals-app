import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { Button, Card, Form, Alert } from 'react-bootstrap';
import { login } from '../api/userApi';

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if(email && password) {
      try {
        setError("")
        setLoading(true)
        await login(email, password);
        history.push("/");
        
      } catch {
        setError("Failed to log in");

      }
      setLoading(false);
    }
  }

  return (
      <Card className="p-5" style={{ minWidth: "350px" }}>
        <div>
          <h2 className="text-center">Log in </h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
              <Form.Label htmlFor="email">Email</Form.Label>
              <Form.Control id="email" type="email" required onChange={e => setEmail(e.target.value)}></Form.Control>
              <Form.Label htmlFor="password">Password</Form.Label>
              <Form.Control id="password" type="password" required onChange={e => setPassword(e.target.value)}></Form.Control>
              <Button disabled={loading} type="submit" color="primary" className="mt-3">Login</Button>
          </Form>
        </div>

        <div className="mt-3">
          Need to create an account? <Link to="/signup">Sign up</Link>
        </div>
      </Card>
  )
}
