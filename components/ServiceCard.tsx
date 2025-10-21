import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface ServiceCardProps {
  title: string
  description: string
  price: string
  features?: string[]
  icon?: React.ReactNode
  className?: string
}

export function ServiceCard({ 
  title, 
  description, 
  price, 
  features = [], 
  icon,
  className 
}: ServiceCardProps) {
  return (
    <Card className={`h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${className}`}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {icon && (
              <div className="p-2 bg-blue/10 rounded-lg">
                {icon}
              </div>
            )}
            <CardTitle className="text-lg font-heading">{title}</CardTitle>
          </div>
          <Badge variant="secondary" className="bg-blue/10 text-blue border-blue/20">
            {price}
          </Badge>
        </div>
        <CardDescription className="text-gray-600">
          {description}
        </CardDescription>
      </CardHeader>
      {features.length > 0 && (
        <CardContent>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                <div className="w-1.5 h-1.5 bg-blue rounded-full flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      )}
    </Card>
  )
}
