import { Button } from "@/components/ui/button";

export default function HeroCenterSection() {
  
  return (
    <div style={{
      backgroundImage: `url(https://images.rawpixel.com/image_1300/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3RwMjU2LWJhY2tncm91bmQtMDgteC5qcGc.jpg)`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      height: "500px"
    }}>
      <div className="h-full text-center p-4 flex flex-col justify-center items-center">
        <h2 className="text-5xl font-semibold tracking-tight">React Framework for Production</h2>
        <p className="text-xl mt-4 text-center">Used by some of the world's largest companies, Next.js enables you to create full-stack Web applications by extending the latest React features, and integrating powerful Rust-based JavaScript tooling for the fastest builds.</p>
        <div className="mt-4 flex gap-4 items-center justify-center">
          <Button>
            Get Started
          </Button>
          <Button variant={'outline'}>
            Read Docs
          </Button>
        </div>
      </div>
    </div>
  )
}