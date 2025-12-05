import 'bootstrap/dist/css/bootstrap.min.css';

export default function AboutPage() {
  
  return (
    
    <div className="container py-5" style={{backgroundColor:"#F5F5F0"}}>
      <h1 className="text-center mb-4">About Us</h1>

      <div className="row justify-content-center">
        <div className="col-md-8">

          <div className="card shadow p-4 border-0">
            <h3 className="mb-3">Welcome to MyStore</h3>
            <p>
              At <b>MyStore</b>, we aim to provide the best shopping experience with high-quality products,
              seamless user experience, and fast delivery. Our mission is to make online shopping simple,
              affordable, and enjoyable for everyone.
            </p>

            <h4 className="mt-4">What We Offer</h4>
            <ul>
              <li>High-quality products</li>
              <li>Fast & secure checkout</li>
              <li>24/7 customer support</li>
              <li>Easy returns and refunds</li>
            </ul>

            <h4 className="mt-4">Our Vision</h4>
            <p>
              We are continuously working to bring the latest trends and top-quality items to our customers.
              Our vision is to be a trusted online store that people love to shop from.
            </p>

            <h4 className="mt-4">Contact Us</h4>
            <p>
              Email: <b>support@mystore.com</b><br />
              Phone: <b>+91 98765 43210</b>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
