import { SiteClient } from 'datocms-client'

export default async function recebedorDeRequests(request, response){
  if(request.method === 'POST'){
    const TOKEN = 'e4167b5bf00c99dbb230149d40a815';

    const client = new SiteClient(TOKEN);

    const registroCriado = await client.items.create({
      itemType: "971905",

      ...request.body,
      // title: "Comunidade de Teste",
      // imageUrl: "https://api.github.com/jmafort.png",
      // creatorSlug: "jmafort",
    });

    response.json({
      dados: 'Algum dado',
      registroCriado: registroCriado,
    });

    return;
  }
  response.status(404).json({
    message: 'Ainda não temos GET, mas temos POST.'
  });
  
}