export default function Login() {
  return (
    <div className="login-wrapper">
      <div className="boxy-card">
        <h2>Entrar</h2>
        <p>Ingresa tus credenciales del servidor.</p>
        
        <form>
          <input 
            type="text" 
            placeholder="Usuario de Minecraft" 
            className="input-field"
          />
          <input 
            type="password" 
            placeholder="Contraseña Web" 
            className="input-field"
          />
          
          <button type="button" className="btn-primary">
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
}