import { Badge } from "@/components/ui/badge"
import { Music, Piano, Mic, Users } from "lucide-react"

const skillCategories = [
  {
    category: "성악 & 보컬",
    icon: Mic,
    skills: ["소프라노", "성악", "발성법", "호흡법", "딕션"],
  },
  {
    category: "건반악기",
    icon: Piano,
    skills: ["피아노", "오르간", "반주", "시창", "청음"],
  },
  {
    category: "지휘 & 편곡",
    icon: Music,
    skills: ["합창 지휘", "전례 음악", "편곡", "화성학", "대위법"],
  },
  {
    category: "교육 & 리더십",
    icon: Users,
    skills: ["음악 교육", "성가대 운영", "전례 기획", "팀 리더십"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="flex justify-center px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-8 border-l-2 border-primary pl-4">
          Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category) => {
            const Icon = category.icon
            return (
              <div key={category.category} className="space-y-4">
                <div className="flex items-center gap-3">
                  <Icon className="w-5 h-5 text-primary" />
                  <h3 className="text-xl font-semibold">{category.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-card hover:bg-primary hover:text-primary-foreground transition-colors px-4 py-2 text-sm"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
