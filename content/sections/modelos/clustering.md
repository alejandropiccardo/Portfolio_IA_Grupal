---
title: "Clustering"
slug: "/modelos/clustering"
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
<h1>Clustering</h1>

<div class="card-grid">
  <div class="card">
    <h5>K-Means</h5>
    <p>K-Means es un algoritmo de clustering que particiona los datos en "K" grupos, donde cada punto pertenece al grupo con el centroide más cercano..</p>
    <h6>¿Cuándo usarlo?</h6>
    <p>Es útil cuando tienes una cantidad conocida de clusters o grupos y los datos tienen límites bien definidos. Se usa en segmentación de clientes, agrupación de documentos, entre otros.</p>
    <h6>¿Qué necesita?</h6>
    <p>Es importante que los datos estén normalizados, ya que K-Means se basa en la distancia euclidiana. Además, el número de clusters debe ser conocido o estimado mediante el codo de K o el método de silueta.</p>
  </div>

  <div class="card">
    <h5>DBSCAN (Density-Based Spatial Clustering)</h5>
    <p>DBSCAN es un algoritmo que encuentra clusters basándose en la densidad de los puntos, identificando grupos como regiones densas separadas por regiones menos densas.</p>
    <h6>¿Cuándo usarlo?</h6>
    <p>Es ideal para datasets con forma arbitraria y donde no se conoce el número de clusters. Funciona bien en detección de anomalías y clustering de datos espaciales.</p>
    <h6>¿Qué necesita?</h6>
    <p>No requiere datos normalizados, pero es sensible a los parámetros de distancia (`eps`) y el número mínimo de puntos en un cluster (`minPts`). Ajustar estos parámetros es clave.</p>
  </div>

  <div class="card">
    <h5>Hierarchical Clustering</h5>
    <p>El clustering jerárquico construye un árbol de clusters, donde cada nivel del árbol representa una fusión o división de clusters. Se pueden obtener clusters a diferentes niveles de granularidad.</p>
    <h6>¿Cuándo usarlo?</h6>
    <p>Es útil cuando no se sabe el número de clusters de antemano o cuando se quiere visualizar la estructura jerárquica de los datos, como en el análisis de taxonomías.</p>
    <h6>¿Qué necesita?</h6>
    <p>No requiere normalización, pero es sensible a la métrica de distancia utilizada. Funciona mejor con datasets pequeños a medianos debido a su complejidad computacional.</p>
  </div>

  <div class="card">
    <h5>Mean Shift Clustering</h5>
    <p>Mean Shift es un algoritmo no paramétrico que agrupa los datos basándose en la densidad del gradiente. No requiere definir un número de clusters por adelantado.</p>
    <h6>¿Cuándo usarlo?</h6>
    <p>Se usa cuando no se sabe el número de clusters de antemano y se buscan clusters de forma arbitraria. Ejemplos incluyen seguimiento de objetos y segmentación de imágenes.</p>
    <h6>¿Qué necesita?</h6>
    <p>Es importante ajustar el parámetro de ancho de banda (`bandwidth`) correctamente. No requiere datos normalizados, pero es computacionalmente costoso.</p>
  </div>
</div>

<div class="description">
  <h3>¿Cuándo aplicar clustering?</h3>
  <p>
      El clustering se aplica cuando se desea agrupar puntos de datos en función de características similares, sin tener etiquetas predefinidas. Es útil en análisis exploratorio de datos y en situaciones donde se desconoce la estructura subyacente.
  </p>
  <h4>¿Qué precondiciones se deben cumplir?</h4>
  <ul>
      <li><strong>Normalización/Estandarización:</strong> Para algoritmos basados en distancia como K-Means, es crucial normalizar los datos para que las características en diferentes escalas no distorsionen los resultados.</li>
      <li><strong>Parámetros adecuados:</strong> Algoritmos como DBSCAN y Mean Shift requieren ajustes en parámetros clave (como `eps` o `bandwidth`) para obtener buenos resultados.</li>
      <li><strong>Balanceo de clusters:</strong> En algunos casos, es importante asegurarse de que los clusters sean de tamaño equilibrado, aunque no siempre es necesario.</li>
  </ul>
</div>
</div>