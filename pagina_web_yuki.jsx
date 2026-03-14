export default function PaginaYuki() {
  const funciones = [
    {
      titulo: "Abrir programas y carpetas",
      descripcion:
        "Yuki puede ayudarte a abrir aplicaciones, entrar a carpetas y moverse por archivos para agilizar tareas en tu computadora.",
      icono: "🖥️",
    },
    {
      titulo: "Leer archivos útiles",
      descripcion:
        "Puede trabajar con archivos como .txt, .json, .csv y .xlsx para revisar información, organizar datos y apoyar en trabajos.",
      icono: "📂",
    },
    {
      titulo: "Escribir y organizar información",
      descripcion:
        "Yuki puede escribir texto, ayudarte a copiar y pegar contenido y acomodar información según lo que necesites.",
      icono: "✍️",
    },
    {
      titulo: "Automatizar acciones básicas",
      descripcion:
        "Puede hacer clic, ejecutar comandos seguros y seguir instrucciones para reducir tareas repetitivas.",
      icono: "⚙️",
    },
    {
      titulo: "Confirmar acciones delicadas",
      descripcion:
        "Antes de hacer cambios importantes, Yuki puede pedir confirmación para evitar errores o movimientos no deseados.",
      icono: "🛡️",
    },
    {
      titulo: "Asistencia por voz",
      descripcion:
        "La idea de Yuki también incluye interacción por voz para que puedas darle instrucciones de forma más natural.",
      icono: "🎤",
    },
  ];

  const pasos = [
    "Recibe una instrucción del usuario, ya sea escrita o por voz.",
    "Interpreta lo que se necesita hacer en la PC o dentro de la app.",
    "Ejecuta acciones permitidas, como leer archivos, abrir programas o acomodar información.",
    "Confirma acciones delicadas antes de modificar algo importante.",
    "Entrega resultados para ahorrar tiempo y facilitar el trabajo diario.",
  ];

  const usos = [
    "Ayudar con trabajos escolares o laborales.",
    "Buscar y organizar archivos rápidamente.",
    "Leer tablas o documentos y separar datos.",
    "Servir como base para un asistente personal en Windows.",
    "Reducir pasos manuales en tareas repetitivas.",
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-fuchsia-500/20" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <div className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
                Asistente virtual para PC
              </div>
              <h1 className="text-4xl font-bold leading-tight md:text-6xl">
                Yuki, tu asistente para facilitar tareas en la computadora
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-slate-300 md:text-xl">
                Yuki es una asistente pensada para ayudarte a interactuar con tu PC,
                automatizar acciones útiles y apoyar en trabajos, organización de
                archivos y tareas del día a día.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#funciones"
                  className="rounded-2xl bg-white px-6 py-3 font-semibold text-slate-900 shadow-lg transition hover:scale-105"
                >
                  Ver funciones
                </a>
                <a
                  href="#como-funciona"
                  className="rounded-2xl border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
                >
                  Cómo funciona
                </a>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur">
                <div className="text-3xl">📁</div>
                <h3 className="mt-4 text-xl font-semibold">Organización</h3>
                <p className="mt-2 text-slate-300">
                  Ayuda a revisar, abrir y acomodar archivos según lo que necesites.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur">
                <div className="text-3xl">🤖</div>
                <h3 className="mt-4 text-xl font-semibold">Automatización</h3>
                <p className="mt-2 text-slate-300">
                  Reduce tareas repetitivas con acciones guiadas y seguras.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur sm:col-span-2">
                <div className="text-3xl">💡</div>
                <h3 className="mt-4 text-xl font-semibold">Apoyo diario</h3>
                <p className="mt-2 text-slate-300">
                  Sirve como base para un asistente personal que pueda ayudarte en
                  estudio, trabajo y organización dentro de Windows.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="funciones" className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="mb-10 max-w-3xl">
          <h2 className="text-3xl font-bold md:text-4xl">Funciones principales de Yuki</h2>
          <p className="mt-4 text-slate-300">
            Estas son algunas de las capacidades que hacen que Yuki sea útil como
            asistente para computadora.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {funciones.map((funcion) => (
            <div
              key={funcion.titulo}
              className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-xl transition hover:-translate-y-1 hover:border-cyan-400/40"
            >
              <div className="text-4xl">{funcion.icono}</div>
              <h3 className="mt-4 text-xl font-semibold">{funcion.titulo}</h3>
              <p className="mt-3 text-slate-300">{funcion.descripcion}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/5">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-14 md:grid-cols-3 md:px-10">
          <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-6">
            <div className="text-3xl font-bold">¿Para qué sirve?</div>
            <p className="mt-4 text-slate-300">
              Sirve para convertir tareas manuales en procesos más rápidos, cómodos
              y organizados dentro de tu computadora.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-6">
            <div className="text-3xl font-bold">¿Cómo ayuda?</div>
            <p className="mt-4 text-slate-300">
              Te apoya leyendo información, ejecutando acciones básicas y guiando
              procesos para que pierdas menos tiempo.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-6">
            <div className="text-3xl font-bold">¿A quién le sirve?</div>
            <p className="mt-4 text-slate-300">
              A estudiantes, trabajadores o cualquier persona que quiera una ayuda
              digital práctica dentro de su PC.
            </p>
          </div>
        </div>
      </section>

      <section id="como-funciona" className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">Cómo funciona Yuki</h2>
            <p className="mt-4 text-slate-300">
              El funcionamiento de Yuki se basa en recibir instrucciones, interpretar
              la tarea y ejecutar acciones útiles de forma controlada.
            </p>
            <div className="mt-8 space-y-4">
              {pasos.map((paso, index) => (
                <div
                  key={paso}
                  className="flex items-start gap-4 rounded-2xl border border-white/10 bg-slate-900/70 p-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-400/20 font-bold text-cyan-200">
                    {index + 1}
                  </div>
                  <p className="pt-2 text-slate-200">{paso}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-b from-slate-900 to-slate-950 p-8 shadow-2xl">
            <h3 className="text-2xl font-bold">Usos recomendados</h3>
            <div className="mt-6 space-y-4">
              {usos.map((uso) => (
                <div
                  key={uso}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 text-slate-200"
                >
                  {uso}
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-5">
              <h4 className="text-lg font-semibold text-cyan-200">Idea principal</h4>
              <p className="mt-2 text-slate-200">
                Yuki no solo busca responder, sino ayudarte directamente dentro de tu
                entorno de trabajo para hacer las cosas más rápido y con menos pasos.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 md:px-10">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-fuchsia-500/20 p-8 md:p-10">
          <h2 className="text-3xl font-bold md:text-4xl">Resumen de Yuki</h2>
          <p className="mt-4 max-w-4xl text-lg text-slate-200">
            Yuki es un proyecto de asistente virtual para PC que busca ayudar con
            automatización, organización de archivos, lectura de datos y apoyo en
            tareas cotidianas. Su objetivo es convertirse en una herramienta práctica,
            accesible y útil para hacer más fácil el trabajo en la computadora.
          </p>
        </div>
      </section>
    </div>
  );
}
