import '@testing-library/jest-dom';
import nodeFetch from 'node-fetch';

global.IS_REACT_ACT_ENVIRONMENT = true;
global.fetch = nodeFetch;
global.Headers = nodeFetch.Headers;
global.Request = nodeFetch.Request;
