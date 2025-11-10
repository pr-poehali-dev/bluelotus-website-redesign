import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";

const Index = () => {
  const advantages = [
    {
      icon: "Heart",
      title: "Атмосфера доверия",
      description: "Школа, где детям спокойно, а родители могут выдохнуть"
    },
    {
      icon: "Users",
      title: "Маленькие группы",
      description: "До 10 детей — внимание каждому ребёнку"
    },
    {
      icon: "Smile",
      title: "Без стресса",
      description: "Ребёнок идёт на занятия с улыбкой"
    },
    {
      icon: "Award",
      title: "Сильная программа",
      description: "Профессиональное обучение без перегрузки"
    },
    {
      icon: "Sparkles",
      title: "Индивидуальный подход",
      description: "Каждого видят, слышат и поддерживают"
    },
    {
      icon: "Shield",
      title: "Безопасность",
      description: "Без давления, без сравнения, с уважением"
    }
  ];

  const mainDirections = [
    {
      title: "1 класс",
      description: "Мягкая адаптация к школе, где каждый ребёнок чувствует себя в безопасности",
      icon: "BookOpen"
    },
    {
      title: "2-3 классы",
      description: "Развитие самостоятельности и уверенности через индивидуальный подход",
      icon: "Users"
    },
    {
      title: "4 класс",
      description: "Подготовка к переходу в среднюю школу с сильной базой знаний",
      icon: "GraduationCap"
    }
  ];

  const additionalDirections = [
    { title: "Без домашних заданий", icon: "CheckCircle" },
    { title: "Группы до 10 человек", icon: "Users" },
    { title: "Сильная программа", icon: "Award" },
    { title: "Психологическая поддержка", icon: "Heart" }
  ];

  const testimonials = [
    {
      name: "Анна, мама Маши (7 лет)",
      text: "Раньше дочь боялась идти на танцы — теперь бежит сама! Здесь её поняли и поддержали. Я наконец выдохнула.",
      image: "https://cdn.poehali.dev/projects/6a8d4024-ca83-4fb5-86fb-26b06f5f653c/files/4d59d479-351c-46a6-b8f5-34736ff6fb55.jpg"
    },
    {
      name: "Елена, мама двоих детей",
      text: "Искала школу с душой — и нашла. Педагоги разговаривают с детьми по-человечески, без крика. Это редкость.",
      image: "https://cdn.poehali.dev/projects/6a8d4024-ca83-4fb5-86fb-26b06f5f653c/files/4d59d479-351c-46a6-b8f5-34736ff6fb55.jpg"
    },
    {
      name: "Мария, мама Артёма (9 лет)",
      text: "Сын стал увереннее и спокойнее. Видно, что его здесь ценят. Спасибо за атмосферу тепла!",
      image: "https://cdn.poehali.dev/projects/6a8d4024-ca83-4fb5-86fb-26b06f5f653c/files/4d59d479-351c-46a6-b8f5-34736ff6fb55.jpg"
    }
  ];

  const team = [
    {
      name: "Анна Леонидовна",
      role: "Основатель школы, педагог",
      description: "15 лет опыта. Верю, что танец — это не только техника, но и свобода быть собой.",
      image: "https://cdn.poehali.dev/projects/6a8d4024-ca83-4fb5-86fb-26b06f5f653c/files/4d59d479-351c-46a6-b8f5-34736ff6fb55.jpg"
    },
    {
      name: "Ирина Владимировна",
      role: "Педагог современной хореографии",
      description: "Помогаю детям раскрыться через движение и не бояться самовыражения.",
      image: "https://cdn.poehali.dev/projects/6a8d4024-ca83-4fb5-86fb-26b06f5f653c/files/4d59d479-351c-46a6-b8f5-34736ff6fb55.jpg"
    },
    {
      name: "Ольга Сергеевна",
      role: "Педагог классической хореографии",
      description: "Классика — это основа. Учу с любовью и терпением, в своём темпе каждого.",
      image: "https://cdn.poehali.dev/projects/6a8d4024-ca83-4fb5-86fb-26b06f5f653c/files/4d59d479-351c-46a6-b8f5-34736ff6fb55.jpg"
    }
  ];

  const faqs = [
    {
      question: "Сколько детей в группе?",
      answer: "До 10 человек. Это позволяет педагогу уделить внимание каждому ребёнку, заметить его особенности и помочь раскрыться."
    },
    {
      question: "Что делать, если ребёнок стесняется?",
      answer: "Мы работаем мягко, без давления. Педагоги создают безопасную атмосферу, где можно ошибаться и пробовать. Многие дети приходят застенчивыми — и расцветают через несколько занятий."
    },
    {
      question: "Нужна ли специальная форма?",
      answer: "На первых занятиях — удобная одежда для движения. Позже мы подскажем, какая форма понадобится. Всё постепенно и без стресса."
    },
    {
      question: "Как проходит первое занятие?",
      answer: "Знакомство с педагогом, лёгкая разминка и простые упражнения. Цель — чтобы ребёнок почувствовал комфорт и захотел вернуться."
    },
    {
      question: "Можно ли посмотреть занятие перед записью?",
      answer: "Конечно! Мы проводим дни открытых дверей и пробные занятия. Важно, чтобы вы почувствовали атмосферу и увидели, как мы работаем."
    }
  ];

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <Icon name="Flower" className="text-white" size={24} />
            </div>
            <span className="text-2xl font-bold text-primary">Голубой Лотос</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#advantages" className="text-gray-700 hover:text-primary transition-colors">Преимущества</a>
            <a href="#directions" className="text-gray-700 hover:text-primary transition-colors">Классы</a>
            <a href="#testimonials" className="text-gray-700 hover:text-primary transition-colors">Отзывы</a>
            <a href="#team" className="text-gray-700 hover:text-primary transition-colors">Команда</a>
            <a href="#contact" className="text-gray-700 hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button className="hidden md:block">Записаться на пробный день</Button>
        </div>
      </header>

      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/10 via-secondary/20 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Школа будущего в г. Владивостоке
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Открыт набор в <span className="text-primary">1-4 классы</span><br />
                на 2025-2026 учебный год
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Запишитесь на БЕСПЛАТНЫЙ день<br />
                и получите скидку на месяц занятий
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8">
                  <Icon name="Calendar" className="mr-2" size={20} />
                  Записаться на пробный день
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/6a8d4024-ca83-4fb5-86fb-26b06f5f653c/files/06da4d34-0dc3-46fd-8021-21613aac9cf0.jpg"
                alt="Дети на занятии танцами"
                className="rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="advantages" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Почему родители выбирают нас</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Мы создали пространство, где спокойно и детям, и родителям</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((item, index) => (
              <Card key={index} className="border-2 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                    <Icon name={item.icon as any} className="text-primary" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="directions" className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Классы начальной школы</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Обучение с 1 по 4 класс в комфортной атмосфере</p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {mainDirections.map((direction, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 animate-fade-in" style={{animationDelay: `${index * 0.15}s`}}>
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/60 rounded-2xl flex items-center justify-center mb-6">
                    <Icon name={direction.icon as any} className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{direction.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{direction.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-center mb-8">Наши преимущества</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {additionalDirections.map((item, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name={item.icon as any} className="text-primary" size={24} />
                    </div>
                    <span className="font-medium">{item.title}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Истории родителей</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Мы рады, когда видим счастливые глаза детей и спокойствие мам</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <img 
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed italic">"{testimonial.text}"</p>
                  <div className="flex gap-1 mt-4">
                    {[1,2,3,4,5].map(i => (
                      <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={16} />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Портфолио</h2>
            <p className="text-gray-700 mb-8 text-lg">Наши выступления и достижения</p>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://cdn.poehali.dev/projects/6a8d4024-ca83-4fb5-86fb-26b06f5f653c/files/eeb93d0a-3988-46de-8ba8-70d81166d9fc.jpg"
                alt="Выступление детей"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="team" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Наша команда</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Педагоги, которые любят детей и уважают их темп развития</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-0">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                    <p className="text-primary font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600 leading-relaxed">{member.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Ответы на вопросы</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Всё, что важно знать перед началом</p>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg px-6 border-2">
                  <AccordionTrigger className="text-left font-semibold text-lg hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 leading-relaxed pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold mb-6">Адрес и контакты</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Адрес</p>
                    <p className="text-gray-600">г. Владивосток, ул. Светланская, 123</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Телефон</p>
                    <p className="text-gray-600">+7 (423) 123-45-67</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Email</p>
                    <p className="text-gray-600">info@bluelotus-vl.ru</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Режим работы</p>
                    <p className="text-gray-600">Пн-Пт: 10:00 - 20:00<br />Сб-Вс: 10:00 - 18:00</p>
                  </div>
                </div>
              </div>
              <Button size="lg" className="mt-8 w-full md:w-auto">
                <Icon name="MessageCircle" className="mr-2" size={20} />
                Записаться на пробное занятие
              </Button>
            </div>
            <div className="h-96 bg-gray-200 rounded-2xl overflow-hidden animate-scale-in">
              <iframe 
                src="https://yandex.ru/map-widget/v1/?ll=131.885,43.115&z=12&l=map"
                width="100%" 
                height="100%" 
                frameBorder="0"
                className="grayscale"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <Icon name="Flower" className="text-white" size={24} />
              </div>
              <span className="text-2xl font-bold">Голубой Лотос</span>
            </div>
            <p className="text-gray-400">© 2024 Начальная школа Голубой Лотос. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;