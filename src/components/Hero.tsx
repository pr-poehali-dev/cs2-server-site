import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-cs2-dark via-gray-900 to-black overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-cs2-purple/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-60 right-20 w-48 h-48 bg-cs2-blue/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-1/3 w-40 h-40 bg-cs2-orange/20 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cs2-purple via-cs2-blue to-cs2-orange bg-clip-text text-transparent">
              COUNTER-STRIKE 2
            </span>
            <br />
            <span className="text-white text-4xl md:text-5xl">
              PREMIUM STORE
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Получи преимущество в игре! VIP-статусы, админ-права и эксклюзивные
            возможности для настоящих профи
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button
            size="lg"
            className="bg-gradient-to-r from-cs2-purple to-cs2-blue hover:from-cs2-blue hover:to-cs2-purple text-lg px-8 py-6"
          >
            <Icon name="Crown" size={24} className="mr-3" />
            Купить VIP
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-cs2-orange text-cs2-orange hover:bg-cs2-orange hover:text-white text-lg px-8 py-6"
          >
            <Icon name="Shield" size={24} className="mr-3" />
            Админ-права
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
            <div className="w-12 h-12 bg-cs2-purple rounded-lg flex items-center justify-center mb-4 mx-auto">
              <Icon name="Zap" size={24} className="text-white" />
            </div>
            <h3 className="text-white font-semibold text-lg mb-2">
              Моментальная активация
            </h3>
            <p className="text-gray-300">
              Привилегии активируются сразу после оплаты
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
            <div className="w-12 h-12 bg-cs2-blue rounded-lg flex items-center justify-center mb-4 mx-auto">
              <Icon name="CreditCard" size={24} className="text-white" />
            </div>
            <h3 className="text-white font-semibold text-lg mb-2">
              СБП и банковские карты
            </h3>
            <p className="text-gray-300">
              Безопасная оплата любым удобным способом
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
            <div className="w-12 h-12 bg-cs2-orange rounded-lg flex items-center justify-center mb-4 mx-auto">
              <Icon name="Users" size={24} className="text-white" />
            </div>
            <h3 className="text-white font-semibold text-lg mb-2">
              Поддержка 24/7
            </h3>
            <p className="text-gray-300">
              Всегда готовы помочь и решить любые вопросы
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
