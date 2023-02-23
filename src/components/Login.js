import { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const Login = ({ setLoggedIn }) => {
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
        const response = await axios.post('/login', values);
        localStorage.setItem('token', response.data.token);
        setLoggedIn(true);
      } catch (err) {
        setError('Nombre de usuario o contraseña incorrectos');
      }
    },
  });

  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col md={6}>
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
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
