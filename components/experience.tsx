import { Music2, Piano, Users } from "lucide-react"
import Image from "next/image";

const choirMembers = {
  conductor: { name: "김민정", baptismalName: "아가다" },
  leader: { name: "양영직", baptismalName: "베드로" ,  name2: "문영민", Name2: "아델리나"},
  piano: { name: "구예은", baptismalName: "모니카" },
  soprano: [
    { name: "한유정", baptismalName: "미카엘라" },
    { name: "김지현", baptismalName: "페트라" },
    { name: "오지현", baptismalName: "로셀리나" },
    { name: "문영민", baptismalName: "아델리나" },
    { name: "김보라", baptismalName: "드보라" },
    { name: "김우희", baptismalName: "세라피나" },
  ],
  tenor: [
    { name: "양영직", baptismalName: "베드로" },
    { name: "전승훈", baptismalName: "필립보" },
    { name: "이창근", baptismalName: "대건안드레아" },
    { name: "국준원", baptismalName: "제노" },
  ],
  bass: [
    { name: "곽도윤", baptismalName: "마티아" },
    { name: "권혁", baptismalName: "안토니오" },
    { name: "조구원", baptismalName: "요셉" },
    
  ],
}

export function Experience() {
  return (
    
    <section id="members" className="flex justify-center px-4 sm:px-6 lg:px-8 py-12">
      
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-8 border-l-2 border-primary pl-4">
          성가대 정보
        </h2>
        <Image
  src="/choir_banner.jpg"
  alt="Choir banner"
  width={1200}
  height={600}  
  className="rounded-xl object-cover w-full"
/>
        <div className="space-y-8 mb-12">
          <div className="flex items-center gap-3 pb-3 border-b border-border">
            <Music2 className="h-5 w-5 text-primary" />
            <span className="font-medium">지휘</span>
            <span className="text-muted-foreground">:</span>
            <span>
              {choirMembers.conductor.name} {choirMembers.conductor.baptismalName}
            </span>
          </div>

          <div className="flex items-center gap-3 pb-3 border-b border-border">
            <Users className="h-5 w-5 text-primary" />
            <span className="font-medium">단장</span>
            <span className="text-muted-foreground">:</span>
            <span>
              {choirMembers.leader.name} {choirMembers.leader.baptismalName}
            </span>
            <span className="font-medium">부단장</span>
            <span>
              {choirMembers.leader.name2} {choirMembers.leader.Name2}
            </span>
          </div>

          <div className="flex items-center gap-3 pb-3 border-b border-border">
            <Piano className="h-5 w-5 text-primary" />
            <span className="font-medium">피아노</span>
            <span className="text-muted-foreground">:</span>
            <span>
              {choirMembers.piano.name} {choirMembers.piano.baptismalName}
            </span>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Music2 className="h-5 w-5 text-primary" />
              소프라노
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {choirMembers.soprano.map((member, index) => (
                <div key={index} className="flex items-center gap-2 text-muted-foreground">
                  <span className="w-2 h-2 rounded-full bg-primary/50" />
                  <span>
                    {member.name} {member.baptismalName}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Music2 className="h-5 w-5 text-primary" />
              테너
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {choirMembers.tenor.map((member, index) => (
                <div key={index} className="flex items-center gap-2 text-muted-foreground">
                  <span className="w-2 h-2 rounded-full bg-primary/50" />
                  <span>
                    {member.name} {member.baptismalName}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Music2 className="h-5 w-5 text-primary" />
              베이스
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {choirMembers.bass.map((member, index) => (
                <div key={index} className="flex items-center gap-2 text-muted-foreground">
                  <span className="w-2 h-2 rounded-full bg-primary/50" />
                  <span>
                    {member.name} {member.baptismalName}
                    {member.note && <span className="text-sm ml-1">({member.note})</span>}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
