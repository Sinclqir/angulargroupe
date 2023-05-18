import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Size } from '../models/size.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: Product[] = [
    new Product(
      "Peluche Hermione Granger",
      "100% original, nouveau et avec son étiquette de licence officielle. Idéal pour les cadeaux, idéal pour les enfants. Âge minimum 12 mois.",
      "https://www.illufantasy.com/media/catalog/product/cache/177ee782e41b4381c1b78a35396cbb5d/a/h/ah9psntn9f.webp",
      3000,
      0,
      false,
      new Date("2023-01-01"),
      [new Size("Petit", 20), new Size("Moyen", 30), new Size("Grand", 40)]
    ),
    new Product(
      "Peluche Harry Potter",
      "100% original, nouveau et avec son étiquette de licence officielle. Idéal pour les cadeaux, idéal pour les enfants. Âge minimum 12 mois.",
      "https://www.illufantasy.com/media/catalog/product/cache/177ee782e41b4381c1b78a35396cbb5d/a/h/ah9psk003f.webp",
      4000,
      0,
      false,
      new Date("2023-01-01"),
      [new Size("Petit", 20), new Size("Moyen", 30), new Size("Grand", 40)]
    ),
    new Product(
      "Peluche Professeur Severus Rogue",
      "100% original, nouveau et avec son étiquette de licence officielle. Idéal pour les cadeaux, idéal pour les enfants. Âge minimum 12 mois.",
      "https://www.illufantasy.com/media/catalog/product/cache/177ee782e41b4381c1b78a35396cbb5d/a/h/ah9psmp9nd_1.webp",
      4000,
      0,
      false,
      new Date("2023-01-01"),
      [new Size("Petit", 20), new Size("Moyen", 30), new Size("Grand", 40)]
    ),
    new Product(
      "RPeluche on Weasley",
      "100% original, nouveau et avec son étiquette de licence officielle. Idéal pour les cadeaux, idéal pour les enfants. Âge minimum 12 mois.",
      "https://www.illufantasy.com/media/catalog/product/cache/177ee782e41b4381c1b78a35396cbb5d/a/h/ah9psk018a_4.jpg",
      4000,
      0,
      false,
      new Date("2023-01-01"),
      [new Size("Petit", 20), new Size("Moyen", 30), new Size("Grand", 40)]
    ),
    new Product(
      "Peluche Dobby",
      "100% original, nouveau et avec son étiquette de licence officielle. Idéal pour les cadeaux, idéal pour les enfants. Âge minimum 12 mois.",
      "https://www.illufantasy.com/media/catalog/product/cache/177ee782e41b4381c1b78a35396cbb5d/a/h/ah9psnseie.webp",
      4000,
      0,
      false,
      new Date("2023-01-01"),
      [new Size("Petit", 20), new Size("Moyen", 30), new Size("Grand", 40)]
    ),
    new Product(
      "Peluche Rubeus Hagrid",
      "100% original, nouveau et avec son étiquette de licence officielle. Idéal pour les cadeaux, idéal pour les enfants. Âge minimum 12 mois.",
      "https://www.illufantasy.com/media/catalog/product/cache/177ee782e41b4381c1b78a35396cbb5d/a/h/ah9psk00ya.webp",
      4000,
      0,
      false,
      new Date("2023-01-01"),
      [new Size("Petit", 20), new Size("Moyen", 30), new Size("Grand", 40)]
    ),
    new Product(
      "Peluche Lord Voldemort",
      "100% original, nouveau et avec son étiquette de licence officielle. Idéal pour les cadeaux, idéal pour les enfants. Âge minimum 12 mois.",
      "https://www.illufantasy.com/media/catalog/product/cache/177ee782e41b4381c1b78a35396cbb5d/a/h/ah9psk000c.webp",
      4000,
      0,
      false,
      new Date("2023-01-01"),
      [new Size("Petit", 20), new Size("Moyen", 30), new Size("Grand", 40)]
    ),
    new Product(
      "Peluche Magicien Dumbledore",
      "100% original, nouveau et avec son étiquette de licence officielle. Idéal pour les cadeaux, idéal pour les enfants. Âge minimum 12 mois.",
      "https://www.illufantasy.com/media/catalog/product/cache/177ee782e41b4381c1b78a35396cbb5d/a/h/ah9psk001d.webp",
      4000,
      0,
      false,
      new Date("2023-01-01"),
      [new Size("Petit", 20), new Size("Moyen", 30), new Size("Grand", 40)]
    ),
    new Product(
      "Peluche Draco Malfoy",
      "100% original, nouveau et avec son étiquette de licence officielle. Idéal pour les cadeaux, idéal pour les enfants. Âge minimum 12 mois.",
      "https://www.illufantasy.com/media/catalog/product/cache/177ee782e41b4381c1b78a35396cbb5d/a/h/ah9psmp9mc_1.webp",
      4000,
      0,
      false,
      new Date("2023-01-01"),
      [new Size("Petit", 20), new Size("Moyen", 30), new Size("Grand", 40)]
    )
    // Ajoutez les autres peluches Harry Potter ici
  ];

  constructor() { }
  
  getAllProducts(): Product[] {
    return this.products;
  }
}
