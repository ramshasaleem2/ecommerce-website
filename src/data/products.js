const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 99.99,
    image:
    "https://kraftmusic.com/cdn/shop/files/yh-wl500_front.jpg?crop=center&height=500&v=1762533476&width=500",
    description:
      "Premium wireless headphones with noise cancellation and 30-hour battery life. Perfect for music lovers and professionals.",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 249.99,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
    description:
      "Feature-rich smartwatch with fitness tracking, heart rate monitor, and smartphone notifications. Water-resistant design.",
  },
  {
    id: 3,
    name: "Laptop Stand",
    price: 49.99,
    image:
    "https://5.imimg.com/data5/SELLER/Default/2022/9/QB/BC/KS/159756853/41ewudtxq3l-500x500.jpg",
    description:
      "Ergonomic aluminum laptop stand that improves posture and workspace organization. Adjustable height and angle.",
  },
  {
    id: 4,
    name: "Mechanical Keyboard",
    price: 129.99,
    image:
      "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=500&h=500&fit=crop",
    description:
      "RGB backlit mechanical keyboard with Cherry MX switches. Perfect for gaming and typing enthusiasts.",
  },
  {
    id: 5,
    name: "Wireless Mouse",
    price: 29.99,
    image:
      "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500&h=500&fit=crop",
    description:
      "Ergonomic wireless mouse with precision tracking and long battery life. Comfortable for extended use.",
  },
  {
    id: 6,
    name: "Monitor Stand",
    price: 79.99,
    image:
    "https://assets.tripplite.com/large-image/ddv1727s-front-l.jpg",
    description:
      "Dual monitor stand with adjustable height and tilt. Frees up desk space and improves ergonomics.",
  },
  {
    id: 7,
    name: "Webcam HD",
    price: 89.99,
    image:
    "https://x.imastudent.com/content/0063781_insta360-link-2-4k-ai-webcam_500.png",
    description:
      "1080p HD webcam with auto-focus and built-in microphone. Ideal for video calls and streaming.",
  },
  {
    id: 8,
    name: "USB-C Hub",
    price: 39.99,
    image:
    "https://img.evetech.co.za/repository/ez/how-to-stop-usb-c-hub-disconnects-power-cable-leng-banner.webp?width=500",
    description:
      "Multi-port USB-C hub with HDMI, USB 3.0, and SD card reader. Expand your laptop connectivity.",
  },
];

export default products;

export const getProductById=(id)=>{
  return products.find((p)=>p.id===Number(id))
}
