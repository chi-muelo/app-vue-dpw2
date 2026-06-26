<script setup lang="ts">
import { ref } from 'vue';
import { useAlmacenStore } from './stores/almacen';

// Store
const almacen = useAlmacenStore();

// Estado de login
const isAuthenticated = ref<boolean>(false);
const username = ref<string>('');
const password = ref<string>('');
const errorMessage = ref<string>('');

const handleLogin = (): void => {
  if (username.value === 'chimuelo' && password.value === 'itpm2026') {
    isAuthenticated.value = true;
    errorMessage.value = '';
  } else {
    errorMessage.value = '❌ Credenciales incorrectas. Intente de nuevo, colega.';
  }
};

const handleLogout = (): void => {
  isAuthenticated.value = false;
  username.value = '';
  password.value = '';
};

// Ejemplo: agregar un producto
almacen.agregarProducto({
  id: 104,
  nombre: "Auriculares Inalámbricos",
  precio: 300,
  stock: 15,
  imagen: "https://images.unsplash.com/photo-1518444027465-9caed7f9f7f3?auto=format&fit=crop&q=80&w=400"
});
</script>

<template>
  <div class="container mt-5" style="font-family: sans-serif; max-width: 1100px;">
    <!-- LOGIN -->
    <div v-if="!isAuthenticated" class="card shadow border-0">
      <!-- ... tu login igual que antes ... -->
    </div>

    <!-- PANEL PRINCIPAL -->
    <div v-else class="card shadow border-0">
      <div class="card-header bg-success text-white d-flex justify-content-between align-items-center py-3">
        <h5 class="mb-0">📦 Panel de Almacén - Activo</h5>
        <button @click="handleLogout" class="btn btn-sm btn-light fw-bold shadow-sm">Salir</button>
      </div>

      <div class="card-body p-4 text-center">
        <h4 class="text-success fw-bold">¡Bienvenido, NOE!</h4>
        <p class="text-muted small">Control de Inventarios en Tiempo Real</p>
        <hr />

        <!-- Mostrar productos desde el store -->
        <div class="row row-cols-1 row-cols-md-3 g-4 mt-2">
          <div v-for="p in almacen.listaProductos" :key="p.id" class="col">
            <div class="card h-100 shadow-sm border-0 bg-light">
              <img :src="p.imagen" class="card-img-top" :alt="p.nombre" style="height: 180px; object-fit: cover;" />
              <div class="card-body p-3">
                <h6 class="card-title fw-bold mb-1">{{ p.nombre }}</h6>
                <p class="card-text text-muted small mb-2">ID: {{ p.id }}</p>
                <div class="d-flex justify-content-between align-items-center">
                  <span class="badge bg-success">Bs. {{ p.precio }}</span>
                  <span class="text-primary small fw-bold">{{ p.stock }} pzas.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Mostrar total inventario -->
        <h5 class="mt-4 text-dark fw-bold">
          💰 Total Inventario: Bs. {{ almacen.totalInventario }}
        </h5>

        <p class="text-center mt-4">Dev, por Est. Noemi Vanesa Mendoza Limachi</p>
      </div>
    </div>
  </div>
</template>
