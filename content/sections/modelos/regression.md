---
title: "Regression"
slug: "/modelos/regression"
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
<h1>Regresión</h1>

<div class="card-grid">
    <div class="card">
    <h5>Regresión Lineal</h5>
    <p>La regresión lineal es un modelo matemático que se utiliza para predecir un valor numérico continuo basado en la relación lineal entre una variable dependiente y una o más variables independientes.</p>
    <h6>¿Cuándo usarla?</h6>
    <p>Se utiliza cuando se espera que exista una relación lineal entre las variables. Es ideal para predecir ventas, precios de viviendas, o cualquier valor numérico continuo basado en una serie de factores.</p>
    <h6>¿Qué necesita?</h6>
    <p>Es recomendable normalizar o estandarizar los datos si las variables independientes tienen diferentes escalas o distribuciones no normales.</p>
    </div>

<div class="card">
<h5>Random Forest</h5>
<p>Random Forest es un modelo de aprendizaje basado en árboles de decisión que construye múltiples árboles y los combina para mejorar la precisión y reducir el sobreajuste.</p>
<h6>¿Cuándo usarla?</h6>
<p>Es útil cuando se necesita un modelo flexible capaz de manejar datos complejos y no lineales, como en la predicción de precios o en modelos financieros.</p>
<h6>¿Qué necesita?</h6>
<p>No requiere normalización, pero puede beneficiarse de datos balanceados y correctamente distribuidos. El ajuste del número de árboles y la profundidad máxima son importantes para optimizar el modelo.</p>
</div>

<div class="card">
<h5>Árbol Binario</h5>
<p>Los árboles binarios dividen los datos en subconjuntos basados en características, creando ramas que conducen a decisiones o predicciones finales.</p>
<h6>¿Cuándo usarla?</h6>
<p>Son útiles cuando hay decisiones secuenciales que deben tomarse o cuando se quieren realizar predicciones más interpretables.</p>
<h6>¿Qué necesita?</h6>
<p>No requieren normalización, pero es recomendable tener los datos bien distribuidos para evitar que algunas ramas se vuelvan demasiado largas y generen sobreajuste.</p>
</div>

<div class="card">
<h5>Red Neuronal</h5>
<p>Las redes neuronales se inspiran en el cerebro humano y se utilizan para modelar relaciones complejas en grandes conjuntos de datos.</p>
<h6>¿Cuándo usarla?</h6>
<p>Es adecuada para modelar relaciones no lineales o complejas, como el reconocimiento de imágenes o el procesamiento de lenguaje natural.</p>
<h6>¿Qué necesita?</h6>
<p>Requieren grandes volúmenes de datos y es importante normalizar los datos antes de usarlas. Además, el ajuste de hiperparámetros es clave para un buen desempeño.</p>
</div>
</div>

<div class="description">
    <h3>¿Cuándo aplicar regresión?</h3>
    <p>La regresión se aplica cuando se quiere predecir un valor continuo, basado en una o más variables explicativas. Dependiendo de la naturaleza del problema (lineal o no lineal), se selecciona el tipo de regresión adecuado.</p>
    <h4>¿Qué precondiciones se deben cumplir?</h4>
    <ul>
    <li><strong>Normalización/Estandarización:</strong> Se recomienda normalizar o estandarizar los datos.</li>
    <li><strong>Multicolinealidad:</strong> La multicolinealidad entre variables independientes puede afectar el rendimiento del modelo.</li>
    <li><strong>Sobreajuste:</strong> Las redes neuronales, si no están bien ajustadas, pueden sufrir de sobreajuste.</li>
    </ul>
    </div>
</div>
