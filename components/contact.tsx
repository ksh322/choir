"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Form submitted:", formData)
  }

  return (
    <section id="contact" className="flex justify-center px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-8 border-l-2 border-primary pl-4">
          Contact
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-balance">
                성가대 활동이나 음악 협업에 관심이 있으시다면 언제든지 연락 주세요.
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                전례 음악, 합창 지도, 음악 교육 등 다양한 분야에서 함께 할 수 있습니다.
              </p>
            </div>
            <div className="space-y-4">
              <a
                href="mailto:agadalein@naver.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span>agadalein@naver.com</span>
              </a>
              <a
                href="tel:+0506-645-3256"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span>0506-645-3256</span>
              </a>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="h-5 w-5" /><a href="https://bstsd.or.kr/map">
                <span>흑석동 성당 성가대</span>
                </a>
                
              </div>
            </div>
          </div>
          <Card className="bg-card">
            <CardHeader>
              <CardTitle>메시지 보내기</CardTitle>
              <CardDescription>문의사항을 남겨주시면 빠르게 답변드리겠습니다</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    placeholder="이름"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="이메일"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="메시지"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  보내기
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
