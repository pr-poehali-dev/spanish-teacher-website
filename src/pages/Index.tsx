import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

export default function Index() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Спасибо за заявку! Я свяжусь с вами в ближайшее время.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <section className="relative py-24 px-6 md:py-32 lg:py-40 overflow-hidden">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Испанский язык — 
                <span className="text-primary"> легко и увлекательно</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Индивидуальные уроки с опытным преподавателем. От базового уровня до свободного владения языком.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Записаться на урок
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/10"
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Узнать больше
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-3xl"></div>
              <img 
                src="https://cdn.poehali.dev/projects/a4eb87eb-eb87-4ea7-baed-34c510fd363b/files/91931a3d-2736-4086-9ade-77933099332d.jpg"
                alt="Преподаватель испанского языка"
                className="relative rounded-3xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Обо мне</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Icon name="GraduationCap" className="text-primary" size={32} />
                </div>
                <h3 className="font-semibold text-xl">Образование</h3>
                <p className="text-muted-foreground">
                  Филологический факультет МГУ, специализация по испанскому языку и литературе
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Icon name="Award" className="text-primary" size={32} />
                </div>
                <h3 className="font-semibold text-xl">Опыт</h3>
                <p className="text-muted-foreground">
                  Более 8 лет преподавания испанского языка для детей и взрослых
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Icon name="Globe" className="text-primary" size={32} />
                </div>
                <h3 className="font-semibold text-xl">Практика</h3>
                <p className="text-muted-foreground">
                  Жила и работала в Испании и Латинской Америке, носитель культуры
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="mt-12 text-center max-w-2xl mx-auto">
            <p className="text-muted-foreground text-lg leading-relaxed">
              Моя цель — не просто научить вас грамматике, а влюбить в испанский язык и культуру. 
              На уроках мы используем современные методики, аутентичные материалы и обязательно много говорим. 
              Каждый урок адаптирован под ваши цели и интересы.
            </p>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Тарифы</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
            <p className="text-muted-foreground mt-4 text-lg">Выберите удобный формат занятий</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card border-border hover:shadow-xl transition-all hover:scale-105">
              <CardContent className="p-8 space-y-6">
                <div>
                  <h3 className="font-bold text-2xl mb-2">Пробный урок</h3>
                  <p className="text-muted-foreground">Познакомимся и определим уровень</p>
                </div>
                <div className="text-4xl font-bold text-primary">
                  500 ₽
                  <span className="text-lg font-normal text-muted-foreground">/урок</span>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1" size={20} />
                    <span className="text-muted-foreground">45 минут онлайн</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1" size={20} />
                    <span className="text-muted-foreground">Тест на уровень</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1" size={20} />
                    <span className="text-muted-foreground">План обучения</span>
                  </li>
                </ul>
                <Button 
                  className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Выбрать
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-primary border-primary shadow-xl scale-105 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold">
                Популярный
              </div>
              <CardContent className="p-8 space-y-6">
                <div>
                  <h3 className="font-bold text-2xl mb-2 text-primary-foreground">Стандарт</h3>
                  <p className="text-primary-foreground/80">Регулярные занятия</p>
                </div>
                <div className="text-4xl font-bold text-primary-foreground">
                  1 500 ₽
                  <span className="text-lg font-normal text-primary-foreground/80">/урок</span>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary-foreground mt-1" size={20} />
                    <span className="text-primary-foreground/90">60 минут онлайн</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary-foreground mt-1" size={20} />
                    <span className="text-primary-foreground/90">Домашние задания</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary-foreground mt-1" size={20} />
                    <span className="text-primary-foreground/90">Материалы в подарок</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary-foreground mt-1" size={20} />
                    <span className="text-primary-foreground/90">Поддержка 24/7</span>
                  </li>
                </ul>
                <Button 
                  className="w-full bg-primary-foreground hover:bg-primary-foreground/90 text-primary"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Выбрать
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:shadow-xl transition-all hover:scale-105">
              <CardContent className="p-8 space-y-6">
                <div>
                  <h3 className="font-bold text-2xl mb-2">Интенсив</h3>
                  <p className="text-muted-foreground">Подготовка к экзаменам</p>
                </div>
                <div className="text-4xl font-bold text-primary">
                  2 000 ₽
                  <span className="text-lg font-normal text-muted-foreground">/урок</span>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1" size={20} />
                    <span className="text-muted-foreground">90 минут онлайн</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1" size={20} />
                    <span className="text-muted-foreground">Индивидуальная программа</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1" size={20} />
                    <span className="text-muted-foreground">Разбор ошибок</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1" size={20} />
                    <span className="text-muted-foreground">Пробные тесты DELE</span>
                  </li>
                </ul>
                <Button 
                  className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Выбрать
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Отзывы</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card border-border">
              <CardContent className="p-6 space-y-4">
                <div className="flex gap-1">
                  {[1,2,3,4,5].map((i) => (
                    <Icon key={i} name="Star" className="text-primary fill-primary" size={20} />
                  ))}
                </div>
                <p className="text-muted-foreground italic">
                  "За полгода занятий я смогла свободно говорить на испанском! Уроки проходят увлекательно, 
                  много практики и никакой скуки. Рекомендую всем!"
                </p>
                <div>
                  <p className="font-semibold">Анна Иванова</p>
                  <p className="text-sm text-muted-foreground">Студентка, уровень B1</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6 space-y-4">
                <div className="flex gap-1">
                  {[1,2,3,4,5].map((i) => (
                    <Icon key={i} name="Star" className="text-primary fill-primary" size={20} />
                  ))}
                </div>
                <p className="text-muted-foreground italic">
                  "Готовился к DELE B2 всего 3 месяца и сдал с отличным результатом. 
                  Преподаватель знает все тонкости экзамена и дает очень полезные советы."
                </p>
                <div>
                  <p className="font-semibold">Михаил Петров</p>
                  <p className="text-sm text-muted-foreground">Переводчик, уровень B2</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6 space-y-4">
                <div className="flex gap-1">
                  {[1,2,3,4,5].map((i) => (
                    <Icon key={i} name="Star" className="text-primary fill-primary" size={20} />
                  ))}
                </div>
                <p className="text-muted-foreground italic">
                  "Начинала с нуля, боялась, что не справлюсь. Но занятия настолько интересные и понятные, 
                  что через пару месяцев уже могла поддержать простой диалог!"
                </p>
                <div>
                  <p className="font-semibold">Елена Смирнова</p>
                  <p className="text-sm text-muted-foreground">Дизайнер, уровень A2</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Записаться на урок</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
            <p className="text-muted-foreground mt-4 text-lg">
              Заполните форму, и я свяжусь с вами в течение 24 часов
            </p>
          </div>
          <Card className="bg-card border-border shadow-xl">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Ваше имя
                  </label>
                  <Input
                    id="name"
                    placeholder="Иван Иванов"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                    className="bg-background"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email или телефон
                  </label>
                  <Input
                    id="email"
                    type="text"
                    placeholder="example@mail.com или +7 (999) 123-45-67"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                    className="bg-background"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Сообщение
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Расскажите о своих целях и пожеланиях..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="bg-background resize-none"
                  />
                </div>
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                >
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-6 bg-muted/50 border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h3 className="font-bold text-xl mb-2">Испанский с удовольствием</h3>
              <p className="text-muted-foreground">Индивидуальные уроки онлайн</p>
            </div>
            <div className="flex gap-6">
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                Обо мне
              </a>
              <a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors">
                Тарифы
              </a>
              <a href="#testimonials" className="text-muted-foreground hover:text-primary transition-colors">
                Отзывы
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                Контакты
              </a>
            </div>
          </div>
          <div className="text-center mt-8 text-muted-foreground text-sm">
            © 2024 Все права защищены
          </div>
        </div>
      </footer>
    </div>
  );
}
