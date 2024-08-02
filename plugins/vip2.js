import axios from 'axios';

const handler = async (m, { conn, text, args, usedPrefix, command }) => {
  if (!text) throw `> Necesitas Poner Un Enlace De Tik Tok Rey Ejemplo: _${usedPrefix + command} https://vm.tiktok.com/ZMruESjFk/`;
  if (!/(?:https:?\/{2})?(?:w{3}|vm|vt|t)?\.?tiktok.com\/([^\s&]+)/gi.test(text)) throw `> Enlace de TikTok no válido. Uso: _${usedPrefix + command} https://vm.tiktok.com/ZMruESjFk/`;

  try {
    await m.reply('> Descarga En Proceso Espere Un Momento...');
    const response = await axios.get(`https://api.cafirexos.com/api/tiktokv1?url=${args[0]}&apikey=BrunoSobrino`);
    const data = response.data;

    if (data.status) {
      const videoUrl = data.resultado.videoUrl;
      const caption = `> *Yallico X Bruno Sobrino*\n\n> *🇦🇱 Usuario:* ${data.resultado.username}\n> *🇦🇱 Nombre:* ${data.resultado.nickname}\n> *🇦🇱 Región:* ${data.resultado.region}\n> *🇦🇱 Comentarios:* ${data.resultado.commentCount}\n> *🇦🇱 Compartidos:* ${data.resultado.shareCount}\n> *🇦🇱 Descargas:* ${data.resultado.downloadCount}\n> *🇦🇱 Música:* ${data.resultado.musicInfo.title}\n\n> *🇦🇱 Descripción:* ${data.resultado.title}\n\n> *🇦🇱 Te Invito A Mi Grupo De WhatsApp:* https://chat.whatsapp.com/LHo0RmYd3pxAQzp24NYcTV`;
      await conn.sendMessage(m.chat, { video: { url: videoUrl }, caption: caption }, { quoted: m });
    } else {
      throw '> Error al descargar el video de TikTok.';
    }
  } catch (error) {
    await m.reply('> Error al descargar el video de TikTok.');
  }
};

handler.command = /^(tiktok|ttdl|tiktokdl|tiktoknowm|tt|ttnowm|tiktokaudio)$/i;
export default handler;
