import './Manifesto.css';

export default function Manifesto() {
  return (
    <section className="manifesto section-pad" id="manifesto">
      <div className="container manifesto__inner">
        <div className="manifesto__eyebrow eyebrow reveal">
          Manifesto
        </div>
        <p className="manifesto__statement reveal">
          Não é só <span>roupa.</span><br />
          É identidade <span>angolana.</span>
        </p>
        <p className="manifesto__note reveal">
          A NeonWave nasce da cultura jovem de Luanda. Acreditamos que o streetwear
          vai além da moda — é uma forma de expressar quem somos, de onde viemos e
          onde queremos estar. Criada por Pedro Jala, uma peça de cada vez.
        </p>
      </div>
    </section>
  );
}
