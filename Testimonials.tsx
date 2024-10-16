import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'E-commerce Entrepreneur',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    quote: "Rising Sun Distributors transformed my small online store into a thriving multi-platform business. Their expertise in e-commerce is unmatched.",
  },
  {
    name: 'Michael Chen',
    role: 'Retail Business Owner',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    quote: "The team at Rising Sun helped me seamlessly transition my brick-and-mortar store to the digital world. Their support has been invaluable.",
  },
  {
    name: 'Emily Rodriguez',
    role: 'Digital Marketing Manager',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    quote: "Working with Rising Sun Distributors has given us access to unique products that set us apart in the crowded e-commerce space.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Testimonials</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-primary sm:text-4xl">
            What Our Clients Say
          </p>
          <p className="mt-4 max-w-2xl text-xl text-muted-foreground lg:mx-auto">
            Don't just take our word for it. Here's what some of our satisfied clients have to say about working with Rising Sun Distributors.
          </p>
        </div>
        <div className="mt-20">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="bg-card">
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <Image
                      className="h-12 w-12 rounded-full"
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                    />
                    <div className="ml-4">
                      <div className="text-lg font-medium text-primary">{testimonial.name}</div>
                      <div className="text-base text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                  <p className="mt-4 text-base text-muted-foreground">"{testimonial.quote}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}