import { App } from "https://deno.land/x/attain/mod.ts";
import routes from './routes.ts';

const app = new App();

app.use('/api/v1', routes);
  
app.listen({ port: 3500 });
  
console.log("http://localhost:3500");