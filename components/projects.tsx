import { Music4, Calendar, Award } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const projects = [
  {
    title: "부활 대축일 미사",
    description:
      "모차르트 대관식 미사를 오케스트라와 함께 연주하여 부활의 기쁨을 장엄하게 표현했습니다. 3개월간의 준비 기간을 거쳐 완성도 높은 공연을 선보였습니다.",
    image: "/church-choir-easter-performance.jpg",
    tags: ["전례 음악", "오케스트라 협연", "모차르트"],
    icon: Award,
    date: "2024년 3월",
  },
  {
    title: "성탄 캐롤 콘서트",
    description: "전통 성탄 캐롤부터 현대 편곡까지 다양한 레퍼토리로 구성했습니다.",
    image: "/christmas-carol-concert-choir.jpg",
    tags: ["성탄 음악", "캐롤", "지역 행사"],
    icon: Music4,
    date: "2023년 12월",
  },
  {
    title: "정기 합창 발표회",
    description:
      "성가대의 연간 성과를 공유하는 정기 발표회를 기획하고 진행했습니다. 전례 음악뿐만 아니라 세속 합창곡도 포함하여 다채로운 무대를 선보였습니다.",
    image: "/choir-concert-hall-performance.jpg",
    tags: ["합창", "발표회", "음악회"],
    icon: Calendar,
    date: "2023년 6월",
  },
]

export function Projects() {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-8 border-l-2 border-primary pl-4">
          Performances
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon
            return (
              <Card key={index} className="group overflow-hidden hover:border-primary/50 transition-colors bg-card">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="group-hover:text-primary transition-colors">{project.title}</CardTitle>
                    <Icon className="w-5 h-5 text-primary flex-shrink-0" />
                  </div>
                  <CardDescription className="text-muted-foreground">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">{project.date}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
