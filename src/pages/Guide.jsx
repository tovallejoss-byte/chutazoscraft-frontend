export default function Guide() {
  return (
    <div>
      <h1 style={{ fontSize: '2.5rem', fontWeight: '900', color: '#ffaa00', marginBottom: '40px', textAlign: 'center' }}>
        GUÍA DEL SUPERVIVIENTE
      </h1>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
        
        {/* Lo esencial */}
        <div className="boxy-card">
          <h3 style={{ color: '#ffaa00', marginBottom: '15px' }}>1. Lo Esencial</h3>
          <p style={{ color: '#ccc', lineHeight: '1.6' }}>
            Para empezar a jugar en Chutazoscraft 2.0, necesitas registrarte in-game usando el comando <strong>/register</strong>. 
            Recuerda que la economía se basa en el tiempo de juego y las misiones diarias.
          </p>
        </div>

        {/* Instalación de Mods */}
        <div className="boxy-card">
          <h3 style={{ color: '#ffaa00', marginBottom: '15px' }}>2. Instalación de Mods</h3>
          <p style={{ color: '#ccc', lineHeight: '1.6' }}>
            Aunque el servidor usa plugins, recomendamos usar <strong>Fabric 1.21.5</strong> con Sodium y Lithium para mejor rendimiento. 
            Solo arrastra los .jar a tu carpeta %appdata%/.minecraft/mods.
          </p>
        </div>

        {/* Guía de Comandos */}
        <div className="boxy-card" style={{ gridColumn: 'span 1' }}>
          <h3 style={{ color: '#ffaa00', marginBottom: '15px' }}>3. Guía de Comandos</h3>
          <ul style={{ listStyle: 'none', color: '#ccc', padding: 0 }}>
            <li style={{ marginBottom: '10px' }}><code>/spawn</code> - Regresa al inicio.</li>
            <li style={{ marginBottom: '10px' }}><code>/tpa [nombre]</code> - Pide teletransportarte.</li>
            <li style={{ marginBottom: '10px' }}><code>/money</code> - Revisa tu saldo actual.</li>
            <li style={{ marginBottom: '10px' }}><code>/prestamo</code> - Abre el menú financiero web.</li>
          </ul>
        </div>

      </div>
    </div>
  );
}