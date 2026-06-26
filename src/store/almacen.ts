// src/stores/almacen.ts
import { defineStore } from 'pinia';

export interface Producto {
  id: number;
  nombre: string;
  precio: number;
  stock: number;
  imagen: string;
}

export const useAlmacenStore = defineStore('almacen', {
  state: () => ({
    listaProductos: <Producto[]>[
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
    ]
  }),

  getters: {
    totalInventario: (state): number =>
      state.listaProductos.reduce((acc, p) => acc + p.precio * p.stock, 0),
  },

  actions: {
    agregarProducto(producto: Producto): void {
      this.listaProductos.push(producto);
    }
  }
});
