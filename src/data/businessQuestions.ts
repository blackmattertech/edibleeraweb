import type { Testimonial } from '@/components/ui/circular-testimonials'
import { imagekitUrl } from '@/config/imagekit'

export const businessQuestionCards: Testimonial[] = [
  {
    name: 'Are Our Products Positioned Correctly?',
    quote:
      'Understanding whether product quality, pricing, and market perception are aligned.',
    src: imagekitUrl('answers/1.png'),
    cardVariant: 'green',
  },
  {
    name: 'Why Is Competitor Growth Accelerating?',
    quote:
      'Identifying competitor strategies, pricing movements, and distribution advantages.',
    src: imagekitUrl('answers/2.png'),
    cardVariant: 'white',
  },
  {
    name: 'Is Our Pricing Aligned With Market Reality?',
    quote:
      'Evaluating market conditions, competitor pricing, and margin sustainability.',
    src: imagekitUrl('answers/3.png'),
    cardVariant: 'green',
  },
  {
    name: 'Are Our Distribution Channels Performing Effectively?',
    quote:
      'Assessing market reach, distributor engagement, and channel efficiency.',
    src: imagekitUrl('answers/4.png'),
    cardVariant: 'white',
  },
  {
    name: 'Where Are Future Growth Opportunities Emerging?',
    quote:
      'Discovering new markets, customer segments, and portfolio opportunities.',
    src: imagekitUrl('answers/5.png'),
    cardVariant: 'green',
  },
  {
    name: 'How Should We Respond To Changing Market Conditions?',
    quote:
      'Helping leadership teams navigate market shifts with greater confidence.',
    src: imagekitUrl('answers/6.png'),
    cardVariant: 'white',
  },
]
