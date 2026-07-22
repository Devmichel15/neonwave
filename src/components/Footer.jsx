import './Footer.css';

const columns = [
  {
    title: 'Loja',
    links: [
      { label: 'Coleção', href: '#drop' },
      { label: 'Novidades', href: '#drop' },
      { label: 'Mais Vendidos', href: '#drop' },
      { label: 'Tabela de Tamanhos', href: '#' },
    ],
  },
  {
    title: 'Marca',
    links: [
      { label: 'Sobre', href: '#manifesto' },
      { label: 'Manifesto', href: '#manifesto' },
      { label: 'Editorial', href: '#lookbook' },
      { label: 'Sustentabilidade', href: '#' },
    ],
  },
  {
    title: 'Ajuda',
    links: [
      { label: 'Envios', href: '#' },
      { label: 'Trocas e Devoluções', href: '#' },
      { label: 'Contacto', href: '#' },
      { label: 'FAQ', href: '#' },
    ],
  },
];

const socialLinks = [
  { label: 'Instagram', href: '#' },
  { label: 'TikTok', href: '#' },
];

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <div className="nav__logo">NeonWave</div>
            <p>Streetwear premium nascido em Luanda, Angola. Peças em edição limitada, sem ruído.</p>
          </div>

          {columns.map((col) => (
            <div key={col.title} className="footer__col">
              <h4>{col.title}</h4>
              {col.links.map((link) => (
                <a key={link.label} href={link.href}>{link.label}</a>
              ))}
            </div>
          ))}

          <div className="footer__social">
            <h4>Social</h4>
            {socialLinks.map((link) => (
              <a key={link.label} href={link.href}>{link.label}</a>
            ))}
          </div>
        </div>

        <div className="footer__word">
          <h3>NeonWave</h3>
          <div className="footer__legal">© 2026 NeonWave. Luanda, Angola.</div>
        </div>
      </div>
    </footer>
  );
}
