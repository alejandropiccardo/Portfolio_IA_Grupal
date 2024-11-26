---
title: "feature_selection"
slug: "/modelos/featureSelection"
---


<style>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

h1 {
  text-align: center;
  margin-bottom: 2rem;
  color: #fff;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Siempre 2 columnas */
  gap: 2rem;
  justify-items: center; /* Opcional: Centrar horizontalmente las tarjetas */
}


.card {
  background: #333;
  border: 1px solid #555;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  color: #fff;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
}

.card h5 {
  font-size: 1.4rem;
  margin-bottom: 1rem;
  color: #fff;
}

.card p {
  font-size: 1rem;
  margin-bottom: 1rem;
  color: #ddd;
}

.card h6 {
  font-size: 1.1rem;
  margin-top: 1rem;
  color: #aaa;
}

.description {
  background: #222;
  padding: 2rem;
  border-radius: 8px;
  margin-top: 3rem;
  color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.description h3,
.description h4 {
  margin-bottom: 1rem;
  color: #fff;
}

.description p,
.description ul {
  font-size: 1rem;
  color: #ddd;
}

.description ul li {
  margin-bottom: 0.5rem;
}
</style>

<div class="container">
<h1>Reducción de Dimensionalidad</h1>

<div class="card-grid">
  <div class="card">
    <h5>PCA (Principal Component Analysis)</h5>
    <p>PCA es una técnica que transforma los datos en nuevas variables (componentes principales), que capturan la mayor varianza posible en menos dimensiones.</p>
    <h6>¿Cuándo usarlo?</h6>
    <p>Es útil cuando los datos tienen muchas características correlacionadas. PCA es común en visualización de datos y preprocesamiento para modelos supervisados y no supervisados.</p>
    <h6>¿Qué necesita?</h6>
    <p>Es necesario que los datos estén escalados (normalizados o estandarizados), ya que PCA es sensible a las magnitudes de las características.</p>
  </div>

  <div class="card">
    <h5>LDA (Linear Discriminant Analysis)</h5>
    <p>LDA busca maximizar la separación entre clases mientras reduce las dimensiones. Es un método supervisado que proyecta los datos en una nueva base que separa mejor las clases.</p>
    <h6>¿Cuándo usarlo?</h6>
    <p>LDA es ideal cuando se tiene un problema de clasificación y se necesita reducir las dimensiones mientras se mantiene la capacidad de separar las clases.</p>
    <h6>¿Qué necesita?</h6>
    <p>Necesita que los datos estén etiquetados (supervisado) y que estén escalados. Es útil cuando hay múltiples clases en los datos.</p>
  </div>

  <div class="card">
    <h5>Forward Selection</h5>
    <p>Forward Selection es un método de selección de características que comienza con un modelo vacío y agrega iterativamente las características que mejoran el rendimiento del modelo.</p>
    <h6>¿Cuándo usarlo?</h6>
    <p>Es útil cuando se desea encontrar un subconjunto óptimo de características para mejorar el rendimiento del modelo, especialmente en datasets con muchas variables.</p>
    <h6>¿Qué necesita?</h6>
    <p>Requiere un criterio para evaluar el modelo en cada paso (como el error cuadrático medio o el puntaje F1) y puede ser computacionalmente costoso si el número de características es muy alto.</p>
  </div>

  <div class="card">
    <h5>Backward Selection</h5>
    <p>Backward Selection es un método de selección de características que comienza con todas las características y elimina iterativamente aquellas que menos contribuyen al modelo.</p>
    <h6>¿Cuándo usarlo?</h6>
    <p>Es útil cuando se tiene un dataset con muchas características y se busca simplificar el modelo sin comprometer significativamente su precisión.</p>
    <h6>¿Qué necesita?</h6>
    <p>Requiere un criterio de evaluación y puede ser más adecuado para datasets con menos características debido a su complejidad computacional.</p>
  </div>
</div>

<div class="description">
  <h3>¿Cuándo aplicar reducción de dimensionalidad?</h3>
  <p>Se aplica cuando los datos tienen demasiadas características y se quiere reducir la complejidad sin perder mucha información. Es útil en preprocesamiento para mejorar el rendimiento de los modelos de Machine Learning.</p>
  <h4>¿Qué precondiciones se deben cumplir?</h4>
  <ul>
      <li><strong>Escalado de datos:</strong> Es crucial para técnicas como PCA y LDA, que son sensibles a las magnitudes de las características.</li>
      <li><strong>Relaciones entre características:</strong> Técnicas como PCA funcionan mejor cuando las características están correlacionadas. Si no lo están, es posible que no se obtenga una gran reducción de dimensionalidad.</li>
      <li><strong>Evaluación de modelos:</strong> Métodos como Forward y Backward Selection requieren una métrica clara para evaluar el rendimiento del modelo en cada iteración.</li>
  </ul>
</div>
</div>