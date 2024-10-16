import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-12">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">About Us</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-primary sm:text-4xl">
            Our Journey from the Caribbean to Global E-commerce
          </p>
        </div>
        <div className="mt-10 lg:mt-20 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="relative">
            <h3 className="text-2xl font-extrabold text-primary sm:text-3xl">
              Deep Roots, Global Reach
            </h3>
            <p className="mt-3 text-lg text-muted-foreground">
              Rising Sun Distributors began by distributing quality food products and health remedies to retailers in the Caribbean. Today, we've expanded into the global e-commerce market, bringing our expertise and unique products to a worldwide audience.
            </p>
            <dl className="mt-10 space-y-10">
              <div className="relative">
                <dt>
                  <p className="text-lg leading-6 font-medium text-primary">Exclusive Relationships</p>
                </dt>
                <dd className="mt-2 text-base text-muted-foreground">
                  We've cultivated exclusive relationships with manufacturers, allowing us to offer hard-to-find, name-brand products to our clients.
                </dd>
              </div>
              <div className="relative">
                <dt>
                  <p className="text-lg leading-6 font-medium text-primary">Built-in Network</p>
                </dt>
                <dd className="mt-2 text-base text-muted-foreground">
                  Our extensive network of buyers ensures that your products reach the right markets and customers.
                </dd>
              </div>
            </dl>
          </div>
          <div className="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
            <Image
              className="relative mx-auto rounded-lg shadow-lg"
              width={490}
              height={490}
              src="https://images.unsplash.com/photo-1517554558809-9b4971b38f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Caribbean roots"
            />
          </div>
        </div>
      </div>
    </section>
  );
}