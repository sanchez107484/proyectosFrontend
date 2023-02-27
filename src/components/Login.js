import { useState } from 'react';
import { Form, Button, Container, Card } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import authService from '../services/AuthService';


const Login = (props) => {
  const [error, setError] = useState('');

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: Yup.object({
      username: Yup.string().required('El nombre de usuario es requerido'),
      password: Yup.string().required('La contraseña es requerida'),
    }),
    onSubmit: async (values) => {
      try {
        authService.login(values)
        .then(response => {
          if (response?.token){
            localStorage.setItem('token', response.token);
            props.onLogin();
          }else{
            setError('Nombre de usuario o contraseña incorrectos');  
          }
        });
      } catch (err) {
        console.log(err);
        setError('Nombre de usuario o contraseña incorrectos');
      }
    },
  });

  return (
    <Container>
    <div className="d-flex justify-content-center align-items-center h-100"
    style={{display: 'flex',justifyContent: 'center', alignItems: 'center'}}>
    <Card style={{ width: '20rem',}}>
      <Card.Body>
          <Card.Title>Arquitectura Azagra</Card.Title>
          <Form onSubmit={formik.handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Nombre de usuario</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa tu nombre de usuario"
                {...formik.getFieldProps('username')}
              />
              {formik.touched.username && formik.errors.username ? (
                <Form.Text className="text-danger">{formik.errors.username}</Form.Text>
              ) : null}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Ingresa tu contraseña"
                {...formik.getFieldProps('password')}
              />
              {formik.touched.password && formik.errors.password ? (
                <Form.Text className="text-danger">{formik.errors.password}</Form.Text>
              ) : null}
            </Form.Group>

            {error && <Form.Text className="text-danger">{error}</Form.Text>}

            <Button variant="primary" type="submit">
              Iniciar sesión
            </Button>
          </Form>
          </Card.Body>
      </Card>
    </div>
    </Container>
    
  );
};

export default Login;
