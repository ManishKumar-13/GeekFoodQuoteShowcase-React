function Navbar() {
    return (
      <nav>

        <div className="logo">
            <img src="https://flowbite.com/docs/images/logo.svg" alt="GeekFood_Logo" />
            <h1>GeekFoods</h1>
        </div>
        
        <ul>
          <li>Home</li>
          <li>Quote</li>
          <li>Restaurants</li>
          <li>Foods</li>
          <li>Contact</li>
        </ul>

        <button>Get Started</button>

      </nav>
    );
  }
  
  export default Navbar;