import React, { useState } from 'react';
import ProductCard from '../Components/ProductCard';
import Navbar from '../Components/navbar'; 
import axios from 'axios';
import SliderComponent from '../Components/SliderComponent';
import Footer from '../Components/Footer';
 const loadRazorpayScript = () => {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

const Home = () => {

  const [searchTerm, setSearchTerm] = useState('');

  const CheckOutHandler = async (price) => {
    const isLoaded = await loadRazorpayScript();
    if (!isLoaded) {
      alert('Razorpay SDK failed to load.');
      return;
    }

    try {
      const { data: keyData } = await axios.get('http://localhost:8080/api/getkey');
      const { data: { order } } = await axios.post('http://localhost:8080/api/checkout', { price });

      const options = {
        key: keyData.key,
        amount: order.amount,
        currency: "INR",
        name: "Sahil Usmani",
        description: "Test Transaction",
        image: "https://rukminim2.flixcart.com/image/416/416/xif0q/sticker/f/2/8/medium-cool-panda-with-car-cartoon-wall-sticker-for-livingroom-original-imagtpwuhfpakh9h.jpeg",
        order_id: order.id,
        callback_url: "http://localhost:8080/api/paymentverification",
        prefill: { name: "Sahil Usmani", email: "sahilusmani9786@example.com", contact: "9000090000" },
        notes: { address: "Razorpay Corporate Office" },
        theme: { color: "#121212" }
      };

      new window.Razorpay(options).open();
    } catch (error) {
      console.error('Checkout error:', error.message);
    }
  };

 const allProducts = [
  { title: 'Whey Protein', price: 3599, image: 'https://img2.hkrtcdn.com/36006/prd_3600571-MuscleBlaze-Biozyme-Gold-100-Whey-4.4-lb-Double-Rich-Chocolate_o.jpg' },
  { title: 'Complete Stack', price: 5999, image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTIr2uVsyT5z_ar3Hh5_4bnhCuIZmT8fJ_gl7986nJHsZrOuUlwbdmvobdfKeI759VDA2oXhdZwejDTmIneyHm8QqWUSkbLGaWEqpdOxbQymXJazd5tmeQxwQ' },
  { title: 'MB Preworkout', price: 1299, image: 'https://img4.hkrtcdn.com/35591/prd_3559003-MuscleBlaze-Pre-Workout-WrathX-0.74-lb-Fruit-Fury_o.jpg' },
  { title: 'BeastLife Creatine', price: 999, image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/app/assets/products/sliding_images/jpeg/a8ab84fd-59d4-478a-93b0-b691f539968e.jpg' },
  { title: 'Multivitamin', price: 999, image: 'https://cdn2.nutrabay.com/uploads/variant/images/variant-6359-featured_image-MuscleBlaze_Biozyme_5in1_Multivitamin__90_Tabs.jpg' },
  { title: 'Fish Oil', price: 499, image: 'https://img4.hkrtcdn.com/29312/prd_2931183-HK-Vitals-Assorted-Multivitamin-Fish-Oil-30N-tabs-30N-Softgel-caps-by-HealthKart-2-PiecesPack_o.jpg' },
  { title: 'Skin Collagen', price: 875, image: 'https://img4.hkrtcdn.com/38845/prd_3884453-HK-Vitals-Skin-Radiance-Collagen-Marine-Collagen-200-g-Orange_o.jpg' },
  { title: 'High Protein Oats', price: 1199, image: 'https://www.getsupp.com/static/media/__resized/images/products/F5SH09PBLVQC2QGP0-e4a1f51f-af24-4d19-873d-a56f4f5356f3-thumbnail_webp-1080x1080-70.webp' },
  { title: 'Mass Gainer', price: 2999, image: 'https://m.media-amazon.com/images/I/61DQLVMdwsL._SY450_.jpg' },
  { title: 'L-Glutamine', price: 499, image: 'https://m.media-amazon.com/images/I/71W5ORHcZbL._SX569_.jpg' },
  { title: 'BCAA', price: 1999, image: 'https://cdn.muscleandstrength.com/store/media/catalog/product/cache/all/image/700x700/602f0fa2c1f0d1ba5e241f914e856ff9/4/0/400caps_bcaa1000caps_1_1.jpg' },
  { title: 'L-Carnitine', price: 499, image: 'https://www.guardian.in/cdn/shop/files/img1_b43bdc4b-87af-4227-8a44-adc9e10319f7.jpg' },
   { title: 'Max Protein', price: 598, image: 'https://www.bbassets.com/media/uploads/p/l/40122053_7-ritebite-max-protein-daily-choco-almond-bar.jpg' },
  { title: 'Electrolyte Drink', price: 299, image: 'https://m.media-amazon.com/images/I/61t+d34JWHL._SX569_.jpg' },
  { title: 'Vegan Protein  ', price: 2199, image: 'https://cdn2.nutrabay.com/uploads/variant/images/variant-6688-featured_image-Nutrabay_Wellness_Vegan_Plant_Protein_Powder__Superfoods__1_Kg_22_Lb_Rich_Chocolate.png' },
  { title: 'Fat Burner  ', price: 925, image: 'https://www.getsupp.com/static/media/__resized/images/products/I062EJZGXYUV4QIN2-b67dbbd0-70e2-47f4-b761-bb48e0bc5516-thumbnail_webp-1080x1080-70.webp' },
];


  // 🔍 Filter products by searchTerm
  const filteredProducts = allProducts.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
    <Navbar/>
      <SliderComponent/>  {/* Here import slide component */}

      <Navbar onSearch={setSearchTerm} />
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '40px',
        paddingTop: '20px',
      }}>
        {filteredProducts.map((product, index) => (
          <ProductCard
            key={index}
            title={product.title}
            price={product.price}
            image={product.image}
            onBuyNow={CheckOutHandler}
          />
        ))}
      </div>
      <Footer/>
      
    </>
  );
};

export default Home;
