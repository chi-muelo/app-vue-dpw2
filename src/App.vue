<script setup lang="ts">
import { ref } from 'vue';

// 1. CONTRATOS DE TIPADO (TypeScript Estricto)
interface Producto {
  id: number;
  nombre: string;
  precio: number;
  stock: number;
  imagen: string;
}

// 2. ESTADO REACTIVO (Memoria RAM)
const isAuthenticated = ref<boolean>(false);
const username = ref<string>('');
const password = ref<string>('');
const errorMessage = ref<string>('');

// 3. DATOS DEL ALMACÉN
const listaProductos: Producto[] = [
  {
    id: 101,
    nombre: "Teclado Mecánico RGB",
    precio: 250,
    stock: 12,
    imagen: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 102,
    nombre: "Mouse Óptico Inalámbrico",
    precio: 110,
    stock: 20,
    imagen: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 103,
    nombre: "Monitor Gamer 24' 144Hz",
    precio: 1450,
    stock: 5,
    imagen: "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&q=80&w=400"
  }
];

// 4. LÓGICA DE CONTROL DE ACCESO
const handleLogin = (): void => {
  if (
    username.value === 'felix.maldonado' &&
    password.value === 'itpm2026'
  ) {
    isAuthenticated.value = true;
    errorMessage.value = '';
  } else {
    errorMessage.value =
      '❌ Credenciales incorrectas. Intente de nuevo, colega.';
  }
};

const handleLogout = (): void => {
  isAuthenticated.value = false;
  username.value = '';
  password.value = '';
};
</script>

<template>
  <div
    class="container mt-5"
    style="font-family: sans-serif; max-width: 1100px;"
  >
    <!-- LOGIN -->
    <div v-if="!isAuthenticated" class="card shadow border-0">
      <div class="card-header bg-dark text-white text-center py-3">
        <h4 class="mb-0">🔐 Sistema de Gestión - ITPM</h4>
        <small class="text-muted">Asignatura: DPW-207</small>
      </div>

      <div class="card-body p-4">
        <form @submit.prevent="handleLogin">
          <div class="mb-3">
            <label class="form-label fw-bold">Usuario Docente</label>

            <input
              v-model="username"
              type="text"
              class="form-control"
              placeholder="Ej: noemi.mendoza"
              required
            />
          </div>

          <div class="mb-3">
            <label class="form-label fw-bold">Contraseña</label>

            <input
              v-model="password"
              type="password"
              class="form-control"
              placeholder="••••••••"
              required
            />
          </div>

          <div
            v-if="errorMessage"
            class="alert alert-danger py-2 text-center small mb-3"
          >
            {{ errorMessage }}
          </div>

          <button
            type="submit"
            class="btn btn-primary w-100 fw-bold py-2 shadow-sm"
          >
            Ingresar al Sistema
          </button>
        </form>
      </div>
    </div>

    <!-- PANEL PRINCIPAL -->
    <div v-else class="card shadow border-0">
      <div
        class="card-header bg-success text-white d-flex justify-content-between align-items-center py-3"
      >
        <h5 class="mb-0">📦 Panel de Almacén - Activo</h5>

        <button
          @click="handleLogout"
          class="btn btn-sm btn-light fw-bold shadow-sm"
        >
          Salir
        </button>
      </div>

      <div class="card-body p-4 text-center">
        <h4 class="text-success fw-bold">
          ¡Bienvenido, Lic. Félix Maldonado!
        </h4>

        <p class="text-muted small">
          Control de Inventarios en Tiempo Real
        </p>

        <hr />

        <div class="row row-cols-1 row-cols-md-3 g-4 mt-2">
          <div v-for="p in listaProductos" :key="p.id" class="col">
            <div class="card h-100 shadow-sm border-0 bg-light">
              <img
                :src="p.imagen"
                class="card-img-top"
                :alt="p.nombre"
                style="height: 180px; object-fit: cover;"
              />

              <div class="card-body p-3">
                <h6 class="card-title fw-bold mb-1">
                  {{ p.nombre }}
                </h6>

                <p class="card-text text-muted small mb-2">
                  ID: {{ p.id }}
                </p>

                <div
                  class="d-flex justify-content-between align-items-center"
                >
                  <span class="badge bg-success">
                    Bs. {{ p.precio }}
                  </span>

                  <span class="text-primary small fw-bold">
                    {{ p.stock }} pzas.
                  </span>
                </div>
              </div>

              <div class="card-footer bg-white border-0 p-2">
                <button class="btn btn-outline-dark btn-sm w-100">
                  Gestionar Stock
                </button>
              </div>
            </div>
          </div>
        </div>

        <p class="text-center mt-4">
          Desarrollado por Est. Noemi Vanesa Mendoza Limachi
        </p>
      </div>
    </div>
  </div>
</template>