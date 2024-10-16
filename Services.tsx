import { ShoppingCart, Store, Truck, BarChart } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const services = [
  {
    name: 'Multi-platform Integration',
    description: 'Seamlessly integrate your products across Amazon, Shopify, eBay, and more.',
    icon: ShoppingCart,
  },
  {
    name: 'Inventory Management',
    description: 'Efficiently manage your stock across all platforms with our advanced inventory system.',
    icon: Store,
  },
  {
    name: 'Logistics Support',
    description: 'Optimize your shipping and fulfillment processes with our logistics expertise.',
    icon: Truck,
  },
  {
    name: 'Analytics and Reporting',
    description: 'Make data-driven decisions with our comprehensive analytics and reporting tools.',
    icon: BarChart,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Services</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-primary sm:text-4xl">
            Comprehensive E-commerce Solutions
          </p>
          <p className="mt-4 max-w-2xl text-xl text-muted-foreground lg:mx-auto">
            We offer a range of services to help your business succeed in the digital marketplace.
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <Card key={service.name} className="bg-card">
                <CardHeader>
                  <service.icon className="h-12 w-12 text-primary" />
                  <CardTitle className="mt-5 text-lg leading-6 font-medium text-primary">
                    {service.name}
                  </CardTitle>
                  <CardDescription className="mt-2 text-base text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}