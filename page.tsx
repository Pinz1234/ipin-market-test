const LINKS = {
  wa: "https://wa.me/6282261169349",
  groupSc: "https://chat.whatsapp.com/BOdAG1wgHq4AHVftWUWyAj",
  tele: "https://t.me/IPINSHOP",
};

export default function IpinMdV7() {
  const waText = encodeURIComponent(
`Halo admin IPIN MARKET, saya mau order SC IPIN MD V7.

Nama:
Nomor WhatsApp:
Metode pembayaran:
Catatan:
`
  );

  return (
    <main style={{ padding: 16, maxWidth: 900, margin: "0 auto" }}>
      <a href="/products" style={{ color: "rgba(255,255,255,.75)" }}>← balik</a>
      <h1 style={{ margin: "10px 0 6px" }}>SC IPIN MD V7</h1>
      <div style={{ color: "rgba(255,255,255,.65)", lineHeight: 1.7 }}>
        Script bot WhatsApp multifungsi yang fokus ke fitur harian + tools. Cocok buat dipakai pribadi atau jualan.
      </div>

      <div style={{ marginTop: 14, display: "grid", gap: 12 }}>
        <div style={card}>
          <div style={title}>Highlight</div>
          <ul style={ul}>
            <li>Tools: removebg, vocalremover, TTS</li>
            <li>AI/voice note: auto AI voice note (DB per grup) + opsi ganti suara</li>
            <li>Moderasi: sistem warn (warn/listwarn/delwarn/resetwarn)</li>
            <li>Games/quiz: banyak pack game</li>
            <li>Fix/update: tts, sewa grup sistem, katalog autorespon, notif panel, dll</li>
          </ul>
        </div>

        <div style={card}>
          <div style={title}>Rules</div>
          <ul style={ul}>
            <li>Dilarang hapus credit.</li>
            <li>Dilarang bypass DB/sistem yang ada.</li>
            <li>Update berkala (fitur ditambah & diperbaiki).</li>
          </ul>
        </div>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <a style={{ ...btn, ...btnPrimary }} href={`${LINKS.wa}?text=${waText}`} target="_blank" rel="noreferrer">Order via WhatsApp</a>
          <a style={btn} href={LINKS.groupSc} target="_blank" rel="noreferrer">Join Grup SC</a>
          <a style={btn} href={LINKS.tele} target="_blank" rel="noreferrer">Telegram</a>
        </div>
      </div>
    </main>
  );
}

const card: React.CSSProperties = {
  border: "1px solid rgba(255,255,255,.12)",
  borderRadius: 16,
  padding: 14,
  background: "rgba(255,255,255,.04)",
};
const title: React.CSSProperties = { fontWeight: 900, marginBottom: 8 };
const ul: React.CSSProperties = { margin: 0, paddingLeft: 18, color: "rgba(255,255,255,.75)", lineHeight: 1.7 };
const btn: React.CSSProperties = {
  display: "inline-block",
  padding: "10px 12px",
  borderRadius: 14,
  border: "1px solid rgba(255,255,255,.12)",
  background: "rgba(255,255,255,.04)",
  fontWeight: 900,
  textDecoration: "none",
  color: "rgba(255,255,255,.92)",
};
const btnPrimary: React.CSSProperties = {
  border: "none",
  background: "linear-gradient(135deg, rgba(139,92,246,.95), rgba(236,72,153,.9))",
};