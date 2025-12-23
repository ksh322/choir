export function About() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-8 border-l-2 border-primary pl-4">
          About
        </h2>
        <div className="space-y-6 text-lg leading-relaxed">
          <p>
            음악대학에서 성악과 지휘를 전공하며 합창음악의 깊이와 아름다움에 매료되었습니다. 음악을 통해 사람들의 마음을
            하나로 모으고, 하나님께 영광을 돌리는 것이 저의 사명입니다.
          </p>
          <p>
            현재 흑석동 성당 성가대의 지휘자로서, 매주 미사 전례 음악을 준비하고 성가대원들과 함께 아름다운 하모니를
            만들어가고 있습니다. 각 성가대원의 목소리가 조화를 이루어 하나의 소리로 완성되는 순간이 가장 큰 보람입니다.
          </p>
          <p>
            전례 음악뿐만 아니라 합창 편곡과 음악 교육에도 관심이 많으며, 지역 사회의 음악 발전을 위해 노력하고
            있습니다.
          </p>
        </div>

        <img src="/public/choir_banner.jpg"   alt="Choir banner"
></img>

      </div>
    </section>
  )
}
