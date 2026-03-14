<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Asistente Yuki</title>

<style>

body{
font-family: Arial, sans-serif;
margin:0;
background:#f2f4f8;
}

header{
background:#6c5ce7;
color:white;
text-align:center;
padding:30px;
}

nav{
background:#4b3fc9;
padding:10px;
text-align:center;
}

nav a{
color:white;
text-decoration:none;
margin:10px;
font-weight:bold;
}

nav a:hover{
text-decoration:underline;
}

section{
max-width:900px;
margin:auto;
padding:40px;
}

.card{
background:white;
padding:20px;
margin-bottom:20px;
border-radius:10px;
box-shadow:0 3px 8px rgba(0,0,0,0.1);
}

h2{
color:#4b3fc9;
}

.yuki-img{
width:150px;
display:block;
margin:auto;
}

.chatbox{
background:#eef1ff;
padding:20px;
border-radius:10px;
}

.message-user{
background:#dfe6ff;
padding:10px;
border-radius:8px;
margin:10px 0;
}

.message-yuki{
background:white;
padding:10px;
border-radius:8px;
margin:10px 0;
}

footer{
background:#6c5ce7;
color:white;
text-align:center;
padding:15px;
}

button{
background:#6c5ce7;
color:white;
border:none;
padding:10px 20px;
border-radius:5px;
cursor:pointer;
}

button:hover{
background:#4b3fc9;
}

</style>
</head>

<body>

<header>
<h1>Asistente Virtual Yuki</h1>
<p>Tu asistente inteligente para estudiar y aprender</p>
</header>

<nav>
<a href="#sobre">Sobre Yuki</a>
<a href="#funciones">Funciones</a>
<a href="#chat">Chat</a>
</nav>

<section id="sobre">

<div class="card">

<h2>¿Qué es Yuki?</h2>

<img src="yuki.png" class="yuki-img">

<p>
Yuki es un asistente virtual diseñado para ayudar a los estudiantes
a resolver dudas, aprender nuevos temas y mejorar su rendimiento académico.
Puede responder preguntas, explicar conceptos y acompañar el aprendizaje
de forma interactiva.
</p>

</div>

</section>

<section id="funciones">

<div class="card">

<h2>Funciones de Yuki</h2>

<ul>
<li>Responder preguntas escolares.</li>
<li>Explicar temas de matemáticas, ciencias y tecnología.</li>
<li>Ayudar con tareas y proyectos.</li>
<li>Ofrecer ejemplos y ejercicios.</li>
<li>Brindar apoyo educativo de forma rápida.</li>
</ul>

</div>

</section>

<section id="chat">

<div class="card">

<h2>Chat con Yuki</h2>

<div class="chatbox">

<div class="message-user">
Hola Yuki, ¿puedes ayudarme con matemáticas?
</div>

<div class="message-yuki">
¡Claro! Estoy aquí para ayudarte. ¿Qué problema matemático quieres resolver?
</div>

</div>

<br>

<button>Enviar mensaje</button>

</div>

</section>

<footer>
<p>Proyecto educativo | Asistente Virtual Yuki</p>
</footer>

</body>
</html>
