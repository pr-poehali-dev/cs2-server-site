import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export default function PricingCards() {
  const vipPlans = [
    {
      name: "VIP Bronze",
      price: "200",
      duration: "30 дней",
      color: "from-amber-500 to-orange-500",
      features: [
        "Доступ к VIP-каналу",
        "Приоритет в очереди",
        "Уникальные скины ножей",
        "Дополнительные деньги при старте",
        "Защита от кика",
      ],
    },
    {
      name: "VIP Silver",
      price: "350",
      duration: "30 дней",
      color: "from-gray-400 to-gray-600",
      popular: true,
      features: [
        "Все привилегии Bronze",
        "Бессмертие на 5 секунд",
        "Дополнительная броня",
        "Гранаты при респауне",
        "Доступ к админ-чату",
        "Кастомные модели игроков",
      ],
    },
    {
      name: "VIP Gold",
      price: "500",
      duration: "30 дней",
      color: "from-yellow-400 to-yellow-600",
      features: [
        "Все привилегии Silver",
        "Полет по карте (noclip)",
        "Телепортация к игрокам",
        "Управление гравитацией",
        "Смена карты голосованием",
        "Эксклюзивные звуки смерти",
      ],
    },
  ];

  const adminPlans = [
    {
      name: "Младший Админ",
      price: "400",
      duration: "30 дней",
      color: "from-cs2-blue to-blue-600",
      features: [
        "Кик игроков",
        "Мут в голосовом чате",
        "Смена карты",
        "Управление ботами",
        "Доступ к логам сервера",
      ],
    },
    {
      name: "Старший Админ",
      price: "700",
      duration: "30 дней",
      color: "from-cs2-purple to-purple-600",
      premium: true,
      features: [
        "Все права Младшего Админа",
        "Бан игроков до 7 дней",
        "Управление экономикой",
        "Рестарт сервера",
        "Доступ к RCON",
        "Модерация чата",
      ],
    },
  ];

  return (
    <section className="py-20 bg-cs2-light">
      <div className="container mx-auto px-4">
        {/* VIP Plans */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cs2-purple to-cs2-blue bg-clip-text text-transparent">
              VIP-привилегии
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Получи преимущество в игре с эксклюзивными возможностями
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {vipPlans.map((plan, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden border-2 ${plan.popular ? "border-cs2-purple scale-105" : "border-gray-200"} hover:shadow-xl transition-all duration-300`}
            >
              {plan.popular && (
                <Badge className="absolute top-4 right-4 bg-cs2-purple text-white">
                  Популярный
                </Badge>
              )}

              <CardHeader className="text-center pb-4">
                <div
                  className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${plan.color} flex items-center justify-center`}
                >
                  <Icon name="Crown" size={32} className="text-white" />
                </div>
                <CardTitle className="text-2xl font-bold">
                  {plan.name}
                </CardTitle>
                <div className="text-4xl font-bold text-cs2-purple">
                  {plan.price}₽
                  <span className="text-base font-normal text-gray-500">
                    /{plan.duration}
                  </span>
                </div>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <Icon
                        name="Check"
                        size={16}
                        className="text-green-500 mr-3 flex-shrink-0"
                      />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full bg-gradient-to-r ${plan.color} hover:opacity-90 text-white`}
                >
                  <Icon name="ShoppingCart" size={16} className="mr-2" />
                  Купить VIP
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Admin Plans */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cs2-orange to-red-500 bg-clip-text text-transparent">
              Админ-права
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Получи административные возможности для управления сервером
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {adminPlans.map((plan, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden border-2 ${plan.premium ? "border-cs2-orange scale-105" : "border-gray-200"} hover:shadow-xl transition-all duration-300`}
            >
              {plan.premium && (
                <Badge className="absolute top-4 right-4 bg-cs2-orange text-white">
                  Премиум
                </Badge>
              )}

              <CardHeader className="text-center pb-4">
                <div
                  className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${plan.color} flex items-center justify-center`}
                >
                  <Icon name="Shield" size={32} className="text-white" />
                </div>
                <CardTitle className="text-2xl font-bold">
                  {plan.name}
                </CardTitle>
                <div className="text-4xl font-bold text-cs2-orange">
                  {plan.price}₽
                  <span className="text-base font-normal text-gray-500">
                    /{plan.duration}
                  </span>
                </div>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <Icon
                        name="Check"
                        size={16}
                        className="text-green-500 mr-3 flex-shrink-0"
                      />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full bg-gradient-to-r ${plan.color} hover:opacity-90 text-white`}
                >
                  <Icon name="Shield" size={16} className="mr-2" />
                  Купить Админку
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Payment Methods */}
        <div className="text-center mt-16 p-8 bg-white rounded-2xl shadow-lg">
          <h3 className="text-2xl font-bold mb-4">Способы оплаты</h3>
          <div className="flex flex-wrap justify-center items-center gap-6">
            <div className="flex items-center space-x-2">
              <Icon name="Smartphone" size={24} className="text-cs2-blue" />
              <span className="font-medium">СБП</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="CreditCard" size={24} className="text-cs2-purple" />
              <span className="font-medium">Банковские карты</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Shield" size={24} className="text-green-500" />
              <span className="font-medium">Безопасные платежи</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
