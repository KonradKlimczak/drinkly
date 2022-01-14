import axios from 'axios';

import { User } from 'types';

export const getUser = () => axios.get<User>('/user');
