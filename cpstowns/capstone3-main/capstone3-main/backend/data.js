import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Kim',
      email: 'admin@gmail.com',
      password: bcrypt.hashSync('123'),
      isAdmin: true,
    },
    {
      name: 'Lester',
      email: 'user@gmail.com',
      password: bcrypt.hashSync('123'),
      isAdmin: false,
    },
  ],
  products: [
    {
      //_id: '1',
      name: 'Nike Slim shirt',
      slug: 'nike-slim-shirt',
      category: 'Shirts',
      image: '/images/p1.jpg',
      price: 1500,
      countInStock: 10,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality shirt',
    },
    {
      // _id: '2',
      name: 'Adidas Fit shirt',
      slug: 'adidas-fit-shirt',
      category: 'Shirts',
      image: '/images/p2.jpg',
      price: 1700,
      countInStock: 0,
      brand: 'Adidas',
      rating: 4.0,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      // _id: '3',
      name: 'Nike Slim Pants',
      slug: 'nike-slim-pants',
      category: 'Pants',
      image: '/images/p3.jpg',
      price: 2000,
      countInStock: 15,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 14,
      description: 'high quality product',
    },
    {
      //_id: '4',
      name: 'Adidas Slim Pants',
      slug: 'adidas-slim-pants',
      category: 'Pants',
      image: '/images/p4.jpg',
      price: 2100,
      countInStock: 5,
      brand: 'Puma',
      rating: 4.5,
      numReviews: 14,
      description: 'high quality product',
    },
  ],
};

export default data;
