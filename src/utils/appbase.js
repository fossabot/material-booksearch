import AppbaseJs from 'appbase-js';
import { esApp } from '@/constants';


const appbaseRef = AppbaseJs({
  url: esApp.url,
  app: esApp.app,
  credentials: esApp.credentials,
});

export const TYPE = esApp.type;

export default appbaseRef;
