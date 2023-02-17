import { calculadoras } from '../../data/calculadoras';
import Form from '../pages/form/Form';

export const calculadorasRoutes = calculadoras.map((calculadora) => ({
  path: `/calculadoras/${calculadora.path}`,
  element: <Form />
}));
