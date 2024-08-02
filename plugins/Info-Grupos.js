const handler = async (m, {conn}) => {
  m.reply(global.Grupos);
};
handler.command = /^(Grupos|Grupos)$/i;
export default handler;

global.Grupos = `
> *Creador Yallico 🇦🇱*

> *Grupo Ofc :* ${nna}

> *Cualquier Consulta O Si Deseas Comprar Entra Al Grupo Del Bot*
`;