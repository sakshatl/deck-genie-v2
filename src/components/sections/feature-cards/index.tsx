import { Button } from "@/components/ui/button"

export default function FeatureCardsSection() {

  return (
    <div className="p-4">
      <div className="grid grid-cols-3 gap-8">
        {[0, 1, 2].map((item: any, index: number) => (
          <FeatureCard key={index} />
        ))}
      </div>
    </div>
  )
}


function FeatureCard() {

  return (
    <div className="border rounded-lg p-4">
      <div>
        <img 
          height={40}
          width={40}
          src="https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/256x256/plain/object_cube.png" 
          alt='feature-icon' 
        />
        {/* IMAGE / ICON */}
      </div>
      <div className="mt-4">
        <h4 className="text-xl font-semibold">Discover How Our Product Works</h4>
        <p className="mt-1">Our product simplifies the process of showcasing your projects and blog posts</p>
      </div>
      <div className="mt-6">
        <Button variant={'outline'} size={'sm'}>
          Learn More
        </Button>
      </div>
    </div>
  )
}