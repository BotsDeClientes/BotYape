const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command}) => {
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
    var sum = member.length;
  } else {
    var sum = 0;
    const total = 0;
    var member = 0;
  }
  const pesan = args.join``;
  const oi = `${pesan}`;
  let emot = `${pickRandom(['🇦🇱', '💎', '🥰', '🙈', '👀', '💖', '⬟', '▢', '🥶', '🇵🇪', '💵', '💲', '❤️‍🩹', '💓', '😍', '😈', '💀', '☠️'])}`
function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]
}
  let teks = `╭─────────\n│❏ 𝚉𝚊𝚔𝚊𝚎 𝘛𝘦 𝘐𝘯𝘷𝘰𝘤𝘢 🇦🇱\n│❏ 𝚉𝚊𝚔𝚊𝚎𝘓𝘰𝘷𝘦𝘳𝘴: *${participants.length}* ${oi}\n│❏ 𝘚𝘪𝘦𝘮𝘱𝘳𝘦 𝘏𝘢𝘺 𝘜𝘯𝘢 𝘙𝘢𝘻𝘰𝘯 𝘗𝘢𝘳𝘢 𝘚𝘰𝘯𝘳𝘦𝘪𝘳\n│\n`;
  for (const mem of participants) {
    teks += `│${emot} @${mem.id.split('@')[0]}\n`;
  }
  teks += `│\n╰@𝚉𝚊𝚔𝚊𝚎`;
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['tagall <mesaje>', 'invocar <mesaje>'];
handler.tags = ['group'];
handler.command = /^(tagall|invocar|marcar|todos|invocación|ta)$/i;
handler.admin = true;
handler.group = true;
export default handler;