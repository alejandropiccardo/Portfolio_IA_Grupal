---
title: "Modelos"
slug: "/modelos"
---

<style>
.card-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  padding: 2rem;
}


.card {
  background: #333; /* Fondo negro */
  border: 2px solid #555; /* Borde gris oscuro */
  border-radius: 8px;
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  color: #fff; /* Texto blanco */
  transition: transform 0.3s ease, border-color 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Espaciado entre contenido y etiqueta */
}

.card:hover {
  transform: translateY(-5px);
  border-color: #007BFF; /* Cambiar borde al azul en hover */
}

.card img {
  width: 80px; /* Aumenta el tamaño de las imágenes */
  margin: 0 auto 1rem;
  background: none; /* Asegura que no haya fondo en las imágenes */
}

.card h3 {
  font-size: 1.6rem;
  margin-bottom: 0.5rem;
  color: #fff;
}

.card p {
  font-size: 1rem;
  color: #ddd;
  flex-grow: 1; /* Empuja la etiqueta hacia abajo */
}

.tag {
  display: inline-block;
  padding: 0.4rem 1rem;
  font-size: 0.9rem;
  font-weight: bold;
  border-radius: 4px;
  margin-top: 1rem;
  align-self: center; /* Centra la etiqueta */
}

.tag.supervised {
  background: #A4D4AE; /* Verde pastel */
  color: #155724;
}

.tag.unsupervised {
  background: #F8B4B4; /* Rojo pastel */
  color: #721C24;
}
</style>




<div class="card-container">
  <a href="/regression" class="card">
    <img src="/icons/regression.png" alt="Regresión">
    <h3>Regresión</h3>
    <p>La regresión es un tipo de aprendizaje supervisado que predice un valor continuo basado en datos etiquetados.</p>
    <span class="tag supervised">Supervised</span>
  </a>
  <a href="/classification" class="card">
    <img src="/icons/classification.png" alt="Clasificación">
    <h3>Clasificación</h3>
    <p>La clasificación es un tipo de aprendizaje supervisado que asigna etiquetas a datos en función de características observadas.</p>
    <span class="tag supervised">Supervised</span>
  </a>
  <a href="/clustering" class="card">
    <img src="/icons/clustering.png" alt="Clustering">
    <h3>Clustering</h3>
    <p>El clustering es un tipo de aprendizaje no supervisado que agrupa datos no etiquetados en grupos o clústeres basados en sus similitudes.</p>
    <span class="tag unsupervised">Unsupervised</span>
  </a>
  <a href="/feature_selection" class="card">
    <img src="/icons/dimensionality_reduction.png" alt="Feature Selection">
    <h3>Feature Selection</h3>
    <p>Este tipo de algoritmo reduce el número de variables de un problema manteniendo las características más importantes, simplificando el análisis.</p>
    <span class="tag unsupervised">Unsupervised</span>
  </a>
</div>
