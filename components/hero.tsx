import { Music2 } from "lucide-react"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1200 800">
          <path
            d="M50,400 Q200,300 350,400 T650,400 T950,400 T1250,400"
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
          />
          <path
            d="M50,450 Q200,350 350,450 T650,450 T950,450 T1250,450"
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
          />
          <circle cx="200" cy="320" r="6" fill="currentColor" />
          <circle cx="450" cy="380" r="6" fill="currentColor" />
          <circle cx="700" cy="340" r="6" fill="currentColor" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="space-y-6">
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-full bg-primary/10">
              <Music2 className="w-12 h-12 text-primary" />
            </div>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
            김민정
            <span className="block text-muted-foreground text-3xl sm:text-4xl lg:text-5xl mt-2">Kim Minjung</span>
          </h1>

          <p className="text-xl sm:text-2xl text-muted-foreground font-light">Choir Conductor</p>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">흑석동 성당 성가대 지휘자</p>

          <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            음악을 통해 하나님의 영광을 드러내고, 성가대원들과 함께 아름다운 하모니를 만들어갑니다.
          </p>
        </div>
      </div>
    </section>
  )
}
