export default function Home() {
  return (
    <div style={{ textAlign: 'center' }}>
      
      {/* Sección Hero: IP, Versión y Discord */}
      <section style={{ marginBottom: '60px' }}>
        <h1 style={{ fontSize: '3.5rem', fontWeight: '900', color: '#ffaa00', textTransform: 'uppercase', letterSpacing: '-2px' }}>
          Chutazoscraft 2.0
        </h1>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '30px', flexWrap: 'wrap' }}>
          <div className="boxy-card" style={{ padding: '20px 30px', width: '280px' }}>
            <p style={{ color: '#888', textTransform: 'uppercase', fontSize: '0.7rem', fontWeight: 'bold' }}>IP del Servidor</p>
            <h3 style={{ fontSize: '1.2rem' }}>45.236.90.201:26311</h3>
          </div>

          <div className="boxy-card" style={{ padding: '20px 30px', width: '280px' }}>
            <p style={{ color: '#888', textTransform: 'uppercase', fontSize: '0.7rem', fontWeight: 'bold' }}>Versión Minecraft</p>
            <h3 style={{ fontSize: '1.5rem' }}>1.21.5</h3>
          </div>

          <div className="boxy-card" style={{ padding: '20px 30px', borderColor: '#5865F2', width: '280px', boxShadow: '8px 8px 0px #5865F2' }}>
            <p style={{ color: '#888', textTransform: 'uppercase', fontSize: '0.7rem', fontWeight: 'bold' }}>Comunidad</p>
            <a href="https://discord.com/invite/EkPvSSAEMj" target="_blank" rel="noreferrer" style={{ color: '#5865F2', textDecoration: 'none', fontWeight: '900', fontSize: '1.2rem' }}>UNIRSE AL DISCORD</a>
          </div>
        </div>
      </section>

      {/* Objetos Más Vendidos - Dinero Real */}
      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ fontSize: '2rem', textTransform: 'uppercase', marginBottom: '40px', letterSpacing: '-1px' }}>
          🔥 Destacados de la Tienda
        </h2>
        <div style={{ display: 'flex', gap: '25px', justifyContent: 'center', flexWrap: 'wrap' }}>
          
          {/* Deagle */}
          <div className="boxy-card" style={{ width: '280px' }}>
            <div style={{ background: '#1a1a1a', height: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '4rem', marginBottom: '15px' }}>🔫</div>
            <h3>Pistola Deagle</h3>
            <p style={{ color: '#888', margin: '10px 0' }}>Calibre .50 - Entrega inmediata</p>
            <button className="btn-primary">Comprar en la tienda</button>
          </div>

          {/* AK-47 */}
          <div className="boxy-card" style={{ width: '280px' }}>
            <div style={{ background: '#1a1a1a', height: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '4rem', marginBottom: '15px' }}>🔫</div>
            <h3>AK-47</h3>
            <p style={{ color: '#888', margin: '10px 0' }}>Automática - Potencia de fuego</p>
            <button className="btn-primary">Comprar en la tienda</button>
          </div>

          {/* Cultivos */}
          <div className="boxy-card" style={{ width: '280px' }}>
            <div style={{ background: '#1a1a1a', height: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '4rem', marginBottom: '15px' }}>🌽</div>
            <h3>Semillas Especiales</h3>
            <p style={{ color: '#ffaa00', fontWeight: 'bold', margin: '10px 0' }}>¡Gana dinero real cultivando!</p>
            <button className="btn-primary">Comprar en la tienda</button>
          </div>

        </div>
      </section>

      {/* Sección de Economía y Préstamos */}
      <section style={{ background: '#111', padding: '50px 20px', border: '2px solid #222' }}>
        <h2 style={{ fontSize: '2rem', textTransform: 'uppercase', marginBottom: '30px' }}>Centro Financiero</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap' }}>
          
          {/* Préstamos */}
          <div className="boxy-card" style={{ maxWidth: '400px', textAlign: 'left' }}>
            <h3 style={{ color: '#ffaa00' }}>Créditos Bancarios</h3>
            <p style={{ margin: '15px 0', color: '#ccc' }}>
              Solicita capital para tu facción.
              <br /><br />
              <strong style={{ color: 'white' }}>REGLA:</strong> Debes pagar la mitad (50%) del monto para autorizar el préstamo.
            </p>
            <button className="btn-primary">Solicitar Crédito</button>
          </div>

          {/* Comprar Dinero del Juego */}
          <div className="boxy-card" style={{ maxWidth: '400px', textAlign: 'left', borderColor: '#28a745', boxShadow: '8px 8px 0px #28a745' }}>
            <h3 style={{ color: '#28a745' }}>Paquetes de Monedas</h3>
            <p style={{ margin: '15px 0', color: '#ccc' }}>
              Recarga tu saldo in-game al instante utilizando Webpay o PayPal. 
            </p>
            <button className="btn-primary" style={{ background: '#28a745' }}>Comprar en la tienda</button>
          </div>

        </div>
      </section>

    </div>
  );
}