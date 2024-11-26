---
title: "Classification"
slug: "/modelos/classification"
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
<h1>Clasificación</h1>

<div class="card-grid">
  <div class="card">
    <h5>Regresión Logística</h5>
    <p>La regresión logística se utiliza para modelar la probabilidad de un resultado binario, como sí/no, basado en una o más variables independientes. El valor de salida es una probabilidad entre 0 y 1.</p>
    <h6>¿Cuándo usarla?</h6>
    <p>Es adecuada cuando el resultado que se quiere predecir es binario, como la clasificación de si un cliente comprará un producto o no.</p>
    <h6>¿Qué necesita?</h6>
    <p>Requiere que las variables independientes no estén altamente correlacionadas entre sí (multicolinealidad). También puede ser útil normalizar los datos.</p>
  </div>

  <div class="card">
    <h5>Clasificación Multiclase</h5>
    <p>La clasificación multiclase se utiliza cuando existen más de dos clases para predecir. Por ejemplo, clasificar imágenes de animales en gatos, perros y aves.</p>
    <h6>¿Cuándo usarla?</h6>
    <p>Es útil cuando el problema tiene múltiples clases o categorías. Ejemplos incluyen clasificación de productos, análisis de sentimientos (positivo/negativo/neutro), entre otros.</p>
    <h6>¿Qué necesita?</h6>
    <p>Requiere un dataset balanceado y, dependiendo del modelo, puede ser útil normalizar o estandarizar los datos.</p>
  </div>

  <div class="card">
    <h5>K-Nearest Neighbors (KNN)</h5>
    <p>KNN es un algoritmo de clasificación basado en la distancia. Clasifica un punto basándose en la mayoría de las clases de sus vecinos más cercanos.</p>
    <h6>¿Cuándo usarla?</h6>
    <p>Es adecuado para datasets pequeños y cuando se tiene poca información sobre la distribución de los datos. Ejemplos incluyen clasificación de imágenes y sistemas de recomendación.</p>
    <h6>¿Qué necesita?</h6>
    <p>Los datos deben estar normalizados o estandarizados, ya que KNN se basa en la distancia entre puntos. También es sensible al ruido y al número de vecinos seleccionados.</p>
  </div>

  <div class="card">
    <h5>Support Vector Machines (SVM)</h5>
    <p>SVM es un algoritmo que encuentra el hiperplano que mejor separa las clases en un espacio de alta dimensionalidad. Funciona bien en problemas de clasificación binaria y multiclase.</p>
    <h6>¿Cuándo usarla?</h6>
    <p>Es útil cuando las clases son claramente separables y en problemas de clasificación binaria o multiclase con un número pequeño de muestras.</p>
    <h6>¿Qué necesita?</h6>
    <p>Es necesario normalizar o estandarizar los datos. Funciona mejor en datasets que son linealmente separables o con transformaciones de kernel adecuadas.</p>
  </div>
</div>

<div class="description">
    <h3>¿Cuándo aplicar clasificación?</h3>
    <p>
        La clasificación se aplica cuando se busca asignar un elemento a una clase o categoría predefinida. Dependiendo del tipo de datos y el número de clases, se selecciona el algoritmo adecuado (binario, multiclase, etc.).
    </p>
    <h4>¿Qué precondiciones se deben cumplir?</h4>
    <ul>
        <li><strong>Balanceo de clases:</strong> Es importante que las clases estén bien balanceadas para evitar sesgos en el modelo, especialmente en problemas multiclase.</li>
        <li><strong>Normalización/Estandarización:</strong> Modelos como SVM, KNN y redes neuronales funcionan mejor cuando los datos están normalizados o estandarizados.</li>
        <li><strong>Sobrerrepresentación de clases:</strong> Si una clase domina el dataset, puede ser necesario aplicar técnicas de remuestreo o usar métricas ajustadas como el F1 score para evaluar el modelo.</li>
    </ul>
</div>
</div>