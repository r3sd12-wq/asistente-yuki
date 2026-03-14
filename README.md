<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Yuki - Asistente Virtual para PC</title>
  <style>
    :root {
      --bg: #0b1020;
      --bg-soft: #121933;
      --card: rgba(255, 255, 255, 0.06);
      --line: rgba(255, 255, 255, 0.12);
      --text: #f5f7ff;
      --muted: #c6d0f5;
      --accent: #6ee7ff;
      --accent-2: #8b5cf6;
      --accent-3: #22d3ee;
      --shadow: 0 20px 50px rgba(0, 0, 0, 0.35);
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    html {
      scroll-behavior: smooth;
    }

    body {
      font-family: Arial, Helvetica, sans-serif;
      background:
        radial-gradient(circle at top left, rgba(34, 211, 238, 0.2), transparent 30%),
        radial-gradient(circle at top right, rgba(139, 92, 246, 0.2), transparent 35%),
        linear-gradient(180deg, #09101e 0%, #0b1020 100%);
      color: var(--text);
      line-height: 1.6;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    .container {
      width: min(1120px, 92%);
      margin: 0 auto;
    }

    .navbar {
      position: sticky;
      top: 0;
      z-index: 100;
      backdrop-filter: blur(12px);
      background: rgba(11, 16, 32, 0.72);
      border-bottom: 1px solid var(--line);
    }

    .nav-wrap {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 16px 0;
      gap: 16px;
    }

    .brand {
      font-size: 1.25rem;
      font-weight: 700;
      letter-spacing: 0.5px;
    }

    .brand span {
      color: var(--accent);
    }

    .nav-links {
      display: flex;
      gap: 18px;
      flex-wrap: wrap;
      color: var(--muted);
      font-size: 0.96rem;
    }

    .hero {
      padding: 86px 0 64px;
    }

    .hero-grid {
      display: grid;
      grid-template-columns: 1.2fr 0.8fr;
      gap: 32px;
      align-items: center;
    }

    .badge {
      display: inline-block;
      padding: 9px 14px;
      border: 1px solid rgba(110, 231, 255, 0.25);
      background: rgba(110, 231, 255, 0.09);
      color: var(--accent);
      border-radius: 999px;
      font-size: 0.92rem;
      margin-bottom: 18px;
    }

    h1 {
      font-size: clamp(2.2rem, 5vw, 4.4rem);
      line-height: 1.08;
      margin-bottom: 18px;
    }

    .hero p {
      color: var(--muted);
      font-size: 1.08rem;
      max-width: 700px;
    }

    .hero-actions {
      display: flex;
      gap: 14px;
      flex-wrap: wrap;
      margin-top: 28px;
    }

    .btn {
      display: inline-block;
      padding: 14px 22px;
      border-radius: 16px;
      font-weight: 700;
      transition: transform 0.18s ease, opacity 0.18s ease, background 0.18s ease;
    }

    .btn:hover {
      transform: translateY(-2px);
      opacity: 0.96;
    }

    .btn-primary {
      background: linear-gradient(90deg, var(--accent), #ffffff);
      color: #08101b;
    }

    .btn-secondary {
      border: 1px solid var(--line);
      background: rgba(255, 255, 255, 0.04);
      color: var(--text);
    }

    .hero-cards {
      display: grid;
      gap: 16px;
    }

    .glass-card,
    .feature-card,
    .info-card,
    .step,
    .final-box {
      background: var(--card);
      border: 1px solid var(--line);
      border-radius: 24px;
      box-shadow: var(--shadow);
    }

    .glass-card {
      padding: 22px;
    }

    .glass-card h3 {
      font-size: 1.18rem;
      margin: 12px 0 6px;
    }

    .glass-card p {
      color: var(--muted);
      font-size: 0.98rem;
    }

    .section {
      padding: 70px 0;
    }

    .section-title {
      font-size: clamp(1.8rem, 3vw, 2.8rem);
      margin-bottom: 10px;
    }

    .section-subtitle {
      color: var(--muted);
      max-width: 760px;
      margin-bottom: 30px;
    }

    .features-grid {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 18px;
    }

    .feature-card {
      padding: 24px;
    }

    .feature-icon {
      font-size: 2rem;
      margin-bottom: 12px;
    }

    .feature-card h3 {
      margin-bottom: 10px;
      font-size: 1.15rem;
    }

    .feature-card p {
      color: var(--muted);
      font-size: 0.98rem;
    }

    .info-grid {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 18px;
    }

    .info-card {
      padding: 22px;
    }

    .info-card h3 {
      margin-bottom: 10px;
      font-size: 1.2rem;
    }

    .info-card p {
      color: var(--muted);
    }

    .how-grid {
      display: grid;
      grid-template-columns: 1.1fr 0.9fr;
      gap: 24px;
      align-items: start;
    }

    .steps {
      display: grid;
      gap: 14px;
      margin-top: 20px;
    }

    .step {
      padding: 18px;
      display: flex;
      gap: 16px;
      align-items: flex-start;
    }

    .step-number {
      min-width: 42px;
      height: 42px;
      border-radius: 50%;
      display: grid;
      place-items: center;
      font-weight: 700;
      background: rgba(110, 231, 255, 0.14);
      color: var(--accent);
      border: 1px solid rgba(110, 231, 255, 0.18);
    }

    .side-panel {
      padding: 24px;
    }

    .use-list {
      display: grid;
      gap: 12px;
      margin-top: 18px;
    }

    .use-item {
      padding: 14px 16px;
      border-radius: 18px;
      border: 1px solid var(--line);
      background: rgba(255, 255, 255, 0.04);
      color: var(--muted);
    }

    .highlight {
      margin-top: 20px;
      padding: 18px;
      border-radius: 20px;
      background: linear-gradient(135deg, rgba(34, 211, 238, 0.14), rgba(139, 92, 246, 0.14));
      border: 1px solid rgba(110, 231, 255, 0.18);
    }

    .highlight h4 {
      margin-bottom: 8px;
      color: var(--accent);
    }

    .highlight p {
      color: #e5edff;
    }

    .final-box {
      padding: 28px;
      background: linear-gradient(135deg, rgba(34, 211, 238, 0.18), rgba(139, 92, 246, 0.18));
    }

    .final-box p {
      color: #eef3ff;
      margin-top: 10px;
    }

    footer {
      padding: 28px 0 40px;
      color: #b7c4ee;
      text-align: center;
      font-size: 0.95rem;
    }

    @media (max-width: 980px) {
      .hero-grid,
      .how-grid,
      .features-grid,
      .info-grid {
        grid-template-columns: 1fr;
      }

      .hero {
        padding-top: 60px;
      }
    }

    @media (max-width: 640px) {
      .nav-wrap {
        flex-direction: column;
        align-items: flex-start;
      }

      .nav-links {
        gap: 12px;
      }

      .btn {
        width: 100%;
        text-align: center;
      }
    }
  </style>
</head>
<body>
  <header class="navbar">
    <div class="container nav-wrap">
      <a href="#inicio" class="brand">Yuki<span>.</span></a>
      <nav class="nav-links">
        <a href="#funciones">Funciones</a>
        <a href="#para-que-sirve">¿Para qué sirve?</a>
        <a href="#como-funciona">¿Cómo funciona?</a>
        <a href="#resumen">Resumen</a>
      </nav>
    </div>
  </header>

  <main>
    <section class="hero" id="inicio">
      <div class="container hero-grid">
        <div>
          <div class="badge">Asistente virtual para PC</div>
          <h1>Yuki, tu asistente para facilitar tareas en la computadora</h1>
          <p>
            Yuki es un proyecto de asistente virtual pensado para ayudar a interactuar con la PC,
            automatizar acciones, organizar archivos y apoyar en tareas del día a día de una forma más rápida y práctica.
          </p>
          <div class="hero-actions">
            <a class="btn btn-primary" href="#funciones">Ver funciones</a>
            <a class="btn btn-secondary" href="#como-funciona">Cómo funciona</a>
          </div>
        </div>

        <div class="hero-cards">
          <article class="glass-card">
            <div>📁</div>
            <h3>Organización</h3>
            <p>Ayuda a revisar, abrir y acomodar archivos para ahorrar tiempo en tareas repetitivas.</p>
          </article>
          <article class="glass-card">
            <div>🤖</div>
            <h3>Automatización</h3>
            <p>Permite convertir acciones manuales en procesos más rápidos y fáciles de repetir.</p>
          </article>
          <article class="glass-card">
            <div>💡</div>
            <h3>Apoyo diario</h3>
            <p>Puede servir como base para un asistente personal enfocado en estudio, trabajo y productividad.</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section" id="funciones">
      <div class="container">
        <h2 class="section-title">Funciones principales de Yuki</h2>
        <p class="section-subtitle">
          Estas funciones muestran para qué puede servir Yuki dentro de una computadora y cómo puede ayudarte a trabajar de forma más cómoda.
        </p>

        <div class="features-grid">
          <article class="feature-card">
            <div class="feature-icon">🖥️</div>
            <h3>Abrir programas y carpetas</h3>
            <p>Yuki puede ayudarte a abrir aplicaciones, entrar a carpetas y moverse entre archivos con mayor rapidez.</p>
          </article>

          <article class="feature-card">
            <div class="feature-icon">📂</div>
            <h3>Leer archivos útiles</h3>
            <p>Puede trabajar con archivos como .txt, .json, .csv y .xlsx para revisar información y apoyar en trabajos.</p>
          </article>

          <article class="feature-card">
            <div class="feature-icon">✍️</div>
            <h3>Escribir y organizar información</h3>
            <p>Puede escribir texto, copiar y pegar contenido y acomodar datos según las instrucciones del usuario.</p>
          </article>

          <article class="feature-card">
            <div class="feature-icon">⚙️</div>
            <h3>Automatizar acciones básicas</h3>
            <p>Puede hacer clic, seguir pasos y ejecutar acciones seguras para reducir trabajo manual.</p>
          </article>

          <article class="feature-card">
            <div class="feature-icon">🛡️</div>
            <h3>Confirmar acciones delicadas</h3>
            <p>Antes de hacer cambios importantes, puede pedir confirmación para evitar errores o movimientos no deseados.</p>
          </article>

          <article class="feature-card">
            <div class="feature-icon">🎤</div>
            <h3>Asistencia por voz</h3>
            <p>Yuki también puede pensarse para interacción por voz, haciendo más natural dar instrucciones dentro de la app.</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section" id="para-que-sirve">
      <div class="container info-grid">
        <article class="info-card">
          <h3>¿Para qué sirve?</h3>
          <p>Sirve para transformar tareas manuales en procesos más rápidos, organizados y cómodos dentro de la computadora.</p>
        </article>
        <article class="info-card">
          <h3>¿Cómo ayuda?</h3>
          <p>Apoya leyendo datos, ejecutando acciones básicas y guiando procesos para que pierdas menos tiempo.</p>
        </article>
        <article class="info-card">
          <h3>¿A quién le sirve?</h3>
          <p>Puede ser útil para estudiantes, trabajadores, desarrolladores o cualquier persona que quiera automatizar tareas en PC.</p>
        </article>
      </div>
    </section>

    <section class="section" id="como-funciona">
      <div class="container how-grid">
        <div>
          <h2 class="section-title">Cómo funciona Yuki</h2>
          <p class="section-subtitle">
            El funcionamiento de Yuki se basa en recibir instrucciones, interpretar la tarea y ejecutar acciones permitidas de forma controlada.
          </p>

          <div class="steps">
            <article class="step">
              <div class="step-number">1</div>
              <div>Recibe una instrucción del usuario, ya sea escrita o por voz.</div>
            </article>
            <article class="step">
              <div class="step-number">2</div>
              <div>Interpreta lo que se necesita hacer dentro de la app o en la PC.</div>
            </article>
            <article class="step">
              <div class="step-number">3</div>
              <div>Ejecuta acciones permitidas, como leer archivos, abrir programas o acomodar información.</div>
            </article>
            <article class="step">
              <div class="step-number">4</div>
              <div>Si detecta una acción delicada, solicita confirmación antes de continuar.</div>
            </article>
            <article class="step">
              <div class="step-number">5</div>
              <div>Entrega resultados para ahorrar tiempo y facilitar el trabajo diario.</div>
            </article>
          </div>
        </div>

        <aside class="side-panel glass-card">
          <h3>Usos recomendados</h3>
          <div class="use-list">
            <div class="use-item">Ayudar con trabajos escolares o laborales.</div>
            <div class="use-item">Buscar y organizar archivos rápidamente.</div>
            <div class="use-item">Leer tablas o documentos y separar datos.</div>
            <div class="use-item">Servir como base para un asistente personal en Windows.</div>
            <div class="use-item">Reducir pasos manuales en tareas repetitivas.</div>
          </div>

          <div class="highlight">
            <h4>Idea principal</h4>
            <p>Yuki busca no solo responder preguntas, sino también ayudarte directamente dentro del entorno de trabajo para hacer las cosas más rápido y con menos pasos.</p>
          </div>
        </aside>
      </div>
    </section>

    <section class="section" id="resumen">
      <div class="container">
        <div class="final-box">
          <h2 class="section-title">Resumen de Yuki</h2>
          <p>
            Yuki es un proyecto de asistente virtual para PC enfocado en automatización, organización de archivos, lectura de datos y apoyo en tareas cotidianas.
            Su objetivo es convertirse en una herramienta práctica, accesible y útil para hacer más fácil el trabajo en la computadora.
          </p>
        </div>
      </div>
    </section>
  </main>

  <footer>
    <div class="container">Página creada para presentar el proyecto Yuki en GitHub Pages.</div>
  </footer>
</body>
</html>
